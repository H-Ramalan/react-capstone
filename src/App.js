import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<Details />} />
    </Routes>
  </>
);

export default App;
