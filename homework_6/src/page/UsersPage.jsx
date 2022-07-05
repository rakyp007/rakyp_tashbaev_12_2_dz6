import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from '../components/usersList/UsersList'
import { addUser, handleName } from '../store/usersSlice'

export const UsersPage = (props) => {
    const dispatch = useDispatch
    const name = useSelector(state => state.usersReducer.name)
    const users = useSelector(state => state.usersReducer.users)

    const handleNameFunc = (e)=> {
        dispatch(handleName(e.target.value))
    }

    const addUserFinc = () => {
        dispatch(addUser(name))
    }

    const clearUsers = () => {
        dispatch(addUser(name))
    }


   
  return (
    <div>
        <div>
            <input type="text" onChange={handleNameFunc} value={name}/>
            <button onClick={addUserFinc}>create user</button>
            <button onChange={clearUsers}>clear name</button>
        </div>
        -------------------------------------------
        <UsersList users={users}/>
    </div>
  )
}
