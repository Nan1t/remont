import {ALL_SERVICES} from "../services";

function Services() {
    let services = [];

    for (let i in ALL_SERVICES) {
        let service = ALL_SERVICES[i];
        services.push(
            <ServiceCard
                key={i}
                id={`service-` + i}
                image={service.image}
                title={service.title}
                desc={service.description}
                priceList={service.priceList}
            />
        );
    }

    return (
        <div className="bg-light">
            <div className="container p-3">
                <div className="row">
                    <h2 id="services" className="text-center text-uppercase">Услуги</h2>
                    <hr className="w-15 m-auto bg-dark"/>
                </div>
                <div className="row">
                    {services}
                </div>
            </div>
        </div>
    );
}

function ServiceCard(props) {
    let modalId = props.id + "-modal";

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <div className="card p-4 border-0 shadow">
                <img src={props.image} className="card-img-top align-self-center w-25" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#` + modalId}>
                        Посмотреть цены
                    </button>
                </div>
            </div>
            <PriceList id={modalId} title={props.title} list={props.priceList}/>
        </div>
    );
}

function PriceList(props) {
    let labelId = props.id + "-label";
    let elements = [];

    for (let i in props.list) {
        let el = props.list[i];
        elements.push(
            <ListElement
                key={i}
                service={el.name}
                price={el.price}
            />
        );
    }

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby={labelId} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0 bg-light">
                        <h5 className="modal-title" id={labelId}>{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-body table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">Вид работ</th>
                                <th scope="col">Цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            {elements}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListElement(props) {
    return (
        <tr>
            <th scope="row">{props.service}</th>
            <td>{props.price}</td>
        </tr>
    );
}

export default Services;