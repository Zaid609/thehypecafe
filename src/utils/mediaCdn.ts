/**
 * Media CDN Configuration
 * 
 * All static media assets are served from media.thehypecave.com
 * This subdomain is configured via Cloudflare DNS → Vercel
 * 
 * Folder structure on CDN:
 * - /videos/hero/       - Hero background videos
 * - /videos/episodes/   - Episode video content
 * - /audio/artists/     - Artist audio tracks
 * - /images/hero/       - Hero background posters
 * - /images/episodes/   - Episode thumbnails
 * - /images/artists/    - Artist photos
 * - /images/thumbnails/ - General thumbnails
 */

export const MEDIA_CDN_BASE = "https://media.thehypecave.com";

export const mediaCdn = {
  // Video paths
  heroVideo: (filename: string) => `${MEDIA_CDN_BASE}/videos/hero/${filename}`,
  episodeVideo: (filename: string) => `${MEDIA_CDN_BASE}/videos/episodes/${filename}`,
  
  // Audio paths
  artistAudio: (filename: string) => `${MEDIA_CDN_BASE}/audio/artists/${filename}`,
  
  // Image paths
  heroImage: (filename: string) => `${MEDIA_CDN_BASE}/images/hero/${filename}`,
  episodeThumbnail: (filename: string) => `${MEDIA_CDN_BASE}/images/episodes/${filename}`,
  artistImage: (filename: string) => `${MEDIA_CDN_BASE}/images/artists/${filename}`,
  thumbnail: (filename: string) => `${MEDIA_CDN_BASE}/images/thumbnails/${filename}`,
};

export default mediaCdn;
