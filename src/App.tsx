import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Head } from './components/Head';
import { NavBar } from './components/NavBar';
import { ChooseRoom } from './components/ChooseRoom';
import { RoomSlider } from './components/RoomSlider';
import { AboutMe } from './components/AboutMe';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';

// import './assets/css/bootstrap/bootstrap.css'
// import './assets/css/animate.css'
// import './assets/fonts/ionicons/css/ionicons.min.css'
// // import './assets/css/owl.carousel.min.css'
// import './assets/fonts/flaticon/font/flaticon.css'
// import './assets/fonts/fontawesome/css/font-awesome.min.css'
// import './assets/css/bootstrap-datepicker.css'
// import './assets/css/select2.css'
// import './assets/css/helpers.css'
// import './assets/css/style.css'


function App() {
  return (
    <div className="App">
      {/* <ChooseRoom /> */}
      {/* <img src="assets/images/type1.png" alt="" /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
        </Routes>
      </Router>
      {/* <RoomSlider /> */}
      {/* <AboutMe /> */}
    </div>
  );
}

export default App;
