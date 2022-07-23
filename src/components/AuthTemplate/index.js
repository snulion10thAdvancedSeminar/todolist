import React, { useState } from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

function AuthTemplate() {
  const [screen, setScreen] = useState('signin');

  const onChangeScreen = (nextScreen) => {
    setScreen(nextScreen);
  }

  if (screen === 'signin') {
    return <SignIn onChangeScreen={onChangeScreen} />;
  } else {
    return <SignUp onChangeScreen={onChangeScreen} />;
  }
}

export default AuthTemplate;
