import Head from 'next/head'
import Layouts from '../components/Layout'
import { Layout, Breadcrumb, Carousel, Card, Row, Col } from 'antd'
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

const { Content } = Layout
const { Meta } = Card
const Index = () => (
  <div>
    <Head>
      <title>Web application</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layouts>
      {/* <h1 className='title'>Hello</h1>
      <h1 className='title title1'>World</h1> */}
      <Carousel autoplay>
        <div>
          <h1>Hello Teacher & Myfriend</h1>
        </div>
        <div>
          <h1>Today Present MiniProject</h1>
        </div>
        <div>
          <h1>Next Js</h1>
        </div>
        <div>
          <h1>With Ant Design</h1>
        </div>
      </Carousel>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="center site-layout-content">
          <Row gutter={16} justify="center">
            <Col span={6}>
              <Card
                hoverable
                cover={<img alt="jame2" src="/jame2.jpg" />}
              >
                <a href="https://www.instagram.com/differentlife.y/" target="blank">Instargram</a>
                <Meta description="www.instagram.com" />
                <InstagramFilled />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                cover={<img alt="jame1" src="/jame1.jpg" />}
              >
                <a href="https://www.facebook.com/teerapol.yingsua" target="blank">Facebook</a>
                <Meta description="www.facebook.com"/>
                <FacebookFilled />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                cover={<img alt="jame3" src="/jame3.jpg" />}
              >
                <a href="https://twitter.com/explore" target="blank">Twitter</a>
                <Meta description="www.facebook.com"/>
                <TwitterSquareFilled />
              </Card>
            </Col>
          </Row>

        </div>
      </Content>
    </Layouts>
  </div>
)

export default Index