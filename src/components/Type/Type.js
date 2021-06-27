import React from 'react';
import PropTypes from 'prop-types';
import TableType from './TableType';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect , useState} from 'react';
import { showType } from '../../actions/typeActions';
import axios from 'axios';
import { Link } from 'react-router-dom';

Type.propTypes = {
    
};



function Type(props) {


    const typeList = useSelector(state => state.type.list);//Lay state co trong store
    
    const dispatch = useDispatch();

    const [types, settypes] = useState([]);

   

    
    

    useEffect(() => {
        async function fetchType(){
            const response = await axios
            .get(`http://localhost:8000/api/indexType`)
            .catch((err)=>{
                console.log(err);
            });
             
            settypes(response.data);

            
        }

        fetchType();
        
    }, []);

    
    
    
    /*async function handleForDelereType(idType){

       

        const response = await axios
        .delete(`http://localhost:8000/api/deleteProduct/${idProduct}`)
        .catch((err)=>{
            console.log(err);
        });
        
        
        dispatch(removeType(types,idType));
       
        setproducts(response.data);
        
        
    }*/

    
    
    

    
    return (
           <div className="main_content container-fluid">
                <div className=" row header">Type List</div>
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to="/type/add"  className="float-right btn btn-success ">Thêm Type</Link>
                    </div>
                </div>
            
                <TableType types = {types} />
       
                
            </div>
      
    );
}

export default Type;