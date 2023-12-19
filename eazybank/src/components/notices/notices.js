import { connect } from 'react-redux'
import {getNotices} from '../../redux/actions/notice';
import {useEffect} from 'react'
import Footer from '../../UI/footer';


const Notices=props=> {
    const {notices,onLoadNotices}=props;
    useEffect(()=>{
        onLoadNotices();        
            console.log(notices);               
    },[])

    const noticesData=notices.map(notice=>(
        
                <tr key={notice.noticeId}>
                <td>{notice.noticeId}</td>
                <td>{notice.noticeSummary}</td>
                <td>{notice.noticeDetails}</td>                
                </tr>                
           
    ));

    
    
    return <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Notice Summary</th>
                <th scope="col">Notice Details</th>                
                </tr>
            </thead>
            <tbody>
                {noticesData}
            </tbody>
            
        </table>
       
       <Footer/>
        
    </div>
}

const mapStateToProps=state=>{
    return {
        notices: state.notice.notices
    }
}

const mapDispatchToProps=dispatch=> {
    return {
        onLoadNotices: ()=> dispatch(getNotices())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Notices);