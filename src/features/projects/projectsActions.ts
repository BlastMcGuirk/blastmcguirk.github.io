import { createAsyncThunk } from "@reduxjs/toolkit";
import { Project } from "./projectsSlice";

// Github Fetch URL
const GITHUB_FETCH_REPOS_URL = "https://api.github.com/users/BlastMcGuirk/repos";

/**
 * Fetch the projects from github
 */
export const fetchProjectsAsync = createAsyncThunk(
    "projects/fetch",
    async () => {
        // Fetch all the repos
        const response: any[] = await (await fetch(GITHUB_FETCH_REPOS_URL)).json();

        // Filter out forked repos
        const personalRepos = response.filter(repo => !repo.fork);

        // Sort by star count
        const sortedRepos = personalRepos.sort((repo1, repo2) => repo1.stargazers_count < repo2.stargazers_count ? 1 : -1);

        // Map the repos to their data object
        return sortedRepos.map((repo): Project => {
            return {
                fullName: repo.full_name,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                language: repo.language,
                stars: repo.stargazers_count
            }
        });
    }
)