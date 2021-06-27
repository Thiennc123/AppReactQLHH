import React from 'react';
import PropTypes from 'prop-types';

TableType.propTypes = {
    types: PropTypes.array,
    idForDelete: PropTypes.func,
};

TableType.defaultProps = {
    types: [],
    idForDelete: null,
}



function TableType(props) {
    const {types, idForDelete} = props;

    function handleDeleteClick(typeId){
        if(idForDelete){
            idForDelete(typeId);
        }
    }

    return (

        
        <div className="row mt-4">
                <div className="col-12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Mã Type</th>
                                <th scope="col">Tên Type</th>
                                
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {types.map((type, index) =>(
                                    <tr key={index}>
                                        <th scope="row">{type.type_id}</th>
                                        <td>{type.name}</td>
                                        
                                        <td>
                                            <button type="button" className="btn btn-primary">Sủa</button>
                                            <button onClick = {() => handleDeleteClick(type.id)} type="button" className=" ml-1 btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>

                            
                            </div>
                </div>
    );
}

export default TableType;