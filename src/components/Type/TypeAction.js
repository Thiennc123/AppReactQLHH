import React from 'react';
import PropTypes from 'prop-types';
import { useEffect , useState} from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios';

TypeAction.propTypes = {
    onSubmit: PropTypes.func,
    
};

TypeAction.defaultProps = {
  onSubmit: () => {},
  
}



function TypeAction(props) {
    const [value, setvalue] = useState('');
    let history = useHistory()

    function handleChangeValue(e) 
    { 
        setvalue(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault();

        const formValues = {
            name: value
        };

        
        

        axios({
        method: 'post',
        url: `http://localhost:8000/api/addType`,
        data: formValues,
        responseType: 'json'
        })
        .then(function (response) {
            history.goBack()
        });
        
    }

    

    
    return (
         <div className="main_content container-fluid">
                <div className=" row header">Add Type</div>
                <div className="row mt-3">
                    <div className="col-12">
                       <form onSubmit = {handleFormSubmit} className="form-group">
                         <label >Nhap Type</label>
                         <input 
                            type="text" 
                            className="form-control" 
                            name="nameType" 
                            value = {value} 
                            id="nameType" 
                            placeholder=" Nhap vao Type"
                            onChange = {handleChangeValue}
                            />
                         <button type="submit" className="btn btn-success mt-2">Add Type</button>
                       </form>
                    </div>
                </div>
            
                
       
                
            </div>
    );
}

export default TypeAction;