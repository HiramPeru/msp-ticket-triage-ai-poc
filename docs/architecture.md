# Architecture

## Overview

The PoC uses a small modular pipeline designed for readability and inspection. Each processing step has a single responsibility so a reviewer can quickly understand how the ticket moves from raw input to a triage recommendation.

## Modules

- `src/sampleTickets.ts`: Local sanitized input dataset
- `src/classifyTicket.ts`: Keyword-based category classifier
- `src/prioritizeTicket.ts`: Rule-based priority estimator
- `src/summarizeTicket.ts`: Deterministic summary builder
- `src/suggestAction.ts`: Operational next-step recommender
- `src/triageTicket.ts`: Orchestration layer that combines all outputs
- `src/formatResult.ts`: Terminal-oriented presentation layer
- `src/index.ts`: CLI entrypoint

## Processing Pattern

1. A ticket enters the system from the local sample set.
2. The classifier matches domain keywords against the title and description.
3. The priority engine scores urgency using impact, user count, outage, security, restore, and VIP cues.
4. The triage layer derives SLA risk using the priority and operational signals.
5. The summary generator creates a concise deterministic description.
6. The action recommender proposes the most appropriate next service step.
7. The formatter renders a readable report for terminal use.

## Design Principles

- No external dependencies beyond the TypeScript toolchain
- Strict typing for clarity and maintainability
- Deterministic logic for easy explanation in interviews or demos
- Easy extension path toward future AI or ticketing integrations
