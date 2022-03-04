import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddEvent from './Components/AddHotPackage/AddHotPackage';
import ManageUser from './Components/ManageUser/ManageUser';

import Order from './Components/Order/Order';
import SingleHotPack from './Components/SingleHotPack/SingleHotPack';
import EventDetails from './Components/Event/EventDetails/EventDetails';
import Footer from './Components/Footer/Footer';
import Packages from './Components/Packages/Packages';
import SinglePackage from './Components/SinglePackage/SinglePackage';
import Event from './Components/Event/Event';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/singleHotPack/:hpid'>
              <SingleHotPack></SingleHotPack>
            </Route>
            <Route path='/eventDetails/:eid'>
              <EventDetails></EventDetails>
            </Route>
            <Route path='/packages'>
              <Packages></Packages>
            </Route>
            <Route path='/singlePackages/:sid'>
              <SinglePackage></SinglePackage>
            </Route>
            <Route path='/events'>
              <Event></Event>
            </Route>
            <Route path='/order'>
              <Order></Order>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <Route path='/addEvent'>
              <AddEvent></AddEvent>
            </Route>
            <Route path='/manageUser'>
              <ManageUser></ManageUser>
            </Route>

            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
