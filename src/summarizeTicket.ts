import { Ticket, TicketCategory, TicketPriority } from "./types";

function categoryLabel(category: TicketCategory): string {
  switch (category) {
    case "networking":
      return "Networking";
    case "cybersecurity":
      return "Cybersecurity";
    case "microsoft_365":
      return "Microsoft 365";
    case "backup_dr":
      return "Backup and recovery";
    case "cloud_infrastructure":
      return "Cloud infrastructure";
    case "endpoint":
      return "Endpoint";
    case "access_management":
      return "Access management";
    default:
      return "General support";
  }
}

export function summarizeTicket(
  ticket: Ticket,
  category: TicketCategory,
  priority: TicketPriority
): string {
  const impactText = `${ticket.businessImpact} business impact`;
  const userText = `${ticket.affectedUsers} user${ticket.affectedUsers === 1 ? "" : "s"}`;
  const categoryText = categoryLabel(category);

  if (priority === "critical") {
    return `${categoryText} incident impacting ${userText} with ${impactText}.`;
  }

  if (priority === "high") {
    return `${categoryText} issue affecting ${userText} and requiring prompt response.`;
  }

  return `${categoryText} request reported by ${ticket.reportedBy} with ${impactText}.`;
}
