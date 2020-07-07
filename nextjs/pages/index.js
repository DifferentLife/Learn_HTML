import Head from 'next/head'
import Layout from '../components/Layout'

const Index = () => (
  <div>
    <Head>
      <title>Web application</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1 className='title'>Hello</h1>
      <h1 className='title title1'>World</h1>
    </Layout>
  </div>
)

export default Index