import bannerImg from '../assets/banner-stack.png';

export default function Banner() {
    return (
        <section className="banner-container">
            <div className="banner-content">
                <h1 className="banner-title">
                    Build Your Ideal <br />
                    <span className="highlight">Development Stack</span>
                </h1>
                <p className="banner-description">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                    </p>
                <div className="banner-actions">
                    <button className="btn-primary">Explore Technologies</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="banner-image-container">
                <img src={bannerImg} alt="Banner Stack" className="banner-image" />
            </div>
        </section>
    );
}