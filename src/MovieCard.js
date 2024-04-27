import React from "react";

class MovieCard extends React.Component{

    render(){
        return <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/jv2p6kw0/poster/y/n/h/medium-endgame3jumbo-avengers-endgame-jumbo-poster-for-room-original-imafgyfvxjzuvkfu.jpeg?q=20&crop=false" alt="Poster" />
                </div>
                <div className="right">
                    <div className="title"></div>
                    <div className="plot"></div>
                    <div className="price"></div>

                    <div className="footer">
                        <div className="rating"></div>
                        <div className="stars"></div>
                        <button className="favourite-btn">Favourites</button>
                        <button className="cart-btn">Cart BTN</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MovieCard;