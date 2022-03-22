import React, { useState } from 'react';

function Table(props) {
    
    const checkSelected = (type, attr)=>{
        const selectedPlant = props.row;
        const selectedAttr = props.col;
        if (selectedPlant == type && selectedAttr == attr){
            return 'selected'; //this is a cell that is clicked in the tree
        }
    }

    const displayTable = () =>{
  
        return props.data.map(
            row =>
            <tr key={row.type}>
                <td >{row.type}</td>    
                <td  id="leaf_color" className = {checkSelected(row.type, "Leaf_color")}>{row.leaf_color}</td>
                <td className = {checkSelected(row.type, "Leaf_shape")}>{row.leaf_shape}</td>
                <td className = {checkSelected(row.type, "Stem_color")}>{row.stem_color}</td>
            </tr>
            
        );
    }

    return (
        <div>
             <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Plant</th>
                                <th>Leaf_Color</th>
                                <th>Leaf_Shape</th>
                                <th>Stem_Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayTable()}
                        </tbody>
              </table>    
        </div>
    );
}

export default Table; 