import React, {useEffect} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import GuideVideo from './GuideVideo';
import BlockNumbers from './BlockNumbers';
import AboutUs from './AboutUs';
import Teams from './Teams';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000 });
    },[]);
    return(
        <>
            <Header />
            <div data-aos="fade-up">
                <MainContent />
            </div>
            <div data-aos="fade-right">
                <GuideVideo />
            </div>
            <div data-aos="flip-up">
                 <BlockNumbers />
            </div>
            <div data-aos="fade-up">
                <AboutUs />
            </div>
            <div data-aos="flip-left">
                <Teams />
            </div>
            <Footer />
        </>
    )
}

export default Home;