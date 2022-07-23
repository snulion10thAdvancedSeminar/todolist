import './App.scss';
import AuthTemplate from './components/AuthTemplate';
import TodoTemplate from './components/TodoTemplate';

function App() {
  // TODO: 적절한 인증값 받아오는 로직 작성
  if (window.sessionStorage.getItem('isAuthenticated')) {
    return <TodoTemplate />;
  } else {
    return <AuthTemplate />;
  }
}

export default App;
