import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='container footer_container'>
            <div className="">
                <h2>CONTACT INFORMATION</h2>
                <p>House:15,Road:11,Nikunja-2,Khilkhet,Dhaka</p>
                <span><strong>Email</strong>: Bd.travel@gmail.com</span><br />
                <span><strong>Phone</strong>: +0018938473249</span>
            </div>
            <div className="">
                <h2>LEGAL</h2>
                <ul>
                    <li>Claim</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div className="">
                <h2>SITEMAPS</h2>
                <ul>
                    <li>Home</li>
                    <li>Package</li>
                    <li>Event</li>
                    <li>Admin</li>
                </ul>
            </div>
            <div className="">
                <h2>Pay With</h2>
                <img style={{ width: '200px', height: '130px' }} src="https://img.freepik.com/free-vector/payment-methods-collection_23-2147698486.jpg?w=740" alt="" />
            </div>
        </div>
    );
};

export default Footer;