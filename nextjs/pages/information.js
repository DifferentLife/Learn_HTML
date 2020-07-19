import Head from 'next/head'
import Layout from '../components/Layout'
import { Breadcrumb } from 'antd'

const Information = () => {
    return (
        <div>
            <Head>
                <title>Information!!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Breadcrumb className='breadcrumb'>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>information</Breadcrumb.Item>
                </Breadcrumb>
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
            </Layout>
        </div>
    )
}
export default Information