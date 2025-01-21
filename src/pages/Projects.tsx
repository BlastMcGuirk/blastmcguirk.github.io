import { Box, Container, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

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
                            return (
                                <Grid key={repo} size={{ sm: 12, md: 6 }}>
                                    <ProjectCard repo={repo} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
