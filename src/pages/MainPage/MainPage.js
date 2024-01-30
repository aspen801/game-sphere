import Catalog from '../../Components/Catalog/Catalog.js';
import Header from '../../Components/Header/Header.js';
import Intro from '../../Components/Intro/Intro.js';
import SlideTopSell from '../../Components/SlideTopSell/SlideTopSell.js';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './MainPage.scss';

const MainPage = () => {

  return (
    <div className='MainPage'>
      <Header/>
      <Catalog/>
      <Intro/>
      <SlideTopSell/>
    </div>
  );
}

export default MainPage;
