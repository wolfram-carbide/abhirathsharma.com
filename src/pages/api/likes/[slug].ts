import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

const LIKES_FILE = path.join(process.cwd(), 'data', 'likes.json');

interface LikesData {
  [slug: string]: number;
}

async function ensureDataFile() {
  try {
    await fs.mkdir(path.dirname(LIKES_FILE), { recursive: true });
    try {
      await fs.access(LIKES_FILE);
    } catch {
      await fs.writeFile(LIKES_FILE, JSON.stringify({}));
    }
  } catch (error) {
    console.error('Error ensuring data file:', error);
  }
}

async function getLikes(): Promise<LikesData> {
  await ensureDataFile();
  try {
    const data = await fs.readFile(LIKES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveLikes(likes: LikesData): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(LIKES_FILE, JSON.stringify(likes, null, 2));
}

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const likes = await getLikes();
  const count = likes[slug] || 0;

  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ params, request }) => {
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

    const likes = await getLikes();
    let count = likes[slug] || 0;

    if (action === 'like') {
      count += 1;
    } else if (action === 'unlike' && count > 0) {
      count -= 1;
    }

    likes[slug] = count;
    await saveLikes(likes);

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
