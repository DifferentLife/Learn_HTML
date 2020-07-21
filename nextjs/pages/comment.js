import db from '../fire'
import { useState, useEffect } from 'react'


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
        return commit.map((i, index) => (
            <li index={i.id}>
                {i.comment}
                <button onClick={() => deleteComment(i.id)}>Delete</button>
            </li>
        ))
    }

    return (
        <div>
            <h2 >Comment!!</h2>
            <ul>{renderComment()}</ul>
            <input value={comment} onChange={(j) => setComment(j.target.value)} />
            <button onClick={() => add(comment)}>Sent</button>
        </div>
    )
}
export default Comment