import React from 'react'
import { Band } from './Class_Band'

export const ListItem = (props) => {
    
    let band = props.band
    //Quick check that the band is an instance of the Band class
    if(band instanceof Band) {
        console.log(band.name + "is a member of Band class reports ListItem Component.")
    }
    
    const DeleteButtonClicked = () =>{
        //call the function passed with deleteButton property
        props.deleteButton(band);
    }
    
    return (
        <div className="ListItem">
            id : {band.id}<br/>
            Name : {band.name}<br/> 
            Style : {band.style}<br/>
            Age : {band.GetAge()}
            <br/>
            <button onClick={DeleteButtonClicked}>Delete</button>
        </div>
    )
}

export const CreateListItemFromBandClass = (band, deleteButtonFunction) => {
    //creates and return a react element from instance of Band class 'band'
    //Give delete button function a defalt value.
    if(deleteButtonFunction == null) deleteButtonFunction = ()=> {console.log("No delete button function given")}
    let element = React.createElement(ListItem, {band:band, deleteButton:deleteButtonFunction, key:band.id})
    return element
}

export const CreateListItemsFromBandArray = (bandArray,deleteButtonFunction) => {
    //Creates a bunch of these fabulous elements
    let items = []
    bandArray.forEach(band => {
        items.push(CreateListItemFromBandClass(band,deleteButtonFunction))
    });
    return items
}
