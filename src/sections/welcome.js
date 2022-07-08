import './welcome.css';

const LINK_FACEBOOK = "https://facebook.com";
const LINK_TELEGRAM = "https://facebook.com";

function Welcome() {
    return (
        <div id="welcome" className="shadow">
            <div className="mask d-flex flex-column align-items-center justify-content-center">
                <div className="container text-center">
                    <div className="row">
                        <h1 className="text-uppercase text-light">
                            Ремонт квартир и домов под ключ
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <p className="fs-4 fw-light text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <SocialLink link={LINK_TELEGRAM} icon="fa-telegram" text="Telegram" />
                            <SocialLink link={LINK_TELEGRAM} icon="fa-viber" text="Viber" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialLink(props) {
    return (
        <a href={props.link} rel="noreferrer" target="_blank" className="btn btn-light w-auto me-3">
            <i className={`me-2 fa fa-brands ` + props.icon}></i>
            {props.text}
        </a>
    );
}

export default Welcome;