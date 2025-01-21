import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import { useEffect, useState } from "react";

const API_URL = 'https://api.github.com/users/BlastMcGuirk/repos';

export interface RepoInfo {
    name: string;
    description: string;
    stars: number;
    forks: number;
}

export default function ProjectCard(props: RepoInfo) {
    return (
        <Card>
            <CardActionArea href={`https://github.com/BlastMcguirk/${props.name}`} target='_blank'>
            <CardContent sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
                <Typography typography='h5' mb={1}>{props?.name}</Typography>
                <Typography typography='body2'>{props?.description}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction={'row'} alignItems={'center'}>
                    <StarOutlineIcon />
                    <Typography mr={1}>{props?.stars ?? 0}</Typography>
                    <ForkRightIcon />
                    <Typography>{props?.forks ?? 0}</Typography>
                </Stack>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}