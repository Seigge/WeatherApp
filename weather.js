class Weather {
  constructor(city,) {
    this.apiKey = 'f7d7afa8c62d72cc25c579620d64cf99';
    this.city = city;
    //  this.state = state;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    return responseData;
  }

  // Change city location
  changelocation(city) {
    this.city = city;
  }
}