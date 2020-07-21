import db from '../fire'
import { useState, useEffect } from 'react'
import { Form, Input, Button, Card } from 'antd'


const Comment = () => {

    const [comment, setComment] = useState('')
    const [commit, setCommit] = useState([])

    const add = (comment) => {
        db.collection("foo").add({
            comment
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        get()
    }
    const deleteComment = (id) => {
        db.collection("foo").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
        get()
    }
    const get = () => {
        let commits = []
        db.collection("foo").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const { comment } = doc.data()
                const id = doc.id
                console.log(`${doc.id} => ${doc.data().comment}`);
                commits.push({ comment, id })
            });
            setCommit(commits)
        });
    }
    useEffect(() => {
        get()
    }, [])
    const renderComment = () => {
        return commit.map((i) => (
            <li key={i.id}>
                {i.comment}
                {' '}
                <Button type="primary" danger onClick={() => deleteComment(i.id)}>Delete</Button>
            </li>
        ))
    }
    const layout = {
        labelCol: { span: 2.5 },
        wrapperCol: { span: 5 },
    };
    const onFinish = values => {
        console.log(values)
    }

    return (
        <div>
            <Card className="comment" title="Comment!!" bordered={false} >
                <ul>{renderComment()}</ul>
            </Card>
            <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item name={['user', 'Please comment me']} label="Please comment me" style={{}}>
                    <Input.TextArea value={comment} onChange={(j) => setComment(j.target.value)} placeholder="comment here" />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                    <Button type="primary" htmlType="submit" onClick={() => add(comment)}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Comment