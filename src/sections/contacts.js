function Contacts() {
    return (
        <div className="container p-3 text-center">
            <div className="row">
                <h2 id="contacts" className="text-center text-uppercase">Контакты</h2>
                <div className="divider m-auto mb-3"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h4>График работы</h4>
                    <p>
                        Работаем с 8:00 до 17:00
                    </p>
                    <p>
                        Звонки принимаются с 8:00 до 20:00
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <h4>Способы связи</h4>
                    <p>
                        <a href="tel:+380937906613" className="btn text-decoration-none">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <span>+380 (93) 790 6613 (LifeCell)</span>
                        </a>
                    </p>
                    <p>
                        <a href="tel:+380689802147" className="btn text-decoration-none">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <span>+380 (68) 980 2147 (Киевстар)</span>
                        </a>
                    </p>
                    <p>
                        <a href="mailto:den0076@gmail.com" className="btn text-decoration-none">
                            <i className="bi bi-envelope-fill me-2"></i>
                            <span>den0076@gmail.com</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;