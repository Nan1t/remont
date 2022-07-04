import './projects.css';

const ALL_PROJECTS = [
    {
        name: "Project 1",
        image: "https://via.placeholder.com/640x380",
        description: "Some project",
        dark: true,
        items: [
            {
                image: "https://via.placeholder.com/640x380",
                title: "Slide 1",
                description: "Hello"
            },
            {
                image: "https://via.placeholder.com/640x380",
                title: "Slide 2",
                description: "Kek"
            }
        ]
    }
]

function Projects() {
    let projects = [];

    for (let i in ALL_PROJECTS) {
        let project = ALL_PROJECTS[i];

        projects.push(
            <Project
                key={i}
                id={`project-` + i}
                dark={project.dark}
                title={project.name}
                image={project.image}
                description={project.description}
                items={project.items}
            />
        );
    }

    return (
        <div className="bg-light">
            <div className="container p-3">
                <div className="row">
                    <h2 id="projects" className="text-center text-uppercase">Примеры проектов</h2>
                    <p className="text-center">
                        <i className="bi bi-info-circle me-3"></i>
                        Здесь представлены только те проекты, показ которых был одобрен заказчиком
                    </p>
                </div>
                <div className="row">
                    {projects}
                </div>
            </div>
        </div>
    );
}

function Project(props) {
    let modalId = props.id + '-modal';

    return (
        <div className="col-12 col-md-6 col-lg-4 p-3">
            <button className="text-decoration-none border-0 p-0" data-bs-toggle="modal" data-bs-target={`#` + modalId}>
                <div className={`card border-0 shadow-sm` + (props.dark === true ? 'bg-dark text-white' : 'bg-light text-dark')}>
                    <img src={props.image} className="card-img" alt={props.title} />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                        <h4 className="card-title align-self-center fw-bold">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </button>
            <ProjectCarousel id={modalId} items={props.items} />
        </div>
    );
}


function ProjectCarousel(props) {
    let carouselId = props.id + '-carousel';
    let items = [];

    for (let i in props.items) {
        let item = props.items[i];

        items.push(
            <CarouselItem
                key={i}
                active={parseInt(i) === 0}
                image={item.image}
                title={item.title}
                description={item.description}
            />
        );
    }

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-transparent">
                    <div className="modal-body p-0">
                        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
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
            <img src={props.image} className="d-block w-100" alt="Alt" />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Projects;