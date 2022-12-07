import Head from 'next/head'
import Image from 'next/image'
import PostBox from '../components/PostBox'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='my-7 max-w-5xl mx-auto'>
      <Head>
        <title>Reddit clone 2.0</title>
      </Head>

      {/* postbox */}
      <PostBox/>
    </div>
  )
}
