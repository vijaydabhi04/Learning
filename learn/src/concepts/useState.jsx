import React, { useState } from 'react'

export default function ExmapleuseState() {
    // primitive based use state
    const [Person, setPerson] = React.useState() 
    // obejct based use state
    const [persondata, setPersondata] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        address: ""
    })
    const hanldesave = () => {
        // API call to save the person
        const persondetial = JSON.stringify(persondata)
        console.log('Person Data:', persondetial)
        
    }
    return (
        <>
            <input type="text" onChange={(e) => setPerson(e.target.value)} />
            <p>Name: {Person}</p>
            <input type="text" placeholder='name' onChange={(e) => setPersondata({ ...persondata, name: e.target.value })} />
            <input type="text" placeholder='age' onChange={(e) => setPersondata({ ...persondata, age: e.target.value })} />
            <input type="text" placeholder='email' onChange={(e) => setPersondata({ ...persondata, email: e.target.value })} />
            <input type="text" placeholder='phone' onChange={(e) => setPersondata({ ...persondata, phone: e.target.value })} />
            <input type="text" placeholder='address' onChange={(e) => setPersondata({ ...persondata, address: e.target.value })} />

            <button onClick={hanldesave}>Save</button>
        </>
    )
}
