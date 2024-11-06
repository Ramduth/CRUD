import React, { useState } from 'react'
import './CreateUser.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/createuser',{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')

        })
        .catch((err)=> console.log(err))

    }
  return (
    <div>
        <div class="form-container">
    <h2>Add User</h2>
    <form onSubmit={submit}>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required 
            onChange={(e) => setName(e.target.value)}/>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required 
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" required min="1" 
            onChange={(e)=>setAge(e.target.value)}/>
        </div>

        <div class="button-container">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>


    </div>
  )
}

export default CreateUser