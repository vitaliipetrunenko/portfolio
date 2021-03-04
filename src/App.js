import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="ContentBlock">
          <ProfilePage />
      </div>
      <Footer />
    </div>
  );
}


export default App;
