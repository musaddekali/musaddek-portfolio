import { motion } from 'framer-motion';
import { scrollVariants } from '../../utils/utils';

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="section-title">
                    <h3>Contact</h3>
                </div>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{once: true}}
                    variants={scrollVariants}
                    className="row"
                >
                    <div className="col" >
                        <div className="card">
                            <div className="card-body">
                                <p>
                                    <strong>Email: </strong> musaddekali.dev@gmail.com
                                </p>
                                <p>
                                    <strong>Phone: </strong> 01795325132 / 01404211790
                                </p>
                                <p>
                                    <strong>Address: </strong> Sylhet, Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Contact