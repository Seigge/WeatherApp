class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Mykolayiv';
  }

  // Get location data
  getLocationData(){
    if(localStorage.getItem('city')===null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem(city);
    }

    return {
      city: this.city
    }
  }

  // Set local data
  setLocationData() {
    localStorage.setItem('city', city);
  }
}