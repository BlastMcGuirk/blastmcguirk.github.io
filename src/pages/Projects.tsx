import { Box, Container, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import ProjectCard, { RepoInfo } from '../components/ProjectCard';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.github.com/users/BlastMcGuirk/repos';
const repoList = [
    'KitchenBuddy-Server',
    'KitchenBuddy-Client',
    'PocketJeopardy',
    'KnitBuddy',
    'Budget-App',
    'UNHAlbedo',
    'SliderGame',
    'GitHub-Searcher---NextJS-Project',
]

export default function Projects() {
    const [info, setInfo] = useState<RepoInfo[]>([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => setInfo(json.map((j: any) => ({
                name: j.name,
                description: j.description,
                stars: j.stargazers_count,
                forks: j.forks_count
            }))))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <Box>
            <Container
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: 2
                }}
            >
                <Stack direction={'column'} alignItems={'center'} width={'70%'} mb={2}>
                    <Typography variant='h2' mt={2} alignSelf={'center'}>Projects</Typography>
                    <Typography variant='body2' mt={2} mb={4} alignSelf={'center'}>
                        Feel free to explore my <Link href='https://github.com/BlastMcGuirk' underline='hover'>GitHub</Link> to see more projects!
                        </Typography>

                    <Grid container spacing={2} sx={{ width: '100%' }}>
                        {repoList.map(repo => {
                            const repoInfo = info.filter(i => i.name === repo)[0];
                            if (repoInfo !== undefined)
                            return (
                                <Grid key={repo} size={{ sm: 12, md: 6 }}>
                                    <ProjectCard name={repo} 
                                                 description={repoInfo.description}
                                                 stars={repoInfo.stars}
                                                 forks={repoInfo.forks} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
