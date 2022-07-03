function Projects() {
    return (
        <div id="projects" className="bg-light">
            <div className="container p-3">
                <div className="row">
                    <h2 className="text-center text-uppercase">Примеры проектов</h2>
                    <p className="text-center">
                        <i className="bi bi-info-circle me-3"></i>
                        Здесь представлены только те проекты, показ которых был одобрен заказчиком
                    </p>
                </div>
                <div className="row">
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                    <Project
                        image="https://via.placeholder.com/640x380"
                        title="Какой-то ремонт"
                        description="12 января 2022"
                        dark={true}
                    />
                </div>
            </div>
        </div>
    );
}

function Project(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 p-3">
            <a href="" className="text-decoration-none">
                <div className={`card border-0 shadow-sm` + (props.dark === true ? 'bg-dark text-white' : 'bg-light text-dark')}>
                    <img src={props.image} className="card-img" alt={props.title} />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                        <h4 className="card-title align-self-center fw-bold">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Projects;