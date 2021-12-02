import {Band, MUSIC_STYLES} from '../src/exporter'

//Array for testing
const testArray = []

export class DataManager{
    
    static setTestData(){
        //creates test data and puts in the 'bands' array
        let band1 = new Band("Metallica",1980,MUSIC_STYLES.TRASH_METAL)
        let band2 = new Band("Anthrax",1981,MUSIC_STYLES.TRASH_METAL)
        let band3 = new Band("Hives",2003,MUSIC_STYLES.ROCK)
        let band4 = new Band("Slipknot",1999,MUSIC_STYLES.NU_METAL)
        testArray.push(band1,band2,band3,band4)
    }

    static GetAllBands(){
        return testArray;
    }

    static GetBandWithID(id){
        let array = testArray
        return array.find(x => x.id === id)
    }

    static RemoveBandWithID(id){
        let array = testArray
        array.splice(array.findIndex(x => x.id === id),1)
    }

}

export default {DataManager}

