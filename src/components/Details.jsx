import React from 'react'
import DeleteUser from './DeleteUser'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import { addUser } from '../store/slices/UserSlice'
import { fakeUserData } from '../api'
import DisplayUser from './DisplayUser'
const Details = () => {
  const dispatch=useDispatch();
  const addNewUser=(payload)=>{
    dispatch(addUser(payload))
  }
  return (
    <Wrapper>
     <div className="content">
        <div className="table">
            <div className="subtitle">
                User Details
            </div>
            <button className='btn add-btn' onClick={()=>addNewUser(fakeUserData())}>Add User</button>
        </div>
        <ul>
           <DisplayUser/>
        </ul>
        <hr/>
        <DeleteUser/>
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
export default Details