/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://codestrup.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Disable index sitemap generation
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://codestrup.in'}/sitemap-0.xml`,
    ],
  },
  outDir: 'public',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    const staticPaths = [
      '/internship',
      '/learning_Center',
      '/achievement',
      '/blogs',
      '/contact',
      '/faq',
      '/verify-certificate',
      '/privacy-policy',
      '/terms-condition',
      '/refund-policy',
      '/disclaimer'
    ];

    return staticPaths.map(path => ({
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};

module.exports = config;