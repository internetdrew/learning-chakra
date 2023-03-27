import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Create, Dashboard, Profile } from './pages';
import RootLayout from './layouts/RootLayout';
import { tasksLoader } from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path='create' element={<Create />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
