import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col items-center bg-gradient-to-r from-[#673AB7] to-[#311B92] text-white'>
      <div className='flex flex-row gap-x-36 pt-8 pb-4'>
        <div className="pr-[400px]">
            <h1 className="text-xl font-bold pb-8">Contact</h1>
            <p>Medicine Department<br/>
            Old Secretariat, Delhi-110054<br/>
            Email: info@education.delhi.gov.in<br/>
            Phone: +91-11-2389000</p>
        </div>
        <div>
            <h1 className="text-xl font-bold pb-8">Resources</h1>
            <h4>FAQs</h4>
            <h4>User</h4>
            <h4>Guide</h4>
            <h4>Privacy Policy</h4>
            <h4>Term of Service</h4>
        </div>
        <div>
            <h1 className="text-xl font-bold pb-8">Quick Links</h1>
            <h4>Home</h4>
            <h4>Dashboards</h4>
            <h4>Blood</h4>
            <h4>Admin</h4>
        </div>
      </div>
      <div className="justify-center py-3">
        <p>© 2024 Medical Department, Ministry of Health. All Rights Reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer
