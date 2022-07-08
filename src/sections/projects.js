import { ALL_PROJECTS } from "../projects";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Projects() {
    let projects = [];

    for (let i in ALL_PROJECTS) {
        let project = ALL_PROJECTS[i];

        projects.push(
            <Project
                key={i}
                id={`project-` + i}
                image={project.image}
                items={project.items}
            />
        );
    }

    return (
        <div className="container p-3">
            <div className="row">
                <h2 id="projects" className="text-center text-uppercase">Примеры проектов</h2>
                <div className="divider m-auto mb-3"></div>
                <p className="text-center">
                    <i className="bi bi-info-circle me-3"></i>
                    Здесь представлены только те проекты, показ которых был одобрен заказчиком
                </p>
            </div>
            <div className="row">
                {projects}
            </div>
        </div>
    );
}

function Project(props) {
    let modalId = props.id + '-modal';

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
            <button className="mh-50 text-decoration-none border-0 p-0 shadow-sm" data-bs-toggle="modal" data-bs-target={`#` + modalId}>
                <div className="card border-0 bg-dark text-white">
                    {/*<img src={props.image} className="card-img" alt="Alt" />*/}
                    <LazyLoadImage
                        src={props.image}
                        className="card-img"
                        alt="Alt"
                    />
                </div>
            </button>
            <ProjectCarousel id={modalId} items={props.items} />
        </div>
    );
}

function ProjectCarousel(props) {
    let carouselId = props.id + '-carousel';
    let items = [];
    let indicators = [];

    for (let i in props.items) {
        let item = props.items[i]
        let active = parseInt(i) === 0;

        items.push(
            <CarouselItem
                key={i}
                active={active}
                image={item}
            />
        );

        indicators.push(
            <button
                key={i}
                type="button"
                data-bs-target={`#` + carouselId}
                data-bs-slide-to={i}
                className={active ? 'active' : ''}
                aria-current={active}
                aria-label={`Slide ` + i}
            ></button>
        );
    }

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark border-0">
                    <div className="modal-body p-0">
                        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {indicators}
                            </div>
                            <div className="carousel-inner">
                                {items}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#` + carouselId} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#` + carouselId} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CarouselItem(props) {
    return (
        <div className={`carousel-item ` + (props.active === true ? 'active' : '')}>
            <LazyLoadImage
                src={props.image}
                className="d-block mh-75"
                alt="Alt"
            />
            {/*<img src={props.image} className="d-block mh-75" alt="Alt" />*/}
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Projects;