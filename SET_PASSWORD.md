# ⚠️ SET SUPABASE PASSWORD

## Langkah Cepat:

1. Buka Supabase dashboard: https://supabase.com/dashboard/project/qpdapkzpcogkgnnfjdou/settings/database

2. Copy password Supabase Anda

3. Edit file `.env.local`, ganti `[YOUR_PASSWORD]` dengan password Anda

4. Save file

5. Run:
```bash
pnpm db:push
pnpm db:seed
pnpm dev
```

## Atau gunakan connection string langsung:

Jika tidak tahu password, buat connection string baru:
1. Supabase → Settings → Database
2. Klik "Reset database password"
3. Copy new password
4. Update `.env.local`

## Status: Waiting for password ⏳
