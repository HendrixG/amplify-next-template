'use client';
import { useEffect, useState } from "react"

export default function LocationFinderServer() {
    const [locationInfo, setLocationInfo] = useState({City: "N/A"})

    const getLocationInfo = async () => {
    const response = await fetch('https://apip.cc/json');
    const locationData = await response.json();
    setLocationInfo(locationData);
    }
    
    useEffect(() => {
        getLocationInfo();
    })

    return (
        <>
        <h1>Hello from {locationInfo.City} - Client component</h1>
        </>
    )

}