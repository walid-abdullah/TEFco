export const CONTENT_PILLARS = {
  authority: {
    goal: 'Establish expertise and trust',
    formats: ['YouTube breakdowns', 'case-study explainers', 'founder POV clips'],
    cadence: '2x per week',
  },
  demandCapture: {
    goal: 'Increase inbound conversion intent',
    formats: ['problem-solution ads', 'before-after edits', 'ROI calculators'],
    cadence: '3x per week',
  },
  retention: {
    goal: 'Increase watch time and social engagement',
    formats: ['hook-driven reels', 'audience pain-point edits', 'story-first short form'],
    cadence: '4x per week',
  },
};

export const CONTENT_THEME_BANK = [
  'What we learned from a 3x conversion lift on a client campaign',
  'The editing decision that made viewers stop scrolling',
  '21-day content system for creator-led video teams',
  'Why your brand video feels generic and how to fix it',
  'The 4 hooks that outperform standard CTAs',
];

export const CONTENT_CALENDAR = [
  { day: 'Mon', pillar: 'authority', format: 'founder breakdown' },
  { day: 'Tue', pillar: 'retention', format: 'hook test' },
  { day: 'Wed', pillar: 'demandCapture', format: 'case-study ad' },
  { day: 'Thu', pillar: 'authority', format: 'process walkthrough' },
  { day: 'Fri', pillar: 'retention', format: 'UGC clip' },
  { day: 'Sat', pillar: 'demandCapture', format: 'social proof post' },
  { day: 'Sun', pillar: 'authority', format: 'repurposed insight recap' },
];

export function buildContentPlan({ niche, audience, offer, goal = 'lead generation' }) {
  return {
    niche,
    audience,
    offer,
    goal,
    pillars: CONTENT_PILLARS,
    contentBank: CONTENT_THEME_BANK,
    weeklyCadence: CONTENT_CALENDAR,
    conversionGoal: 'Capture high-intent leads with a direct CTA to book a strategy call.',
    contentChecklist: [
      'Strong hook within first 2 seconds',
      'Clear audience pain point',
      'Visual proof or before-after demonstration',
      'CTA aligned to the offer',
      'Repurpose into 3 platform-native versions',
    ],
  };
}
