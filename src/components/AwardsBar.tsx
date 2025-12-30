import './AwardsBar.css';

const awards = [
    "https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-clutch.png",
    "https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-google-premier.png",
    "https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-meta.png",
    "https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-microsoft.png",
    "https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-shopify.png"
];

const AwardsBar = () => {
    return (
        <div className="awards-bar">
            <div className="container awards-container">
                <p className="awards-label">Driving Revenue for Clients Since 1996</p>
                <div className="awards-logos">
                    {awards.map((src, i) => (
                        <img key={i} src={src} alt="Award Logo" height="35" className="award-logo" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AwardsBar;
