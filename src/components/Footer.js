import React, { Component } from 'react'
import styled from 'styled-components';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import '../styles/aem-grid.css';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>

                <footer id="footer">
                    <div className="container">
                        <div className="aem-Grid  aem-Grid--12">

                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className="useful-link">
                                    <h2>Account</h2>
                                    <div className="use-links">
                                        <li><i className="fa-solid fa-angles-right"></i> Sign In</li>
                                        <li><i className="fa-solid fa-angles-right"></i> Register</li>
                                        <li><i className="fa-solid fa-angles-right"></i> Order Status</li>
                                    </div>
                                </div>

                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className="social-links">
                                    <h2>About Us</h2>
                                    <div className="social-icons">
                                        <li> Our Story</li>
                                        <li> Careers</li>
                                    </div>
                                </div>


                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className="address">
                                    <h2>Help</h2>
                                    <div className="social-icons">
                                        <li> Contact Us</li>
                                        <li> Order Status</li>
                                        <li> Returns</li>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <h2>Follow Us!</h2>
                                <div className="footer-about">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                                    <img src={facebook} alt="product" />
                                    <img src={twitter} alt="product" />
                                    <img src={instagram} alt="product" />
                                </div>

                            </div>
                        </div>
                    </div>

                </footer>
                <section id="copy-right">

                    <div className='container navbar'>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div>
                                    <h4>VENIA</h4>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <div>
                                    © Company Name Address Ave, City Name, State ZIP
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div className='navSearch'>
                                    <ul className='Navbar_two'>
                                        <li><a href="">Terms of Use</a></li>
                                        <li><a href="">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.nav`
   
#footer{
	background: #f7f7f7;
    padding: 3rem;
	/* padding-top: 5rem; */
	padding-top: 7rem;
    padding-bottom: 80px;
    color:#000 !important;
	background-image: #fff;
}
#footer2{
	background: #f7f7f7;
    padding: 3rem;
    margin-top: 0px;
	/* padding-top: 5rem; */
	padding-top: 7rem;
    padding-bottom: 80px;
	background-image: #fff;
}
.logo-footer{
	/* max-width: 300px; */
}
.social-links{
	/* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

}
.social-links h2{
	padding-bottom: 15px;
	font-size: 20px;
    font-weight: 600;
}

li{
	list-style: none;
}
.useful-link h2{
	padding-bottom: 15px;
	font-size: 20px;
    font-weight: 600;
}
.useful-link img{
	padding-bottom: 15px;
}
.use-links{
	line-height: 32px;
}
.use-links li i{
	font-size: 14px;
    padding-right: 8px;
    color: #898989;
}
.use-links li a{
	color: #303030;
    font-size: 15px;
    font-weight: 500;
	color: #777777;
}
.use-links li a:hover{
	color: #000;
}
.address h2{
	padding-bottom: 15px;
	font-size: 20px;
    font-weight: 600;
}
.address img{
	padding-bottom: 15px;
}
.address-links li a{
	color: #303030;
    font-size: 15px;
    font-weight: 500;
	color: #777777;

}
.address-links li i{
	font-size: 16px;
    padding-right: 8px;
	color: #82074a;

}
.address-links li i:nth-child(1){
	padding-top: 9px;
}
.address-links .address1{
	font-weight: 500;
    font-size: 15px;
	display: flex;
}
.address-links{
	    line-height: 32px;
		color: #777777;
}
.copy-right-sec{
	padding: 1.8rem;
    background: #fff;
    color: #545D63;
    text-align: center;
}
.copy-right-sec a{
	color: #fcd462;
    font-weight: 500;
}
a{
  text-decoration:none;
}

/* footer section end */
`;

