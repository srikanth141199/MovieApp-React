import React from "react";

class MovieCard extends React.Component{

    constructor(){
        super();
        this.state = {
            title : "The Avengers",
            plot : "Super Natural Fictional World!!",
            price : 199,
            ratiing : 8.9,
            stars : 0
        }
    }

    minusStars = ()=>{
        if(this.state.stars <= 0){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars : prevState.stars - 0.5
            }
        })
    }
    addStars = ()=>{
        // console.log("this : ", this);
        // this.setState({
        //     stars : this.state.stars+0.5
        // });

        //2nd way
        if(this.state.stars >= 5){
            return;
        }

        this.setState((prevState) => {
            return{

                stars : prevState.stars + 0.5
            }
        })
    }
    render(){
        return <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/jv2p6kw0/poster/y/n/h/medium-endgame3jumbo-avengers-endgame-jumbo-poster-for-room-original-imafgyfvxjzuvkfu.jpeg?q=20&crop=false" alt="Poster" />
                </div>
                <div className="right">
                    <div className="title">{this.state.title}</div>
                    <div className="plot">{this.state.plot}</div>
                    <div className="price">Rs: {this.state.price}</div>

                    <div className="footer">
                        <div className="rating">{this.state.ratiing}</div>
                        <div className="star-dis">
                            <img src = "https://cdn-icons-png.flaticon.com/128/992/992683.png" alt="minus" className="str-btn" onClick={this.minusStars}/>
                            <img src = "https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star" className="stars"/>
                            <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="plus" className="str-btn"
                             onClick={this.addStars}/>
                            <span>{this.state.stars}</span>
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