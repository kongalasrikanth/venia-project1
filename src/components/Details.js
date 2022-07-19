import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../styles/aem-grid.css';
import heart from '../images/heart.jpg';
import share from '../images/share.jpg';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id,  img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="page_container padding_details">

                            <div className="aem-Grid  aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 padding_details">
                                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                                        <img width={100} src={img} className="img-fluid" alt="product" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                                        <img width={100} src={img} className="img-fluid" alt="product" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                                        <img width={100} src={img} className="img-fluid" alt="product" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 padding_details">
                                    <img width={300} src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className=" aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 padding_details pagetext-capitalize">
                                    <ul className="breadcrumb">
                                        <li><a >Clothing</a></li>
                                        <li><a >Women's</a></li>
                                        <li><a >OuterWear</a></li>
                                    </ul>
                                    <h3> <strong>{title}</strong></h3>
                                    <h6 className="text-blue">
                                        <strong>
                                            <span>$</span>
                                            {price}
                                        </strong>
                                    </h6>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star empty_checked"></span>
                                    <span className="fa fa-star empty_checked"></span>
                                    <p >{info}</p>
                                    <hr />
                                    

                                    <div className='color_width'>
                                        <h5>Color</h5>
                                        <span className='color1'></span>
                                        <span className='color2'></span>
                                        <span className='color3'></span>
                                        <span className='color4'></span>
                                    </div>
                                    <div className='size'>
                                        <h5>Size</h5>
                                        <span >XS</span>
                                        <span >S</span>
                                        <span >M</span>
                                        <span >L</span>
                                        <span >XL</span>
                                    </div>
                                    <div>
                                        <p>Quantity</p>
                                        <span
                                            className="increment"

                                        >
                                            -
                                        </span>
                                        <span className="increment1">1</span>
                                        <span
                                            className=" increment"

                                        >
                                            +
                                        </span>
                                    </div><br />
                                    <div className='cart_display'>
                                        <ButtonContainer className='addtocart'
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                        <Link to='/cart'>
                                            <ButtonContainer >
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                    <div>
                                        <span><img src={heart} />&nbsp;&nbsp;Save</span>&nbsp;&nbsp;<span><img src={share} />&nbsp;&nbsp;Share</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid  aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                    <h3> <strong>{title}</strong></h3>
                                    <h5> <strong>Decription</strong></h5>
                                    <p>{info}</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <h4>Details</h4>
                                    <div className="aem-Grid  aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--6">
                                            <p>Details</p>
                                            <p>Details</p>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--6">
                                            <p>Details</p>
                                            <p>Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
