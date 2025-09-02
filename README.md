# Neighbiz Backend

## Setup

1. Install dependencies:
   ```
npm install
   ```
2. Create a `.env` file (already scaffolded):
   - `PORT=5000`
   - `MONGO_URI=mongodb://localhost:27017/neighbiz`
3. Start MongoDB locally (or update `MONGO_URI` for Atlas).
4. Run the server:
   ```
npm run dev
   ```

## API Endpoints

- `POST /api/register-user` — Register a new user
- `POST /api/register-business` — Register a new business
- `POST /api/login` — Login for user or business

All endpoints expect JSON bodies.
