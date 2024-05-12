import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';





function CommanLayout() {
  return (
    <div className="bg-black">
    <NavBar />
    <Outlet/>
    </div>
  )
}

export default CommanLayout