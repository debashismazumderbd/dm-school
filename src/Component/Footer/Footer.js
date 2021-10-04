import React from 'react';
import './Footer.css';


const Footer = () => {
    
    return (
        <div className='bg-dark text-white p-5 footer'>
            {/* link use for footer */}
         <a href="https://www.facebook.com/">Facebook</a>
         <a href="https://mail.google.com/">E-mail</a>
         <a href="https://www.linkedin.com/">Linkedin</a>
            <h1>dm school</h1>
            <p>© 2020 All Rights Reserved. Designed by dm school</p>
        </div>
    );
};

export default Footer;