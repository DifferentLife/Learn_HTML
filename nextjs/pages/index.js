// import styles from './styles.module.css'
import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>For You!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='title'>Hello</h1>
      <h1 className='title title1'>World</h1>
      <div className='center'>
        <p id='first'>Differentlife</p>
        <p id='first'>Web Application</p>
      </div>
      <br></br>
      <div className='center flexbox-container'>
        <div>
          <a href="Login" target="blank">Login</a>
        </div>
        <div>
          <a href="https://www.facebook.com/teerapol.yingsua/" target="blank">Facebook</a>
        </div>
        <div>3</div>
      </div>
    </div>
  )
}