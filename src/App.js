import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogPage from './components/DialogPage/DialogPage';
import NewsFeed from './components/NewsFeed/NewsFeed';



function App(data) {
  
   
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <Header />
      <Sidebar />
      <div className="ContentBlock">
      <Redirect to="/news/" />
            <Route exact path='/news/' render={(props) => (
          <NewsFeed postDB={data.state.postData.postDB} dispatch={data.dispatch} newPostTextField={data.state.postData.newPostTextField} isAuthed={true} />
        )}
      />
          <Route path='/profile/' render={(props) => (
          <ProfilePage postDB={data.state.postData.postDB} isAuthed={true} />
        )}/>
          <Route path='/messages/' render={(props) => (
          <DialogPage currUser= {data.state.dialogData.SessionInfo.currUser} newMessageTextField={data.state.dialogData.newMessageTextField} dialoglistDB={data.state.dialogData.dialoglistDB} dialogMessagesDB={data.state.dialogData.dialogMessagesDB} dispatch={data.dispatch} isAuthed={true} />
        )}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}


export default App;

