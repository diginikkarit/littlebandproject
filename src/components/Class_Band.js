import { MUSIC_STYLES } from "../Constants/MUSIC_STYLES"
class Band{
    constructor(name,yearFounded,style = MUSIC_STYLES.DEFAULT_STYLE,id=null){
        this.name = name;
        this.yearFounded = yearFounded;
        this.style = style;
        if(id===null){
            this.id = Band.GetId()
        }
    }

    GetAge (){
        let currentYear =  new Date().getFullYear()
        return currentYear - this.yearFounded
    }

    static GetId(){
        return ++this.idCounter;
    }
    
    static idCounter = 0;

    static FromJSon(Json){
       return new Band(Json.name, Json.yearFounded, Json.style)
    }
   
}


export {Band}
