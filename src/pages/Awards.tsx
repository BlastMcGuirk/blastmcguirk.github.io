import { Box, Container, Link, Stack, Typography } from '@mui/material';

export default function Awards() {
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
                <Stack direction={'column'} alignItems={'center'} width={'70%'}>
                    <Typography variant='h2' mt={2} mb={4} alignSelf={'center'}>Honors & Awards</Typography>

                    <Typography variant='body1' fontSize={20} width={'100%'} maxWidth={700}>
                        <Link href="https://www.cs.unh.edu/~ruml/papers/mcguirk-ms-thesis.pdf">Published Master's Thesis</Link>
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }} variant='body2' mb={1} width={'100%'} maxWidth={700}>
                        2020 — University of New Hampshire
                    </Typography>
                    <Typography variant='body1' mb={4} width={'100%'} maxWidth={700}>
                        Wrote and presented a thesis/dissertation on organizing students into study groups using
                        integer linear programming to optimize students' picks based on availability, traits, and
                        preferences.
                    </Typography>
                    
                    <Typography variant='body1' fontSize={20} width={'100%'} maxWidth={700}>
                        <Link href="https://www.unh.edu/undergrad-research/sites/default/files/media/2022-08/urc-2019-program-web.pdf">Top 4 Finalist: UNH Undergraduate Research Conference</Link>
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }} variant='body1' mb={1} width={'100%'} maxWidth={700}>
                        2019 — University of New Hampshire
                    </Typography>
                    <Typography variant='body1' mb={4} width={'100%'} maxWidth={700}>
                        Developed a mobile application utilizing a phone's camera to measure reflectivity of light off
                        of snow, and recording those values locally on the phone's storage.
                    </Typography>

                    <Typography variant='body1' fontSize={20} width={'100%'} maxWidth={700}>
                        <Link href="https://www.facebook.com/101586059766/photos/a.105589364766.91928.101586059766/10154269258309767/?type=3">Army Music Soldier of the Year</Link>
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic' }} variant='body1' mb={1} width={'100%'} maxWidth={700}>
                        2016 — 39th Army Band
                    </Typography>
                    <Typography variant='body1' mb={4} width={'100%'} maxWidth={700}>
                        Received the national award for outstanding soldier-musicians in the U.S. Army. The award recognizes
                        leadership abilities, artistic integrity, military accomplishments and organizational and planning skills.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}
