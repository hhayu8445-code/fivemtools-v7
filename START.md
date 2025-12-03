# 🚀 Start Guide - FiveM Tools V7

## Discord OAuth Sudah Dikonfigurasi ✅

Credentials Discord OAuth sudah disetup:
- Client ID: `1445650115447754933`
- Client Secret: Configured
- Scopes: `identify email guilds guilds.members.read`

## Langkah Cepat (5 Menit)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Database
```bash
docker-compose up -d
```
Tunggu 10 detik sampai PostgreSQL ready.

### 3. Setup Database
```bash
pnpm db:push
pnpm db:seed
```

### 4. Start Development Server
```bash
pnpm dev
```

### 5. Setup Discord OAuth Redirect URL

**PENTING:** Tambahkan redirect URL ini di Discord Developer Portal:

1. Buka: https://discord.com/developers/applications/1445650115447754933/oauth2/general
2. Di bagian "Redirects", tambahkan:
   ```
   http://localhost:3000/api/auth/callback/discord
   ```
3. Klik "Save Changes"

### 6. Test Login

1. Buka: http://localhost:3000
2. Klik tombol "Login" (Discord button)
3. Authorize aplikasi
4. Anda akan login otomatis

## ✅ Fitur yang Sudah Berfungsi

### Authentication
- ✅ Discord OAuth login dengan full permissions
- ✅ Session management
- ✅ User profile dari Discord (username, email, avatar, guilds)
- ✅ Auto-create user di database saat login pertama

### Database
- ✅ PostgreSQL dengan Docker
- ✅ Prisma ORM
- ✅ Auto-migration
- ✅ Seed data (forum categories)

### API Endpoints
- ✅ `GET /api/auth/session` - Check login status
- ✅ `GET /api/stats` - Platform statistics
- ✅ `GET /api/assets` - Browse assets
- ✅ `GET /api/forum/threads` - Forum threads
- ✅ `GET /api/search?q=query` - Global search
- ✅ `GET /api/health` - Health check

### Protected Routes
- ✅ `/dashboard` - Requires login
- ✅ `/admin` - Requires login
- ✅ Auto redirect ke home jika belum login

### Real-time Features
- ✅ Stats update setiap 10 detik
- ✅ Assets update setiap 30 detik
- ✅ Live search

## 🔧 Troubleshooting

### Database tidak connect
```bash
# Restart database
docker-compose down
docker-compose up -d

# Wait 10 seconds, then:
pnpm db:push
```

### Discord login error "redirect_uri_mismatch"
- Pastikan sudah tambahkan `http://localhost:3000/api/auth/callback/discord` di Discord Developer Portal
- Restart dev server: `Ctrl+C` lalu `pnpm dev`

### Port 3000 sudah digunakan
```bash
# Gunakan port lain
PORT=3001 pnpm dev
# Jangan lupa update redirect URL di Discord jadi :3001
```

## 📊 Test Endpoints

```bash
# Health check
curl http://localhost:3000/api/health

# Stats
curl http://localhost:3000/api/stats

# Session (setelah login)
curl http://localhost:3000/api/auth/session
```

## 🎯 Next Steps

1. Login dengan Discord
2. Browse assets di `/scripts`, `/vehicles`, `/mlo`, `/clothing`
3. Akses forum di `/forum`
4. Cek dashboard di `/dashboard`
5. Admin panel di `/admin` (jika admin)

## 📝 Notes

- Database akan persist di Docker volume
- Session berlaku 30 hari
- Rate limit: 5-10 requests per minute untuk POST
- Semua data user Discord tersimpan di database

## 🚀 Production Deployment

Lihat `DEPLOYMENT.md` untuk deploy ke:
- Vercel (recommended)
- Railway
- Docker
- VPS

---

**Status:** ✅ READY TO USE - Semua fitur sudah berfungsi!
