import React, { useEffect, useState } from 'react';
import TreeView from 'react-treeview';
import './TreeView.css';

function PlantView(props) {
    //the default selected leaf node
    const [row,setRow] = useState(props.row);
    const [col,setCol] = useState(props.col);

    //converting the data format applicable for the TreeView
    const convertJSON=(obj)=>{
        let parsed = []
        for (var i=0; i<obj.length;i++){
          let plant = obj[i]["type"];
          let plant_dict =  {"type":plant, "collapsed":false, "structure":[]};
          //parsing the given JSON data
          let leaf_color = obj[i]["leaf_color"];
          let leaf_shape = obj[i]["leaf_shape"];
          let stem_color = obj[i]["stem_color"];
          //create a data structure for the TreeView
          plant_dict["structure"][0] = {"name":"Leaf", "color":leaf_color,"shape":leaf_shape}; //characters for leaf
          plant_dict["structure"][1] = {"name":"Stem", "color":stem_color}; //characters for stem
          //append to JSON array
          parsed.push(plant_dict)
          
        }
        return parsed; 
   
    }
      
    //update the selected leaf node
    const handleClick = (type, struct,attribute)=> (e) =>{
        let row = type;
        let col = struct.name+"_"+attribute;
        props.onChangeSelected(row,col); //pass the selected leaf information to the parent
        setRow(row); setCol(col);

    }

    //check if this leaf is selected
    const checkSelected = (type,struct,attribute)=>{
        let thisCol = struct.name+"_"+attribute;
        if (type == row && thisCol == col){
            return "selected";
        }
    }

    return (
        <div className="header-list">
            {convertJSON(props.data).map((plant,i)=>{
                const plant_type = plant.type;
                const label = <span className="node">{plant_type}</span>
                return (
                    <div key={plant_type+i} className="header-list" >
                        <TreeView  key={plant_type+i} nodeLabel={label} defaultCollapsed={false}>
                            {plant.structure.map ( 
                                structure =>{
                                    const label2 = <span className="node">{structure.name}</span>

                                    return(
                                        <div className="header-list" key={structure.name}>
                                            
                                            <TreeView key={plant_type+structure.name} nodeLabel={label2} >
                                                <div className="header-list">
                                                    <span key="color" className={checkSelected(plant_type,structure,"color")} onClick={handleClick(plant_type,structure,"color")}>{structure.color && <p>color:</p> && structure.color}</span>
                                                    <br/>
                                                    <span key="shape" className={checkSelected(plant_type, structure,"shape")} onClick={handleClick(plant_type, structure,"shape")}> {structure.shape && <p>shape:</p> && structure.shape}</span>
                                                </div>
                                            </TreeView>
                                        </div>
                                    );
                                }
                            )}
                        </TreeView>
                    </div>
                )

            })}
        </div>
    );
}

export default PlantView;