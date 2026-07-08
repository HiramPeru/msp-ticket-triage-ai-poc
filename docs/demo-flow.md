# Demo Flow

## Audience

This walkthrough is designed for a recruiter, technical account manager interviewer, solutions consultant interviewer, or MSP stakeholder.

## Demo Narrative

1. Introduce the repository as a public proof of concept for MSP service operations.
2. Explain that the first version is intentionally deterministic and does not depend on external AI APIs or credentials.
3. Show the sample ticket set and note that all examples are sanitized and fictional.
4. Run the application from the terminal.
5. Walk through one outage ticket, one security ticket, and one access or collaboration ticket.
6. Highlight how the triage logic produces category, priority, SLA risk, summary, and next action.
7. Explain how this reduces manual intake effort and improves queue consistency.
8. Close with the AI roadmap and note that future LLM support is planned but intentionally not implemented in the MVP.

## Suggested Talking Points

- The PoC is small enough to inspect quickly but realistic enough to show service operations thinking.
- The rules reflect how MSP teams often reason about urgency, impact, and escalation.
- The modular structure makes it easy to replace deterministic logic with model-assisted components later.
- The current version is safe to publish because it uses no secrets, external APIs, or private customer data.
