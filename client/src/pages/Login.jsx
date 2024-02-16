import React from 'react';
import'../css/Signup.css'
import { NavLink } from "react-router-dom"


export function Login() {
    
  return (
  <>
<section className="user">
  <div className="user_options-container">
    <div className="user_options-text">
      <div className="user_options-unregistered">
        <h2 className="user_unregistered-title">Don't have an account?</h2>
        {/* <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p> */}
        <button className="user_unregistered-signup" id="signup-button"><NavLink style={{ color: 'white' }} to="/Signup">Sign up</NavLink>
</button>
      </div>
      {/* <NavLink style={{ color: 'white' }} to="/Signup">Sign up</NavLink> */}
      <div className="user_options-registered">
        <h2 className="user_registered-title">Have an account?</h2>
        <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        <button className="user_registered-login" id="login-button">Login</button>
      </div>
    </div>

    <div className="user_options-forms" id="user_options-forms">
      <div className="user_forms-login">
        <h2 className="forms_title">Login</h2>
        <form className="forms_form">
          <fieldset clasclassNames="forms_fieldset">
            <div className="forms_field">
              <input type="email" placeholder="Email" className="forms_field-input" required autofocus />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" className="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button type="button" className="forms_buttons-forgot">Forgot password?</button>
            <input type="submit" value="Log In" className="forms_buttons-action" />
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" placeholder="Full Name" className="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" className="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" className="forms_field-input" required />
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
<script src="..\script\signup.js"></script>
</>
)
}

