# ⚡ Quick Deploy Guide (10 Menit)

## 1️⃣ Supabase (3 menit)

1. Buka: https://supabase.com → Sign up
2. New Project → Name: `fivemtools`
3. Copy connection string dari Settings → Database
4. Simpan connection string

## 2️⃣ GitHub (2 menit)

```bash
cd "d:\New folder (17)"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main
```

## 3️⃣ Vercel (3 menit)

1. Buka: https://vercel.com → Login with GitHub
2. Import repository `fivemtools-v7`
3. Add Environment Variables:
   ```
   DATABASE_URL=your-supabase-connection-string
   NEXTAUTH_URL=https://your-project.vercel.app
   NEXTAUTH_SECRET=run: openssl rand -base64 32
   DISCORD_CLIENT_ID=1445650115447754933
   DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
   ```
4. Deploy

## 4️⃣ Database Setup (1 menit)

```bash
# Set DATABASE_URL di .env.local dengan Supabase connection string
pnpm db:push
pnpm db:seed
```

## 5️⃣ Discord OAuth (1 menit)

1. https://discord.com/developers/applications/1445650115447754933/oauth2/general
2. Add redirect: `https://your-project.vercel.app/api/auth/callback/discord`
3. Save

## ✅ Done!

Buka: `https://your-project.vercel.app`

---

**Total: 10 menit dari zero ke production!** 🚀
