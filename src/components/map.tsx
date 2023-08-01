'use client'
import React, { useEffect } from 'react'
import L from 'leaflet'

export const MapComponent = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const map = L.map('map').setView([-34.6, -58.45], 10.5)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map)

            return () => {
                map.remove()
            }
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
                ></div>
            </div>
        </div>
    )
}
