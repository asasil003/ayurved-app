import Hero from './Hero';
import About from './About';
import Offerings from './Offerings';
import Testimonials from './Testimonials';
import Footer from './Footer';
import NavBar from './Nav';



function Container(){
    return(
        <>
        <NavBar/>
        <Hero />
        <About />
        <Offerings />
        <Testimonials />
        <Footer />
        </>
    )
}

export default Container;