import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserSection = () => {
    const navigate = useNavigate();

  return (
    <>
         <div className='user_account_section'>
                                        <div className='text-center'>
                                            <span className='quantity_text'>Hello </span>
                                            <span className='user_bold_text'>Username</span>
                                            <span className='ml-2 quantity_text'>(not <span className='user_bold_text'>Username</span>?)</span>
                                            <button className='account_tab_btn user_logout_btn ml-3' onClick={() => navigate("/login")}>logout</button>
                                        </div>

                                        <div className='text-center mt-3'>
                                            <span className='quantity_text'>From your account dashboard you can view your <span className='user_bold_text'>Wishlist</span>, <span className='user_bold_text'>Shipping Details</span>, and <span className='user_bold_text'>Shopping Cart</span></span>
                                        </div>                                       
                                    </div>
    </>
  )
}


export default UserSection