import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogPage from './components/DialogPage/DialogPage';
import NewsFeed from './components/NewsFeed/NewsFeed';
import lorem1 from "./media/photos/image01__.jpg"
import lorem2 from "./media/photos/images.jpg"
import lorem3 from "./media/photos/lorem-ipsum-generator-cicero-engraving.png"


function App() {
  
   let postDB = [
     {txt: "post 1", img: null},
     {txt: "lorem", img: lorem1},
     {txt: "lorem lorem lorem", img: lorem2 },
     {txt: "lorem...", img: lorem3}
    ];
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <Header />
      <Sidebar />
      <div className="ContentBlock">
      <Redirect to="/news/" />
            <Route exact path='/news/' render={(props) => (
          <NewsFeed postDB={postDB} isAuthed={true} />
        )}
      />
          <Route path='/profile/' component={ProfilePage}/>
          <Route path='/messages/' component={DialogPage}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export const currUser="dima";
export default App;
