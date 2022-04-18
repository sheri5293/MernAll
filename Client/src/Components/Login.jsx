import React,{useState} from 'react'
import{useHistory} from 'react-router-dom';
import '../login.css';
const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginUser = async(e)=>{         //to avoid automatically reload the page//
          e.preventDefault();
const res = await fetch('/login',{
  method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
})

  });
  const data =  res.json();

  if(res.status === 400 || !data) {
    window.alert("Invalid Login");
   } else{
      window.alert("Login Successful");
      history.push('/');
    }
  }

  return (
    <div>
    <h1 className="text-center mt-4">Log in</h1>

    <div className="container">
      <form method='POST'>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary  m-4"  onClick={loginUser}>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;