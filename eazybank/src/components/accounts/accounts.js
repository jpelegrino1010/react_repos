import { connect } from 'react-redux'
import {getAccount} from '../../redux/actions/account'
import {useEffect} from 'react'
import Footer from '../../UI/footer';


const Accounts=props=> {
    const {account,onLoadAccount}=props;

    useEffect(()=> {
        onLoadAccount(1);
    },[])

    
    return <div>
        <h1>Account Page</h1>
        <div className='row'>
            <div className='form-group'>
                <label>Customer ID</label>
                <div className='col'>
                    {account.customerId}
                </div>
            </div>

            <div className='form-group'>
                <label>Account Number</label>
                <div className='col'>
                    {account.accountNumber}
                </div>
            </div>

            <div className='form-group'>
                <label>Account Type</label>
                <div className='col'>
                    {account.accountType}
                </div>
            </div>

            <div className='form-group'>
                <label>Branch Address</label>
                <div className='col'>
                    {account.branchAddress}
                </div>
            </div>
        </div>
        <Footer/>
        
    </div>
}

const mapStateToProps=state=> {
    return {
        account:state.account.account
    }
}

const mapDispatchToProps=dispatch=> {
    return {
        onLoadAccount:id=> dispatch(getAccount(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Accounts);