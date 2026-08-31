import { useState, useEffect } from 'react';

export const EXPERIMENTS = {
  pricing_cta_variant: {
    variants: ['control', 'headline_v2', 'social_proof_v2'],
    defaultVariant: 'control',
  },
  homepage_hero_variant: {
    variants: ['control', 'risk_reversal', 'proof_first'],
    defaultVariant: 'control',
  },
};

function getStableHash(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getExperimentVariant(experimentKey, variants = [], fallback = 'control') {
  if (typeof window === 'undefined') return fallback;

  const key = `experiment:${experimentKey}`;
  const saved = window.localStorage.getItem(key);
  if (saved && variants.includes(saved)) {
    return saved;
  }

  const candidate = String(getStableHash(`${experimentKey}:${window.location.pathname}:${window.navigator.userAgent}`) % variants.length);
  const variant = variants[Number(candidate)] || fallback;
  window.localStorage.setItem(key, variant);
  return variant;
}

export function useExperiment(experimentKey, variants = [], fallback = 'control') {
  const [variant, setVariant] = useState(fallback);

  useEffect(() => {
    setVariant(getExperimentVariant(experimentKey, variants, fallback));
  }, [experimentKey, fallback]);

  return variant;
}

export function ExperimentGate({ experimentKey, variants, fallback = null, childrenByVariant = {} }) {
  const variant = useExperiment(experimentKey, variants, fallback);
  if (!childrenByVariant[variant]) return fallback;
  return childrenByVariant[variant];
}
