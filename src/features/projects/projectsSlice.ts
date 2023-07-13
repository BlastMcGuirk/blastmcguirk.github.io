import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchProjectsAsync } from "./projectsActions";

export const PROJECTS_SLICE_NAME = "projects";

export interface Project {
    fullName: string;
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
}

export interface ProjectsState {
    projects: Project[];
    status: "unloaded" | "loading" | "success" | "failure";
}

const initialState: ProjectsState = {
    projects: [],
    status: "unloaded"
};

export const projectsSlice = createSlice({
    name: PROJECTS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProjectsAsync.fulfilled, (state, action) => {
                state.status = "success";
                state.projects = action.payload;
            })
            .addCase(fetchProjectsAsync.rejected, (state) => {
                state.status = "failure";
            })
    },
});

export default projectsSlice.reducer;