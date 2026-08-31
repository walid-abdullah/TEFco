/**
 * PERFORMANCE TIER & HARDWARE EVALUATOR
 * Detects device capabilities and returns a performance tier (HIGH, MEDIUM, LOW)
 * along with configured rendering limits and reduced-motion preferences.
 */
export class PerformanceTier {
  static getTier() {
    if (typeof window === 'undefined') {
      return {
        tier: 'LOW',
        maxDpr: 1.0,
        antialias: false,
        particlesCount: 40,
        enableReflections: false,
        reducedMotion: false
      };
    }

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const concurrency = navigator.hardwareConcurrency || 4;
    const isLowPower = concurrency <= 4;

    let tier = 'HIGH';
    let maxDpr = 1.5;
    let antialias = true;
    let particlesCount = 140;
    let enableReflections = true;

    if (isMobile || isLowPower) {
      tier = 'LOW';
      maxDpr = 1.0;
      antialias = false;
      particlesCount = 40;
      enableReflections = false;
    } else if (isTablet) {
      tier = 'MEDIUM';
      maxDpr = 1.2;
      antialias = true;
      particlesCount = 80;
      enableReflections = false;
    }

    return {
      tier,
      maxDpr: Math.min(window.devicePixelRatio || 1, maxDpr),
      antialias,
      particlesCount,
      enableReflections,
      reducedMotion: isReducedMotion
    };
  }
}
