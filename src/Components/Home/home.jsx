import React from "react";
import './home.css';
import video1 from "../../assets/video1.mp4";
import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {SiTripadvisor} from "react-icons/si";
import {BsListTask} from "react-icons/bs";
import {TbApps} from "react-icons/tb";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Home=()=>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return(
        <section className="home">
            <div className="overlay"></div>
            <video className="video" src={video1} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        OUR PACKAGES
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holiday
                    </h1>

                </div>
                <div  data-aos="fade-up" className="cardDiv grid">
                    <div className="destination">
                        <label htmlfor="city">
                            Search your destination
                        </label>
                        <div className="input flex"> 
                            <input type="text" placeholder="Enter name here..."/>
                                <GrLocation/>                       
                        </div>
                    </div>

                    <div className="date">
                        <label htmlfor="Date">
                            Select your date:
                        </label>
                        <div className="input flex"> 
                            <input type="date"/>
                                                        
                        </div>

                    </div>
                    <div className="maxPrice">
                        <div className="label_total flex">
                            <label htmlfor="price">
                                Max Price
                            </label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex"> 
                            <input type="range" max="5000" min="1000"/>                      
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>More Filter</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">

                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Home;