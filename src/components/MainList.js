import React from 'react'
import { ListItem } from './ListItem'
import {Band} from './Class_Band'
import {MUSIC_STYLES} from '../Constants/MUSIC_STYLES'
import {bands} from './Globals'
import {useEffect, useState} from 'react';
import {ReactDOM} from 'react-dom'

export const MainList = (props) => {

    //this is filled in useEffect after rendering.
    let listContainerElement;

    const [items, setItems] = useState([])

    const TestDATA = () => {
           let band1 = new Band("Metallica",1980,MUSIC_STYLES.TRASH_METAL)
           let band2 = new Band("Anthrax",1981,MUSIC_STYLES.TRASH_METAL)
           let band3 = new Band("Hives",2003,MUSIC_STYLES.ROCK)
           let band4 = new Band("Slipknot",1999,MUSIC_STYLES.NU_METAL)
           bands.push(band1,band2,band3,band4)
   }


    const bandItemList = () => {
        let items = []
        bands.forEach(band => {

            items.push(<ListItem band={band} key={"ListItem_id_" + band.id}/>)
        });

        return items
    }

    const UpdateItems = () => {
        let toItems = bandItemList();
        setItems(toItems)
    }



    useEffect(() => {
        // Runs ONCE after initial rendering
        // https://dmitripavlutin.com/react-useeffect-explanation/
        // get hold of listContainer div
        listContainerElement = document.getElementById("listContainer")
        if(listContainerElement===null){
            console.warn("ListContainer missing ?")
        }
        TestDATA();
        UpdateItems()
      }, []);


    return (
        <div>
            <h1> List </h1>
            <div id="listContainer">
            {items}

            </div>
        </div>
    )


}
