import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-top">
                    <p>Easy Returns: <a href="#">Free Replacement or Full Refund</a></p>
                </div>
                <hr />
                <div class="footer-links">
                    <div class="column">
                        <h3>Let us help</h3>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Bulk Order Inquiry</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h3>Our Company</h3>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">For investors</a></li>
                            <li><a href="#">For media</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Annual Returns</a></li>
                            <li><a href="#">Corporate Social Responsibility</a></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h3>Our policies</h3>
                        <ul>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy and Cookie Policy</a></li>
                            <li><a href="#">Copyright matters</a></li>
                            <li><a href="#">Patents & trademarks</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>02522-669393 <a href="#">Home</a></p>
                    <p>&copy; 2001-2024 Vistaprint. All rights reserved.</p>
                    <p>Unless stated otherwise, prices are exclusive of delivery and product options.</p>
                    <div class="payment-icons">
                        {/* <img src="mastercard.png" alt="MasterCard" /> */}
                        {/* <img src="visa.png" alt="Visa" /> */}
                    </div>
                    <div class="social-icons">
                        <a href="https://www.facebook.com" target="_blank" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>&nbsp;
                        <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fa-brands fa-twitter"></i></a>&nbsp;
                        <a href="https://wa.me/9555274441" target="_blank" class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>&nbsp;
                        <a href="https://www.linkedin.com" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin"></i></a>&nbsp;
                        <a href="https://www.youtube.com" target="_blank" class="social-ion"><i class="fa-brands fa-youtube"> </i></a>
                        <div class="country-selector">
                            {/* <img src="india-flag.png" alt="India" /> */}
                        </div>
                    </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer