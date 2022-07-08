function Contacts() {
    return (
        <div className="container p-3">
            <div className="row">
                <h2 id="contacts" className="text-center text-uppercase">Контакты</h2>
                <hr className="w-15 m-auto bg-dark"/>
            </div>
            <div className="row">
                <h4>График работы</h4>
                <p></p>
            </div>
            <div className="row">
                <h4>Способы связи</h4>
                <p>
                    <a href="tel:+380937906613" className="btn text-decoration-none">
                        <i className="bi bi-telephone-fill me-2"></i>
                        <span>+380 (93) 790 66 13 (LifeCell)</span>
                    </a>
                </p>
                <p>
                    <a href="tel:+380689802147" className="btn text-decoration-none">
                        <i className="bi bi-telephone-fill me-2"></i>
                        <span>+380 (68) 980 21 47 (Киевстар)</span>
                    </a>
                </p>
                <p>
                    <a href="mailto:dude@gmail.com" className="btn text-decoration-none">
                        <i className="bi bi-envelope-fill me-2"></i>
                        <span>dude@gmail.com</span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contacts;