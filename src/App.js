import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogPage from './components/DialogPage/DialogPage';
import NewsFeed from './components/NewsFeed/NewsFeed';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Sidebar />
      <div className="ContentBlock">
      <Redirect to="/news/" />
          <Route exact path='/news/' component={NewsFeed}  />
          <Route path='/profile/' component={ProfilePage}/>
          <Route path='/messages/' component={DialogPage}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}


export default App;
