import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

function CreateUserhtmlForm() {
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userDetails));
    navigation("/card");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <input
          type="number"
          name="age"
          onChange={handleInputChange}
          placeholder="Enter your age"
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleInputChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreateUserhtmlForm;
