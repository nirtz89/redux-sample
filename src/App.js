import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"


function App() {

  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.products.find((p) => p.id === 1));

  const dispatch = useDispatch();

  const { buyProduct, sellProduct } = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div className="App">
      <h1>{product.name}</h1>
      <h2>Quantity: {product.quantity}</h2>
      <button onClick={() => buyProduct(1)}>Buy it</button>
      <button onClick={() => sellProduct(1)}>Return it</button>
    </div>
  );
}

export default App;
