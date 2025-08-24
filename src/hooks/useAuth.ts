import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

// Temporary type until Supabase is configured
type UserProfile = any;

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Local session from storage; no Supabase Auth
    const stored = localStorage.getItem('geocasa_user');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser({ id: parsed.email } as any);
        setUserProfile(parsed);
      } catch {}
    }
    setLoading(false);
  }, []);

  const loadUserProfile = async (_authUserId: string) => {
    try {
      if (!supabase) return;
      // Refresh from DB by email if present in storage profile
      const stored = localStorage.getItem('geocasa_user');
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (!parsed?.email) return;
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', parsed.email)
        .single();
      if (!error && data) setUserProfile(data);
    } catch (error) {
      console.error('Error loading user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string, userData: any) => {
    try {
      setLoading(true);
      if (!supabase) throw new Error('Supabase not configured');
      const payload = {
        email,
        full_name: userData?.full_name ?? null,
        phone_number: userData?.phone_number ?? null,
        password
      } as any;
      const { data, error } = await supabase.from('users').insert(payload).select('*').single();
      if (error) return { success: false, error: error.message };
      localStorage.setItem('geocasa_user', JSON.stringify(data));
      setUser({ id: data.email } as any);
      setUserProfile(data);
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de l\'inscription' 
      };
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      if (!supabase) throw new Error('Supabase not configured');
      const identifier = email.trim();
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .or(`email.ilike.${identifier},phone_number.ilike.${identifier}`)
        .maybeSingle();
      if (error) return { success: false, error: error.message };
      if (data && (data as any).password === password) {
        localStorage.setItem('geocasa_user', JSON.stringify(data));
        setUser({ id: data.email } as any);
        setUserProfile(data);
        return { success: true, data };
      }
      return { success: false, error: 'Email or password is incorrect' };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de la connexion' 
      };
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      localStorage.removeItem('geocasa_user');
      setUser(null);
      setUserProfile(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    const stored = localStorage.getItem('geocasa_user');
    if (!stored) return { success: false, error: 'Non connecté' };
    const current = JSON.parse(stored);
    if (!supabase) return { success: false, error: 'Supabase not configured' };
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', current.id)
        .select('*')
        .single();
      if (error) return { success: false, error: error.message };
      setUserProfile(data);
      localStorage.setItem('geocasa_user', JSON.stringify(data));
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour' };
    }
  };

  return {
    user,
    userProfile,
    loading,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
    updateProfile
  };
};