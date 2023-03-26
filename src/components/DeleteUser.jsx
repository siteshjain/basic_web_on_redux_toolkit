import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteUser } from '../store/slices/UserSlice';

const DeleteUser = () => {
  const dispatch=useDispatch();
  const deleteUsers=()=>{
        dispatch(deleteUser())
  }
  return <Wrapper>
    <button className='btn clear-btn' onClick={deleteUsers}>Clear All Data</button>
  </Wrapper>
  
}
const Wrapper=styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#af062c;
  margin-top:2rem;
}

`
export default DeleteUser