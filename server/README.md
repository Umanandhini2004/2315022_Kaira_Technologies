# Voice State API

## Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGO_URI` to your local MongoDB or MongoDB Atlas connection string.
3. Install and start the API:

```bash
npm install
npm run dev
```

The API is deployed at `https://two315022-kaira-technologies-1.onrender.com`. The client submits registrations to `POST /api/registrations`.

For a deployed client, set `REACT_APP_API_URL` before building the client, for example `https://api.example.com`.
