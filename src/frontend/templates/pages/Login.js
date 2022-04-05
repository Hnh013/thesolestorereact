import React , { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import '../../styles/pages/auth.css';
import { useUser } from '../../contexts/userContext';
import loginFormInputs from '../forms/LoginFormArray';
import { loginAction } from '../../services/authService';
import { toastError, toastSuccess } from '../../services/toastService';

export const Login = () => {
  
    const { userDispatcher } = useUser();
    const navigate = useNavigate();   
    const [credentials,setCredentials] = useState({ email : '', password : '' });
    
    const handleCredentialsChange = (e) => {
        const { name,value } = e.target;
        const currentCredentials = { ...credentials , [name]:value }
        setCredentials(currentCredentials);
    }
    
    const testLogin = () => {
        setCredentials({email: "adarshbalika@gmail.com",password: "Adarshbalika@123"});
    }
    
    const Login = async (e) => {
    e.preventDefault();
    let response;
    try {
        response = await loginAction(credentials);
        if (response.actionSuccess) {
            toastSuccess('You have Succesfully Logged In!');
            let { foundUser , encodedToken } = response.actionResponse.data;
            userDispatcher({ type: 'login' , payload : { foundUser , encodedToken }});
            navigate('/');
        } else {
            if(response.actionResponse.response.status === 404 || response.actionResponse.response.status === 401 ) {
            toastError(response.actionResponse.response.data.errors[0].split('.')[0]); 
           } else {
            toastError('Oops, an error has occured!');
           }
        }
    } catch(error) {
        response = error;
        console.log(response);
    }
  }

    return (
        <>
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
                        <div className='f-w-800 f-2x ta-c txt-calm'> LOGIN</div>
                        <form onSubmit={(e) => Login(e)}>
                            {loginFormInputs.map(x => 
                                <div className='d-flex fd-col px-md' key={x.id}>
                                    <label className='f-w-700 py-xs' htmlFor={x.name}>{x.placeholder}</label>
                                    <input { ...x } onChange={(e) => handleCredentialsChange(e)} value={credentials[x.name]} className='px-xs py-xs bdr-rad-sm' />  
                                        {(credentials[x.name].length > 0) && <span className='err-msg txt-fire f-w-600'>{x.errormessage}</span> }
                                </div>)}
                        <div className='d-flex px-lg py-sm'>
                        <button type='submit' className='btn btn-calm d-flex jc-c w-100 f-w-600 bdr-rad-md'>Login</button>  
                        </div>
                        </form>
                        <div className='d-flex px-lg'>
                        <button onClick={() => testLogin()} className='btn btn-eco d-flex jc-c w-100 f-w-600 bdr-rad-md'>Enter Test Credentials</button>  
                        </div>

                        <div className='px-lg f-w-500'>Don't have an Account ? <Link to='/signup'><span className='txt-calm f-w-800'>Signup Here</span></Link></div>   
                    </div>
              
                </div>
            </div>
        </main>

        </>
    );
}


