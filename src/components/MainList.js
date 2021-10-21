import React from 'react'
import { CreateListItemFromBandClass,CreateListItemsFromBandArray } from './ListItem'
import {Band} from './Class_Band'
import {MUSIC_STYLES} from '../Constants/MUSIC_STYLES'
import {bands} from './Globals'
import {useEffect, useState} from 'react';

export const MainList = (props) => {

    const [listItems, setListItems] = useState([])

    const TestDATA = () => {
        //creates test data and puts in the 'bands' array
           let band1 = new Band("Metallica",1980,MUSIC_STYLES.TRASH_METAL)
           let band2 = new Band("Anthrax",1981,MUSIC_STYLES.TRASH_METAL)
           let band3 = new Band("Hives",2003,MUSIC_STYLES.ROCK)
           let band4 = new Band("Slipknot",1999,MUSIC_STYLES.NU_METAL)
           bands.push(band1,band2,band3,band4)
    }

    const AddListItem = (band) => {
        //this might be used later. Called from listItem Editor
        let element = CreateListItemFromBandClass(band,DeleteListItem)
        bands.push(element)
        UpdateListItemsFromBands()
    }

    const DeleteListItem = (band) => {
        //delete an object from 'bands' array with id.
        console.log("DeleteListItem triggered with id : "+band.id)
        //get index of the object in 'bands' array
        let itemToDeleteIndex = bands.findIndex(x => x.id === band.id)
        //remove the desired object
        bands.splice(itemToDeleteIndex,1)
        //update the itemList
        UpdateListItemsFromBands()
    }

    const UpdateListItemsFromBands = () => {
        //Creates an array of react elemens from band class objects in 'bands'
        console.log("Bands at update ->")
        console.table(bands)
        let bandElements = CreateListItemsFromBandArray(bands,DeleteListItem)
        setListItems(bandElements)
    }

    const ShowCurrentBandsArray = (objectArray) => {
        //Helper funtion to show object in array when needed.
        //will take any array        
        let table
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
        
        //Add testData to bands array
        TestDATA();
        
        UpdateListItemsFromBands()
        //AddListItem(bands[0])
    }, []);

    return (
        <div>
            <div className="listContainer">
            <h1> List Items</h1>
            <button onClick={() => ShowCurrentBandsArray(bands)}>Examine 'bands'</button>
            <button onClick={UpdateListItemsFromBands}>Update from 'bands'</button>
            {listItems}
            </div>
        </div>
    )
}
