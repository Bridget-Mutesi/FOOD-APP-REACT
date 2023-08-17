import React from "react";
import "./styles.css";

const Home = ()=>{
    return(
        <div>
        <div className="home">
            <div>
                <h2>All Fast Food is</h2>
                <h2>Available at Foodle</h2>
                <button className="but">Buy Now</button>
            </div>
            <div>
                <img src="/images/food1.png" alt="food" className="image1"/>
            </div>
        </div>

        <div className="icons">
            <div className="icon">
                <img src="/images/icon4.png" alt="icon" />
                <div>
                <h2>Fast Delivery</h2>
                <p>The Food Will Be Delivered</p>
                <p>Your Home Within 1-2Hours Of</p>
                <p>Your Ordering</p>
                </div>
            </div>

            <div className="icon">
                <img src="/images/icon3.png" alt="icon" />
                <div>
                <h2>Fresh Food</h2>
                <p>Your Food Will Be Delivered</p>
                <p>100% Fresh To Your Home. We</p>
                <p>Do Not Deliver Stale Food</p>
                </div>
            </div>

            <div className="icon">
                <img src="/images/icon2.png" alt="icon" />
                <div>
                <h2>Free Delivery</h2>
                <p>Your Food Delivery Is</p>
                <p>Absolutely Free. Not Cost</p>
                <p>Just Order And Enjoy</p>
                </div>
            </div>
        </div>
        </div>
        
    )
};
export default Home;