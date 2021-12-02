import React from 'react'
import { Band } from './Class_Band'
import {useState, useEffect} from 'react'
import { MUSIC_STYLES } from '../Constants/MUSIC_STYLES'

export const ListItem = (props) => {
    
    //this is link to the band class object in 'bands'
    let band = props.band

    //states needed for updating values
    //these are not directy connected to the 'bands' objects
    const [yearFounded, setYearFounded] = useState(band.yearFounded)
    const [name, setName] = useState(band.name)
    const [style, setStyle] = useState(band.style)
    //Quick check that the band is an instance of the Band class
    if(band instanceof Band) {
        console.log(band.name + " item updated")
    }
    
    const DeleteButtonClicked = () =>{
        //call the function passed with deleteButton property
        props.deleteButton(band);
    }
    
    const InputFieldValueChanged = (eventArgs,propertyName,setFunction) => {
        
        //get hold of the element using eventArgs
        let element = document.getElementById(eventArgs.target.id)
        //get the field value
        let inputValue = element.value
        //set the state with the function provided in parameters
        
        //if inputValue can be parsed to Number, do so.
        //this keeps the numbers as numbers and text as text
        //note numbers as a band name is also changed
        if(!isNaN(parseInt(inputValue))) inputValue = parseInt(inputValue)
        
        //modify the actual value in 
        band[propertyName] = inputValue
        
        setFunction(band[propertyName])
    }
    
    const CreateMusicDropdownElements = () => {
        let elements = []
        //iterate thrue all the elements in MUSIC_STYLES and create dropdown option elements
        //also select current as default value.
        Object.keys(MUSIC_STYLES).forEach((style)=>{
            if(MUSIC_STYLES[style] == band.style){
                elements.push(<option defaultValue={style} key={style}>{MUSIC_STYLES[style]}</option>)
            }else{
                elements.push(<option value={style} key={style}>{MUSIC_STYLES[style]}</option>)
            }
        } )
        return elements
    }
    
    //Using CreateMusicDropdownElements to set the state, so this needs to be after the function
    const [musicStyleDropdownElements, setMusicStyleDropdronElements] = useState(CreateMusicDropdownElements())
    
    const DropDownHandler = (event) => {
        //get the value of the currently selected element
        let selectedValue = event.target.selectedOptions[0].value
        //set the value for the band object in 'bands'
        band.style = MUSIC_STYLES[selectedValue]
        //update view
        setStyle(band.style)
    }

    
    return (
        <div className="ListItem">
            id : {band.id}<br/>
            Name : <input type="input" id={"name_input_"+band.id} onChange={(e) => InputFieldValueChanged(e,"name",setName)} value={name} ></input><br/> 
            Style :
            <select onChange={(e) => DropDownHandler(e)} defaultValue={band.style}>
                {musicStyleDropdownElements}
            </select>
            <br/>
            {/* Calling ValueChanged with eventArgs and custom parameters */}
            Year Founded :<input type="input" id={"yearFounded_input_"+band.id} onChange={(eventArgs) => InputFieldValueChanged(eventArgs,"yearFounded",setYearFounded)} value={yearFounded} ></input><br/>
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
