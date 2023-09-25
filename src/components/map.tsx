import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'

interface MapComponentProps {
    address: string
    city: string
}

export const MapComponent: React.FC<MapComponentProps> = ({
    address,
    city,
}) => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 })
    const [packageLat, setPackageLat] = useState(0)
    const [packageLng, setPackageLng] = useState(0)
    const mapRef = useRef<L.Map | null>(null)

    const createRouting = () => {
        const direccion = address + ', ' + city
        fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                direccion
            )}`
        )
            .then(async (response) => await response.json())
            .then((data) => {
                if (data.length > 0) {
                    const lat = parseFloat(data[0].lat)
                    const lng = parseFloat(data[0].lon)
                    setPackageLat(lat)
                    setPackageLng(lng)
                }
            })
            .catch((error) => {
                console.error('createRouting error', error)
            })
    }

    const getDriverLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                setUserLocation({ lat, lng })
            })
        }
    }

    const loadMap = () => {
        if (mapRef.current != null) {
            mapRef.current.remove()
            mapRef.current = null
        }

        const mapElement = document.getElementById('map')

        if (mapElement != null) {
            mapRef.current = L.map(mapElement).setView(
                [userLocation.lat, userLocation.lng],
                13
            )
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current)
        }

        if (packageLat !== 0 && packageLng !== 0 && mapRef.current != null) {
            L.Routing.control({
                waypoints: [
                    L.latLng(userLocation.lat, userLocation.lng),
                    L.latLng(packageLat, packageLng),
                ],
            }).addTo(mapRef.current)
            L.Routing.plan(
                [
                    L.latLng(userLocation.lat, userLocation.lng),
                    L.latLng(packageLat, packageLng),
                ],
                {
                    draggableWaypoints: false,
                }
            ).addTo(mapRef.current)
        }
    }

    useEffect(() => {
        getDriverLocation()
        createRouting()
    }, [address])

    useEffect(() => {
        loadMap()
    }, [packageLng])

    if (
        userLocation.lat === 0 ||
        userLocation.lng === 0 ||
        packageLat === 0 ||
        packageLng === 0
    ) {
        return <div>Cargando...</div>
    }

    return (
        <div className="bg-transparent flex-grow">
            <div
                id="map"
                className="w-60 h-60 border border-primary rounded-lg"
                style={{ minHeight: '270px', minWidth: '270px' }}
            ></div>
        </div>
    )
}
