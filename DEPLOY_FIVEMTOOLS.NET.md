# 🚀 Deploy ke fivemtools.net

## Domain: fivemtools.net ✅

## Step 1: Supabase Database (3 menit)

1. https://supabase.com → New Project
2. Name: `fivemtools`
3. Copy connection string
4. Simpan untuk step 3

## Step 2: Push ke GitHub (2 menit)

```bash
cd "d:\New folder (17)"
git init
git add .
git commit -m "FiveM Tools V7 - Production"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main
```

## Step 3: Deploy ke Vercel (3 menit)

### 3.1 Import Project
1. https://vercel.com → Import from GitHub
2. Select `fivemtools-v7`

### 3.2 Environment Variables
```env
DATABASE_URL=your-supabase-connection-string
NEXTAUTH_URL=https://fivemtools.net
NEXTAUTH_SECRET=run: openssl rand -base64 32
DISCORD_CLIENT_ID=1445650115447754933
DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
```

### 3.3 Deploy
Klik "Deploy" → Tunggu 2 menit

## Step 4: Setup Custom Domain (2 menit)

### 4.1 Di Vercel
1. Project Settings → Domains
2. Add Domain: `fivemtools.net`
3. Add Domain: `www.fivemtools.net`

### 4.2 Update DNS (di domain registrar)
Tambahkan records:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Tunggu 5-10 menit untuk DNS propagation.

## Step 5: Setup Database (1 menit)

```bash
# Set DATABASE_URL di .env.local dengan Supabase connection string
pnpm db:push
pnpm db:seed
```

## Step 6: Discord OAuth (1 menit)

1. https://discord.com/developers/applications/1445650115447754933/oauth2/general
2. Add Redirects:
   ```
   https://fivemtools.net/api/auth/callback/discord
   https://www.fivemtools.net/api/auth/callback/discord
   ```
3. Save Changes

## Step 7: Test Production ✅

1. Buka: https://fivemtools.net
2. Klik "Login"
3. Authorize Discord
4. Done! 🎉

## Auto-Deploy

Setiap push ke GitHub = auto-deploy:

```bash
git add .
git commit -m "Update"
git push
# Auto-deploy dalam 2 menit!
```

## URLs

- **Production:** https://fivemtools.net
- **WWW:** https://www.fivemtools.net
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Dashboard:** https://supabase.com/dashboard
- **Discord OAuth:** https://discord.com/developers/applications/1445650115447754933

## Monitoring

- **Health:** https://fivemtools.net/api/health
- **Stats:** https://fivemtools.net/api/stats
- **Vercel Logs:** Real-time di dashboard
- **Supabase Logs:** Database logs

## SSL Certificate

✅ Vercel auto-provision SSL certificate
✅ HTTPS enforced automatically
✅ Auto-renewal

## Status: READY! 🚀

Total waktu: ~12 menit dari zero ke production di fivemtools.net!
