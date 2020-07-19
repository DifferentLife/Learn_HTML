import Head from 'next/head'
import Layout from '../components/Layout'
import {Breadcrumb} from 'antd'

const Foo = () => {
    console.log("Hey You!!");
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel='icon' href='favicon.ico' />
            </Head>

            <Layout>
                <Breadcrumb className='breadcrumb'>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>login</Breadcrumb.Item>
                </Breadcrumb>
                <div className='center login-container'>
                    <h2>Login</h2>
                    <form>
                        <label for="fname">Username:</label>
                        <input type="text" id="fname" name="fname" /><br /><br />
                    </form>
                    <label for="lname" />Password:
                    <input type="password" id="lname" name="lanme" />
                </div>
            </Layout>
        </div>
    )
}
export default Foo