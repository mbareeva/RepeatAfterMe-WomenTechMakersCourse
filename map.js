module.exports = class Map {
    constructor(caption){
        this.caption = caption
      this.locations = []
    }

    addLocOnMap(locationN){
      this.locations.push(locationN)
    }
}