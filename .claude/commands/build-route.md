# Build Route

Scaffold an Express API route following Tivnili's backend conventions.

## Input

Route path: $ARGUMENTS (e.g., /api/contact, /api/analytics)

## Process

### 1. Understand Requirements
Parse the route path to determine:
- Resource name (e.g., "contact", "analytics")
- Required HTTP methods (GET, POST, etc.)

### 2. Explore Existing Patterns
Read existing routes in `server/src/routes/` to understand:
- Router setup and export patterns
- Zod validation usage
- Error handling approach
- Response format

### 3. Scaffold the Route

Create `server/src/routes/{resource}.ts` with:

```typescript
import { Router } from 'express';
import type { Request, Response } from 'express';
import { z } from 'zod';

const router = Router();

// Define request schema
const RequestSchema = z.object({
  // fields
});

router.post('/', async (req: Request, res: Response) => {
  const body = RequestSchema.parse(req.body);
  // Implementation
  res.json({ success: true });
});

export { router as resourceRouter };
```

### 4. Register the Route
Add to `server/src/routes/index.ts`.

### 5. Conventions to Follow
- Zod validation on all request bodies
- Standard error format: `{ error: { code: string, message: string } }`
- TypeScript strict mode

## Output
- The route file
- Updated route registration
