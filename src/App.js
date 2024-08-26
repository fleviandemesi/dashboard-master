import './App.css';
import Categories from './components/Categories/categories';
import AddShoe from './components/addshoe/AddShoe';
import Shoes from './components/shoes/Shoe';
import MainContent from './components/maincontent/MainContent';

import NotFound from './components/notfound/NotFound';
import Profile from './components/profile/Profile';
// import Profile from './components/Profile/Profile';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import Orders from './components/Orders/Orders';
import AddCategory from './components/addcategory/addcategory';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Routes>
      <Route index  element={<MainContent />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/e" element={<Profile />} /> */}
      <Route path="/categories" element={<Categories />} />
      <Route path="/addshoe" element={<AddShoe />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/category" element={<AddCategory />} />
      <Route path="/profile" element={<Profile />} />


      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
