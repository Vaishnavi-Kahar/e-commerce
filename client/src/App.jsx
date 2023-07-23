import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    // useNavigate
  } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
  

const App = () =>{
    const user=useSelector((state)=>state.user.currentUser);
    console.log(user);
    // const navigate = useNavigate();
    
    // if (user) {
    //     navigate("/");
    // }

    return (
        <div>
        <Router>
            <Routes>

                <Route exact path='/' element={<Home/>} />
                <Route path='/products/:category' element={<ProductList/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/login'  element={user ? <Navigate to="/" replace /> : <Login />} />
                <Route path='/register'  element={<Register />} />
                <Route path='/success'  element={<Success />} />


            </Routes>
        </Router>
    </div>
    );
};

export default App;