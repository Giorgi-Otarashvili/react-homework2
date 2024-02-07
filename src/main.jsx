import React from 'react'
import ReactDOM from 'react-dom'
import { ParentComponent, ChildComponent } from './task1'

const users = [
  { id: 1, name: 'John', age: 30, surname: 'Doe' },
  { id: 2, name: 'Jane', age: 25, surname: 'Smith' }
];
const isUserLoggedIn = true; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ParentComponent>
    <ChildComponent users={users} isUserLoggedIn={isUserLoggedIn} />
  </ParentComponent>
);
