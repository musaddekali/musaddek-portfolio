import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className="no-page">
            <div style={{
                width: '100%',
                height: '100vh',
                padding: '4rem'
            }}
                className="container"
            >
                <h2>Page Not Found</h2>
                <Link to="/" className="btn">Go To Home</Link>
            </div>
        </div>
    )
}

export default NoPage