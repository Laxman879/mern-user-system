@echo off
echo 🚀 Deploying MERN User System to Vercel...

echo 📦 Deploying Backend...
cd backend
call vercel --prod

echo 📝 Please copy your backend URL and update frontend config
echo Backend deployed! Update VITE_API_URL in frontend/.env.production

echo 📦 Deploying Frontend...
cd ../frontend
call vercel --prod

echo ✅ Deployment complete!
echo 🔧 Don't forget to:
echo 1. Set environment variables in Vercel dashboard
echo 2. Update CORS origin in backend with frontend URL