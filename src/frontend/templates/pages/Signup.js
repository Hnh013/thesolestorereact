import React, { useState } from 'react';
import '../../styles/pages/auth.css';
import signupFormInputs from '../forms/SignupFormArray';
import { Link, useNavigate } from 'react-router-dom';
import { signupAction } from '../../services/authService';

export const Signup = () => {
    const navigate = useNavigate();
    const [userDetails,setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email : '',
        password : ''
    });

    const handleUserDetailsChange = (e) => {
        const { name,value } = e.target;
        const currentUserDetails = { ...userDetails , [name]:value }
        setUserDetails(currentUserDetails);
    }

    const SA = async (e) => {
        e.preventDefault();
        let response;
        try {
            response = await signupAction(userDetails);
            if(response.actionSuccess) {
                navigate('/login');
            }
        } catch(error) {
            response = error;
            console.log(response);
        }
    }

    return (
        <main className='main-auth'>
        <div className='login-body'>
        <div className='login-container mx-auto w-75'>
            <div className='login-graphic d-flex ai-c jc-c fd-col'>
                 <div className="pos-rel no-pm">
                    <span className='logo-bg'>TSS</span>
                 
                     <span className='logo-fg bg-rainy pos-abs'>
                         <span className='txt-calm'>The&nbsp;</span>
                         <span className='txt-sun'>Sole&nbsp;</span>
                         <span className='txt-fire'>Store</span>
                     </span>
                 </div>
                 <div className='f-w-500 logo-text'>Best Footwear . Best Prices</div>
            </div>
            <div className="login-form-wrapper px-md py-sm d-flex fd-col gap-1 jc-c">
                 <div className='f-w-800 f-2x ta-c txt-calm'> SIGNUP</div>
                 <form onSubmit={(e) => SA(e)}>
                 {signupFormInputs.map(x => 
                                <div className='d-flex fd-col px-md' key={x.id}>
                                    <label className='f-w-700 py-xs' htmlFor={x.name}>{x.placeholder}</label>
                                    <input { ...x } onChange={(e) => handleUserDetailsChange(e)} value={userDetails[x.name]} className='px-xs py-xs bdr-rad-sm' />  
                                        {(userDetails[x.name].length > 0) && <span className='err-msg txt-fire f-w-600'>{x.errormessage}</span> }
                                </div>)}


                 <div className='d-flex px-lg py-sm'>
                     <button type='submit' className='btn btn-calm d-flex jc-c w-100 f-w-600 bdr-rad-md'>Signup</button>  
                 </div>
                 </form>
                 <div className='px-lg f-w-500'>Already have an Account ? <Link to='/login'><span className='txt-calm f-w-800'>Login Here</span></Link></div> 
            </div>
        </div>
        </div>
        </main>

    );
}