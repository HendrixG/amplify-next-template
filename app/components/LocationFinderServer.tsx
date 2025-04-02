export default async function LocationFinderServer() {
    
    const locationResponse = await fetch('https://apip.cc/json');
    const locationInfo = await locationResponse.json();
  
    // New weather data component
    const weatherResponse = await fetch(
      'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
    );
    const weatherData = await weatherResponse.json();
  
    const tempCelsius = weatherData.dataseries[0].temp2m;
  
    return (
      <>
        <h1>
          Hello from {locationInfo.City} - Current Temperature: {tempCelsius}°C  - Server component! 
        </h1>
      </>
    );
  }
  