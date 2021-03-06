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
                desc={service.desk}
                priceList={service.priceList}
            />
        );
    }

    return (
        <div className="container p-3">
            <div className="row">
                <h2 id="services" className="text-center text-uppercase">Услуги</h2>
                <div className="divider m-auto mb-3"></div>
                <p className="text-center">
                    <i className="bi bi-info-circle me-3"></i>
                    Представленные здесь цены могут отличаться от актуальных
                </p>
            </div>
            <div className="row">
                {services}
            </div>
        </div>
    );
}

function ServiceCard(props) {
    let modalId = props.id + "-modal";

    return (
        <div className="col-12 col-md-6 col-lg-4 p-3">
            <div className="card p-4 border-0 bg-transparent">
                <img src={props.image} className="card-img-top align-self-center w-25" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title mb-4">{props.title}</h5>
                    <p>{props.priceList.length}+ видов работ</p>
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
                                <th scope="col">Цена, грн</th>
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