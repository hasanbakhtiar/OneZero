import Layout from '../components/layout';
import Head from 'next/head';

function HomePage() {
    return (<Layout>
        <Head>
            <title>Home</title>
        </Head>
        <h1>index</h1>
<p>Hello</p>
<style jsx>{`
    p{
      color:green
    }
`}</style>

        {/* <Link href="/">
            <a>Home</a>
        </Link> 
        <Link href="/about">
            <a>About</a>
        </Link>  */}
        </Layout>)
  }
  
  export default HomePage