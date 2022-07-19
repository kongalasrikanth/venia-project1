import React, { Component } from "react";
import edit from '../../images/edit.svg';
import remove from '../../images/trash.svg';
import heart from '../../images/heart.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem, cartSubTotal, cartTax, cartTotal } = this.props.value;
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (
            <div className="aem-Grid  aem-Grid--12 pagetext-capitalize pagetext-center">
                <div className="aem-GridColumn aem-GridColumn--default--2">
                    <img
                        src={img}
                        style={{ width: "5rem", heigth: "5rem" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 ">
                    <span className="d-lg-none">product :</span> {title}
                    <strong>
                        <span className="d-lg-none">price :</span> ${price}
                    </strong>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 ">

                    <div>
                        <span
                            className="increment"
                            onClick={() => decrement(id)}
                        >
                            -
                        </span>
                        <span className="increment1">{count}</span>
                        <span
                            className=" increment"
                            onClick={() => increment(id)}
                        >
                            +
                        </span>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 ">
                    <div className=" cart-icon" onClick={() => removeItem(id)}>
                        <span><img src={edit} alt=""/>&nbsp; Edit Item</span>
                        <span><img src={remove} alt=""/>&nbsp; Remove</span>

                        <span><img src={heart} alt=""/>&nbsp; Save For Later</span>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3 total">
                    <h5>
                        <span>item total : ${total} </span>
                    </h5>
                    <h5>
                        <span > subtotal :</span>{" "}
                        <span>$ {cartSubTotal} </span>
                    </h5>
                    <h5>
                        <span > tax :</span>
                        <span>$ {cartTax} </span>
                    </h5>
                    <h5>
                        <span > total :</span>{" "}
                        <span>$ {cartTotal} </span>
                    </h5>
                    <div className="payPal">
                        <h4>CHECKOUT</h4>
                    </div>
                    <br />
                    <div className="payPal">
                        <div className="responsivePayPal">
                            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />
                        </div>
                    </div>

                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12 recent_viewed">
                    <h2>Recently Viewed</h2>
                    <Carousel responsive={responsive}>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>
                        <div><img src={img} width={100} alt='imagem' title='imagem' /><br />
                            <span className="d-lg-none">product :</span> {title}<br />
                            <strong>
                                <span className="d-lg-none">price :</span> ${price}
                            </strong>
                        </div>

                    </Carousel>

                </div>
            </div>

        );
    }
}