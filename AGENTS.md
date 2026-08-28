# Project instructions

## Canonical repository

- The canonical source repository is `https://github.com/wolfram-carbide/abhirathsharma.com`.
- Treat the workspace as a checkout of that repository. If its Git remote or history is missing, restore or re-clone the canonical repository before editing or publishing; do not deploy an unrelated local snapshot.

## Publishing workflow

- Make website changes in the canonical repository and publish them through its existing GitHub-to-Cloudflare workflow.
- Before publishing, inspect the repository's default/production branch and existing deployment configuration. Do not guess the production branch.
- Commit and push only files belonging to the requested change. Let Cloudflare Pages deploy from GitHub, then verify the result at `https://abhirathsharma.com`.
- Do not run `wrangler pages deploy` unless the user explicitly requests a direct Cloudflare deployment or the GitHub deployment workflow is unavailable and the user approves the fallback.

## Validation

- Run `npm run build` before publishing.
