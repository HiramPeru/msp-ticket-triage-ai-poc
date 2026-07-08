export type TicketCategory =
  | "networking"
  | "cybersecurity"
  | "microsoft_365"
  | "backup_dr"
  | "cloud_infrastructure"
  | "endpoint"
  | "access_management"
  | "general_support";

export type TicketPriority = "low" | "medium" | "high" | "critical";

export type SlaRisk = "low" | "medium" | "high";

export type BusinessImpact = "low" | "medium" | "high";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  reportedBy: string;
  affectedUsers: number;
  businessImpact: BusinessImpact;
}

export interface TriageResult {
  ticket: Ticket;
  category: TicketCategory;
  priority: TicketPriority;
  slaRisk: SlaRisk;
  summary: string;
  suggestedNextAction: string;
}
