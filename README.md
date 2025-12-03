# FiveM Tools V7 - Production Ready

🌐 **Live:** https://fivemtools.net

Premium FiveM resource hub with Discord authentication, real-time data, and community forum.

## ⚡ Quick Deploy (10 Minutes)

### 1. Supabase Database
1. Create account: https://supabase.com
2. New Project → Copy connection string
3. Save for step 3

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/fivemtools-v7.git
git push -u origin main
```

### 3. Deploy to Vercel
1. Import from GitHub: https://vercel.com
2. Add environment variables:
   ```
   DATABASE_URL=your-supabase-connection-string
   NEXTAUTH_URL=https://fivemtools.net
   NEXTAUTH_SECRET=run: openssl rand -base64 32
   DISCORD_CLIENT_ID=1445650115447754933
   DISCORD_CLIENT_SECRET=-vUgyISAt3yvIpFUOh68I5XYB4QLGTIc
   ```
3. Deploy

### 4. Setup Database
```bash
pnpm db:push
pnpm db:seed
```

### 5. Update Discord OAuth
Add redirect: `https://fivemtools.net/api/auth/callback/discord`

## ✅ Features

- 🔐 Discord OAuth authentication
- 💾 PostgreSQL database with Prisma
- 🔄 Real-time data with SWR
- 🔍 Global search
- 🛡️ Rate limiting & validation
- 📊 Analytics & statistics
- 💬 Community forum
- 🎨 Modern UI with Shadcn

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** NextAuth.js
- **UI:** Shadcn/ui + Tailwind CSS
- **Deployment:** Vercel

## 📚 Documentation

- [Quick Deploy Guide](QUICK_DEPLOY.md)
- [Vercel + Supabase Setup](VERCEL_SUPABASE_DEPLOYMENT.md)
- [Full Setup Guide](SETUP.md)
- [Production Checklist](PRODUCTION_CHECKLIST.md)

## 🚀 Local Development

```bash
# Install dependencies
pnpm install

# Setup database (Supabase or local PostgreSQL)
pnpm db:push
pnpm db:seed

# Run development server
pnpm dev
```

## 📝 Environment Variables

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"
DISCORD_CLIENT_ID="your-client-id"
DISCORD_CLIENT_SECRET="your-client-secret"
```

## 🌐 API Endpoints

- `GET /api/health` - Health check
- `GET /api/stats` - Platform statistics
- `GET /api/assets` - Browse assets
- `GET /api/forum/threads` - Forum threads
- `GET /api/search?q=query` - Global search
- `POST /api/assets` - Create asset (auth required)

## 📄 License

MIT

## 🤝 Contributing

Pull requests welcome!

---

**Status:** ✅ Production Ready | **Deploy Time:** 10 minutes
