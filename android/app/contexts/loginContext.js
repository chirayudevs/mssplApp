import React, { useState, createContext } from 'react';

export const LoginContext = createContext({});

export const LoginProvider = ({children}) => {
/*

  const [userEmail, setUserEmail] = useState('jihowex810@bagonew.com');
  const [userPassword, setUserPassword] = useState(12345678);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
*/


/*
  const [userEmail, setUserEmail] = useState('jihowex810@bagonew.com');
  const [userPassword, setUserPassword] = useState(12345678);
*/

  const login = (email, password) => {
    console.log('context')
    /*setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');*/

    let dataToSend = {email: 'jihowex810@bagonew.com', password: '12345678'};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch('https://aws-task-pfxn.onrender.com/auth/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        /*setLoading(false);
        console.log({responseJson});
        console.log('test >')*/
        // If server response message same as Data Matched
        console.log(responseJson)
        if (responseJson.statusCode === 200) {
          console.log('test')
          console.log(responseJson.data.user?.email);
          //navigation.replace('DrawerNavigationRoutes');
          //navigation.navigate('RegisterScreen')

        } else {
          //setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });
  };

  const logOut = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  return (
    <LoginContext.Provider value={{login}}>
      {children}
    </LoginContext.Provider>
  )
};
