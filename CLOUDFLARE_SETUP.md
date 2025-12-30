# Cloudflare KV Setup Guide

This site uses Cloudflare KV for persistent storage of article likes.

## Setup Steps

### 1. Create KV Namespace

Using Wrangler CLI:
```bash
wrangler kv:namespace create "LIKES_KV"
```

This will output an ID like:
```
id = "abc123def456..."
```

### 2. Update wrangler.toml

Replace the placeholder ID in `wrangler.toml`:
```toml
[[kv_namespaces]]
binding = "LIKES_KV"
id = "your-actual-kv-namespace-id"
```

### 3. Configure Cloudflare Pages

In your Cloudflare Pages dashboard:

1. Go to **Settings** → **Functions**
2. Scroll to **KV Namespace Bindings**
3. Add a new binding:
   - Variable name: `LIKES_KV`
   - KV namespace: Select the namespace you created

### 4. Deploy

Once configured, deploy your site. The likes counter will now persist across deployments.

## Local Development

For local development, the API will return count 0 as a fallback when KV is not available. To test with KV locally:

```bash
wrangler pages dev dist --kv LIKES_KV
```

## Notes

- Likes are stored with key format: `likes:{article-slug}`
- The system gracefully falls back to count 0 if KV is unavailable
- User's like status is tracked in browser localStorage
