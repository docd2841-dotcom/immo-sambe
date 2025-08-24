import { createClient } from '@supabase/supabase-js';
import type { User } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Using demo mode.');
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
}) : null;

// Helper functions for common operations
export const getCurrentUser = async () => {
  if (!supabase) return null;
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};

// Create a user profile row in public.users
export const createUserProfile = async (authUser: User, userData?: any) => {
  if (!supabase) throw new Error('Supabase not configured');

  const profileInsert = {
    email: authUser.email as string,
    full_name: userData?.full_name ?? (authUser.user_metadata as any)?.full_name ?? null,
    phone_number: userData?.phone_number ?? (authUser.user_metadata as any)?.phone_number ?? null,
    role: 'client',
    is_verified: false,
    two_fa_enabled: false,
    notifications_enabled: true
  };

  // Try insert; if it already exists we will handle conflict by checking first
  let { data, error } = await supabase
    .from('users')
    .insert(profileInsert)
    .select()
    .single();

  if (error) {
    // If unique violation on email or existing row, fetch existing profile
    const code = (error as any).code;
    if (code === '23505') {
      const existing = await getUserProfile(authUser.id).catch(() => null);
      if (existing) return existing;
    }
    throw error;
  }
  return data;
};

// Ensure a profile exists; if missing create it and return
export const ensureUserProfile = async (authUser: User, userData?: any) => {
  if (!supabase) throw new Error('Supabase not configured');

  // Check existing by auth_user_id
  const existing = await getUserProfile(authUser.id).catch(() => null);
  if (existing) return existing;

  // If not found, create it
  return await createUserProfile(authUser, userData);
};

export const signUp = async (email: string, password: string, userData: any) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
      emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : undefined
    }
  });
  
  // If user is returned immediately (no email confirmation required), ensure profile exists
  if (data?.user) {
    try {
      await ensureUserProfile(data.user, userData);
    } catch (_) {
      // Do not block sign up on profile creation errors; will be retried on first session
    }
  }

  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  return { data, error };
};

export const signOut = async () => {
  if (!supabase) throw new Error('Supabase not configured');
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getUserProfile = async (authUserId: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  try {
    const { data: authInfo } = await supabase.auth.getUser();
    const userEmail = authInfo.user?.email;
    if (!userEmail) return null;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', userEmail)
      .single();

    if (error) throw error;
    return data;
  } catch (err: any) {
    // PostgREST no rows
    if (err?.code === 'PGRST116' || err?.details?.includes('Results contain 0 rows')) {
      return null;
    }
    throw err;
  }
};

export const updateUserProfile = async (authUserId: string, updates: any) => {
  if (!supabase) throw new Error('Supabase not configured');
  // Update existing profile. If none exists, create it with provided updates.
  const existing = await getUserProfile(authUserId);
  if (!existing) {
    const user = await getCurrentUser();
    if (!user) throw new Error('No authenticated user');
    const created = await createUserProfile(user, updates);
    return created;
  }
  // Update by email-based policy
  const user = await getCurrentUser();
  if (!user?.email) throw new Error('No authenticated email');
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('email', user.email)
    .select()
    .single();
  if (error) throw error;
  return data;
};