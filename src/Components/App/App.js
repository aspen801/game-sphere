import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import { SlideTopSell } from '../SlideTopSell/SlideTopSell';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

const App = () => {

  return (
    <div className='App'>
      <Header/>
      <Catalog/>
      <Intro/>
      <SlideTopSell/>
    </div>
  );
}

export default App;
