export default async function LocationFinderServer() {
    

   
    const response = await fetch('https://apip.cc/json')
    const locationData = await response.json();
    const locationInfo = locationData;
    
    

    return (
        <>
        <h1>Hello from {locationInfo?.city} - server component</h1>
        </>
    )

}