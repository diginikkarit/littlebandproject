import React from 'react'
import { CreateListItemFromBandClass,CreateListItemsFromBandArray } from './ListItem'
import {MUSIC_STYLES, bands, Band, DataManager} from '../exporter'
import {useEffect, useState} from 'react';

export const MainList = (props) => {
    
    const [listItems, setListItems] = useState([])
    
    const UpdateList = () => {
        //Creates an array of react elemens from band class objects
        //Calls given function for updating. 
        //This can be any function, that returs array of bands.
        let bands = props.UpdateFunction()
        console.log("--Updatefuntion called, returned")
        //console.table(bands)
        let bandElements = CreateListItemsFromBandArray(bands,DeleteListItem)
        setListItems(bandElements)
    }
    
    const DeleteListItem = (band) => {
        //console.log("DeleteListItem triggered with id : "+band.id)
        //remove the desired object with DataManager
        DataManager.RemoveBandWithID(band.id)
        //update the itemList
        UpdateList()
    }

    const AddListItem = (band) => {
        //this might be used later. Called from listItem Editor
        let element = CreateListItemFromBandClass(band,DeleteListItem)
        bands.push(element)
        UpdateList()
    }

    const ShowCurrentBandsArray = (objectArray) => {
        //Helper funtion to show object in array when needed.
        //will take any array        
        let table = DataManager.GetAllBands()
        table = objectArray.map(element => {
            let props = []
            Object.keys(element).forEach(key => {
                props.push(key+" : "+element[key]+"\n")
            })
            
            return props+"\n"
        })
        let str = "Objects in array': \n\n"+table
        //console.table(str);
        alert(str)
    }
    
    useEffect(() => {
        // Runs ONCE after initial rendering
        // https://dmitripavlutin.com/react-useeffect-explanation/
        // lets update the list for the first time
        UpdateList()
    }, []);

    return (
        <div>
            <div className="listContainer">
            <h1> List Items</h1>
            <button onClick={() => ShowCurrentBandsArray(bands)}>Examine 'bands'</button>
            <button onClick={UpdateList}>Update from 'bands'</button>
            <div className="">
            {listItems}
            </div>
            </div>
        </div>
    )
}
