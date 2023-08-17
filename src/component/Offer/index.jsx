import React from "react";
import "./styles.css";

const Offer = ()=>{
    return(
        <div className="offers">
        <div className="image">
            <h3>25%</h3>
            <h3>Discount</h3>
            <img src="/images/Chicken-Burger.png" alt="" />
        </div>
        <div className="image2">
           <h3>save</h3>
            <h3>20%</h3>
            <img src="/images/chicken-pizza.png" alt="" />
        </div>
        <div className="image3">
           <h3>Tortilla Warp Tocos</h3>
            <p>Get Your Order Fresh</p>
            <img src="/images/Chicken-Burger.png" alt="" />
        </div>

    </div>
    )
};
export default Offer;
