import { Form, Input, Button } from 'antd'

const Foo = () => {
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 10 },
    };
    // const Demo = () => {
    const onFinish = values => {
        console.log(values)
    }
    return (
        <div>
            <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item name={['user', 'comment me']} label="Comment Me">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Foo