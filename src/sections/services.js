function Services() {
    return (
        <div className="bg-white">
            <div className="container p-3">
                <div className="row">
                    <h2 id="services" className="text-center text-uppercase">Услуги</h2>
                </div>
                <div className="row">
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ServiceCard
                        image="https://via.placeholder.com/150x100"
                        title="Поклейка обоев"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </div>
    );
}

function ServiceCard(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card service border-0 bg-light shadow-sm">
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Services;