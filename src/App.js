import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route, Routes} from "react-router-dom";
import IntroductionPage from "./component/introduce/IntroductionPage";
import Layout from "./component/layout/Layout";
import HomePage from "./component/home/homepage/Homepage";
import ProductPage from "./component/products/productPage/ProductPage";


function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />  {/* Trang chủ */}
                <Route path="/introduce" element={<IntroductionPage />} />
                <Route path="/products/*" element={<ProductPage />} />
            </Route>
        </Routes>
    );
}

export default App;
