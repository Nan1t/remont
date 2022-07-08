import './welcome.css';

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
                                Капитальный и косметический ремонт помещений по индивидуальному заказу в городе Запорожье
                            </p>
                            <a href="#services" className="btn btn-lg btn-outline-light text-uppercase border-3 fw-bold">
                                Посмотреть услуги и цены
                            </a>
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