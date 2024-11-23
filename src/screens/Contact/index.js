
import React from 'react'
import UserLayout from '../../components/Layout/userlayout'
import CustomBanner from '../../components/CustomBanner'
import Contact from '../../components/Contact'

const ContactPage = () => {
  return (
    <>
    <UserLayout>

     <CustomBanner text="contact us"/>

      <Contact className="py-5" />

    </UserLayout>
  </>
  )
}

export default ContactPage