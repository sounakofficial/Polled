
import { prisma } from '../db/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '../utils/trpc'

const Home: NextPage = (props:any) => {
  const {data, isLoading} = trpc.useQuery(["hello"])
  if(isLoading || !data) return <div>Loading...</div>
  return <div>{data.greeting}</div>
}

export default Home

export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany()
  return {
    props: {
      questions: JSON.stringify(questions),
    }
  }
}
