'use client';
import { useEffect, useState } from "react";

export default function MyWeatherClient() {
    const [temperature, setTemperature] = useState<string>("Loading...");

    const getWeatherInfo = async () => {
        try {
            // Link from freepublicapi
            const response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
            const weatherData = await response.json();
            const tempCelsius = weatherData.dataseries[0].temp2m;
            setTemperature(`${tempCelsius}°C`);
        } catch (error) {
            setTemperature("Unable to load temperature");
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <h1>Current Temperature: {temperature}</h1>
        </>
    );
}
