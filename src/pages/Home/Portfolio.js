import { api } from '../../api/api';

const PortfolioBox = ({ title, desc, image, codeLink, previewLink }) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex align-items-stretch">
            <div className="img-box">
                <img className='img-box-img' height='400' width='400' src={image} alt={title} />
                <div className="img-box-title-overlay">
                    <span>{title}</span>
                </div>
                <div className="img-box-overlay">
                    <p className='img-box-text'>{desc}</p>
                    <div className="d-flex gap-3">
                        <a target='_blank' href={codeLink} className="btn">Code</a>
                        <a target='_blank' href={previewLink} className="btn">Preview</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
                        portfolios.map(item => (
                            <PortfolioBox key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio