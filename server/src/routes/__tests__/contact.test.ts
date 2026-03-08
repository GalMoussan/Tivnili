import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import { contactRouter } from '../contact';

// T003 — Express Server

describe('T003 — Contact Route', () => {
  const app = express();
  app.use(express.json());
  app.use('/api/contact', contactRouter);

  // Acceptance: "POST /api/contact validates body with Zod"
  it('accepts valid contact body', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ message: 'I need a website', source: 'hero' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
  });

  // Acceptance: "Invalid contact body returns 400 with validation errors"
  it('returns 400 for invalid body', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
