import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import styles from "./Projects.module.css"
import { fetchProjectsAsync } from "./projectsActions";

export function Projects() {
    const projects = useAppSelector((state) => state.projects);
    const dispatch = useAppDispatch();

    // Load the projects on page load
    useEffect(() => {
        dispatch(fetchProjectsAsync());
    }, []);

    // Render loading
    if (projects.status === "loading") {
        return (
            <p className="loading">Loading...</p>
        )
    }

    // Render failure
    if (projects.status === "failure") {
        return (
            <p className="failure">Failed to fetch projects</p>
        )
    }

    // Render the projects
    return (
        <div className={styles.projects}>
            {projects.projects.map(project => {
                return <p key={project.url} className="project">{project.name}</p>
            })}
        </div>
    );
}
