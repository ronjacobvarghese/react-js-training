import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA1Q3NTWvyhMYJ_SmQAE1xerQ3lSZtsdbU";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordInputRef}
          type="password"
          minLength="7"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
