# Arias ME

Personal website built with Statamic (CMS) and Next.js (frontend).

![Preview](./frontend/preview.png)

## Structure

- `/frontend` - Next.js frontend
- `/backend` - Statamic CMS

## Development

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
composer install
composer run dev
```

Open [http://localhost:8000/cp](http://localhost:8000/cp) for the admin panel.

### Environment

Copy the example env files and configure:

```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

Set `NEXT_PUBLIC_USE_MOCK_DATA=false` in frontend to use real API data.

## Tech Stack

- **CMS:** Statamic 6, GraphQL API
- **Frontend:** Next.js 16, TypeScript, TailwindCSS 4
- **UI:** shadcn/ui, Geist Mono
- **Hosting:** Vercel (frontend), Laravel Forge (backend)
