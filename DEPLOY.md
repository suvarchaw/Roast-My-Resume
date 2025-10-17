# 🚀 Deployment Guide

## Deploy to Netlify (Recommended)

### Step 1: Push to GitHub ✅
Already done! Your code is at: https://github.com/suvarchaw/Roast-My-Resume

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** as your Git provider
5. Select the repository: **`suvarchaw/Roast-My-Resume`**

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Base directory:** (leave empty)

### Step 4: Add Environment Variable

Click **"Add environment variables"** and add:

```
Key: GEMINI_API_KEY
Value: AIzaSyBJ_HFVY9jYAvwa0MBKJcLzMccdiIXXbQE
```

### Step 5: Deploy!

Click **"Deploy site"**

Your site will be live in ~2 minutes at a URL like:
`https://random-name-123456.netlify.app`

### Step 6: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `roast-my-resume.com`)
4. Follow DNS instructions

---

## Alternative: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts and add your `GEMINI_API_KEY` in the Vercel dashboard.

---

## Troubleshooting

**Build fails?**
- Make sure Node version is 18+
- Check that all dependencies are in `package.json`

**API not working?**
- Verify `GEMINI_API_KEY` is set in environment variables
- Check the API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)

**Styles broken?**
- Clear cache and redeploy
- Make sure TailwindCSS is building correctly

---

Need help? Check the [Netlify docs](https://docs.netlify.com) or [Next.js deployment guide](https://nextjs.org/docs/deployment)
