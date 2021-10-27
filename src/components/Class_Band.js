import { MUSIC_STYLES } from "../exporter"
class Band{
    constructor(name,yearFounded,style = MUSIC_STYLES.DEFAULT_STYLE,id=null){
        this.name = name;
        this.yearFounded = yearFounded;
        this.style = style;
        if(id===null){
            this.id = Band.GetId()
        } else {
            this.id = id
        }

    }

    GetAge(){
        let currentYear =  new Date().getFullYear()
        return currentYear - this.yearFounded
    }

    static idCounter = 0;
    static GetId(){
        return ++this.idCounter;
    }
    

    static FromJSon(Json){
       return new Band(Json.name, Json.yearFounded, Json.style,Json.id)
    }
}

export {Band}
