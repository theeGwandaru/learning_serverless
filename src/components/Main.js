import React from 'react'
import HotelInfo from './main/HotelInfo'
import Welcome from './main/Welcome'

export default function Main() {
    return (
        <main id="wrapper">
            <Welcome/>
            <HotelInfo />
        </main>
    )
}
