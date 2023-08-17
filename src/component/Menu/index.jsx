import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Menu = () => {
    const imageUrls = [
        'images/Chicken-Burger.png',
        'images/chicken-pizza.png',
        'images/chicken_fry.png',
        'images/noddles.png',
        'images/grilled.png',
        'images/toco.png',
    ];

    const titles = [
        'Chicken Burger',
        'Chicken Pizza',
        'Chicken Fry',
        'Noodles',
        'Grilled',
        'Taco',
    ];

    const ratings = [5,5,5,5,5,5];
    const amounts = [3.50, 4.20, 5.00, 4.80, 3.63, 6.50];

    return (
        <div className="menu">
            <div className="text">
            <div>
                <h1>Our <span className="span">Regular</span> Menu</h1>
                <p>These Are Our Regular Menus. You Can</p>
                <p>Order Anything You Like.</p>
            </div>
            <div>
                <button className="but">Buy Now</button>
            </div>
            </div>
        <div className="image-container">
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="food-item">
                   
                    <div className="food-content">
                        <div className="content">
                        <h3>{titles[index]}</h3>
                        <div className="ratings">
                            
                            {Array.from({ length: ratings[index] }).map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                        <div className="amount">
                            <p>${amounts[index]}</p>
                        </div>
                        <button className="but">Buy Now</button>
                    </div>
                    </div>

                    <div className="food-image">
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Menu;
