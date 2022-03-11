import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import FooterMobile from './components/FooterMobile';

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <FooterMobile />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));
