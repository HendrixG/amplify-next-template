'use client';

import { getLocationOrigin } from "next/dist/shared/lib/utils"
import { useEffect, useState } from "react"

export default function LocationFinderServer() {
    const [locationInfo, setLocationInfo] = useState({})

    const getLocationInfo = async () => {
    const response = await fetch('https://apip.cc/json')
    const locationData = await response.json();
    setLocationInfo(locationData);
    }
    
    useEffect(() => {
        getLocationInfo();
    }, [])
    return (
        <>
        <h1>Hello from {locationInfo?.city} - client component</h1>
        </>
    )

}