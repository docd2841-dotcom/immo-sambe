import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';

type UserProfile = Database['public']['Tables']['users']['Row'];

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('geocasa_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser({ id: userData.id, email: userData.email });
        setUserProfile(userData);
      } catch (error) {
        localStorage.removeItem('geocasa_user');
      }
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, userData: any) => {
    try {
      setLoading(true);
      if (!supabase) throw new Error('Supabase not configured');

      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single();

      if (existingUser) {
        return { success: false, error: 'Un compte avec cet email existe déjà' };
      }

      // Create new user
      const newUser = {
        email,
        password,
        full_name: userData?.full_name || null,
        phone_number: userData?.phone_number || null,
        address: null,
        city: null,
        country: 'Cameroun',
        avatar_url: null,
        role: 'client' as const,
        is_verified: true, // Auto-verify since no email confirmation
        two_fa_enabled: false,
        notifications_enabled: true
      };

      const { data, error } = await supabase
        .from('users')
        .insert(newUser)
        .select('*')
        .single();

      if (error) {
        console.error('Signup error:', error);
        return { success: false, error: error.message };
      }

      // Store user session
      localStorage.setItem('geocasa_user', JSON.stringify(data));
      setUser({ id: data.id, email: data.email });
      setUserProfile(data);

      return { success: true, data };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de l\'inscription' 
      };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      if (!supabase) throw new Error('Supabase not configured');

      // Find user by email or phone
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .or(`email.eq.${email},phone_number.eq.${email}`)
        .single();

      if (error || !data) {
        console.error('Login error:', error);
        return { success: false, error: 'Email ou mot de passe incorrect' };
      }

      // Check password (plain text comparison as requested)
      if (data.password !== password) {
        return { success: false, error: 'Email ou mot de passe incorrect' };
      }

      // Store user session
      localStorage.setItem('geocasa_user', JSON.stringify(data));
      setUser({ id: data.id, email: data.email });
      setUserProfile(data);

      return { success: true, data };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de la connexion' 
      };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem('geocasa_user');
      setUser(null);
      setUserProfile(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    try {
      if (!userProfile) {
        return { success: false, error: 'Utilisateur non connecté' };
      }

      if (!supabase) throw new Error('Supabase not configured');

      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userProfile.id)
        .select('*')
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      // Update stored session
      localStorage.setItem('geocasa_user', JSON.stringify(data));
      setUserProfile(data);

      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erreur lors de la mise à jour' 
      };
    }
  };

  return {
    user,
    userProfile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile
  };
};