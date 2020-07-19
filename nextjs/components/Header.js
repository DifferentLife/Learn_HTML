import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Headers = () => {
    return (
        <div>
            {/* <div className='center flexbox-container'>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href="/information">
                        <a>Information</a>
                    </Link>
                </div>
                <div>
                    <a href="https://www.facebook.com/teerapol.yingsua" target="blank">Facebook</a>
                </div>
                <span className='flexbox-login'>
                    <div>
                        <Link href="/Login">
                            <a>Login</a>
                        </Link>
                    </div>
                </span>
            </div> */}
            <Layout className="layout">
                <Header>
                    <div className="logo" />
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
                            <a href="https://www.facebook.com/teerapol.yingsua" target="blank">Facebook</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link href="/Login">
                                <a>Login</a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                {/* <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>


        </div>
    )
}

export default Headers