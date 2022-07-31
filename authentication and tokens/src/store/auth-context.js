import React, { useState, useEffect, useCallback }  from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token:'',
  isLoggedIn:false,
  login:(token) => {},
  logout: () => {},

});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;

  return remainingTime;
};

const retreiveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if(remainingTime <= 3600){
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token:storedToken,
    duration: remainingTime,
  }
}

export const AuthContextProvider = (props) => {
  const { tokenData, remainingTime } = retreiveStoredToken();

  let initialToken

  if(tokenData){
    initialToken = tokenData;
  }

  const [token,setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');

    if(logoutTimer){
      clearTimeout(logoutTimer);
    }
    
  },[]);
  
  const loginHandler = (token, expirationTime) => {
    const remainingTime = calculateRemainingTime(expirationTime);
    setToken(token);
    localStorage.setItem('token',token);
    localStorage.setItem('expirationTime',expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if(remainingTime){
      logoutTimer = setTimeout(logoutHandler, remainingTime);
    }
  },[remainingTime, logoutHandler])
  const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
  }
  
  return <AuthContext.Provider value = {contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;