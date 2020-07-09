import { Layout } from 'antd'



const { Header, Footer, Sider, Content } = Layout
const Foo = () => {
    return (
        <div>
            <Layout>
                <Header>
                    Hello world
                </Header>
                <Content>
                    jame
                </Content>
                <Footer>
                    Different
                </Footer>
                <Sider>
                    Nam
                </Sider>
            </Layout>
        </div>
    )
}

export default Foo

