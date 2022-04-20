import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div  className="card bg-dark text-white">
                <img src="./assets/bg.jpg"  className="card-img" alt="Background" height="700px"/>
                <div  className="card-img-overlay d-flex flex-column justify-content-center">
                   <div className='container'>
                         <h5  className="card-title display-3 fw-bolder mb-0" style={{color:"black"}}>New Season Available</h5>
                        <p  className="card-text" style={{color:"black"}}>
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Home;