import { Ticket, TicketCategory } from "./types";

const categoryRules: Array<{ category: TicketCategory; keywords: string[] }> = [
  {
    category: "cybersecurity",
    keywords: [
      "phishing",
      "malware",
      "ransomware",
      "suspicious email",
      "compromise",
      "breach",
      "security"
    ]
  },
  {
    category: "networking",
    keywords: ["internet", "firewall", "router", "switch", "wifi", "vpn", "network", "outage"]
  },
  {
    category: "microsoft_365",
    keywords: ["outlook", "teams", "sharepoint", "onedrive", "microsoft 365", "mailbox"]
  },
  {
    category: "backup_dr",
    keywords: ["backup", "restore", "snapshot", "disaster recovery", "recovery"]
  },
  {
    category: "cloud_infrastructure",
    keywords: ["vm", "server", "cloud", "storage", "database", "virtual machine"]
  },
  {
    category: "endpoint",
    keywords: ["laptop", "printer", "workstation", "device", "desktop", "screen"]
  },
  {
    category: "access_management",
    keywords: ["password", "login", "mfa", "account", "permission", "access"]
  }
];

export function classifyTicket(ticket: Ticket): TicketCategory {
  const searchableContent = `${ticket.title} ${ticket.description}`.toLowerCase();

  for (const rule of categoryRules) {
    if (rule.keywords.some((keyword) => searchableContent.includes(keyword))) {
      return rule.category;
    }
  }

  return "general_support";
}
