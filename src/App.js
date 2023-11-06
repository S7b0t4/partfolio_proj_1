import './App.css';
import HeaderBody from './Components/Header/HeaderBody';
import MainBody from './Components/Main/MainBody';
import FooterBody from './Components/Footer/FooterBody';
function App() {
  return (
    <div className='main_body'>
      <div>
        <HeaderBody />
      </div>
      <div>
        <MainBody/>
      </div>
      <div>
        <FooterBody/>
      </div>
    </div>
  );
}

export default App;
