export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          auth_user_id: string | null
          full_name: string | null
          email: string
          phone_number: string | null
          avatar_url: string | null
          role: 'client' | 'admin' | 'staff'
          is_verified: boolean
          two_fa_enabled: boolean
          notifications_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          auth_user_id?: string | null
          full_name?: string | null
          email: string
          phone_number?: string | null
          avatar_url?: string | null
          role?: 'client' | 'admin' | 'staff'
          is_verified?: boolean
          two_fa_enabled?: boolean
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          auth_user_id?: string | null
          full_name?: string | null
          email?: string
          phone_number?: string | null
          avatar_url?: string | null
          role?: 'client' | 'admin' | 'staff'
          is_verified?: boolean
          two_fa_enabled?: boolean
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          title: string
          description: string | null
          type: 'terrain' | 'maison' | 'appartement' | 'studio' | 'chambre' | 'lot' | 'commercial'
          location: string | null
          city: string | null
          area_sqm: number | null
          status: 'disponible' | 'réservé' | 'vendu'
          price: number
          presentation_video_url: string | null
          coordinates: unknown | null
          features: string[] | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          type: 'terrain' | 'maison' | 'appartement' | 'studio' | 'chambre' | 'lot' | 'commercial'
          location?: string | null
          city?: string | null
          area_sqm?: number | null
          status?: 'disponible' | 'réservé' | 'vendu'
          price: number
          presentation_video_url?: string | null
          coordinates?: unknown | null
          features?: string[] | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          type?: 'terrain' | 'maison' | 'appartement' | 'studio' | 'chambre' | 'lot' | 'commercial'
          location?: string | null
          city?: string | null
          area_sqm?: number | null
          status?: 'disponible' | 'réservé' | 'vendu'
          price?: number
          presentation_video_url?: string | null
          coordinates?: unknown | null
          features?: string[] | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      property_images: {
        Row: {
          id: string
          property_id: string
          image_url: string
          is_main: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          property_id: string
          image_url: string
          is_main?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          property_id?: string
          image_url?: string
          is_main?: boolean
          display_order?: number
          created_at?: string
        }
      }
      plots: {
        Row: {
          id: string
          property_id: string
          plot_number: string
          coordinates: unknown | null
          status: 'disponible' | 'réservé' | 'vendu'
          price: number
          area_sqm: number | null
          reserved_until: string | null
          reserved_by: string | null
          sold_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          property_id: string
          plot_number: string
          coordinates?: unknown | null
          status?: 'disponible' | 'réservé' | 'vendu'
          price: number
          area_sqm?: number | null
          reserved_until?: string | null
          reserved_by?: string | null
          sold_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          property_id?: string
          plot_number?: string
          coordinates?: unknown | null
          status?: 'disponible' | 'réservé' | 'vendu'
          price?: number
          area_sqm?: number | null
          reserved_until?: string | null
          reserved_by?: string | null
          sold_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reservations: {
        Row: {
          id: string
          user_id: string
          property_id: string | null
          plot_id: string | null
          reserved_at: string
          expires_at: string
          is_paid: boolean
          amount: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id?: string | null
          plot_id?: string | null
          reserved_at?: string
          expires_at: string
          is_paid?: boolean
          amount?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string | null
          plot_id?: string | null
          reserved_at?: string
          expires_at?: string
          is_paid?: boolean
          amount?: number | null
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          property_id: string | null
          plot_id: string | null
          amount: number
          method: 'stripe' | 'paypal' | 'flutterwave' | 'manual' | 'cash'
          status: 'pending' | 'completed' | 'failed' | 'cancelled'
          transaction_id: string | null
          is_installment: boolean
          installment_plan_id: string | null
          paid_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id?: string | null
          plot_id?: string | null
          amount: number
          method: 'stripe' | 'paypal' | 'flutterwave' | 'manual' | 'cash'
          status?: 'pending' | 'completed' | 'failed' | 'cancelled'
          transaction_id?: string | null
          is_installment?: boolean
          installment_plan_id?: string | null
          paid_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string | null
          plot_id?: string | null
          amount?: number
          method?: 'stripe' | 'paypal' | 'flutterwave' | 'manual' | 'cash'
          status?: 'pending' | 'completed' | 'failed' | 'cancelled'
          transaction_id?: string | null
          is_installment?: boolean
          installment_plan_id?: string | null
          paid_at?: string | null
          created_at?: string
        }
      }
      installment_plans: {
        Row: {
          id: string
          user_id: string
          property_id: string | null
          plot_id: string | null
          total_amount: number
          paid_amount: number
          remaining_amount: number
          monthly_payment: number
          next_payment_date: string | null
          completion_percentage: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id?: string | null
          plot_id?: string | null
          total_amount: number
          paid_amount?: number
          remaining_amount: number
          monthly_payment: number
          next_payment_date?: string | null
          completion_percentage?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string | null
          plot_id?: string | null
          total_amount?: number
          paid_amount?: number
          remaining_amount?: number
          monthly_payment?: number
          next_payment_date?: string | null
          completion_percentage?: number
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          payment_id: string
          invoice_number: string
          pdf_url: string | null
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          payment_id: string
          invoice_number: string
          pdf_url?: string | null
          amount: number
          created_at?: string
        }
        Update: {
          id?: string
          payment_id?: string
          invoice_number?: string
          pdf_url?: string | null
          amount?: number
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: 'new_property' | 'payment_received' | 'status_change' | 'reservation_expiring'
          title: string
          message: string
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'new_property' | 'payment_received' | 'status_change' | 'reservation_expiring'
          title: string
          message: string
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'new_property' | 'payment_received' | 'status_change' | 'reservation_expiring'
          title?: string
          message?: string
          is_read?: boolean
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          property_id: string
          rating: number | null
          comment: string | null
          is_approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          rating?: number | null
          comment?: string | null
          is_approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          rating?: number | null
          comment?: string | null
          is_approved?: boolean
          created_at?: string
        }
      }
      documents: {
        Row: {
          id: string
          user_id: string
          property_id: string | null
          type: 'contract' | 'invoice' | 'receipt' | 'other'
          title: string
          file_url: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id?: string | null
          type: 'contract' | 'invoice' | 'receipt' | 'other'
          title: string
          file_url: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string | null
          type?: 'contract' | 'invoice' | 'receipt' | 'other'
          title?: string
          file_url?: string
          created_at?: string
        }
      }
      admin_logs: {
        Row: {
          id: string
          admin_id: string
          action: string
          target_type: string | null
          target_id: string | null
          details: Json | null
          ip_address: unknown | null
          created_at: string
        }
        Insert: {
          id?: string
          admin_id: string
          action: string
          target_type?: string | null
          target_id?: string | null
          details?: Json | null
          ip_address?: unknown | null
          created_at?: string
        }
        Update: {
          id?: string
          admin_id?: string
          action?: string
          target_type?: string | null
          target_id?: string | null
          details?: Json | null
          ip_address?: unknown | null
          created_at?: string
        }
      }
      user_favorites: {
        Row: {
          id: string
          user_id: string
          property_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'client' | 'admin' | 'staff'
      property_type: 'terrain' | 'maison' | 'appartement' | 'studio' | 'chambre' | 'lot' | 'commercial'
      property_status: 'disponible' | 'réservé' | 'vendu'
      payment_method: 'stripe' | 'paypal' | 'flutterwave' | 'manual' | 'cash'
      payment_status: 'pending' | 'completed' | 'failed' | 'cancelled'
      notification_type: 'new_property' | 'payment_received' | 'status_change' | 'reservation_expiring'
      document_type: 'contract' | 'invoice' | 'receipt' | 'other'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}