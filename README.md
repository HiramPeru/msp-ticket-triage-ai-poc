# MSP Ticket Triage AI PoC

## Executive Summary

MSP Ticket Triage AI PoC is a public TypeScript project that demonstrates deterministic ticket triage for managed service providers. The repository now includes both a CLI proof of concept and a lightweight React web demo, with both entrypoints reusing the same shared triage logic from `src/`.

Live demo: https://msp-ticket-triage-ai-poc-rho.vercel.app

## Business Problem

MSP teams receive a mix of infrastructure, security, collaboration, backup, and access-related requests. Manual triage can slow down response times, create inconsistent prioritization, and increase SLA breach risk when urgent tickets are buried in the queue.

## What The PoC Does

- Processes sanitized sample tickets from a local TypeScript dataset
- Classifies tickets into common MSP support domains
- Estimates operational priority using deterministic rules
- Flags likely SLA risk
- Produces a concise summary
- Recommends the next operational action for routing or escalation

## Technical Stack

- TypeScript
- Node.js
- React
- Vite
- Deterministic rule-based logic
- Mermaid for architecture and roadmap diagrams

## Shared Logic

The CLI and web demo both import the same triage engine from `src/`. There is no backend, no database, no authentication layer, no API keys, and no external AI or LLM calls in this version.

## My Role / Contribution

I implemented the TypeScript proof of concept and its shared CLI/web workflow, with deterministic classification, prioritization, SLA risk rules and next-action recommendations. The [triage orchestrator](src/triageTicket.ts), [CLI](src/index.ts), and [web source](web/src) expose the implementation for review.

## Evidence / Outcomes

- [Sample tickets](src/sampleTickets.ts) provide fictional inputs for a reproducible walkthrough.
- [Shared library](src/lib.ts) exposes the engine reused by both interfaces.
- The [live demo](https://msp-ticket-triage-ai-poc-rho.vercel.app) makes sample triage inspectable without credentials.

The result is a runnable demonstration, not a benchmark of triage accuracy, a measured SLA improvement, or a production AI service. The [AI roadmap](docs/ai-roadmap.md) remains future scope.

## Engineering Decisions

Sharing one deterministic engine keeps CLI and web behavior consistent and explainable. Local sample data and a static web build avoid backend provisioning and external model dependencies for portfolio review.

## Install

```bash
npm install
```

## CLI Demo

Build and run the original CLI workflow:

```bash
npm run build
npm start
```

Example output:

```text
================================================================================
Ticket ID: TCK-1001
Title: Office internet outage affecting support floor
Category: networking
Priority: critical
SLA Risk: high
Summary: Networking incident impacting 42 users with high business impact.
Suggested Next Action: Open a P1 incident bridge, confirm ISP or firewall status, and assign a network engineer immediately.
================================================================================
```

## Web Demo

Start the Vite development server:

```bash
npm run web:dev
```

Create a production web build:

```bash
npm run web:build
```

Preview the built site locally:

```bash
npm run web:preview
```

The web UI includes:

- Project title and short description
- Sample ticket selector
- Manual triage trigger
- Result cards for category, priority, SLA risk, summary, and suggested next action
- A short explanation of the deterministic v1 scope and AI-ready roadmap

## Production Deployment

This repository can be deployed to Vercel as a static Vite site.

- Build command: `npm run web:build`
- Output directory: `web/dist`
- Environment variables: none required

Detailed instructions:

- [Production demo deployment guide](docs/production-demo.md)

## Architecture Summary

Sample tickets flow through a classifier, priority engine, SLA risk evaluator, deterministic summarizer, and action recommender. The CLI formats results for terminal output, while the web demo renders the same underlying triage results in a static React UI.

See:

- [Architecture](docs/architecture.md)
- [Demo Flow](docs/demo-flow.md)
- [AI Roadmap](docs/ai-roadmap.md)
- [Production Demo](docs/production-demo.md)
- [Service Model](docs/service-model.md)

## Limitations

- Uses deterministic rules and keyword matching instead of natural language understanding
- Processes only local sample tickets
- Does not integrate with a live ticketing platform
- Does not store historical data
- Does not learn from analyst feedback
- Does not make fake production claims about live AI behavior

## AI/LLM Roadmap

Future phases could add provider abstractions for ChatGPT, Claude, OpenRouter, local models, and MCP-enabled tooling. Those integrations remain out of scope for this version and are documented as roadmap items only.

## Public Repository Sanitization Notice

All examples in this repository use fictional and sanitized ticket data. No private customer data, secrets, production URLs, real emails, or credentials are included.
