import React, {useEffect} from "react";
import './main.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import {GrLocation} from "react-icons/gr";
import {HiOutlineClipboardCheck} from "react-icons/hi";
const data=[
    {
        id:1,
        imgsrc:img2,
        destTitle: 'Bora Bora',
        location: 'New Zeland',
        grade: "CULTURAL RELAX",
        fees: '$5000',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."      
    },
    {
        id:2,
        imgsrc:img3,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: "CULTURAL RELAX",
        fees: '$5000',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:3,
        imgsrc:img2,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: "CULTURAL RELAX",
        fees: '$5000',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:4,
        imgsrc:img3,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: "CULTURAL RELAX",
        fees: '$5000',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:4,
        imgsrc:img2,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: "CULTURAL RELAX",
        fees: '$5000',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const Main=()=>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return(
        <section className='main container section'>
            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">
                    Most Visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {

                }

                {
                    data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imagediv">
                                    <img src={imgsrc} alt={destTitle}/>
                                </div>
                                <div className="cardinfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <GrLocation className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    
                                    
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
    
                                    <div className="desc">
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                    <button className="btn flex">
                                        Details<HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;