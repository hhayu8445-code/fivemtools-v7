# 🚀 DEPLOY NOW - fivemtools.net

## ✅ Everything Ready!

- [x] Code complete
- [x] Supabase configured
- [x] Discord OAuth ready
- [x] Domain: fivemtools.net
- [x] Environment variables set

## Deploy Steps (10 Menit)

### 1. Set Supabase Password (30 detik)
Edit `.env.local`, ganti `[YOUR_PASSWORD]` dengan password Supabase Anda.

### 2. Push Database Schema (1 menit)
```bash
pnpm db:push
pnpm db:seed
```

### 3. Test Local (30 detik)
```bash
pnpm dev
```
Buka: http://localhost:3000

### 4. Push to GitHub (2 menit)
```bash
git init
git add .
git commit -m "FiveM Tools V7 - Production Ready"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main
```

### 5. Deploy to Vercel (3 menit)

**5.1 Import Project**
- https://vercel.com → Import from GitHub
- Select `fivemtools-v7`

**5.2 Add Environment Variables**
```env
DATABASE_URL=postgresql://postgres:[YOUR_PASSWORD]@db.qpdapkzpcogkgnnfjdou.supabase.co:5432/postgres
NEXT_PUBLIC_SUPABASE_URL=https://qpdapkzpcogkgnnfjdou.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZGFwa3pwY29na2dubmZqZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTkyMDEsImV4cCI6MjA4MDM3NTIwMX0.x58mZrrexN_ruWjjy-Gq6wRlL21uTgANzxWuZwmu2A4
NEXTAUTH_URL=https://fivemtools.net
NEXTAUTH_SECRET=run: openssl rand -base64 32
DISCORD_CLIENT_ID=1445650115447754933
DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
```

**5.3 Deploy**
Klik "Deploy" → Tunggu 2 menit

### 6. Setup Domain (2 menit)

**6.1 Vercel**
- Settings → Domains
- Add: `fivemtools.net`
- Add: `www.fivemtools.net`

**6.2 DNS (di domain registrar)**
```
A Record:
Name: @
Value: 76.76.21.21

CNAME:
Name: www
Value: cname.vercel-dns.com
```

### 7. Discord OAuth (1 menit)
https://discord.com/developers/applications/1445650115447754933/oauth2/general

Add redirects:
```
https://fivemtools.net/api/auth/callback/discord
https://www.fivemtools.net/api/auth/callback/discord
```

### 8. Test Production ✅
```
https://fivemtools.net
```

## Quick Commands

```bash
# Set password di .env.local first!

# Setup database
pnpm db:push
pnpm db:seed

# Test local
pnpm dev

# Push to GitHub
git init
git add .
git commit -m "Production ready"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main

# Then deploy on Vercel dashboard
```

## Checklist

- [ ] Password set di `.env.local`
- [ ] `pnpm db:push` success
- [ ] `pnpm db:seed` success
- [ ] Local test working
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Domain configured
- [ ] Discord OAuth updated
- [ ] Production test success

## Support

- **Supabase:** https://supabase.com/dashboard/project/qpdapkzpcogkgnnfjdou
- **Vercel:** https://vercel.com/dashboard
- **Discord:** https://discord.com/developers/applications/1445650115447754933

## Status: READY TO DEPLOY! 🚀

Total time: ~10 minutes to production!
