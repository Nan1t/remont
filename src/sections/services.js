import './services.css';

function Services() {
    return (
        <div id="services" className="container p-3">
            <div className="row">
                <h2 className="text-center text-uppercase">Виды работ</h2>
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
    );
}

function ServiceCard(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card service">
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    {/*<a href="#price" className="btn btn-primary w-100">Узнать цену</a>*/}
                </div>
            </div>
        </div>
    );
}

export default Services;