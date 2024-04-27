import React from "react";

class MovieCard extends React.Component{

    render(){
        return <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/jv2p6kw0/poster/y/n/h/medium-endgame3jumbo-avengers-endgame-jumbo-poster-for-room-original-imafgyfvxjzuvkfu.jpeg?q=20&crop=false" alt="Poster" />
                </div>
                <div className="right">
                    <div className="title">The Avengers</div>
                    <div className="plot">Super Natural Fictional World</div>
                    <div className="price">Rs: 299</div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">
                            <img src = "https://cdn-icons-png.flaticon.com/128/992/992683.png" alt="minus" className="str-btn"/>
                            <img src = "https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star" className="stars"/>
                            <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="plus" className="str-btn"/>
                            <span>0</span>
                        </div>
                        <button className="favourite-btn">Favorites</button>
                        <button className="cart-btn">Cart BTN</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MovieCard;