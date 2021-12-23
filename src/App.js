import {Route} from 'react-router-dom';
import './css/style.css';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Main from './main/main.js';
import Department from './sub/Department.js';
import Community from './sub/Community.js';
import Youtube from './sub/Youtube.js';
import Gallery from './sub/Gallery.js';
import Location from './sub/Location.js';
import Login from './sub/Login.js';
import Join from './sub/Join.js';


function App() {
  return (
    <div className="App">

      <Header />
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/join" component={Join}></Route>
      <Footer />

    </div>
  );
}

export default App;
