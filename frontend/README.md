# Royal Japan Frontend

This is a Next.js project for the Royal Japan e-commerce platform.

## Prerequisites

- Node.js 18+ and npm
- Backend server running on http://localhost:8000 (see main README)

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment:**
   env pushed with code for ease of running

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Access the application:**

   - Frontend: http://localhost:3000
   - API: http://localhost:8000/api

## Features

- Modern product card UI with 3D hover effects
- Responsive design for mobile and desktop
- Image optimization with Next.js Image component
- Loading states and error handling
- Product listing with external image support

## Changes

- Added product listing page with modern card design
- Integrated with backend `/api` endpoint
- Enhanced ProductCard component with animations
- Fixed root page product loading
- Fixed build error

For detailed changelog, see `../CHANGELOG.md`
