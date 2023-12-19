import classess from "./home.module.css";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

const Home=(props)=> {
  const {user}=props;
    return <div className={classess.home}>Home Page
      <div>
        <h1>Hola {user.username} Bienvenido a Eazy Bank</h1>
        <Link to="/notices">Notices</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
}

const mapStateToProps=state=> {
  return {
    user: state.loginReducer.user
  }
}

export default connect(mapStateToProps)(Home);