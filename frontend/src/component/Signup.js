import React, {useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
import './Signup.css'

const Signup = () => {

  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]:value});
}

const postData = async (e)=>{
  e.preventDefault()
  const {name, email, phone, work, password, cpassword} = user 
  const res = await fetch("/register",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify({
      name, email, phone, work, password, cpassword
    })
    
  })

  const data = await res.json();
  if (data.status === 422 || !data) {
    window.alert("INvalid Registration");
    console.log("INvalid Registration");
  } else {
    window.alert(" Registration Successfull");
    console.log("Successfull Registration");
    history.push("/login");
  }
}

    

  return (
    <>
      <section className="signup">
        <div className="container st-5">
          <div className="signup-content">
            <div className="signup-form">
              <form method="POST" className="register-form" id="register-form">
              <h2 className="form-title">Sign up</h2>
                
                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input type="text" name="name" id="name" autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Enter Your Name"/>
                </div>

                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                  <input type="email" name="email" id="email" autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Your Email"/>
                </div>

                <div className="form-group">
                  <label htmlFor="phone"><i className="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                  <input type="text" name="phone" id="phone" autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Enter Your phone Number"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="work"><i className="zmdi zmdi-slideshow material-icons-name"></i></label>
                  <input type="text" name="work" id="work" autoComplete="off"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Enter Your Profession"/>
                </div>

                <div className="form-group">
                  <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                  <input type="password" name="password" id="password" autoComplete="off"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Enter Your Password"/>
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Enter Your Confirm Password"/>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" value="register"  onClick={postData}  className="form-submit"/>
                </div>
              </form>
              <div className="signup-image">
                <figure>
                  <img src="" alt="registration pic"/>
                </figure>
                <span>I am already register</span>
                <NavLink to="/login" className="signup-image-link"> click Log In </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
