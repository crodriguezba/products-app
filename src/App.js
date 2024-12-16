import { ProductList } from './components/ProductList';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <UserList />
    </div>
  );
}

export default App;