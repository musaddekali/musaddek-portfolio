import Contact from './Contact';
import Hero from './Hero';
import './Home.css';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            key='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -1000 }}
            transition={{ duration: 0.3 }}
        >
            <Hero />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
        </motion.div>
    )
}

export default Home;