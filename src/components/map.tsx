'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export const MapComponent = () => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 })

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                setUserLocation({ lat, lng })
            })
        }
    }, [])

    return (
        <div className="bg-transparent flex-grow">
            <div
                className="w-60 h-60 border border-primary rounded-lg"
                style={{ minHeight: '270px', minWidth: '270px' }}
            >
                <div
                    id="map"
                    className="rounded-lg"
                    style={{ width: '100%', height: '100%' }}
                >
                    <MapContainer
                        center={[-34.6, -58.45]}
                        zoom={13}
                        className="w-full h-full"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[userLocation.lat, userLocation.lng]}
                            icon={L.icon({ iconUrl: '/Capa_1 (1).svg' })}
                        ></Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

// export const MapComponent = () => {
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             import('leaflet')
//                 .then((L) => {
//                     const map = L.map('map').setView([-34.6, -58.45], 10.5)
//                     L.tileLayer(
//                         'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//                         {
//                             attribution: '&copy; OpenStreetMap contributors',
//                         }
//                     ).addTo(map)

//                     return () => {
//                         map.remove()
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Failed to import leaflet', error)
//                 })
//         }
//     }, [])

//     return (
//         <div className="bg-transparent flex-grow">
//             <div
//                 className="w-60 h-60 border border-primary rounded-lg"
//                 style={{ minHeight: '270px', minWidth: '270px' }}
//             >
//                 <div
//                     id="map"
//                     className="rounded-lg"
//                     style={{ width: '100%', height: '100%' }}
//                 ></div>
//             </div>
//         </div>
//     )
// }
