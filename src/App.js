import './App.css';
import HeaderComponent from "./component/header/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FooterComponent from "./component/footer/FooterComponent";
import ImageTopic from "./component/topic/ImageTopic";
import MainProduct from "./component/main_product/MainProduct";


function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <ImageTopic/>
            <MainProduct/>
            <FooterComponent/>

        </div>
    );
}

export default App;
