import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import { useEffect, useState } from "react";

const API_URL = 'https://api.github.com/repos/BlastMcGuirk/';
const READ_ONLY_REPO = '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';

export interface ProjectCardProps {
    repo: string;
}

interface RepoInfo {
    name: string;
    description: string;
    stars: number;
    forks: number;
}

export default function ProjectCard(props: ProjectCardProps) {
    const [info, setInfo] = useState<RepoInfo | null>(null);

    useEffect(() => {
        fetch(API_URL + props.repo, {
            headers: {
                'Authorization': `Bearer ${READ_ONLY_REPO}`
            }
        })
            .then(response => response.json())
            .then(json => setInfo({
                name: json.name,
                description: json.description,
                stars: json.stargazers_count,
                forks: json.forks_count
            }))
            .catch(error => console.error(error));
    }, []);

    return (
        <Card>
            <CardActionArea href={`https://github.com/BlastMcguirk/${props.repo}`} target='_blank'>
            <CardContent sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
                <Typography typography='h5' mb={1}>{info?.name}</Typography>
                <Typography typography='body2'>{info?.description}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction={'row'} alignItems={'center'}>
                    <StarOutlineIcon />
                    <Typography mr={1}>{info?.stars ?? 0}</Typography>
                    <ForkRightIcon />
                    <Typography>{info?.forks ?? 0}</Typography>
                </Stack>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}