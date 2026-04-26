// Download links for Alexander AI Voice releases
// These are fallback values - link to releases page if API fails
export const LATEST_VERSION = 'v0.1.0';

export const GITHUB_REPO = 'https://github.com/Liberty-Emporium/alexander-ai-voice';
export const GITHUB_RELEASES_PAGE = `${GITHUB_REPO}/releases`;
export const DONATE_URL = 'https://alexanderaiis.com';
export const SPONSOR_CHECKOUT_URL = 'https://alexanderaiis.com';
export const SPONSOR_CONTACT_EMAIL = 'jay@alexanderaiis.com';

export const DOWNLOAD_LINKS = {
  macArm: GITHUB_RELEASES_PAGE,
  macIntel: GITHUB_RELEASES_PAGE,
  windows: GITHUB_RELEASES_PAGE,
  linux: GITHUB_RELEASES_PAGE,
} as const;

// Export function to get dynamic download links
export { getLatestRelease } from './releases';
