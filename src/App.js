import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '~/page/Home'
import Following from '~/page/Following'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Folo" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;