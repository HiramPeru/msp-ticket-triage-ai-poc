import { TicketCategory, TicketPriority } from "./types";

const categoryActions: Record<TicketCategory, string> = {
  networking:
    "Validate core connectivity, check firewall or ISP status, and route to the network queue.",
  cybersecurity:
    "Initiate security triage, isolate risk if needed, and notify the security response owner.",
  microsoft_365:
    "Review Microsoft 365 service scope, reproduce the issue, and assign to the collaboration team.",
  backup_dr:
    "Confirm restore point availability, validate recovery scope, and escalate to backup operations.",
  cloud_infrastructure:
    "Inspect cloud resource health, verify capacity or service alerts, and engage infrastructure support.",
  endpoint:
    "Run endpoint diagnostics, confirm user impact, and assign to desktop support.",
  access_management:
    "Verify identity, review account or MFA status, and route to access administration.",
  general_support:
    "Collect missing context, assess urgency, and assign to the general service desk queue."
};

export function suggestAction(category: TicketCategory, priority: TicketPriority): string {
  if (priority === "critical") {
    switch (category) {
      case "networking":
        return "Open a P1 incident bridge, confirm ISP or firewall status, and assign a network engineer immediately.";
      case "cybersecurity":
        return "Escalate as a potential security incident, preserve evidence, and engage the incident response lead immediately.";
      case "backup_dr":
        return "Trigger urgent recovery coordination, confirm the latest viable backup, and assign restoration ownership now.";
      default:
        return `Treat as a high-urgency service incident. ${categoryActions[category]}`;
    }
  }

  if (priority === "high") {
    return `Prioritize within the active queue. ${categoryActions[category]}`;
  }

  return categoryActions[category];
}
