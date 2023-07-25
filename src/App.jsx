
import FilterState from './components/FilterState'
import Home from './components/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Crop from './components/Crop';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='cropper' element={<Crop />} />
  </Route>
));
function App() {
  return (
    <FilterState>
      <RouterProvider router={router} />
    </FilterState>

  )
}

export default App
