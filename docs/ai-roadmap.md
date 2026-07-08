# AI Roadmap

## Purpose

This document describes future extension paths only. The current repository does not call external AI providers and does not require API keys.

## Possible Future Integrations

### ChatGPT

A future adapter could send sanitized ticket payloads to ChatGPT for richer summaries, confidence scoring, or analyst-facing response drafts.

### Claude

Claude could support classification review, escalation rationale, or structured recommendation generation through a provider abstraction layer.

### OpenRouter

OpenRouter could act as a model routing layer if the project later needs provider flexibility and cost-aware switching.

### Local Models

A local model path could support privacy-sensitive environments, offline demonstrations, or low-cost experimentation with classification assistance.

### MCP

MCP tooling could expose controlled integrations for knowledge bases, operational runbooks, device inventories, or internal service guidance.

### Supabase Edge Functions

Supabase Edge Functions could host lightweight orchestration logic, webhook processing, or secure middleware between triage workflows and downstream systems.

### Service Dashboards

Dashboard extensions could visualize ticket mix, SLA risk distribution, queue trends, and escalation hotspots for service managers.

### Ticketing Systems

Future connectors could push outputs into PSA or ITSM platforms such as service desk queues, incident boards, or reporting pipelines.

## Recommended Evolution Sequence

1. Keep the current deterministic engine as the baseline.
2. Add a provider abstraction interface for optional AI calls.
3. Introduce model routing and prompt controls.
4. Connect to operational tools through MCP or service middleware.
5. Add dashboarding and feedback loops for continuous improvement.
