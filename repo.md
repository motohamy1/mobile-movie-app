# Movies Ocean

A mobile movie browsing application built with React Native and Expo.

## Overview

Movies Ocean is a React Native application that allows users to discover, search, and explore movies. The app fetches movie data from The Movie Database (TMDB) API and tracks trending searches using Appwrite as a backend service.

## Features

- **Browse Latest Movies**: View a grid of popular and latest movies
- **Search Functionality**: Search for movies by title
- **Movie Details**: View detailed information about individual movies
- **Trending Searches**: See what movies other users are searching for most
- **Cross-Platform**: Runs on iOS, Android, and Web

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router with React Navigation
- **API**: TMDB (The Movie Database)
- **Backend**: Appwrite
- **State Management**: React hooks
- **Icons**: Expo Vector Icons

## Project Structure

```
app/
├── (tabs)/           # Tab-based navigation screens
│   ├── index.tsx     # Home screen with latest movies
│   ├── search.tsx    # Search screen
│   ├── saved.tsx     # Saved movies (placeholder)
│   └── profile.tsx   # User profile (placeholder)
├── components/       # Reusable UI components
│   ├── MovieCard.tsx
│   ├── SearchBar.tsx
│   └── TrendingCard.tsx
├── movies/
│   └── [id].tsx      # Dynamic movie details page
└── _layout.tsx       # Root layout

services/
├── api.ts            # TMDB API integration
├── appwrite.ts       # Appwrite backend services
└── useFetch.ts       # Custom hook for API calls

constants/            # App constants (icons, images)
interfaces/           # TypeScript type definitions
types/                # Additional type definitions
assets/               # Static assets (fonts, icons, images)
```

## Environment Variables

The app requires the following environment variables (stored in `.env`):

- `EXPO_PUBLIC_MOVIE_API_KEY`: TMDB API key
- `EXPO_PUBLIC_APPWRITE_PROJECT_ID`: Appwrite project ID
- `EXPO_PUBLIC_APPWRITE_DATABASE_ID`: Appwrite database ID
- `EXPO_PUBLIC_APPWRITE_COLLECTION_ID`: Appwrite collection ID

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file with the required API keys.

3. **Start the development server**:
   ```bash
   npx expo start
   ```

4. **Run on specific platform**:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## API Integration

### TMDB API
- Fetches movie data for browsing and search
- Provides movie details, posters, and metadata
- Uses Bearer token authentication

### Appwrite
- Stores trending search data
- Tracks search counts for movies
- Provides real-time trending movies list

## Key Components

- **MovieCard**: Displays movie poster and basic info in grid layout
- **TrendingCard**: Shows trending movies with search count
- **SearchBar**: Input component for movie search
- **useFetch**: Custom hook for API data fetching with loading states

## Development Notes

- Uses Expo Router for file-based routing
- Implements responsive design with NativeWind
- Follows TypeScript for type safety
- Includes ESLint for code quality
- Supports both light and dark themes