import React, { useEffect } from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/widgets/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/features/userSlice';
import NotFound from './pages/NotFound';
import firebaseApp from "./firebase";
import Gallery from "./components/widgets/Gallery";
import {RainbowFirebaseApp} from "@rainbow-modules/app";

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])


  return (
    // <Router>
      <RainbowFirebaseApp app={firebaseApp}>
      <div className="md:overflow-x-auto overflow-x-hidden bg-primary">
        <section>
          <div>
            <Routes>
              <Route element={<ProtectedRoute user={user} />}>
                <Route
                  path="/home"
                  element={
                    < Home />
                  }
                />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={< NotFound />} />
            </Routes>
          </div>
        </section>

      </div>
      </RainbowFirebaseApp>
    // </Router>
);
}

export default App;



