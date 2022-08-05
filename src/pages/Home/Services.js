import { api } from '../../api/api';

const Box = ({ icon, title, desc }) => {
    return (
        <div className="col-lg-6 col-xl-3 d-flex align-item-stretch mb-4">
            <div className="box">
                <div className="box-icon">{icon}</div>
                <h3 className="box-title">{title}</h3>
                <p className="box-desc">{desc}</p>
            </div>
        </div>
    )
}

const Services = () => {
    const { services } = api;

    return (
        <section id='services' className="services section-padding">
            <div className="container">
                <div className="section-title">
                    <h3>Services</h3>
                </div>
                <div className="row">
                    {
                        services.map(item => (
                            <Box key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services