import Link from 'next/link';
import Layout from '../components/layout';
import Head from 'next/head';


function About() {
    return (<Layout>
            <Head>
            <title>About</title>
        </Head>
        <h1>About</h1>


           {/* <Link href="/">
            <a>Home</a>
        </Link> 
        <Link href="/about">
            <a>About</a>
        </Link>  */}
    </Layout>)
  }
  
  export default About