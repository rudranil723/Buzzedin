# 📣 Buzzedin

> The anti-LinkedIn. Real stories, real moods, no highlight reel.

![Status](https://img.shields.io/badge/status-in%20development-orange?style=flat-square)
![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue?style=flat-square)
![Built with](https://img.shields.io/badge/built%20with-React%20Native%20%2B%20Expo-blueviolet?style=flat-square)

---

Buzzedin is a social storytelling app where people share the stuff they *actually* go through — tagged by mood. Heartbreak, Chaos, Nostalgia, Celebration — whatever's real. No hustle porn, no curated feeds, just honest human moments.

Built as a portfolio project to showcase full-stack mobile development from auth to image uploads to real-time feeds.

---

## 🛠️ Built With

| Layer | Tech |
|---|---|
| Mobile | [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/) |
| Backend | [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) |
| Database | [PostgreSQL](https://www.postgresql.org/) hosted on [Supabase](https://supabase.com/) |
| File Storage | [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) |
| Hosting | [Railway](https://railway.app/) |

---

## ✨ Features

- 🏷️ **Mood-tagged posts** — tag your story with a vibe: Heartbreak, Celebration, Chaos, Nostalgia, and more
- 🕶️ **Anonymous posting toggle** — share without your name attached, whenever you need to
- 🖼️ **Image uploads** — add photos to your stories, stored via Cloudflare R2
- ❤️ **Reactions & comments** — respond to stories with emoji reactions and threaded comments
- 👥 **Follow system** — follow people whose stories resonate with you
- 🔍 **Discover feed by mood** — browse stories filtered by mood tag
- 🔥 **Post streak badges** — earn badges for consistent posting streaks

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Expo CLI (`npm install -g expo-cli`)
- A Supabase project set up
- A Cloudflare R2 bucket created

### 1. Clone the repo

```bash
git clone https://github.com/your-username/buzzedin.git
cd buzzedin
```

### 2. Install dependencies

```bash
# Install backend deps
cd server
npm install

# Install mobile deps
cd ../mobile
npm install
```

### 3. Set up environment variables

Create `.env` files in both `server/` and `mobile/` directories.

**`server/.env`**
```env
PORT=3000
DATABASE_URL=your_supabase_postgres_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_bucket_name
JWT_SECRET=your_jwt_secret
```

**`mobile/.env`**
```env
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the app

```bash
# Start the backend
cd server
npm run dev

# In a separate terminal, start the Expo app
cd mobile
npx expo start
```

Scan the QR code with Expo Go on your phone, or press `i` / `a` to open in an iOS / Android simulator.

---

## 📁 Project Structure

```
buzzedin/
├── mobile/                   # React Native (Expo) app
│   ├── app/                  # Expo Router screens & layouts
│   │   ├── (auth)/           # Login, signup screens
│   │   ├── (tabs)/           # Main tab navigator
│   │   │   ├── feed.tsx      # Home / discover feed
│   │   │   ├── post.tsx      # Create post screen
│   │   │   └── profile.tsx   # User profile
│   │   └── _layout.tsx
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # API clients, helpers, constants
│   ├── assets/               # Fonts, images, icons
│   └── app.json
│
├── server/                   # Node.js + Express API
│   ├── src/
│   │   ├── routes/           # Express route handlers
│   │   ├── controllers/      # Business logic
│   │   ├── middleware/       # Auth, error handling, etc.
│   │   ├── services/         # DB queries, R2 uploads, etc.
│   │   └── index.ts          # Entry point
│   ├── prisma/               # Schema & migrations (if using Prisma)
│   └── .env
│
└── README.md
```

---

## 📌 Status

This project is currently **in active development** as a portfolio piece. Features are being added incrementally.

---

## 🙋 Author

Built by Rudranil Shil (https://github.com/rudranil723) — feel free to connect!
