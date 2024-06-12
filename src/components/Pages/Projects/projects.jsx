import Card from "../../Card/card"
import { projects } from "../../../assets/js/projects"

//renders each of my projects after inporting the objects
export default function Projects(){
    return(
        <div className="row text-center">
            {projects.map((project) => {
                return(
                <div className="col-sm-6 " key={project.project_id}>
                    <Card cardTitle={project.project_title} gitHubUrl={project.repo} deployedUrl={project.deployedUrl} image={project.image}/>
                </div>             
                )
            })}
        </div>
    )
}