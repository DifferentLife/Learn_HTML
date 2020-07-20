import db from '../fire'
import { useState, useEffect } from 'react'

const add = () => {
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    const get = () => {
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first} ${doc.data().last}`);
            });
        });
    }


const [user, setUser] = useState() {
    let 
}

    return (
        <div>
            <h2>Firebase firestore</h2>
            <input value = "value" onChange={(j) => {setUser(j.target.value)}} />
            <button onClick={() => add()}>add</button>
            <button onClick={() => get()}>get</button>
            {setUser()}
        </div>
    )
}
export default add