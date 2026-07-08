# MSP Ticket Triage AI PoC

## Executive Summary

MSP Ticket Triage AI PoC is a small public TypeScript project that demonstrates how a managed service provider can apply deterministic automation to incoming support tickets. The proof of concept classifies tickets, recommends priority, estimates SLA risk, generates a concise summary, and suggests the next operational action without relying on external APIs or paid AI services.

## Business Problem

MSP teams often receive a mix of infrastructure, security, collaboration, backup, and access-related requests. Manual triage can slow down response times, create inconsistent prioritization, and increase SLA breach risk when urgent tickets are buried in the queue.

## What The PoC Does

- Processes sanitized sample tickets from a local TypeScript dataset
- Classifies tickets into common MSP support domains
- Estimates operational priority using simple rules
- Flags likely SLA risk
- Produces a short deterministic summary
- Recommends the next action for a service desk or escalation team

## Why It Matters For MSP Operations

This PoC shows how lightweight automation can improve consistency at the intake stage, help service coordinators route work faster, and support SLA-oriented service delivery before a full AI-enabled workflow is introduced.

## Technical Stack

- TypeScript
- Node.js
- Deterministic rule-based logic
- Mermaid for architecture and roadmap diagrams

## How To Install

```bash
npm install
```

## How To Run

```bash
npm run build
npm start
```

## Example Output

```text
================================================================================
Ticket ID: TCK-1001
Title: Office internet outage affecting support floor
Category: networking
Priority: critical
SLA Risk: high
Summary: Network outage impacting 42 users with high business impact.
Suggested Next Action: Open a P1 incident bridge, confirm ISP or firewall status, and assign a network engineer immediately.
================================================================================
```

## Architecture Summary

The project uses a modular CLI architecture. Sample tickets flow through a classifier, a priority engine, an SLA risk evaluator embedded in the triage step, a deterministic summarizer, and an action recommender. The formatted output is then printed to the terminal for quick review.

See:

- [Architecture](docs/architecture.md)
- [Demo Flow](docs/demo-flow.md)
- [AI Roadmap](docs/ai-roadmap.md)
- [Service Model](docs/service-model.md)

## Limitations

- Uses rules and keywords instead of natural language understanding
- Processes only local sample tickets
- Does not integrate with a live ticketing platform
- Does not store historical data
- Does not learn from analyst feedback

## AI/LLM Roadmap

Future phases could add provider abstractions for ChatGPT, Claude, OpenRouter, local models, and MCP-enabled tooling. Those integrations are intentionally out of scope for this first version and are documented as roadmap items only.

## Public Repository Sanitization Notice

All examples in this repository use fictional and sanitized ticket data. No private customer data, secrets, production URLs, real emails, or credentials are included.
