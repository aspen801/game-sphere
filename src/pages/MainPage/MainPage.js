import Catalog from '../../components/Catalog/Catalog';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import { SlideTopSell } from '../../components/SlideTopSell/SlideTopSell';
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
