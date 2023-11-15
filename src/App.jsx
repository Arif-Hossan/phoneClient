import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./layout/Main"
import Home from "./component/Home/Home"
import Phones from "./component/Phones/Phones"
import Phone from "./component/Phone/Phone"


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <Main></Main>,
      children :[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/phones',
          element:<Phones></Phones>,
          loader : ()=> fetch('http://localhost:5000/phones')
        },
        {
          path: '/phone/:id',
          element : <Phone></Phone>,
          loader: ({params})=>fetch(`http://localhost:5000/phone/${params.id}`)
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
