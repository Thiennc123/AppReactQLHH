import React from 'react';
import PropTypes from 'prop-types';
import TableProduct from './TableProduct';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect , useState} from 'react';
import { showProduct, removeProduct } from '../../actions/productAction';
import axios from 'axios';
import { Link } from 'react-router-dom';
Product.propTypes = {
    
};





function Product(props) {

    const productList = useSelector(state => state.product.list);//Lay state co trong store
    
    const dispatch = useDispatch();

    const [products, setproducts] = useState([]);

   

    
    

    useEffect(() => {
        
        

        async function fetchProduct(){
            const response = await axios
            .get(`http://localhost:8000/api/indexProduct`)
            .catch((err)=>{
                console.log(err);
            });
             
            setproducts(response.data);

            
        }

        fetchProduct();
        
    }, []);

    
    
    
    async function handleForDelereProduct(idProduct){

       

        const response = await axios
        .delete(`http://localhost:8000/api/deleteProduct/${idProduct}`)
        .catch((err)=>{
            console.log(err);
        });
        
        
        dispatch(removeProduct(products,idProduct));
       
        setproducts(response.data);
        
        
    }

    

    

    
    return (
           <div className="main_content container-fluid">
                <div className=" row header">Product List</div>
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to="/product/add"  className="float-right btn btn-success ">Thêm Sản Phẩm</Link>
                    </div>
                </div>
            
                <TableProduct products = {products} idForDelete = {handleForDelereProduct}/>
       
                
            </div>
      
    );
}

export default Product;
