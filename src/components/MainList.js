import React from 'react'
import { ListItem } from './ListItem'
import {Band} from './Class_Band'
import {MUSIC_STYLES} from '../Constants/MUSIC_STYLES'
import {bands} from './Globals'
import {useEffect, useState} from 'react';

export const MainList = (props) => {

   const TestDATA = () => {
       let band1 = new Band("Metallica",1980,MUSIC_STYLES.TRASH_METAL)
       let band2 = new Band("Anthrax",1981,MUSIC_STYLES.TRASH_METAL)
       let band3 = new Band("Hives",2003,MUSIC_STYLES.ROCK)
       let band4 = new Band("Slipknot",1999,MUSIC_STYLES.NU_METAL)
       bands.push(band1,band2,band3,band4)
   } 

   if(bands.length == 0) TestDATA();

    const bandItemList = () => {
        let items = []
        bands.forEach(band => {
            items.push(<ListItem band={band} key={band.id}/>)
        });
        return items
    } 

    return (
        <div>
            <h1> List </h1>
            {bandItemList()}
        </div>
    )
}
