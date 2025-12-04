# ✅ PUSHED TO GITHUB!

Repository: https://github.com/hhayu8445-code/fivemtools-v7

## Next: Deploy ke Vercel (5 menit)

### 1. Import Project
1. Buka: https://vercel.com/new
2. Login dengan GitHub
3. Import repository: `hhayu8445-code/fivemtools-v7`
4. Klik "Import"

### 2. Configure Project
- Framework Preset: **Next.js** (auto-detected)
- Root Directory: `./`
- Build Command: `prisma generate && pnpm build`
- Output Directory: `.next`

### 3. Add Environment Variables
Klik "Environment Variables" dan tambahkan:

```env
DATABASE_URL=postgresql://postgres:9ghSBLVxBXeYACEe@db.qpdapkzpcogkgnnfjdou.supabase.co:5432/postgres

NEXT_PUBLIC_SUPABASE_URL=https://qpdapkzpcogkgnnfjdou.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZGFwa3pwY29na2dubmZqZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTkyMDEsImV4cCI6MjA4MDM3NTIwMX0.x58mZrrexN_ruWjjy-Gq6wRlL21uTgANzxWuZwmu2A4

NEXTAUTH_URL=https://fivemtools.net

NEXTAUTH_SECRET=generate-baru-dengan-command-dibawah

DISCORD_CLIENT_ID=1445650115447754933

DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```
Atau gunakan: https://generate-secret.vercel.app/32

### 4. Deploy
Klik "Deploy" → Tunggu 2-3 menit

### 5. Setup Custom Domain
Setelah deploy sukses:
1. Project Settings → Domains
2. Add Domain: `fivemtools.net`
3. Add Domain: `www.fivemtools.net`
4. Update DNS di domain registrar:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### 6. Update Discord OAuth
https://discord.com/developers/applications/1445650115447754933/oauth2/general

Add redirects:
```
https://fivemtools.net/api/auth/callback/discord
https://www.fivemtools.net/api/auth/callback/discord
```

### 7. Test Production
```
https://fivemtools.net
```

## Auto-Deploy Active! 🚀

Setiap push ke GitHub = auto-deploy:
```bash
git add .
git commit -m "Update"
git push
```

## Status: READY TO DEPLOY ON VERCEL! ✅
