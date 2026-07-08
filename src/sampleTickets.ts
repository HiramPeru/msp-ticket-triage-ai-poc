import { Ticket } from "./types";

export const sampleTickets: Ticket[] = [
  {
    id: "TCK-1001",
    title: "Office internet outage affecting support floor",
    description:
      "Users report internet access is down after the core router stopped responding. VPN sessions also dropped across the support floor.",
    reportedBy: "Alex Carter",
    affectedUsers: 42,
    businessImpact: "high"
  },
  {
    id: "TCK-1002",
    title: "Suspicious email reported by finance coordinator",
    description:
      "A user received a suspicious email requesting urgent payment confirmation and suspects phishing. No links were clicked yet.",
    reportedBy: "Jordan Hayes",
    affectedUsers: 1,
    businessImpact: "high"
  },
  {
    id: "TCK-1003",
    title: "Shared mailbox search failing in Outlook",
    description:
      "Multiple team members cannot search older messages in Outlook for a shared mailbox used for customer follow-up.",
    reportedBy: "Taylor Brooks",
    affectedUsers: 8,
    businessImpact: "medium"
  },
  {
    id: "TCK-1004",
    title: "Restore request for deleted project files",
    description:
      "Operations needs a restore from backup after a project folder was deleted from shared storage earlier today.",
    reportedBy: "Morgan Lee",
    affectedUsers: 6,
    businessImpact: "high"
  },
  {
    id: "TCK-1005",
    title: "New starter cannot complete MFA enrollment",
    description:
      "A new employee cannot finish login and MFA setup for their account and currently has no access to the internal portal.",
    reportedBy: "Casey Bennett",
    affectedUsers: 1,
    businessImpact: "medium"
  },
  {
    id: "TCK-1006",
    title: "Executive laptop performance degradation during client prep",
    description:
      "VIP user reports the laptop is freezing while preparing a customer presentation and cannot reliably open large files.",
    reportedBy: "Riley Morgan",
    affectedUsers: 1,
    businessImpact: "high"
  },
  {
    id: "TCK-1007",
    title: "Cloud VM storage alert on reporting server",
    description:
      "The reporting server virtual machine in the cloud is nearing storage capacity and database jobs may fail overnight.",
    reportedBy: "Jamie Foster",
    affectedUsers: 12,
    businessImpact: "medium"
  }
];
