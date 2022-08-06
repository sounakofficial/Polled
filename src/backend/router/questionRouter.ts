import { prisma } from '../../db/client';
import * as trpc from '@trpc/server';

export const questionRouter = trpc
  .router()
  .query("get-all",{
    async resolve(){
        return await prisma.pollQuestion.findMany();
    }
  });