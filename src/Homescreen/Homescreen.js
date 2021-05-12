import React from 'react';
import "./Homescreen.css"
import Nav from "./Nav"
import Banner from "./Banner"
import requests from "./Requests"
import Row from './Row'

function Homescreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row 
            title ='Trending Now'
            fetchURL={requests.fetchTrending}
            isLargeRow
            />

            <Row 
            title ='Netflix Originals'
            fetchURL={requests.fetchNetflixOriginals}
            isSmallRow
            />

            <Row 
            title ='Top Rated'
            fetchURL={requests.fetchTopRated}
            isSmallRow
            />

            <Row 
            title ='Action Movies'
            fetchURL={requests.fetchActionMovies}
            isSmallRow
            />

            <Row 
            title ='Comedy Movies'
            fetchURL={requests.fetchComedyMovies}
            iisSmallRow
            />

            <Row 
            title ='Horror Movies'
            fetchURL={requests.fetchHorrorMovies}
            isSmallRow
            />

            <Row 
            title ='Romance'
            fetchURL={requests.fetchRomance}
            isSmallRow
            />

            <Row 
            title ='Documentaries'
            fetchURL={requests.fetchDocumentaries}
            isSmallRow
            />           


        </div>
    )
}

export default Homescreen;
