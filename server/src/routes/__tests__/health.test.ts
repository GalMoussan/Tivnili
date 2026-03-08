import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import { healthRouter } from '../health';

// T003 — Express Server

describe('T003 — Health Route', () => {
  const app = express();
  app.use('/api/health', healthRouter);

  // Acceptance: "GET /api/health returns { status: 'ok' }"
  it('returns status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
