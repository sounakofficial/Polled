import { prisma } from '../../db/client';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
 import superjson from 'superjson';
import { questionRouter } from './questionRouter';


export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("questions.", questionRouter)
  ;

// export type definition of API
export type AppRouter = typeof appRouter;
