
import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";
import MyWeatherClient from "./components/MyWeatherClient";

export default function App() {

  //  
  return (
    <main>
      <LocationFinderClient />
      <MyWeatherClient />
      <LocationFinderServer />
      <ToDo />
      
    </main>
  );
}
