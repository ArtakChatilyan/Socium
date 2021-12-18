import logo from './logo.svg';
import './App.css';
import Navbar from './componenst/navbar/Navbar';
import Content from './componenst/content/Content';

function App() {
  return (
    <div className="app_wrapper">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <Navbar />

      <Content />

      <footer className='footer'>
        footer
      </footer>
    </div>
  );
}

export default App;
