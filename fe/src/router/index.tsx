import {Route, Routes} from 'react-router-dom'
import Layout_client from '../layouts/client'
import Layout_admin from '../layouts/admin'
import Home_page from '../pages/client/home/page'

export default function Routes_page() {
  return (
    <Routes>
        {/* client */}
        <Route path='/' element={<Layout_client/>}>
         <Route index element={<Home_page/>}/>
        </Route>

        {/* admin */}
        <Route path='/adminstration' element={<Layout_admin/>}>

        </Route>
    </Routes>
  )
}
