import React from 'react'
import App from '../App'
import { MUSIC_STYLES } from '../Constants/MUSIC_STYLES'
import { Band } from './Class_Band'
import {bands} from './Globals'

export const ListItem = (props) => {
    
    const ButtonClicked = () =>{
        console.log("List item button clicked")
    }

    let band = props.band
    
    if(!band instanceof Band) alert ("Band classs error")
    
    return (
        <div className="ListItem">
            id : {band.id}<br/>
            Name : {band.name}<br/> 
            Style : {band.style}<br/>
            Age : {band.GetAge()}
            <br/>
            <button onClick={ButtonClicked}>Delete</button>
        </div>
    )
}
