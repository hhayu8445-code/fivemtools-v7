# 🚀 Deploy ke Vercel + Supabase (RECOMMENDED)

## Kenapa Vercel + Supabase?

✅ **Gratis untuk production**
✅ **Auto-deploy dari GitHub**
✅ **PostgreSQL managed database**
✅ **Global CDN**
✅ **Zero configuration**
✅ **Automatic HTTPS**
✅ **Unlimited bandwidth**

## Step 1: Setup Supabase Database (5 menit)

### 1.1 Buat Project Supabase
1. Buka: https://supabase.com
2. Sign up / Login
3. Klik "New Project"
4. Isi:
   - Name: `fivemtools`
   - Database Password: (simpan ini!)
   - Region: Pilih terdekat
5. Tunggu ~2 menit sampai ready

### 1.2 Copy Connection String
1. Di dashboard Supabase, klik "Project Settings" (gear icon)
2. Klik "Database" di sidebar
3. Scroll ke "Connection string"
4. Pilih "URI" tab
5. Copy connection string (ganti [YOUR-PASSWORD] dengan password tadi)

Contoh:
```
postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres
```

## Step 2: Push ke GitHub (2 menit)

### 2.1 Buat Repository GitHub
1. Buka: https://github.com/new
2. Repository name: `fivemtools-v7`
3. Private atau Public (terserah)
4. Jangan centang "Initialize with README"
5. Klik "Create repository"

### 2.2 Push Code
```bash
cd "d:\New folder (17)"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - FiveM Tools V7"

# Add remote (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/fivemtools-v7.git

# Push
git branch -M main
git push -u origin main
```

## Step 3: Deploy ke Vercel (3 menit)

### 3.1 Import Project
1. Buka: https://vercel.com
2. Sign up / Login dengan GitHub
3. Klik "Add New..." → "Project"
4. Import repository `fivemtools-v7`
5. Klik "Import"

### 3.2 Configure Environment Variables
Di Vercel dashboard, tambahkan environment variables:

```env
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxxxx.supabase.co:5432/postgres
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=generate-dengan-command-dibawah
DISCORD_CLIENT_ID=1445650115447754933
DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3.3 Deploy
1. Klik "Deploy"
2. Tunggu ~2 menit
3. Done! ✅

## Step 4: Setup Database Schema (1 menit)

### 4.1 Install Vercel CLI (optional)
```bash
npm i -g vercel
vercel login
```

### 4.2 Push Schema ke Supabase
```bash
# Set DATABASE_URL di .env.local dengan Supabase connection string
pnpm db:push
pnpm db:seed
```

ATAU gunakan Vercel CLI:
```bash
vercel env pull .env.local
pnpm db:push
pnpm db:seed
```

## Step 5: Update Discord OAuth (1 menit)

1. Buka: https://discord.com/developers/applications/1445650115447754933/oauth2/general
2. Di "Redirects", tambahkan:
   ```
   https://your-project.vercel.app/api/auth/callback/discord
   ```
3. Save Changes

## Step 6: Test Production

1. Buka: `https://your-project.vercel.app`
2. Klik "Login"
3. Authorize Discord
4. Done! ✅

## Auto-Deploy Setup

Setiap kali push ke GitHub, Vercel akan auto-deploy:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Vercel auto-deploy dalam 2 menit!
```

## Monitoring

### Vercel Dashboard
- Deployments: https://vercel.com/dashboard
- Logs: Real-time logs
- Analytics: Traffic & performance

### Supabase Dashboard
- Database: https://supabase.com/dashboard
- Table Editor: Browse data
- SQL Editor: Run queries
- Logs: Database logs

## Troubleshooting

### Database Connection Error
```bash
# Test connection
psql "postgresql://postgres:[PASSWORD]@db.xxxxx.supabase.co:5432/postgres"

# Or use Supabase SQL Editor
```

### Build Error di Vercel
- Check build logs di Vercel dashboard
- Pastikan semua environment variables sudah diset
- Coba deploy ulang

### Discord OAuth Error
- Pastikan redirect URL sudah ditambahkan
- Check NEXTAUTH_URL di environment variables
- Pastikan NEXTAUTH_SECRET sudah diset

## Keuntungan Setup Ini

✅ **Free Tier Generous:**
- Vercel: Unlimited bandwidth, 100GB/month
- Supabase: 500MB database, 2GB bandwidth

✅ **Auto-Scaling:**
- Handle traffic spikes otomatis

✅ **Global CDN:**
- Fast loading worldwide

✅ **Zero Downtime:**
- Atomic deployments

✅ **Easy Rollback:**
- One-click rollback di Vercel

✅ **Database Backups:**
- Supabase auto-backup daily

## Custom Domain (Optional)

1. Beli domain (Namecheap, GoDaddy, dll)
2. Di Vercel: Settings → Domains
3. Add domain
4. Update DNS records
5. Update Discord OAuth redirect URL

## Production Checklist

- [x] Code pushed to GitHub
- [x] Vercel project created
- [x] Environment variables set
- [x] Database schema pushed
- [x] Discord OAuth updated
- [x] Test login flow
- [x] Monitor logs

## Status: READY FOR PRODUCTION! 🚀

Setup ini adalah **production-grade** dan digunakan oleh ribuan aplikasi besar!
