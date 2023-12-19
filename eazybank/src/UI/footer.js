import { Link } from 'react-router-dom';
import classes from './footer.module.css'

const Footer=props=> {
    return<div className={classes.footer}>
        <div className="row">
            <div className="col"><Link to="/home">Home</Link></div>
            <div className="col"><Link to="/logout">Logout</Link></div>
        </div>
    </div>;
}

export default Footer;