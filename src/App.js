import React from 'react';
import GlobalStyles from './styles/global';
import Login from './pages/Login'
import Routes from './routes';
function App() {
  return (
    <>
      <Routes>
        <Login />
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;