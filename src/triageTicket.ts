import { classifyTicket } from "./classifyTicket";
import { prioritizeTicket } from "./prioritizeTicket";
import { suggestAction } from "./suggestAction";
import { summarizeTicket } from "./summarizeTicket";
import { SlaRisk, Ticket, TriageResult } from "./types";

function evaluateSlaRisk(ticket: Ticket, priority: TriageResult["priority"]): SlaRisk {
  const text = `${ticket.title} ${ticket.description}`.toLowerCase();
  const elevatedSignals = ["outage", "phishing", "restore", "executive", "vip", "down"];

  if (priority === "critical") {
    return "high";
  }

  if (priority === "high" || elevatedSignals.some((signal) => text.includes(signal))) {
    return ticket.businessImpact === "low" ? "medium" : "high";
  }

  if (ticket.businessImpact === "medium" || ticket.affectedUsers >= 10) {
    return "medium";
  }

  return "low";
}

export function triageTicket(ticket: Ticket): TriageResult {
  const category = classifyTicket(ticket);
  const priority = prioritizeTicket(ticket);
  const slaRisk = evaluateSlaRisk(ticket, priority);
  const summary = summarizeTicket(ticket, category, priority);
  const suggestedNextAction = suggestAction(category, priority);

  return {
    ticket,
    category,
    priority,
    slaRisk,
    summary,
    suggestedNextAction
  };
}
