import React from 'react';
import PropTypes from 'prop-types';

TableProduct.propTypes = {
    products: PropTypes.array,
    idForDelete: PropTypes.func,
};

TableProduct.defaultProps = {
    products: [],
    idForDelete: null,
}



function TableProduct(props) {
    const {products, idForDelete} = props;

    function handleDeleteClick(productId){
        if(idForDelete){
            idForDelete(productId);
        }
    }

    return (

        
        <div className="row mt-4">
                <div className="col-12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Mã Sản Phẩm</th>
                                <th scope="col">Tên Săn Phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {products.map((product, index) =>(
                                    <tr key={index}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.name}</td>
                                        <td>{product.wPrice}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary">Sủa</button>
                                            <button onClick = {() => handleDeleteClick(product.id)} type="button" className=" ml-1 btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>

                            
                            </div>
                </div>
    );
}

export default TableProduct;