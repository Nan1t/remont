import './welcome.css';

function Welcome() {
    return (
        <div id="welcome">
            <div className="mask d-flex flex-column align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <h1 className="text-uppercase text-light">
                            Ремонт квартир и домов
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6">
                            <p className="fs-4 fw-light text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;