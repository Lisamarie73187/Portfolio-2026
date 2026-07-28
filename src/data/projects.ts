import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'golden-hour',
    title: 'Golden Hour Happy Hour App',
    tagline: 'Find Your Happy Hour',
    description:
      'Golden Hour is a mobile app for discovering local happy hours and events on a live map. Browse nearby venues, view current and upcoming deals, and filter by time, vibe, and specials. The app is currently in beta testing through TestFlight.',
    year: 2026,
    role: 'Solo Designer & Developer',
    projectType: 'Personal Project',
    tags: ['React Native', 'TypeScript', 'Supabase'],
    homeImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Golden+Hour/thumbnailGoldenHour.png',
    coverImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Golden+Hour/First.png',
    gallery: ['https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Golden+Hour/secondImage.png', 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Golden+Hour/ThirdImage.png', 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Golden+Hour/darkmode.png'],
    techStack: [
    {
      name: 'React Native + TypeScript',
    },
    {
      name: 'Supabase',
    },
    {
      name: 'React Navigation',
    },
    {
      name: 'Mapbox',
    },
    {
      name: 'Reanimated',
    },
    {
      name: 'Anthropic API',
    },
    {
      name: 'Google Places API',
    },
  ],
  features: [
    {
      title: 'Live Map Discovery',
      description:
        "Browse happy hours and events on an interactive map with color-coded pins for what's happening now, soon, or later tonight.",
    },
    {
      title: 'Smart Filtering',
      description:
        'Filter by day, time, deal type, price, vibe, and venue category to find exactly what you\'re looking for.',
    },
    {
      title: 'Favorites',
      description: 'Save your go-to spots and check their live happy-hour status anytime from a dedicated tab.',
    },
    {
      title: 'City & Location Search',
      description:
        'Search any city or zip code to explore deals and events beyond your current location.',
    },
    {
      title: 'Community Contributions',
      description:
        'Suggest new venues and submit menu photos to correct or verify happy-hour details, keeping listings fresh and trustworthy.',
    },
     {
      title: 'AI Website Scrubbing',
      description:
        "Claude reads a venue's own website to extract its description, vibe, price level, and hours, auto-filling the listing without manual entry.",
    },
    {
      title: 'AI Menu Photo Parsing',
      description:
        'A vision model reads photos of happy-hour menus and specials boards, turning them directly into structured deals, days, and times.',
    },
    {
      title: 'Moderated Submissions',
      description:
        'User-submitted photos, events, and venue suggestions all pass through admin review before going live.',
    },
  ],
    liveUrl: 'https://example.com',
    githubWebUrl: 'https://github.com',
  },
  {
  slug: 'open-mind-chat',
  title: 'Open Mind Chat',
  tagline: 'A supportive space to reflect, chat, and check in with yourself.',
  description:
    'A mental wellness platform with a React Native mobile app, web chat bot, and a Next.js web companion that serves as its backend. Users talk through good and bad days with an AI companion ("AMI"), check in on their mood daily, and keep a private journal, wrapped in a warm, calming, non-judgmental design.',
  year: 2024,
  role: 'Solo Designer & Developer',
  projectType: 'Personal Project',
  tags: ['React Native', 'React','TypeScript', 'Next.js', 'OpenAI'],
  coverImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/PSMainImage.png',
  gallery: ['https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/charsupport.png', 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/moodtrackingJournal.png'],
  techStack: [
    {
      name: 'React Native',
    },
     {
      name: 'React 19 + TypeScript',
    },
    {
      name: 'React Navigation',
    },
    {
      name: 'React Native Reanimated',
    },
    {
      name: 'Next.js',
    },
    {
      name: 'OpenAI API',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Firebase Auth',
    },
    {
      name: 'React Query',
    },
    {
      name: 'Tailwind CSS',
    },
  ],
  features: [
    {
      title: 'AI Companion Chat',
      description:
        'Talk through good and bad days with "AMI," an AI friend that offers supportive, conversational mental-health check-ins.',
    },
    {
      title: 'Animated, Human Chat Experience',
      description:
        'Animated message bubbles and a typing indicator with an avatar make conversations feel warm and responsive.',
    },
    {
      title: 'Daily Mood Check-Ins',
      description:
        'Quick emotion buttons — Happy, Sad, Angry, Anxious — let users log how they feel each day from a personalized home space.',
    },
    {
      title: 'Private Journaling',
      description:
        'A simple space to write and revisit personal entries to document thoughts and track progress over time.',
    },
    {
      title: 'Companion Web App & Backend',
      description:
        'A Next.js web app that mirrors the chat experience in the browser and serves as the shared backend — exposing chat, user, and OpenAI endpoints backed by MongoDB and Firebase Auth.',
    },
    {
      title: 'Calming, Friendly Design',
      description:
        'Soft backgrounds, rounded cards, and a gentle color palette create a safe, non-judgmental feel.',
    },
  ],
  liveUrl: 'https://example.com',
},
{
  slug: 'wanderlist',
  title: 'WanderList',
  tagline: 'AI-assisted trip planning with a live map, built for real travel, not toy demos.',
  description:
    'A full-stack travel itinerary app for planning multi-day trips: drag-and-drop scheduling, a live Mapbox view with driving routes, shared/collaborative trips, budget splitting, and an AI-powered discovery panel that suggests real places using Google Places data, ranked and explained by an LLM.',
  year: 2026,
  role: 'Solo developer',
  projectType: 'Personal Project',
  tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Mapbox', 'AI SDK'],
  homeImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/wanderlist/thumbnail.png',
  coverImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/wanderlist/thumbnail.png',
  gallery: ['https://lisaportfolio2024.s3.us-west-1.amazonaws.com/wanderlist/wanderlistFeatureOne.png', 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/wanderlist/WanderlistTwo.png'],
  techStack: [
    {
      name: 'React 19 + TypeScript (strict)',
    },
    {
      name: 'Vite + Vercel serverless functions',
    },
    {
      name: 'Supabase (Postgres + Auth)',
    },
    {
      name: 'Mapbox GL JS',
    },
    {
      name: 'Vercel AI SDK + AI Gateway',
    },
    {
      name: 'Google Places API',
    },
    {
      name: 'Drag-and-drop via @hello-pangea/dnd',
    },
  ],
  features: [
    {
      title: 'AI-Powered Discovery',
      description: 'An "Explore" panel with AI-generated category cards tailored to your specific destination (best attractions, local favorites, hikes) plus free-text search ("a quiet coffee shop near Day 2").',
    },
    {
      title: 'Drag-and-Drop Itinerary',
      description: 'Reorder places within a day or move them across days, with live driving time/distance estimates between stops and overnight hop distances shown between days.',
    },
    {
      title: 'Live Collaborative Trips',
      description: 'Invite collaborators by email, shared editing with optimistic updates, per-place comment threads, and a budget splitting view that settles up who owes whom.',
    },
    {
      title: 'Interactive Map',
      description: 'Day by day color coded pins, toggleable driving route overlays, and a floating AI suggestion layer with its own pins.',
    },
    {
      title: 'Guest Mode',
      description: 'Build a full itinerary without creating an account first; save it to a real account only when you\'re ready.',
    },
    {
      title: 'Place Rankings',
      description: 'Rate places you\'ve added to help a group converge on a final plan, visible to every collaborator.',
    },
  ],
  liveUrl: 'https://www.wanderlist.dev',
  githubWebUrl: 'https://github.com/Lisamarie73187/Winery-Itinerary-',
},
{
  slug: 'petsmart',
  title: 'PetSmart',
  tagline: 'Shipping ecommerce, curbside, and loyalty features to millions of pet parents on PetSmart\'s mobile app.',
  description:
    'Cross-platform mobile work on PetSmart\'s consumer app across iOS and Android. Part of a small team building the React Native ecommerce experience — browsing, cart, and checkout — plus ongoing maintenance and testing of the in-store Services app. Delivered curbside and DoorDash integrations during 2020 to support contactless shopping, added Apple Pay checkout, and wired up the Treats loyalty program so points earn and redeem inline.',
  year: 2018,
  projectType: 'Work',
  role: 'Software Engineer 2018-2022',
  tags: ['React Native', 'React', 'iOS', 'Swift', 'Kotlin', 'Redux'],
  homeImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Petsmart/mobileAppThumbnail.png',
  coverImage: 'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Petsmart/mobileAppThumbnail.png',
  gallery: [
    'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Petsmart/PetsmartOneApp.png',
    'https://lisaportfolio2024.s3.us-west-1.amazonaws.com/Petsmart/petsmartservices.png',
  ],
  techStack: [
    {
      name: 'React Native',
    },
    {
      name: 'React',
    },
    {
      name: 'iOS (Swift)',
    },
    {
      name: 'Android (Kotlin)',
    },
    {
      name: 'Redux',
    },
    {
      name: 'Native module bridging (Swift / Kotlin)',
    },
    {
      name: 'Apple Pay',
    },
  ],
  features: [
    {
      title: 'React Native Ecommerce',
      description: 'Part of a 3-person team building out the React Native ecommerce surface of the mobile app — product browsing, cart, and checkout flows shared across iOS and Android.',
    },
    {
      title: 'Services App Maintenance & Testing',
      description: 'Helped maintain the in-store Services app, with thorough testing across flows to keep grooming, vet, and boarding features stable through releases.',
    },
    {
      title: 'Curbside & DoorDash Integration',
      description: 'Connected the app to DoorDash and other curbside/delivery services during 2020 to enable contactless pickup and keep customers and staff safe.',
    },
    {
      title: 'Apple Pay Checkout',
      description: 'Integrated Apple Pay for fast, native one-tap checkout on iOS, reducing friction in the purchase flow.',
    },
    {
      title: 'Treats Loyalty Points',
      description: 'Wired up the Treats rewards program so members earn and redeem points inline during shopping and checkout.',
    },
    {
      title: 'Native Bridging & Shared State',
      description: 'Bridged React Native to native Swift and Kotlin modules where platform APIs were needed, with Redux managing cart, session, and checkout state across the app.',
    },
  ],
  liveUrl: 'https://www.petsmart.com',
  githubWebUrl: '',
}
];
