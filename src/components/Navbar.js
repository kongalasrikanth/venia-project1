import React, { Component } from 'react'
import search from '../images/search.jpg';
import user from '../images/user.jpg';
// import '../src/index.css';
import { Link } from 'react-router-dom';
import shop from '../images/shopping-bag.jpg';

export default class Navbar extends Component {
    render() {
        return (

            <div className='page_container navbar'>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div>
                            <h4><a href="/">VENIA</a></h4>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                        <div className='Nav'>
                            <ul className='Navbar_one'>
                                <li><a href="">Women</a></li>
                                <li><a href="">Men</a></li>
                                <li><a href="">Smart Gear</a></li>
                                <li><a href="">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='navSearch'>
                            <ul className='Navbar_two'>
                                <img src={search} />
                                <li><a href="">Search</a></li>
                                <img src={user} />
                                <li className='dropdown'><a href="">Sign in</a>
                                    <div className="dropdown">

                                        <div className="item">
                                            <section>
 
                                                <form method="post" className="log-form">
                                                    <h2>Sign in to your Account</h2>
                                                    <div className="group log-input">
                                                        <label>Email</label>
                                                        <input type="text" id="username" name="username" placeholder="Username" />
                                                    </div>

                                                    <div className="group log-input">
                                                        <label>Password</label>
                                                        <input type="password" id="password" name="password" placeholder="Password" />
                                                    </div>
                                                    <button>Sign In</button><br /><br />
                                                    <button>Create Account</button>

                                                </form>



                                            </section>
                                        </div>
                                    </div>
                                </li>


                                <li> <Link to='/cart'><img src={shop} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
