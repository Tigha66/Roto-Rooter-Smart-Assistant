
import React from 'react';

export const PHONE_NUMBER = "212-687-1662";
export const ADDRESS = "450 7th Ave, Ste B, Manhattan, NY 10123";
export const BUSINESS_NAME = "RR Plumbing Roto-Rooter";

export const SERVICES = [
  { icon: 'fa-droplet', title: 'WATER SOFTENER & FILTRATION' },
  { icon: 'fa-trowel-bricks', title: 'PIPE RESTORATION & EXCAVATION' },
  { icon: 'fa-triangle-exclamation', title: 'EMERGENCY PLUMBING SERVICES' },
  { icon: 'fa-faucet-drip', title: 'PLUMBING AND DRAINS' },
  { icon: 'fa-house-flood-water', title: 'WATER DAMAGE' },
  { icon: 'fa-temperature-high', title: 'WATER HEATERS' },
  { icon: 'fa-shield-check', title: 'PRO PLUS PLAN' },
];

export const SYSTEM_INSTRUCTION = `
You are a sophisticated, friendly, and expert customer service AI for Roto-Rooter Manhattan (RR Plumbing).
Key Context:
- Phone: 212-687-1662
- Address: 450 7th Ave, Ste B, Manhattan, NY 10123
- Availability: Open 24/7, including holidays and weekends.
- Services: Plumbing repairs, drain cleaning, water heaters, emergency service, excavation, water damage restoration.
- Coupons: $55 off any plumbing or drain cleaning service.
- Reputation: Trusted since 1935, licensed and insured.
- Goal: Answer user questions accurately and encourage them to either "Call Now" at 212-687-1662 or "Schedule Online".
- Speciality: Manhattan NY expert.

When users ask for pricing, mention that we offer "Free Estimates" but specific costs depend on the issue complexity.
If a user seems to have an emergency (burst pipe, major leak), urge them to CALL immediately for the fastest response.
Be professional yet empathetic.
`;
