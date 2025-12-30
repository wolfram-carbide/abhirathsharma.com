import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Access Cloudflare KV namespace
    const runtime = locals.runtime as any;
    const LIKES_KV = runtime?.env?.LIKES_KV;

    if (!LIKES_KV) {
      // Fallback for local development
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const countStr = await LIKES_KV.get(`likes:${slug}`);
    const count = countStr ? parseInt(countStr, 10) : 0;

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('KV read error:', error);
    return new Response(JSON.stringify({ count: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ params, request, locals }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { action } = body;

    // Access Cloudflare KV namespace
    const runtime = locals.runtime as any;
    const LIKES_KV = runtime?.env?.LIKES_KV;

    if (!LIKES_KV) {
      // Fallback for local development
      return new Response(JSON.stringify({ count: 0 }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const countStr = await LIKES_KV.get(`likes:${slug}`);
    let count = countStr ? parseInt(countStr, 10) : 0;

    if (action === 'like') {
      count += 1;
    } else if (action === 'unlike' && count > 0) {
      count -= 1;
    }

    await LIKES_KV.put(`likes:${slug}`, count.toString());

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('KV write error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update likes' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
