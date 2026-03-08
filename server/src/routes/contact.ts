import { Router, Request, Response } from 'express';
import { z, ZodError } from 'zod';

const contactSchema = z.object({
  message: z.string(),
  source: z.enum(['hero', 'footer']),
});

export const contactRouter = Router();

contactRouter.post('/', (req: Request, res: Response) => {
  try {
    contactSchema.parse(req.body);
    res.json({ success: true });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid request body',
          details: err.errors,
        },
      });
      return;
    }
    throw err;
  }
});
