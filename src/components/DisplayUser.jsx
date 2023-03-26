import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from '../store/slices/UserSlice'
const DisplayUser = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users;
    })
   const deleteUser=(id)=>{
        dispatch(removeUser(id))
   }
  return (
   <Wrapper>
    {
    data.map((user,id)=>{
        return <li ky={id}>{user}
        <button className='btn-delete' onClick={()=>deleteUser(id)}>
           <MdDeleteForever className='delete-icon'/>
        </button>
        </li>

    })
    }
   </Wrapper>
  )
}
const Wrapper=styled.section`
li{
 width:100%;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:1rem;
 border-bottom:1px solid #eee;

}
.btn-delete{
    border:none;
    background:white;
    
}

`

export default DisplayUser