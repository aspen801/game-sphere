import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import { SlideTopSell } from '../SlideTopSell/SlideTopSell';
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
