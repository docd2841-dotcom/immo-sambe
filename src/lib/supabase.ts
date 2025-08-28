import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase is properly configured
const isSupabaseConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-public-key';

export const supabase = createClient<Database>(
  supabaseUrl || 'https://your-project-id.supabase.co',
  supabaseAnonKey || 'your-anon-public-key'
);

// Helper functions for direct database operations
export const createUser = async (userData: {
  email: string;
  password: string;
  full_name?: string;
  phone_number?: string;
}) => {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const { data, error } = await supabase
    .from('users')
    .insert({
      email: userData.email,
      password: userData.password,
      full_name: userData.full_name || null,
      phone_number: userData.phone_number || null,
      address: null,
      city: null,
      country: 'Cameroun',
      avatar_url: null,
      role: 'client',
      is_verified: true,
      two_fa_enabled: false,
      notifications_enabled: true
    })
    .select('*')
    .single();

  if (error) throw error;
  return data;
};

export const authenticateUser = async (email: string, password: string) => {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .or(`email.eq.${email},phone_number.eq.${email}`)
    .eq('password', password)
    .single();

  if (error) throw error;
  return data;
};

export const getUserById = async (userId: string) => {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

export const updateUser = async (userId: string, updates: any) => {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select('*')
    .single();

  if (error) throw error;
  return data;
};