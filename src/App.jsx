import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { Cart } from "./Components/pages/Cart";
import { Error } from "./Components/pages/ErrorPage";
import { Header } from "./Components/layouts/UI/Header";
import { Footerpage } from "./Components/layouts/UI/Footerpage";
import { Provider } from "react-redux";
import { store } from "./Components/Redux data/Store";
import { Login } from "./Components/pages/Login";
import { Productdetails } from "./Components/pages/Productdetails";
import ProductGrid from "./Components/pages/Categories";

function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cartegory' element={<ProductGrid></ProductGrid>} />
         <Route path='/login' element={<Login></Login>} />
         <Route path='/product/:id' element={<Productdetails></Productdetails>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footerpage />
      </Provider>
    </>
  );
}

export default App;
