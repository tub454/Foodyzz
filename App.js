
import React from "react"
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
    textAlign: "center"
}
const styleRating = {backgroundColor:"rgb(10, 103, 10)",borderRadius:"5px", height:"18px",textAlign:"center",padding:"2px",color:"white"}

const RestaurantCard = ({resName, cuisine}) => {
    return(
        <div className="rest-card" style={styleCard}>
            <img className="rest-card-img" alt="res-logo" src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.861657500.1689150907&semt=sph"></img>
            <h3>{resName}</h3>
            <div className="cuisine">
                <h5>{cuisine}</h5>
            </div>
            <div className="rdp">
                <h6 style={styleRating}>4.4⭐</h6>
                <h6>⌚40m</h6>
                <h6>Rs.360/-</h6> 
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="rest-card-container">
                <RestaurantCard resName="Zaffrani" cuisine="Biriyani, North-Indian"/>                
                <RestaurantCard resName="KFC" cuisine="Burger, Chinese"/>                
                <RestaurantCard resName="Katappa" cuisine="Dosa, South-Indian"/>                
                <RestaurantCard resName="OneBite" cuisine="Choco Lava Cake"/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
                <RestaurantCard/>                
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)