import LinkedIcon from "../components/LinkedIcon";
export default function Banners(){
    return(
        <section className="banners-page">
            <h1>Banners</h1>
                <section className="success banner">
                    <h2>Success</h2>
                    <div className="banner-content multi-line">
                        <div className="banner-header">
                            <img src="/img/circle.png" alt="Circle" />
                            <h3>Congratulations!</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </div>
                    <div className="banner-content single-line">
                        <div className="banner-header">
                            <img src="../img/circle.png" alt="Circle" />
                            <h3>Congratulations!</h3>
                        </div>
                    </div>
                </section>
                <section className="warning banner">
                    <h2>Warning</h2>
                    <div className="banner-content multi-line">
                    <div className="banner-header">
                        <img src="../img/Exclamation.png" alt="Exclamation" />
                        <h3>Attention</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </div>
                    <div className="banner-content single-line">
                        <div className="banner-header">
                            <img src="../img/Exclamation.png" alt="Exclamation" />
                            <h3>Attention</h3>
                        </div>
                    </div>
                </section>
                <section className="error banner">
                    <h2>Error</h2>
                    <div className="banner-content multi-line">
                        <div className="banner-header">
                            <img src="../img/x.png" alt="Cross" />
                            <h3>There is a problem with your application</h3>
                        </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </div>
                    <div className="banner-content single-line">
                        <div className="banner-header">
                            <img src="../img/x.png" alt="Cross" />
                            <h3>There is a problem with your application</h3>
                        </div>
                    </div>
                </section>
                <section className="neutral banner">
                    <h2>Neutral</h2>
                    <div className="banner-content multi-line">
                    <div className="banner-header">
                        <img src="../img/Icon.png" alt="Info" />
                        <h3>Update available</h3>
                     </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </div>
                    <div className="banner-content single-line">
                    <div className="banner-header">
                        <img src="../img/Icon.png" alt="Info" />
                        <h3>Update available</h3>
                     </div>
                    </div>
                </section>
            <LinkedIcon to="/" />
        </section>
    )
}