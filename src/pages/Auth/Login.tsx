import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Loading from 'src/components/global/Loading';
import {useState} from 'react'
import { Alert } from '@mui/material';
import AuthService from 'src/services/AuthService'


import { useDispatch } from 'react-redux'
import { setUser } from 'src/store/slices/UserSlice';
import { useNavigate  } from 'react-router-dom';



function Login() {

  const navigate = useNavigate();

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')
  const [loading , setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleLogin = async (e:unknown) => {
    setLoading(true);
    setError('');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.preventDefault();

    if(!email || !password){
      setError("Email and password fields are required")
      setLoading(false)
    }

    const res = await AuthService.login(email , password)

    if(res.success == false ){
      setError('Username or password is incorrect.')
    }

    setLoading(false)
    dispatch(setUser(res.user))

    navigate('/')
  }

  return (
    <div className="tw-flex tw-rounded-lg tw-justify-center tw-bg-[#000000] tw-flex-grow tw-max-w-[700px] tw-p-5">
      
      {loading && <Loading />}
      
      <div className="tw-flex tw-flex-col  tw-flex-grow tw-max-w-[600px]">

        <div className="tw-flex tw-my-14 tw-w-full tw-justify-center">
          <label className="tw-font-bold tw-text-4xl">Log in to Melodify</label>
        </div>

        {error != '' && 
          <div className='tw-mb-5'>
            <Alert severity="error">{error}</Alert>
          </div>
        }
        <div className="tw-mb-10  tw-flex tw-flex-col tw-gap-3">
          <center>
            <div style={{ border : '1px solid rgba(255,255,255,0.7)' }} className="tw-cursor-pointer tw-flex tw-max-w-[400px] tw-gap-20 tw-bg-transparent tw-rounded-2xl tw-w-full tw-p-3">
              <GoogleIcon className='tw-ml-5 tw-my-auto ' />
              <label className='tw-cursor-pointer tw-my-auto tw-font-bold tw-justify-center'>Continue with google</label>
            </div>
          </center>

          <center>
            <div style={{ border : '1px solid rgba(255,255,255,0.7)' }} className="tw-cursor-pointer tw-flex tw-max-w-[400px] tw-gap-20 tw-bg-transparent tw-rounded-2xl tw-w-full tw-p-3">
              <FacebookIcon className='tw-ml-5 tw-my-auto ' />
              <label className='tw-cursor-pointer tw-my-auto tw-font-bold tw-justify-center'>Continue with Facebook</label>
            </div>
          </center>

          <center>
            <div style={{ border : '1px solid rgba(255,255,255,0.7)' }} className="tw-cursor-pointer tw-flex tw-max-w-[400px] tw-gap-20 tw-bg-transparent tw-rounded-2xl tw-w-full tw-p-3">
              <AppleIcon className='tw-ml-5 tw-my-auto ' />
              <label className='tw-cursor-pointer tw-my-auto tw-font-bold tw-justify-center'>Continue with Apple</label>
            </div>
          </center>

        </div>

        <hr />


        <form onSubmit={e => handleLogin(e)} className="tw-mb-10 tw-mt-10 tw-flex tw-flex-col tw-gap-5">

          <div className='tw-w-full tw-flex tw-justify-center'>
            <div className="tw-cursor-pointer tw-flex tw-max-w-[400px] tw-w-full">
              
              <div className='tw-flex tw-gap-2 tw-flex-col'>
                  <label className='tw-cursor-pointer tw-text-xs tw-font-bold '>Email or username</label>
                  <div style={{ border : '1px solid rgba(255,255,255,0.7)' }} className='tw-p-3 tw-rounded-md tw-bg-[#121212] tw-flex tw-min-w-[400px] tw-my-auto'>
                    <input onChange={(e) => setEmail(e.target.value)} style={{ borderColor : 'None' }} className='tw-bg-[#121212] tw-w-full' required placeholder='Email or username' type='email' />
                  </div>
              </div>
            
            </div>
          </div>

          <div className='tw-w-full tw-flex tw-justify-center'>
            <div className="tw-cursor-pointer tw-flex tw-max-w-[400px] tw-w-full">
              
              <div className='tw-flex tw-gap-2 tw-flex-col'>
                  <label className='tw-cursor-pointer tw-text-xs tw-font-bold '>Password</label>
                  <div style={{ border : '1px solid rgba(255,255,255,0.7)' }} className='tw-p-3 tw-rounded-md tw-bg-[#121212] tw-flex tw-min-w-[400px] tw-my-auto'>
                    <input onChange={(e) => setPassword(e.target.value)} style={{ borderColor : 'None' }} className='tw-bg-[#121212] tw-w-full' required placeholder='Password' type='password' />
                  </div>
              </div>
            
            </div>
          </div>


          <div className='tw-w-full tw-mt-5 tw-flex tw-justify-center'>
            <button type='submit' style={{ border : '1px solid rgba(255,255,255,0.7)' }} className="tw-cursor-pointer tw-flex tw-justify-center tw-max-w-[400px] tw-gap-20 tw-bg-[#1FDF64] tw-rounded-3xl tw-w-full tw-p-3">
              <label className='tw-cursor-pointer tw-text-black tw-my-auto tw-font-bold tw-justify-center'>Log In</label>
            </button>
          </div>


          <div className='tw-w-full tw-mb-3 tw-mt-5 tw-flex tw-justify-center'>
            <label className=' tw-underline tw-cursor-pointer hover:tw-text-[#1FDF64]'>Forgot your password?</label>
          </div>

          <hr />

          <div className='tw-w-full tw-mb-3 tw-mt-5 tw-flex tw-justify-center'>
            <label className='tw-text-[#82A7A7] tw-cursor-pointer '> Don't have an account? <span className='tw-text-white hover:tw-text-[#1FDF64] tw-text-underline'>Sign up for Melodify</span></label>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Login