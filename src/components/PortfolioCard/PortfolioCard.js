import './PortfolioCard.css';

const PortfolioCard = ({portfolio}) => {
    const { title, desc, image, codeLink, previewLink } = portfolio;
    return (
        <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
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

export default PortfolioCard