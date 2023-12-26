import React ,{useEffect} from "react";
import './footer.css';
import video2 from "../../assets/video2.mp4";
import {FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/> Travel
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter class="icon"/> 
                            <AiFillYoutube class="icon"/> 
                            <AiFillInstagram class="icon"/>  
                            <FaTripadvisor class="icon"/>
                        </div>
                        
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Ocenia
                            </li>
                        </div>


                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;