# Direct Vercel Deployment Instructions

## Step 1: Login to Vercel
```bash
vercel login
```
Follow the authentication process.

## Step 2: Deploy Backend
```bash
cd backend
vercel --prod
```
- Choose "Link to existing project?" → No
- Project name: `mern-user-system-backend`
- Directory: `./` (current)
- Override settings? → No

**Copy the deployment URL** (e.g., `https://mern-user-system-backend.vercel.app`)

## Step 3: Set Backend Environment Variables
Go to Vercel Dashboard → Project → Settings → Environment Variables:
- `MONGODB_URI`: Your MongoDB connection string
- `ACCESS_TOKEN_SECRET`: Your JWT secret
- `REFRESH_TOKEN_SECRET`: Your refresh token secret  
- `NODE_ENV`: `production`

## Step 4: Update Frontend Config
Update `frontend/.env.production`:
```
VITE_API_URL=https://your-backend-url.vercel.app
```

## Step 5: Deploy Frontend
```bash
cd ../frontend
vercel --prod
```
- Choose "Link to existing project?" → No
- Project name: `mern-user-system-frontend`
- Directory: `./` (current)
- Override settings? → No

## Step 6: Update CORS
Update backend `server.js` CORS origin with your frontend URL and redeploy backend.

## Quick Commands:
```bash
# Login
vercel login

# Deploy backend
cd backend && vercel --prod

# Deploy frontend  
cd ../frontend && vercel --prod
```