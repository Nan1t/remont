import './welcome.css';

function Welcome() {
    return (
        <div id="welcome" className="shadow">
            <div className="mask d-flex flex-column align-items-center justify-content-center position-relative">
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
                <div className="position-absolute bottom-0 text-light fw-bolder p-4">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <span>Запорожье, Украина</span>
                </div>
            </div>
        </div>
    );
}

export default Welcome;