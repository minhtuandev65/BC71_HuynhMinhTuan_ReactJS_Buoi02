
import './App.css';
import Banner from './homepage/Banner.jsx';
import Footer from './homepage/Footer.jsx';
import Header from './homepage/Header.jsx';
import Item from './homepage/Item.jsx';

function App() {
  return (
    <div>
      <Header />
      <div>
          <Banner />
          <Item />
      </div>
      <Footer />

    </div>
  );
}

export default App;
