import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
