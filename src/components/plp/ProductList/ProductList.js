import React, { Component } from 'react';
import ProductTile from '../ProductTile/ProductTile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './productlist.scss';
import mockData from './mock_data.js';

class ProductList extends Component {
    render() {
        return (
            <div className="product_list__wrapper">
                {this.renderProducts()}
            </div>
        );
    }

    renderProducts() {
        /*
        const product_indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let username = 'ivelin';
        let password = '82078207ivo';
        let headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(username + ':' + password)
        };
        let data = product_indices.map(id => {
            return new Promise((resolve, reject) => {
                fetch(`https://localhost:8080/api/product/${id}/`, {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: headers
                })
                    .then(res => {
                        return {
                            json: res.json(),
                            ok: res.ok
                        };
                    })
                    .then(({ json, ok }) => {
                        if (ok) resolve(json);
                        else reject(json);
                    });
            });
        });
        console.log(data);*/
        let data = mockData;
        return data.map((product, index) => {
            return (
                <div key={`${product.name}_${index}`} className="col col-xs-100 col-md-50 col-lg-33 col-big-25">
                    <ProductTile {...product} />
                </div>
            );
        });
    }
}

ProductList.propTypes = {
    products: PropTypes.array
};

const mapStateToProps = state => {
    const props = {
        products: state.products
    };
    return props;
};

export default connect(mapStateToProps)(ProductList);
