import React  from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../register.css";


const Registration = () => {
const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    //when stored value//
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {    // to avoid automatically reload the page//
    e.preventDefault();

    const {  username, email, phoneNumber,  password, confirmpassword } = user;  //destructuring//

    const resp = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
         email,
          phoneNumber,
            password,
         confirmpassword
      }),
    });


    
    const data = await resp.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");
  history.push('/login');
    }
  };

  return (
    <form  method='POST'>
      <fieldset className='fieldset'>
        <br />
        <input className='input'
          type='text'
          name='username'
          id='username'
          value={user.name}
              onChange={handleInputs}
          placeholder='Username'
          required
         
        />
        <br />
        <br />
        <input className='input'
          type='email'
          name='email'
          id='email'
          value={user.name}
              onChange={handleInputs}
          placeholder='E-mail'
          required
        />
        <br />
        <br />
        <input className='input'
          type='text'
          name='phoneNumber'
          id='phoneNumber'
          maxlength='11'
          pattern='.{11}'
          required
          title='11 characters length'
          value={user.name}
              onChange={handleInputs}
          placeholder='phonenumber'
        />
        <br />
        <br />
        <input className='input'
          type='password'
          name='password'
          id='password'
          pattern='.{8,}'
          required
          title='8 characters minimum'
          value={user.name}
              onChange={handleInputs}
          placeholder='Password'
        />

        <br />
        <br />
        <input className='input'
          type='password'
          name='confirmpassword'
          id='confirmpassword'
          value={user.name}
              onChange={handleInputs}
          placeholder='Confirm Password'
          required
        />
        <span id='messages' ></span>
        <br />
        <br />
        <label for='submit'></label>
        <input className='input' type='submit'   onClick={postData} id='submit2' />
      </fieldset>
    </form>
  );
}

export default Registration;
