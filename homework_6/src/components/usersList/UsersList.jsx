import React from 'react'

function UsersList ({users}){
  return (
   
    <ul>
        {
         users.length > 0
      ?
      users.map((user,key) => <li key={key}>{user}</li>)
    :
    <li>Пользователей нет</li>
    }
    </ul>
  )
}

export default UsersList;
