import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Details from './components/Details';
import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route element={<Countries />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    <Countries />
  </>
);

export default App;
