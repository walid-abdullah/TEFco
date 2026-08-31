"use client";

import { useExperiment } from '@/lib/experiments';

export default function ExperimentGate({ experimentKey, variants, fallback = null, childrenByVariant = {} }) {
  const variant = useExperiment(experimentKey, variants, 'control');

  if (!childrenByVariant[variant]) {
    return fallback;
  }

  return childrenByVariant[variant];
}
