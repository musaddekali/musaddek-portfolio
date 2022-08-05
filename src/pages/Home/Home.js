import Contact from './Contact';
import Hero from './Hero';
import './Home.css';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home;