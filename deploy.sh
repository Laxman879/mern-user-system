#!/bin/bash

echo "🚀 Deploying MERN User System to Vercel..."

# Deploy Backend
echo "📦 Deploying Backend..."
cd backend
vercel --prod

# Get backend URL
echo "📝 Please copy your backend URL and update frontend config"
echo "Backend deployed! Update VITE_API_URL in frontend/.env.production"

# Deploy Frontend
echo "📦 Deploying Frontend..."
cd ../frontend
vercel --prod

echo "✅ Deployment complete!"
echo "🔧 Don't forget to:"
echo "1. Set environment variables in Vercel dashboard"
echo "2. Update CORS origin in backend with frontend URL"