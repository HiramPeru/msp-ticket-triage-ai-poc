import { useState } from "react";
import { sampleTickets, triageTicket, type Ticket, type TriageResult } from "@triage";

const roadmapItems = [
  "Rule-based deterministic v1 for predictable demo behavior",
  "Future AI-ready path for ticket enrichment, confidence scoring, and workflow automation",
  "No external APIs, no secrets, and no backend dependencies in this demo"
];

function formatLabel(value: string): string {
  return value
    .split("_")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function TicketMeta({ ticket }: { ticket: Ticket }): JSX.Element {
  return (
    <dl className="ticket-meta">
      <div>
        <dt>Reported by</dt>
        <dd>{ticket.reportedBy}</dd>
      </div>
      <div>
        <dt>Affected users</dt>
        <dd>{ticket.affectedUsers}</dd>
      </div>
      <div>
        <dt>Business impact</dt>
        <dd>{formatLabel(ticket.businessImpact)}</dd>
      </div>
    </dl>
  );
}

function ResultCard({
  label,
  value,
  accent
}: {
  label: string;
  value: string;
  accent?: "priority" | "risk";
}): JSX.Element {
  return (
    <article className={`result-card${accent ? ` result-card--${accent}` : ""}`}>
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  );
}

export default function App(): JSX.Element {
  const [selectedTicketId, setSelectedTicketId] = useState<string>(sampleTickets[0]?.id ?? "");
  const [result, setResult] = useState<TriageResult | null>(() =>
    sampleTickets[0] ? triageTicket(sampleTickets[0]) : null
  );

  const selectedTicket = sampleTickets.find((ticket) => ticket.id === selectedTicketId) ?? sampleTickets[0];

  function runTriage(): void {
    if (!selectedTicket) {
      setResult(null);
      return;
    }

    setResult(triageTicket(selectedTicket));
  }

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Production-ready demo</p>
        <h1>MSP Ticket Triage AI PoC</h1>
        <p className="hero-copy">
          A lightweight React demo that reuses the same deterministic TypeScript triage logic as
          the CLI proof of concept.
        </p>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Sample ticket</h2>
            <p>Select a sanitized MSP support ticket and run the shared triage engine.</p>
          </div>
          <button type="button" onClick={runTriage}>
            Run triage
          </button>
        </div>

        <label className="field">
          <span>Available tickets</span>
          <select value={selectedTicketId} onChange={(event) => setSelectedTicketId(event.target.value)}>
            {sampleTickets.map((ticket) => (
              <option key={ticket.id} value={ticket.id}>
                {ticket.id} · {ticket.title}
              </option>
            ))}
          </select>
        </label>

        {selectedTicket ? (
          <article className="ticket-preview">
            <header>
              <p className="ticket-id">{selectedTicket.id}</p>
              <h3>{selectedTicket.title}</h3>
            </header>
            <p className="ticket-description">{selectedTicket.description}</p>
            <TicketMeta ticket={selectedTicket} />
          </article>
        ) : null}
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Triage result</h2>
            <p>Shared rule-based output from the same `triageTicket` function used by the CLI.</p>
          </div>
        </div>

        {result ? (
          <>
            <div className="results-grid">
              <ResultCard label="Category" value={formatLabel(result.category)} />
              <ResultCard label="Priority" value={formatLabel(result.priority)} accent="priority" />
              <ResultCard label="SLA risk" value={formatLabel(result.slaRisk)} accent="risk" />
            </div>

            <div className="detail-grid">
              <article className="detail-card">
                <p>Summary</p>
                <strong>{result.summary}</strong>
              </article>
              <article className="detail-card">
                <p>Suggested next action</p>
                <strong>{result.suggestedNextAction}</strong>
              </article>
            </div>
          </>
        ) : (
          <p className="empty-state">No sample tickets are available.</p>
        )}
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Demo notes</h2>
            <p>Current scope and roadmap for a recruiter-friendly static deployment.</p>
          </div>
        </div>

        <ul className="notes-list">
          {roadmapItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
