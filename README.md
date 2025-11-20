# BlitzTask - Frontend

A modern task management application built with Next.js, TypeScript, Tailwind CSS, and SWR for data fetching.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **SWR** - Data fetching and caching
- **Axios** - HTTP client

## Features

- ✅ Create, read, update, and delete tasks
- ✅ Toggle task status (pending/completed)
- ✅ Real-time UI updates with SWR
- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Task statistics (total, pending, completed)
- ✅ Organized task display (pending/completed sections)


## Screenshots

| Feature             | Preview                                                               |
| -----------------   | -----------------------------------------------------------------     |
| **Landing Page**    | ![Landing](/public/screenshots/blitztask_landing_page.png)            |
| **Task View Page**  | ![TaskView Page](/public/screenshots/blitztask_taskview_page.png)     |


## Setup Instructions

### 1. Create Next.js Project

```bash
npx create-next-app@latest taskapp-frontend
# Choose: TypeScript (Yes), Tailwind CSS (Yes), App Router (Yes)
```

### 2. Install Dependencies

```bash
cd taskapp-frontend
npm install swr axios
```

### 3. Project Structure

Create the following folders and files:

```
taskapp-frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
├── hooks/
│   └── useTasks.ts
├── lib/
│   └── api.ts
├── types/
│   └── task.ts
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 4. Environment Setup

Create `.env.local` in the root:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Important:** Make sure your backend is running on port 5000!

### 5. Run the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

Visit `http://localhost:3000`

## Project Structure Explained

### `types/task.ts`
TypeScript interfaces for Task data and API inputs

### `lib/api.ts`
Axios client and API functions for all CRUD operations

### `hooks/useTasks.ts`
Custom SWR hook for data fetching with optimistic updates

### `components/`
- **TaskForm**: Form to create new tasks
- **TaskItem**: Individual task card with toggle and delete
- **TaskList**: Container displaying all tasks with stats

### `app/page.tsx`
Main page component that brings everything together

## Key Features

### SWR Data Fetching
- Automatic caching and revalidation
- Optimistic UI updates
- Error handling
- Loading states

### Responsive Design
- Mobile-first approach
- Clean, modern UI with Tailwind CSS
- Smooth transitions and hover effects

### Type Safety
- Full TypeScript coverage
- Type-safe API calls
- Interface-driven development

## API Integration

The app connects to the backend API at the URL specified in `.env.local`.

Endpoints used:
- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create task
- `PATCH /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL`: Your deployed backend URL
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Deploy to a global CDN
- Provide a live URL

### Update API URL for Production

After deploying your backend, update `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

## Troubleshooting

### "Failed to connect to server"
- Make sure backend is running on `http://localhost:5000`
- Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Verify backend CORS is configured to allow frontend origin

### Tasks not loading
- Open browser console (F12) to check for errors
- Verify backend API is accessible
- Check network tab for failed requests

### SWR not updating
- Make sure you're using the `mutate` function from the hook
- Check that optimistic updates are properly configured

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

## License

MIT

---

**Built  by Harsh Dahiya Associated with Cent Stage By Gulsher Kooner 💖**

⭐ **If you find this project useful, please give it a star!** 