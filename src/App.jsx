import {createBrowserRouter, RouterProvider,createRoutesFromElements, Route,redirect} from "react-router-dom"
import { About, Home, Vans ,VanDetail} from "./Pages";
import { Layout,HostLayout,HostVanDetail ,Error} from "./Components";
import { Income,DashBoard,Reviews ,Hostvans,Hostvandetails,HostVanprice,HostvanPhoto} from "./Pages/Host";
import './server'

import Login from "./Pages/Login";
import { loader as vanDetailsLoader } from "./Pages/VanDetail";
import {  loader as vanDataLoader } from "./Pages/Vans";
import { loader as hostVans } from "./Pages/Host/vans";
import { requestAuth } from "./utils";
import { loader as HostVanDetailLoader } from "./Components/HostVanDetail";

  const router=createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout/>} errorElement={<Error/>}>
       
            <Route index element={<Home/>}/>
          
            <Route path='about' element={<About/>}
            loader={requestAuth}/>
            <Route path='vans' element={<Vans/>} loader={vanDataLoader} />
            <Route path="vans/:id" element={<VanDetail/>} loader={vanDetailsLoader}/>
            <Route path="login" element={<Login />} />
            <Route path="Host" element={<HostLayout/>} >
              <Route index 
              element={<DashBoard/>}
              
              />
              <Route path="vans" element={<Hostvans/>} loader={hostVans}/>
                <Route path="vans/:id" element={<HostVanDetail/>}  loader={HostVanDetailLoader} >
                  <Route index element={<Hostvandetails/>}/>
                  <Route path="price" element={<HostVanprice/>}  />
                  <Route path="photos" element={<HostvanPhoto/>} />
                </Route>
              <Route path="Income" element={<Income/>}/>
              <Route path="Reviews" element={<Reviews/>}/>
            </Route>
            <Route path="*" element={<h1 className="flex w-full h-full text-6xl">page not found</h1>}/>
          </Route>
     
  ))

function App() {
  
  return (
    <div className="app-shell min-h-screen w-full">
   <RouterProvider router={router}/>
  </div>
  );
}
export default App