module.exports = class Map {
    constructor(caption){
        this.caption = caption
      this.locations = []
    }

    addLocOnMap(locationN){
      this.locations.push(locationN)
    }

    static create({caption, locations}) {
      const map = new Map(caption, locations)
      map.locations = locations.map(Location.create)
      return map
  }
}