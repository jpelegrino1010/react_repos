import classes from './customer.module.css';
import {useState} from 'react'
import Footer from '../../UI/footer';
import {saveCustomer} from '../../redux/actions/customer'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom'


const Customer=props=> {

    const [customer,setCustomer]=useState({name:'',password:'',rol:'',mobileNumber:'',email:''});
    const {onCreateCustomer}=props;
    const navigate=useNavigate();

    const changeHandler=e=> {
        const {name,value}=e.target;

        setCustomer(prev=>{
            return {...prev,[name]:value}
        })
    }

    const onSubmitHandler= async e=> {
        e.preventDefault();
      await  onCreateCustomer(customer);
        navigate('/home');


    }

    return<div className={classes.customer}>
        <h1>Register Customer</h1>

        <form onSubmit={onSubmitHandler}>            
            <div className='form-group'>
                <label for="name">Name</label>
                <input type="text" className="form-control" onChange={changeHandler} id="name" name='name' value={customer.name} placeholder="Name"/>
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" onChange={changeHandler} id="password" name='password' value={customer.password} placeholder="Password"/>
            </div>

            <div className="form-group">
                <label for="rol">Rol</label>
                <input type="text" className="form-control" onChange={changeHandler} id="rol" name='rol' value={customer.rol} placeholder="rol"/>
            </div>

            <div className="form-group">
                <label for="mobileNumber">Mobile Number</label>
                <input type="text" className="form-control" onChange={changeHandler} id="mobileNumber" name='mobileNumber' value={customer.mobileNumber} placeholder="Mobile Number"/>
            </div>

            <div className="form-group">
                <label for="emailAddress">Email Address</label>
                <input type="text" className="form-control" onChange={changeHandler} id="emailAddress" name='email' value={customer.email} placeholder="Email Address"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <Footer/>

    </div>;
}

const mapDispatchToProps=dispatch=> {
    return {
        onCreateCustomer: customer=> dispatch(saveCustomer(customer))
    }
}

const mapStateToProps=state=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps) (Customer);