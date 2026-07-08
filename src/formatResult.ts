import { TriageResult } from "./types";

export function formatResult(result: TriageResult): string {
  const divider = "=".repeat(80);

  return [
    divider,
    `Ticket ID: ${result.ticket.id}`,
    `Title: ${result.ticket.title}`,
    `Category: ${result.category}`,
    `Priority: ${result.priority}`,
    `SLA Risk: ${result.slaRisk}`,
    `Summary: ${result.summary}`,
    `Suggested Next Action: ${result.suggestedNextAction}`,
    divider
  ].join("\n");
}
