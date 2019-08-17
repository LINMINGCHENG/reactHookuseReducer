import React,{useState} from 'react'
import useInput from '../Hooks/useInput';

function UserFrom() {
   
   
     const[firstName,bindFirstName, resetFirstName] =useInput('')
     const[lastName,bindLastName, resetLastName] =useInput('')
      
    const submitHandler = e =>{
               e.preventDefault()
               alert(`Hello ${firstName}  ${lastName}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input  {...bindFirstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input  {...bindLastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserFrom