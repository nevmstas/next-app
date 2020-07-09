import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from './components/MainLayout'

export default function Index(){
  return(
    <MainLayout>
      <Head>
        <title>NextJS Title</title>
        <meta name="keywords" content="nest, javascript"/>
        <meta name="description" content="application for learning next js"/>
      </Head>
      <h1>Hello Next.JS!</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href={'/posts'}><a>Posts</a></Link></p>
    </MainLayout>
  )
}