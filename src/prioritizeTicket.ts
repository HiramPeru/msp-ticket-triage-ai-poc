import { Ticket, TicketPriority } from "./types";

const securityKeywords = ["phishing", "malware", "ransomware", "compromise", "breach"];
const outageKeywords = ["outage", "down", "unavailable", "offline", "cannot connect"];
const restoreKeywords = ["restore", "backup", "recovery", "disaster"];
const vipKeywords = ["executive", "vip", "director", "cfo", "ceo"];
const accessBlockerKeywords = ["cannot login", "cannot log in", "locked out", "no access", "mfa"];

function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword));
}

export function prioritizeTicket(ticket: Ticket): TicketPriority {
  const text = `${ticket.title} ${ticket.description}`.toLowerCase();
  let score = 0;

  if (ticket.businessImpact === "high") {
    score += 3;
  } else if (ticket.businessImpact === "medium") {
    score += 2;
  } else {
    score += 1;
  }

  if (ticket.affectedUsers >= 25) {
    score += 3;
  } else if (ticket.affectedUsers >= 10) {
    score += 2;
  } else if (ticket.affectedUsers >= 3) {
    score += 1;
  }

  if (containsAny(text, securityKeywords)) {
    score += 3;
  }

  if (containsAny(text, outageKeywords)) {
    score += 3;
  }

  if (containsAny(text, restoreKeywords)) {
    score += 2;
  }

  if (containsAny(text, vipKeywords)) {
    score += 2;
  }

  if (containsAny(text, accessBlockerKeywords)) {
    score += 1;
  }

  if (score >= 8) {
    return "critical";
  }

  if (score >= 6) {
    return "high";
  }

  if (score >= 3) {
    return "medium";
  }

  return "low";
}
