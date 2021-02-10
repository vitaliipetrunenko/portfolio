import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ContentBlock from './components/contentBlock/contentBlock';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ContentBlock />
      <Footer />
    </div>
  );
}


export default App;
