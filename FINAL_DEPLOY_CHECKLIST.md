# ✅ Final Deploy Checklist - fivemtools.net

## Pre-Deploy

- [x] Code complete & tested
- [x] Dependencies installed
- [x] Environment variables configured
- [x] Discord OAuth credentials set
- [x] Domain ready: fivemtools.net

## Deploy Steps

### 1. Supabase
- [ ] Create project at https://supabase.com
- [ ] Copy connection string
- [ ] Save for Vercel

### 2. GitHub
```bash
git init
git add .
git commit -m "FiveM Tools V7 - Production"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main
```
- [ ] Repository created
- [ ] Code pushed

### 3. Vercel
- [ ] Import from GitHub
- [ ] Add environment variables:
  ```
  DATABASE_URL=supabase-connection-string
  NEXTAUTH_URL=https://fivemtools.net
  NEXTAUTH_SECRET=generated-secret
  DISCORD_CLIENT_ID=1445650115447754933
  DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
  ```
- [ ] Deploy successful

### 4. Custom Domain
- [ ] Add fivemtools.net to Vercel
- [ ] Add www.fivemtools.net to Vercel
- [ ] Update DNS records:
  - A Record: @ → 76.76.21.21
  - CNAME: www → cname.vercel-dns.com
- [ ] Wait for DNS propagation (5-10 min)
- [ ] SSL certificate issued

### 5. Database
```bash
pnpm db:push
pnpm db:seed
```
- [ ] Schema pushed to Supabase
- [ ] Initial data seeded

### 6. Discord OAuth
- [ ] Add redirect: https://fivemtools.net/api/auth/callback/discord
- [ ] Add redirect: https://www.fivemtools.net/api/auth/callback/discord
- [ ] Save changes

## Post-Deploy Testing

- [ ] https://fivemtools.net loads
- [ ] https://www.fivemtools.net redirects
- [ ] SSL certificate valid (HTTPS)
- [ ] Health check: https://fivemtools.net/api/health
- [ ] Stats API: https://fivemtools.net/api/stats
- [ ] Discord login works
- [ ] User profile displays
- [ ] Assets load
- [ ] Forum works
- [ ] Search works

## Monitoring Setup

- [ ] Vercel Analytics enabled
- [ ] Error tracking active
- [ ] Database backups enabled (Supabase)
- [ ] Uptime monitoring (optional)

## Documentation

- [ ] README.md updated with live URL
- [ ] Deployment guide created
- [ ] Environment variables documented
- [ ] API endpoints documented

## Security

- [ ] Environment variables in Vercel only
- [ ] .env files in .gitignore
- [ ] HTTPS enforced
- [ ] Rate limiting active
- [ ] Input validation working

## Performance

- [ ] Images optimized
- [ ] CDN active (Vercel)
- [ ] Database indexed
- [ ] Caching configured

## Final Check

- [ ] All features working
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading (<2s)
- [ ] SEO optimized

## Go Live! 🚀

- [ ] Announce on Discord
- [ ] Share on social media
- [ ] Monitor first 24 hours
- [ ] Collect feedback

---

**Domain:** https://fivemtools.net
**Status:** READY FOR PRODUCTION! ✅
