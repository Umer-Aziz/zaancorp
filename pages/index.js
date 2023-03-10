import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Workflow from '@/components/Workflow'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Zaan Corp</title>
        <meta name="description" content="Zaan corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='container'>
       <div className='main-container'>
       <div className='sidebar'>
        <Sidebar/>
       </div>
        <div className='main-content'>
          <Header/>
          <Workflow/>
        </div>
        </div>
      </main>
    </>
  )
}
