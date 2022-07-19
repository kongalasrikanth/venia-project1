import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';
import '../styles/aem-grid.css';
import heart from '../images/heart.jpg';

export default class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                            </Link>
                           
                            </div>
                        )}
                    </ProductConsumer>

                    
                    <div className="card-footer">
                        <h6><b>{title}</b></h6>
                        <p>
                            <span >$</span>
                            {price}
                        </p>
                        <img src={heart} alt="product" />
                        
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

