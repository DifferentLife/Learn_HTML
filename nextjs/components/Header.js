import Link from 'next/link'
import { Layout, Menu } from 'antd'

const { Header} = Layout;

const Headers = () => {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link href="/information">
                                <a>Information</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link href="/Login">
                                <a>Login</a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>


        </div>
    )
}

export default Headers