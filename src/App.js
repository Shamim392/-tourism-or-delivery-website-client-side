import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateEvent from './components/CreateEvent/CreateEvent';
import EventList from './components/EventList/EventList';
import ScheduleList from './components/ScheduleList/ScheduleList';
import EventDetails from './components/EventDetails/EventDetails';
import EventUpdate from './components/EventUpdate/EventUpdate';
import ScheduleUpdate from './components/ScheduleUpdate/ScheduleUpdate';
import Events from './components/Events/Events';
import MySchedule from './components/MySchedule/MySchedule';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <PrivateRoute exact path='/createevent'>
              <CreateEvent></CreateEvent>
            </PrivateRoute>
            <PrivateRoute exact path='/eventlist'>
              <EventList></EventList>
            </PrivateRoute>
            <PrivateRoute exact path='/schedulelist'>
              <ScheduleList></ScheduleList>
            </PrivateRoute>
            <PrivateRoute path="/eventdetails/:id">
              <EventDetails></EventDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/eventupdate/:id">
              <EventUpdate></EventUpdate>
            </PrivateRoute>
            <PrivateRoute exact path="/scheduleupdate/:id">
              <ScheduleUpdate></ScheduleUpdate>
            </PrivateRoute>
            <Route exact path='/events'>
              <Events></Events>
            </Route>
            <PrivateRoute exact path='/myschedule'>
              <MySchedule></MySchedule>
            </PrivateRoute>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
