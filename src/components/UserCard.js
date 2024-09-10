import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showUser, deleteUser } from "../features/userDetailsSlice";

function UserCard() {
  const getUserData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   console.log(getUserData);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const backtohome = () => {
    navigate("/");
  };

  const deleteUserbyId = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h1>User Details</h1>
      {getUserData &&
        getUserData.users.map((data) => (
          <div key={data.id}>
            <div>
              <h3>{data.name}</h3>
              <h4>{data.email}</h4>
              <h6>{data.gender}</h6>
              <p>{data.age}</p>
            </div>
            <button onClick={() => deleteUserbyId(data.id)}>delete</button>
            <button>update</button>
          </div>
        ))}
      <button onClick={backtohome}>Home</button>
    </div>
  );
}

export default UserCard;
