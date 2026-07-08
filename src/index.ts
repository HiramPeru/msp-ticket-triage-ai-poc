import { formatResult } from "./formatResult";
import { sampleTickets } from "./sampleTickets";
import { triageTicket } from "./triageTicket";

function main(): void {
  console.log("MSP Ticket Triage AI PoC\n");

  for (const ticket of sampleTickets) {
    const result = triageTicket(ticket);
    console.log(formatResult(result));
    console.log("");
  }
}

main();
