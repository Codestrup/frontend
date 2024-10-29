
import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codestrup.in'

  // Your dynamic URLs
  const dynamicPaths = [
    {
      loc: `${baseUrl}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
  ]

  // If you have dynamic content from a database, add them here
  // const blogPosts = await fetchBlogPosts()
  // dynamicPaths.push(...blogPosts.map(post => ({
  //   loc: `${baseUrl}/blogs/${post.slug}`,
  //   lastmod: post.updatedAt,
  //   changefreq: 'weekly',
  //   priority: 0.7,
  // })))

  return getServerSideSitemap(dynamicPaths)
}