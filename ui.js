class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.description = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.min = document.getElementById('w-min')
    this.max = document.getElementById('w-max')
    this.pressure = document.getElementById('w-pressure')
    this.wind = document.getElementById('w-wind')
  }

  paint(weather) {
    this.location.textContent =`${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} C`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`
    this.min.textContent = `Relative minimum temperature: ${weather.main.temp_min}C`
    this.max.textContent = `Relative maximum temperature: ${weather.main.temp_max}C`
    this.pressure.textContent = `Atmospheric pressure: ${weather.main.pressure}hpa`
    this.wind.textContent = `Windspeed: ${weather.wind.speed}m/s`
  }
}