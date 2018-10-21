module.exports = class Location  {
    constructor(placeName, placeAddress, rating){
        this.placeName = placeName
        this.placeAddress = placeAddress
        this.rating = rating
      }

      sayPlaceName(){
        return this.placeName
      }
      sayPlaceAddress(){
        return this.placeAddress
      }
      sayRating(){
        return this.rating
      }
  }