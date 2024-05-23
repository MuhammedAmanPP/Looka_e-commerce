import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-details'>
      <div className='footer-about'>
        <h6>Contact Us</h6>
        <h6>About Us</h6>
        <h6>Careers</h6>
        <h6>Flipkart Stories</h6>
        <h6>Press</h6>
        <h6>Corporate Information</h6>
      </div>

      <div className='footer-company'>
      <h6>Myntra</h6>
        <h6>Flipkart Wholesale</h6>
        <h6>Cleartrip</h6>
        <h6>Shopsy</h6>
      </div>

      <div className='footer-help'>
      <h6>Payments</h6>
        <h6>Cancellation & Returns</h6>
        <h6>FAQ</h6>
        <h6>Report Infringement</h6>
      </div>

      <div className='footer-consumer'>
      <h6>Cancellation & Returns</h6>
        <h6>Terms Of Use</h6>
        <h6>Security</h6>
        <h6>Privacy</h6>
        <h6>Sitemap</h6>
        <h6>Grievance Redressal</h6>
        <h6>EPR Compliance</h6>
      </div>

      <div className='footer-mail ps-5'>
      <h6>Flipkart Internet Private Limited, </h6>
        <h6> Buildings Alyssa, Begonia & </h6>
        <h6> Clove Embassy Tech Village, </h6>
        <h6> Outer Ring Road, Devarabeesanahalli Village, </h6>
        <h6> Bengaluru, 560103, </h6>
        <h6> Karnataka, India</h6>
      </div>

      <div className='footer-office-address ps-5'>
      <h6>Flipkart Internet Private Limited,  </h6>
        <h6> Buildings Alyssa, Begonia & </h6>
        <h6> Clove Embassy Tech Village, </h6>
        <h6> Outer Ring Road, Devarabeesanahalli Village, </h6>
        <h6> Bengaluru, 560103, </h6>
        <h6> Karnataka, India</h6>
        <h6>  CIN : U51109KA2012PTC066107 </h6>
        <Link to={'/1212121212'}> 1234567890</Link>
      </div>
      </div>
      <hr/>
      <div className='copy-right'>

      </div>
    </div>
  )
}

export default Footer
