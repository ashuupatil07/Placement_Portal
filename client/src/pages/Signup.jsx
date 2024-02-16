import { useState } from 'react';
import { NavLink } from "react-router-dom"
import React from 'react';
import'../css/Signup.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Signup() {
    const [user,setUser ] = useState({
        name :"",
        PRN : "",
        email: "",
        password:"", 
        center: "",
        year :""
    })
     const handleInput = ()=>{
        console.log(e);
        let name = e.target.name ;

    }
  return (
  <>
<section className="user">
  <div className="user_options-container">
    <div className="user_options-text">
      <div className="user_options-unregistered">
        <h2 className="user_unregistered-title">Have an account?</h2>
        {/* <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p> */}
        <button className="user_unregistered-signup" id="signup-button"><NavLink style={{ color: 'white' }} to="/login">Login</NavLink></button>
      </div>

      <div className="user_options-registered">
        <h2 className="user_registered-title">Have an account?</h2>
        <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        <button className="user_registered-login" id="login-button">Sign up</button>
      </div>

    </div>

    <div className="user_options-forms" id="user_options-forms">
      <div className="user_forms-login">
        <h2 className="forms_title">Sign up</h2>
        <form className="forms_form">
          <fieldset clasclassNames="forms_fieldset">
            <div className="forms_field">
              <input type="text" placeholder="Name" className="forms_field-input" required autofocus value={user.name} onChange={handleInput}/>
            </div>
            <div class="forms_field">
              <input type="number" placeholder="PRN" className="forms_field-input" required maxLength={12} minLength={12} value={user.PRN} onChange={handleInput}/>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Email" className="forms_field-input" required value={user.email} onChange={handleInput}/>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" className="forms_field-input" required value={user.password} onChange={handleInput}/>
            </div>
            <div class="forms_field">
            <Form.Select value={user.center} onChange={handleInput} style={{ fontSize: '12px', padding: '8px' , size:'8' }} >
                <option>Center</option>
                <option value="1">Kharghar</option>
                <option value="2">Juhu</option>    
            </Form.Select>
            </div>
            <div class="forms_field">
              <input type="text" placeholder="Year" className="forms_field-input" required value={user.year} onChange={handleInput}/>
            </div>
          </fieldset>
          <div class="forms_buttons">
            
            <input type="submit" value="Sign up" className="forms_buttons-action" />
          </div>
        </form>
      </div>
      
    </div>
  </div>
</section>
{/* <script src="..\script\signup.js"></script> */}
</>
)
}

