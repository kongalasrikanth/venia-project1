import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { ProductConsumer } from '../context';
import '../styles/aem-grid.css';
export default class ProductList extends Component {

    render() {
          
        return (
            <React.Fragment>
                <div>
                    <div className="page_container">
                        <Title name="our" title="products" />

                        <div className="aem-Grid  aem-Grid--12">
                            <div className='aem-GridColumn aem-GridColumn--default--3 breadcrumbmobile aem-GridColumn--phone--12'>
                                <ul className="breadcrumb">
                                    <li><a >Clothing</a></li>
                                    <li><a >Women's</a></li>
                                    <li><a >OuterWear</a></li>
                                </ul>
                                <p>Filters</p>
                                <hr />
                                <h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option2"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <a href=''>Show More</a>
                                <hr />
                                <h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option2"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <a href=''>Show More</a>
                                <hr />
                                <h6>Color</h6>
                                <div className='color_width'>
                                <span className='color1'></span>
                                <span className='color2'></span>
                                <span className='color3'></span>
                                <span className='color4'></span>
                                <span className='color5'></span>
                                <span className='color6'></span>
                                <span className='color7'></span>
                                <span className='color8'></span>
                                <span className='color9'></span>
                                <span className='color10'></span>
                                </div>
                                <hr />
                                <h6>Attribute</h6>
                                <input type="checkbox" id="Option1" name="Option1" value="Option1" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option2" name="Option2" value="Option2" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option2"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <input type="checkbox" id="Option3" name="Option3" value="Option3" /><span>&nbsp;&nbsp;</span>
                                <label htmlFor="Option"> Option</label><br />
                                <a href=''>Show More</a>
                                <hr />
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
                                <div className='sort'>
                                <select>
                                    <option>Sort by Latest</option>
                                </select>
                                </div>
                                <div className='aem-Grid  aem-Grid--12'>
                                    <ProductConsumer>
                                        {(value) => {
                                            return value.products.map(product => {
                                                return <Product key={product.id} product={product} />
                                            });
                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}
