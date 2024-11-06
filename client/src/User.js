import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import axios from 'axios'
import { useEffect } from 'react'

function User() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(error => console.log(error))


    },[])
  return (
 <div class="center-container">
    <Link to="/create"><button type="button" class="btn add-btn">Add +</button></Link>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => (
                    <tr key={user.email}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td class="action-cell">
                            <Link to={`/update/${user._id}`}>
                                <button type="button" class="btn update-btn">Update</button>
                            </Link>
                            <button type="button" class="btn delete-btn">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div> 




    
  )
}

export default User