import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const Portfolio = () => {
    const { portfolios } = api;

    return (
        <section id='portfolio' className="portfolio section-padding">
            <div className="container">
                <div className="section-title">
                    <h3>Portfolio</h3>
                </div>
                <div className="row">
                    {
                        portfolios.slice(0, 3).map(item => (
                            <PortfolioCard key={item.id} portfolio={item} />
                        ))
                    }
                </div>
                <div className="portfolio-cta text-center mt-4">
                    <Link to="/portfolio" className="btn">See All Portfolio</Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio