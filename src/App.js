import './App.css';
import React from 'react'
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Profile from './profile';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      
      <h1>React Tutorial</h1>
      <Nav/>
    
      <Routes>
      <Route path="/shop/:id"  element= {<Shop/>}/>
      <Route path="/about"  element= {<About/>}/>
      <Route path="/" exact  element= {<Home/>} />
      <Route path="/profile" exact  element= {<Profile/>} />
      <Route  exact element= {<NotFound/>} />
      </Routes>
      
      
      
    </div>
    </Router>
   
  );
}
const Home = () =>(
  <div>
    <h1>
      Home Page
      WELOCOME BACK
    </h1>
    <h3>Things to be done before the end of today</h3>
    <table align='center' border="1" width='50%'>
      <tr  >
        <th >Home</th>
        <th>About</th>
        <th>Shop</th>
      </tr>
      <tr className="table">
        <td>Home</td>
        <td>About</td>
        <td>Shop</td>
      </tr>
      <tr>
        <td>Home</td>
        <td>About</td>
        <td>Shop</td>
      </tr>
    </table>
    <br />
    <table align='center' border="1" width='50%'>
      <tr  >
        <th >Home</th>
        <th>About</th>
        <th>Shop</th>
      </tr>
      <tr className="table">
        <td>Home</td>
        <td>About</td>
        <td>Shop</td>
      </tr>
      <tr>
        <td>Home</td>
        <td>About</td>
        <td>Shop</td>
      </tr>
    </table>
  </div>
);
const NotFound = () => (
  <div>
<h1> 404 Page Not Found</h1>
  </div>


);


export default App;
