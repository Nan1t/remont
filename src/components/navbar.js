import './navbar.css';

function Navbar() {
    return (
        <nav id="navbar-main" className="navbar navbar-expand-lg position-fixed w-100 p-2 navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand fs-3 text-uppercase fw-bold" href="/">
                    <i className="bi bi-house-fill me-2"></i>
                    Ремонт квартир
                </a>
                <button
                    className="navbar-toggler align-middle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href="#services" className="nav-link">
                            <i className="bi bi-info-square-fill me-2"></i>
                            <span>Услуги</span>
                        </a>
                        <a href="#projects" className="nav-link">
                            <i className="bi bi-building me-2"></i>
                            <span>Проекты</span>
                        </a>
                        <a href="#contacts" className="nav-link">
                            <i className="bi bi-person-lines-fill me-2"></i>
                            <span>Контакты</span>
                        </a>
                    </div>
                    {/*<div className="justify-content-end d-block d-lg-none">*/}
                    {/*    <PhoneButton/>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="justify-content-end d-none d-lg-block">*/}
                {/*    <PhoneButton/>*/}
                {/*</div>*/}
            </div>
        </nav>
    );
}

function PhoneButton() {
    let phone = "+7777777777";

    return (
        <a className="btn btn-outline-light p-2 ps-4 pe-4" href={`tel:` + phone}>
            <i className="bi bi-telephone-fill me-1"></i>
            <span>Тел. {phone}</span>
        </a>
    );
}

export default Navbar;