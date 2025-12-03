# Production Deployment Guide

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Discord OAuth Application

## Step 1: Database Setup

### Option A: Local PostgreSQL
```bash
# Start PostgreSQL with Docker
docker-compose up -d

# Or install PostgreSQL manually
# Windows: https://www.postgresql.org/download/windows/
# Create database: fivemtools
```

### Option B: Cloud Database (Recommended for Production)
- **Vercel Postgres**: https://vercel.com/storage/postgres
- **Supabase**: https://supabase.com
- **Railway**: https://railway.app
- **Neon**: https://neon.tech

## Step 2: Environment Variables

Create `.env.local` for development:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fivemtools"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
DISCORD_CLIENT_ID="your-discord-client-id"
DISCORD_CLIENT_SECRET="your-discord-client-secret"
```

## Step 3: Discord OAuth Setup

1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Go to OAuth2 → General
4. Add Redirect URL:
   - Development: `http://localhost:3000/api/auth/callback/discord`
   - Production: `https://yourdomain.com/api/auth/callback/discord`
5. Copy Client ID and Client Secret to `.env.local`

## Step 4: Install & Setup

```bash
# Install dependencies
pnpm install

# Push database schema
pnpm db:push

# Seed initial data
pnpm db:seed

# Run development server
pnpm dev
```

## Step 5: Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Step 6: Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Vercel Environment Variables:
```
DATABASE_URL=your-postgres-connection-string
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-secret-key
DISCORD_CLIENT_ID=your-client-id
DISCORD_CLIENT_SECRET=your-client-secret
```

## Alternative Deployment Options

### Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Docker
```bash
# Build image
docker build -t fivemtools .

# Run container
docker run -p 3000:3000 --env-file .env.production fivemtools
```

## Post-Deployment Checklist

- [ ] Database connected and migrated
- [ ] Discord OAuth configured with production URL
- [ ] Environment variables set
- [ ] Health check endpoint working: `/api/health`
- [ ] Test authentication flow
- [ ] Test asset creation
- [ ] Test forum functionality
- [ ] Monitor error logs

## Monitoring

- Health Check: `GET /api/health`
- Database: Use Prisma Studio `pnpm db:studio`
- Logs: Check Vercel/Railway dashboard

## Security Notes

1. Never commit `.env.local` or `.env.production`
2. Use strong NEXTAUTH_SECRET (32+ characters)
3. Enable HTTPS in production
4. Set up CORS if needed
5. Monitor rate limits
6. Regular database backups

## Troubleshooting

### Database Connection Issues
```bash
# Test connection
pnpm db:studio
```

### Build Errors
```bash
# Clear cache
rm -rf .next
pnpm build
```

### Authentication Issues
- Verify Discord OAuth redirect URLs
- Check NEXTAUTH_URL matches deployment URL
- Ensure NEXTAUTH_SECRET is set
