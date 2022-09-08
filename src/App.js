import { useEffect } from 'react';
import { silentRefresh } from './api/auth';
import './App.scss';
import AuthTemplate from './components/AuthTemplate';
import TodoTemplate from './components/TodoTemplate';

function App() {
  useEffect(() => {
    silentRefresh();
  }, []);

  // TODO: 적절한 인증값 받아오는 로직 작성
  if (window.sessionStorage.getItem('refreshToken')) {
    return <TodoTemplate />;
  }
  
  return <AuthTemplate />;
}

export default App;
