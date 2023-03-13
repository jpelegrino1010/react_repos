
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Accounts from './components/accounts/accounts';
import Cards from './components/cards/cards';
import Home from './components/home/Home';
import Loans from './components/loans/loans';
import Login from './components/login/Login';
import Logout from './components/login/logout';
import Notices from './components/notices/notices';

const router=createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/home',element:<Home/>},
  {path:'/notices',element:<Notices/>},
  {path:'/loans',element:<Loans/>},
  {path:'/accounts',element:<Accounts/>},
  {path:'/cards',element:<Cards/>},
  {path:'/logout',element:<Logout/>}
])

function App() {

  return <div className='App'><RouterProvider router={router}/></div> 
}

export default App;
