/**
 * Asset Manifest Constant (`ASSETS`)
 * ----------------------------------
 * Single source of truth for all local and remote static asset paths.
 * Organized logically by scene feature, audio categories, 3D models, and textures.
 *
 * Expected Usage:
 *   import { ASSETS } from '@/constants/assets';
 *   const bgPath = ASSETS.hero.background;
 */

export const ASSETS = {
  hero: {
    background: '/images/hero/background.webp',
    headingDecoration: '/images/hero/decoration.svg',
  },
  reef: {
    background: '/images/reef/background.webp',
    foregroundElements: '/images/reef/corals.png',
  },
  temple: {
    background: '/images/temple/background.webp',
    pillarTexture: '/images/temple/pillar-texture.jpg',
  },
  deepOcean: {
    background: '/images/deep/background.webp',
    bioluminescence: '/images/deep/particles.png',
  },
  submarine: {
    background: '/images/submarine/background.webp',
    viewportOverlay: '/images/ui/viewport-overlay.png',
  },
  ancientCity: {
    background: '/images/city/background.webp',
    ruinsTexture: '/images/city/ruins.webp',
  },
  ui: {
    logo: '/icons/logo.svg',
    favicon: '/favicon.ico',
    cursorPointer: '/icons/cursor-pointer.svg',
    soundToggleOn: '/icons/sound-on.svg',
    soundToggleOff: '/icons/sound-off.svg',
  },
  audio: {
    ambientSurface: '/audio/ambient/surface-waves.mp3',
    ambientDeep: '/audio/ambient/deep-underwater.mp3',
    effectClick: '/audio/effects/sonar-click.mp3',
    effectTransition: '/audio/effects/water-whoosh.mp3',
    bgMusic: '/audio/music/ocean-theme.mp3',
  },
  models: {
    fishSchool: '/models/fish/school.glb',
    submarine: '/models/submarine/sub.glb',
    environmentProps: '/models/environment/props.glb',
  },
  textures: {
    causticsMap: '/textures/caustics.png',
    waterNormalMap: '/textures/water-normals.jpg',
    noiseTexture: '/textures/perlin-noise.png',
  },
} as const;

export type AssetManifest = typeof ASSETS;
