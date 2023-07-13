import { useEffect, useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
    projectsSlice,
} from "./projectsSlice"
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
    )

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
