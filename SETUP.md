# Quick Setup Guide

## 1. Install Dependencies
```bash
pnpm install
```

## 2. Start Database
```bash
docker-compose up -d
```

## 3. Setup Environment
Copy `.env.example` to `.env.local` and fill in:
- Generate NEXTAUTH_SECRET: `openssl rand -base64 32`
- Get Discord credentials from https://discord.com/developers/applications

## 4. Initialize Database
```bash
pnpm db:push
pnpm db:seed
```

## 5. Run Development Server
```bash
pnpm dev
```

Open http://localhost:3000

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm db:push` - Push schema to database
- `pnpm db:seed` - Seed initial data
- `pnpm db:studio` - Open Prisma Studio

## Features Implemented

✅ **Authentication**
- Discord OAuth login
- Protected routes
- Session management

✅ **Database**
- PostgreSQL with Prisma
- Full schema for users, assets, forum
- Seeding scripts

✅ **API Routes**
- Assets CRUD with search
- Forum threads & replies
- User profiles
- Real-time stats
- Rate limiting
- Input validation

✅ **Security**
- Rate limiting on POST endpoints
- Zod validation
- Protected API routes
- CSRF protection via NextAuth

✅ **Performance**
- Image optimization
- SWR for data fetching
- Real-time updates every 10-30s
- Database indexing

✅ **Production Ready**
- Docker support
- Health check endpoint
- Error handling
- TypeScript strict mode
- Environment variables

## Troubleshooting

**Database connection failed:**
- Ensure PostgreSQL is running: `docker-compose ps`
- Check DATABASE_URL in `.env.local`

**Discord login not working:**
- Verify redirect URL in Discord app settings
- Check DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET

**Build errors:**
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && pnpm install`
