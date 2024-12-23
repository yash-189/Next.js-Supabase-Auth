# Next.js + Supabase Auth Template

A production-ready authentication template using Next.js 15 (App Router) and Supabase. This template provides the core authentication infrastructure while letting developers implement their own UI components and authentication flows.

---

## Features

- 🔐 **Authentication Context & Provider**
- 👤 **Role-Based Access Control (RBAC)**
- 🔒 **Protected Routes**
- ⚡ **Supabase Client Setup**
- 🎨 **TailwindCSS for Styling**
- 🚀 **TypeScript Support**
- 🔄 **Auto-Refresh Sessions**
- 🛡️ **Security Best Practices**
- 📝 **ESLint Configured**

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database & Auth**: Supabase
- **Styling**: TailwindCSS
- **State Management**: React Context
- **Forms**: Custom Implementation
- **Language**: TypeScript

---

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account
- Git installed

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yash-189/nextjs-supabase-auth-template.git
   cd nextjs-supabase-auth-template
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Required - Get these from your Supabase project settings > API
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

   # Optional - For your app configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME=Your App Name
   ```

   ### Getting the Required Values

   1. Go to the [Supabase Dashboard](https://app.supabase.io/).
   2. Select your project (or create a new one).
   3. Navigate to **Project Settings > API**.
   4. Copy the values:

      - `NEXT_PUBLIC_SUPABASE_URL`: Project URL
      - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon/Public Key (NOT the service_role key)

---

## Next Steps

After setting up the environment variables, you can start the development server:

```bash
npm run dev
# or
yarn dev
```

Your application will be running at [http://localhost:3000](http://localhost:3000).

Happy coding!

