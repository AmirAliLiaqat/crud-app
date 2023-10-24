import { useDispatch } from "react-redux"
import styled from "styled-components";
import { deleteAllUsers } from "./store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(deleteAllUsers());
  }

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`

export default DeleteAllUsers;