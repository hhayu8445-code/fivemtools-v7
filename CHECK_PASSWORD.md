# ⚠️ Password Authentication Failed

Password `Arunk@123456` tidak bisa connect ke Supabase.

## Solusi:

### 1. Cek Password di Supabase Dashboard
1. Buka: https://supabase.com/dashboard/project/qpdapkzpcogkgnnfjdou/settings/database
2. Scroll ke "Connection string"
3. Klik "URI" tab
4. Copy full connection string (sudah include password yang benar)
5. Paste ke `.env.local` sebagai `DATABASE_URL`

### 2. Atau Reset Password
1. Di halaman yang sama, klik "Reset database password"
2. Copy password baru
3. Update `.env.local` dengan password baru

### 3. Atau Gunakan Connection Pooler
Supabase punya 2 mode connection:
- **Direct:** Port 5432 (untuk migration)
- **Pooler:** Port 6543 (untuk production)

Coba gunakan connection pooler:
```
postgresql://postgres.qpdapkzpcogkgnnfjdou:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

## Next Steps:
1. Dapatkan connection string yang benar dari Supabase
2. Update `.env.local`
3. Run `pnpm db:push`

Atau kasih saya connection string lengkap dari Supabase dashboard!
