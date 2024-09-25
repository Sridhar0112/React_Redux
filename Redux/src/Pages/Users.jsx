import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../Slices/UserSlice";
const a =(state)=> state.UserInfo.users

const Users = () => {
  const users = useSelector(a);
  //console.log(users);
  const dispatch=useDispatch();
  const handleDelete =(index)=>{
      dispatch(deleteUsers(index))
  }
 
        return (
          <div>
            {users.length > 0 ? (
              users.map((user, index) => (
                <div key={index}>
                  <h1>{user.Name}</h1>
                  <h1>{user.Email}</h1>
                  <h1>{user.Age}</h1>
                  <h1>{user.Contact}</h1>
                  <button onClick={()=>handleDelete(index)} >Add</button>
                </div>
              ))
            ) : (
              <h2>No users found</h2>
            )}
          </div>
        );
        


};

export default Users;
