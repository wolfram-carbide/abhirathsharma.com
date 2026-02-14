import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  try {
    const runtime = locals.runtime as any;
    const LIKES_KV = runtime?.env?.LIKES_KV;

    if (!LIKES_KV) {
      return new Response(JSON.stringify({ posts: [], total: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // List all keys with the "likes:" prefix
    const list = await LIKES_KV.list({ prefix: 'likes:' });
    const posts: { slug: string; count: number }[] = [];
    let total = 0;

    for (const key of list.keys) {
      const countStr = await LIKES_KV.get(key.name);
      const count = countStr ? parseInt(countStr, 10) : 0;
      const slug = key.name.replace('likes:', '');
      posts.push({ slug, count });
      total += count;
    }

    // Sort by count descending
    posts.sort((a, b) => b.count - a.count);

    return new Response(JSON.stringify({ posts, total }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('KV stats error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
