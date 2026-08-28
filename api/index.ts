import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import express from 'express';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { AppModule } from '../src/app.module';

const server = express();

// Cached across invocations while the serverless function stays warm,
// so we don't re-bootstrap Nest (and reconnect to Postgres) on every request.
let cachedApp: Promise<void> | null = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.init();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!cachedApp) {
    cachedApp = bootstrap();
  }
  await cachedApp;
  server(req as any, res as any);
}
