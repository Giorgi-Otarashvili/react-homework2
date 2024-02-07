import React from "react"

const ParentComponent=({children})=> {
  return (
    <div>
    {children} 
    </div>
  )
} 

const ChildComponent = ({users, isUserLoggedIn}) => {
  if (isUserLoggedIn) {
    if (users.length > 0) {
      return <div>
      <ul>
     {users.map( user => (
      <li key={user.id}>
        {user.name}  {user.surname}  {user.age}
      </li>
     ))

     }
      </ul>
      </div>
    } else {
      return  <p>no users in the system</p>
      
    }
  } else {
    return <p>you are not authorized to see user list</p>
  }
}

export {ParentComponent,ChildComponent}