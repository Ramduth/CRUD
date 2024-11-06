import React from 'react'
import './UpdateUser.css'
import {useParams, useNavigate} from 'react-router-dom'

function UpdateUser() {
    const {id} = useParams();
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

  return (
    <div>
                <div class="form-container">
    <h2>Update User</h2>
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" required min="1" />
        </div>

        <div class="button-container">
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
    </form>
</div>
    </div>
  )
}

export default UpdateUser