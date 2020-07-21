import db from '../fire'
import { useState, useEffect } from 'react'


const Comment = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [born, setBorn] = useState('')
    const [users, setUser] = useState([])
    const add = (first, last, born) => {
        db.collection("users").add({
            first,
            last,
            born
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        get()
    }
    const get = () => {
        let user = []
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const { first, last, born } = doc.data()
                const id = doc.id
                console.log(`${doc.id} => ${doc.data().first} ${doc.data().last} ${doc.data().born}`);
                user.push({ first, last, born, id }) //ยัดใส่อาเรย์
            });
            setUser(user)
        });
    }

    useEffect(() => { //จะดึง component ที่ทำเสร็จแล้วออกมา
        get()
    }, []) //,[] เป็นการระบุหรือบอกว่าเราจะ monitor ตัวไหน ไม่งั้นมันจะวนลูปอนัน

    const renderUser = () => {
        return users.map((i) => <li key={i.id}> {i.first} {i.last} {i.born} </li>)
    }

    return (
        <div>
            <h2 className = "title title1">Comment!!</h2>
            <ul>{renderUser()}</ul>
            {/* <button onClick={() => renderUser()}>Runderuser</button> //ไว้ debug  */}
            <input value={first} onChange={(j) => setFirst(j.target.value)} />
            <input value={last} onChange={(j) => setLast(j.target.value)} />
            <input value={born} onChange={(j) => setBorn(j.target.value)} />
            <button onClick={() => add(first, last, born)}>add</button>
            <button onClick={() => get()}>get</button>
            {/* {setUser()} */}
        </div>
    )
}
export default Comment