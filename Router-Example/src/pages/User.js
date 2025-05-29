import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const User = () => {
    const {userid} = useParams()
    const [user, setUser] = useState({})
    const navigate = useNavigate()
  //test for conflict
    const fetchUser = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        const data = await res.json()
        setUser(data)
    }

    useEffect(() => {
        fetchUser()
    },[])

  return (
    <div>
        <p>Hello {user.name}</p>
        <p>Your email is: {user.email}</p>
        <Button variant="info" onClick={() => navigate('/info')}>Info</Button>
    </div>
  )
}

export default User