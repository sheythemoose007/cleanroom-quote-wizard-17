export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ad_performance_data: {
        Row: {
          client_id: string
          connection_id: string
          created_at: string
          date: string
          entity_id: string
          entity_name: string
          id: string
          level: string
          metrics: Json
        }
        Insert: {
          client_id: string
          connection_id: string
          created_at?: string
          date: string
          entity_id: string
          entity_name: string
          id?: string
          level: string
          metrics: Json
        }
        Update: {
          client_id?: string
          connection_id?: string
          created_at?: string
          date?: string
          entity_id?: string
          entity_name?: string
          id?: string
          level?: string
          metrics?: Json
        }
        Relationships: [
          {
            foreignKeyName: "ad_performance_data_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ad_performance_data_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "data_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      alerts: {
        Row: {
          client_id: string
          created_at: string
          details: Json | null
          id: string
          is_read: boolean
          message: string
          rule_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          details?: Json | null
          id?: string
          is_read?: boolean
          message: string
          rule_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          details?: Json | null
          id?: string
          is_read?: boolean
          message?: string
          rule_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "monitoring_rules"
            referencedColumns: ["id"]
          },
        ]
      }
      bsl_lab_qualifications: {
        Row: {
          biosafety_level: string
          company_name: string
          containment_features: string | null
          created_at: string
          deployment_timeframe: string
          email: string
          full_name: string
          has_consent: boolean
          id: string
          lab_size: string
          location: string
          organization_type: string
          phone: string
          primary_application: string
          submission_time: string
          user_agent: string | null
        }
        Insert: {
          biosafety_level: string
          company_name: string
          containment_features?: string | null
          created_at?: string
          deployment_timeframe: string
          email: string
          full_name: string
          has_consent?: boolean
          id?: string
          lab_size: string
          location: string
          organization_type: string
          phone: string
          primary_application: string
          submission_time?: string
          user_agent?: string | null
        }
        Update: {
          biosafety_level?: string
          company_name?: string
          containment_features?: string | null
          created_at?: string
          deployment_timeframe?: string
          email?: string
          full_name?: string
          has_consent?: boolean
          id?: string
          lab_size?: string
          location?: string
          organization_type?: string
          phone?: string
          primary_application?: string
          submission_time?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      business_gameplans: {
        Row: {
          client_id: string
          created_at: string
          created_by: string
          date_range_end: string | null
          date_range_start: string | null
          description: string | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          created_by: string
          date_range_end?: string | null
          date_range_start?: string | null
          description?: string | null
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          created_by?: string
          date_range_end?: string | null
          date_range_start?: string | null
          description?: string | null
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_gameplans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_gameplans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cleanroom_qualifications: {
        Row: {
          application: string
          company_name: string
          created_at: string
          email: string
          full_name: string
          has_consent: boolean
          id: string
          iso_classification: string
          location: string
          phone: string
          size_range: string
          specific_requirements: string | null
          submission_time: string
          timeframe: string
          user_agent: string | null
        }
        Insert: {
          application: string
          company_name: string
          created_at?: string
          email: string
          full_name: string
          has_consent?: boolean
          id?: string
          iso_classification: string
          location: string
          phone: string
          size_range: string
          specific_requirements?: string | null
          submission_time?: string
          timeframe: string
          user_agent?: string | null
        }
        Update: {
          application?: string
          company_name?: string
          created_at?: string
          email?: string
          full_name?: string
          has_consent?: boolean
          id?: string
          iso_classification?: string
          location?: string
          phone?: string
          size_range?: string
          specific_requirements?: string | null
          submission_time?: string
          timeframe?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      client_analyst_mappings: {
        Row: {
          analyst_id: string
          client_id: string
          created_at: string
          id: string
        }
        Insert: {
          analyst_id: string
          client_id: string
          created_at?: string
          id?: string
        }
        Update: {
          analyst_id?: string
          client_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_analyst_mappings_analyst_id_fkey"
            columns: ["analyst_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_analyst_mappings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      dashboard_widgets: {
        Row: {
          configuration: Json
          created_at: string
          dashboard_id: string
          height: number
          id: string
          position_x: number
          position_y: number
          title: string
          updated_at: string
          widget_type: string
          width: number
        }
        Insert: {
          configuration: Json
          created_at?: string
          dashboard_id: string
          height: number
          id?: string
          position_x: number
          position_y: number
          title: string
          updated_at?: string
          widget_type: string
          width: number
        }
        Update: {
          configuration?: Json
          created_at?: string
          dashboard_id?: string
          height?: number
          id?: string
          position_x?: number
          position_y?: number
          title?: string
          updated_at?: string
          widget_type?: string
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "dashboard_widgets_dashboard_id_fkey"
            columns: ["dashboard_id"]
            isOneToOne: false
            referencedRelation: "dashboards"
            referencedColumns: ["id"]
          },
        ]
      }
      dashboards: {
        Row: {
          client_id: string
          created_at: string
          created_by: string
          description: string | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "dashboards_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dashboards_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      data_connections: {
        Row: {
          account_id: string
          account_name: string
          auth_credentials: Json
          client_id: string
          created_at: string
          id: string
          is_active: boolean | null
          last_fetched_at: string | null
          platform: Database["public"]["Enums"]["ad_platform"]
          refresh_frequency: unknown
          updated_at: string
        }
        Insert: {
          account_id: string
          account_name: string
          auth_credentials: Json
          client_id: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_fetched_at?: string | null
          platform: Database["public"]["Enums"]["ad_platform"]
          refresh_frequency?: unknown
          updated_at?: string
        }
        Update: {
          account_id?: string
          account_name?: string
          auth_credentials?: Json
          client_id?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_fetched_at?: string | null
          platform?: Database["public"]["Enums"]["ad_platform"]
          refresh_frequency?: unknown
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_connections_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ffu_quote_requests: {
        Row: {
          airflow_requirements: string | null
          application: string
          business_email: string
          company_name: string
          created_at: string
          ffu_quantity: string
          ffu_size: string
          filtration_level: string
          full_name: string
          has_consent: boolean
          id: string
          phone_number: string
          project_location: string
          specific_features: string[] | null
          submission_time: string
          user_agent: string | null
        }
        Insert: {
          airflow_requirements?: string | null
          application: string
          business_email: string
          company_name: string
          created_at?: string
          ffu_quantity: string
          ffu_size: string
          filtration_level: string
          full_name: string
          has_consent?: boolean
          id?: string
          phone_number: string
          project_location: string
          specific_features?: string[] | null
          submission_time?: string
          user_agent?: string | null
        }
        Update: {
          airflow_requirements?: string | null
          application?: string
          business_email?: string
          company_name?: string
          created_at?: string
          ffu_quantity?: string
          ffu_size?: string
          filtration_level?: string
          full_name?: string
          has_consent?: boolean
          id?: string
          phone_number?: string
          project_location?: string
          specific_features?: string[] | null
          submission_time?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      gameplan_actions: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          objective_id: string
          owner_id: string | null
          owner_type: string
          status: Database["public"]["Enums"]["action_status"]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          objective_id: string
          owner_id?: string | null
          owner_type: string
          status?: Database["public"]["Enums"]["action_status"]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          objective_id?: string
          owner_id?: string | null
          owner_type?: string
          status?: Database["public"]["Enums"]["action_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gameplan_actions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gameplan_actions_objective_id_fkey"
            columns: ["objective_id"]
            isOneToOne: false
            referencedRelation: "gameplan_objectives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gameplan_actions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gameplan_objectives: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          gameplan_id: string
          id: string
          importance: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          gameplan_id: string
          id?: string
          importance?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          gameplan_id?: string
          id?: string
          importance?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gameplan_objectives_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gameplan_objectives_gameplan_id_fkey"
            columns: ["gameplan_id"]
            isOneToOne: false
            referencedRelation: "business_gameplans"
            referencedColumns: ["id"]
          },
        ]
      }
      monitoring_rules: {
        Row: {
          client_id: string
          comparison_period: string
          condition: string
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_active: boolean
          metric_path: string
          name: string
          threshold: number
          updated_at: string
        }
        Insert: {
          client_id: string
          comparison_period: string
          condition: string
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_active?: boolean
          metric_path: string
          name: string
          threshold: number
          updated_at?: string
        }
        Update: {
          client_id?: string
          comparison_period?: string
          condition?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_active?: boolean
          metric_path?: string
          name?: string
          threshold?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "monitoring_rules_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "monitoring_rules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company: string | null
          created_at: string
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      strategic_interpretations: {
        Row: {
          client_id: string
          content: string
          created_at: string
          created_by: string
          date_range_end: string | null
          date_range_start: string | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          client_id: string
          content: string
          created_at?: string
          created_by: string
          date_range_end?: string | null
          date_range_start?: string | null
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          content?: string
          created_at?: string
          created_by?: string
          date_range_end?: string | null
          date_range_start?: string | null
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "strategic_interpretations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "strategic_interpretations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bytea_to_text: {
        Args: { data: string }
        Returns: string
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_delete: {
        Args:
          | { uri: string }
          | { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_get: {
        Args: { uri: string } | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_post: {
        Args:
          | { uri: string; content: string; content_type: string }
          | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_put: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      text_to_bytea: {
        Args: { data: string }
        Returns: string
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
    }
    Enums: {
      action_status: "to_do" | "in_progress" | "completed" | "blocked"
      ad_platform: "meta" | "google" | "other"
      user_role: "client" | "analyst" | "admin"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      action_status: ["to_do", "in_progress", "completed", "blocked"],
      ad_platform: ["meta", "google", "other"],
      user_role: ["client", "analyst", "admin"],
    },
  },
} as const
