import Layout from './components/layout';
import Country from './pages/Country';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const routs = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/:country',
          element: <Country />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
    </>
  );
}

export default App;
