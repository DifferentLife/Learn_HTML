import Head from 'next/head'
import Header from '../components/Header'

const Information = () => {
  return (
    <div>
      <Head>
        <title>Information!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1 className='title'>Hello</h1>
      <h1 className='title title1'>World</h1>
      <div className='center'>
        <p id='first'>Differentlife</p>
        <p id='first'>Web Application</p>
      </div>
      <br></br>
      <content>
        <div className='content'>
          <h2 className='center'>Information</h2>
        Student ID &emsp; &nbsp; 5735512154 <br /> Title &emsp; &emsp; &emsp; &nbsp; Mister <br /> Student Name &nbsp; TEERAPHON YINGSUA <br /> Major &emsp; &emsp; &emsp; COMPUTER ENGINEERING <br /> Department &emsp; &nbsp;Department of Computer Engineering <br />        Faculty &emsp; &emsp; &nbsp; &nbsp;Faculty of Engineering <br /> Campus &emsp; &emsp; &nbsp; Prince of Songkla University Phuket Campus <br /> Study Level &emsp; ปริญญาตรี ภาคปกติ <br /> Status &emsp; &emsp; &emsp; กำลังศึกษา <br />
        </div>
      </content>
    </div>
  )
}
export default Information