import { MainLayout } from '@/Layouts'
import { Home, Locations } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'locations',
        element: <Locations />,
      },
    ],
  },
])
