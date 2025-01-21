import { Box, Container, Link, Stack, Typography } from '@mui/material';

export default function About() {
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
                    <Typography variant='h2' mt={2} alignSelf={'center'}>Who am I?</Typography>

                    <Box
                        component="img"
                        sx={{
                            width: "250px",
                            height: "250px",
                            borderRadius: "50%",
                            marginY: "1rem"
                        }}
                        alt="Skiing in WA"
                        src="../../pic_of_me.jpg" />

                    <Typography variant='body1' fontSize={20} textAlign={'center'} mb={4} maxWidth={700}>
                        My name is Brendan McGuirk.
                    </Typography>

                    <Typography variant='body1' fontSize={20} textAlign={'center'} mb={4} maxWidth={700}>
                        I am a Software Engineer II at <Link href='https://www.jacobs.com/' underline='hover'>Jacobs Engineering</Link>.
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        In my first years at Jacobs, I founded and led my own team, responsible for creating internal
                        tools for metrics gathering and reporting. Currently I am a member of a small team
                        developing mission planning software for the US Air Force creating applications
                        for desktop, mobile, and web. 🧑‍💻
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        Additionally, I briefly worked on the DevSecOps team, supporting over 70 developers 
                        with creating, maintaining, and improving build and release pipelines. 👷‍♂️ 
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        Last summer I was a mentor to an intern on our developer team. 🧑‍🏫 
                    </Typography>
                    
                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        I served in the New Hampshire Army National Guard for 8 years as a musician, playing
                        trumpet and singing. During that time, I achieved the rank of Sergeant, and won a
                        national award for Army National Guard Soldier of the Year. 🪖
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        I graduated from the University of New Hampshire earning my B.S. in Computer Science in
                        2019, and my M.S. in Computer Science in 2020. Go Wildcats! 🐱
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        I was born in San Francisco, grew up in New Hampshire, and currently live in Oregon. 🌍
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        I love the outdoors. My favorite activity is to go on hikes with my wife and our dog.
                        I also love to go on runs, and to ski (both downhill and cross-country). ⛷️
                    </Typography>

                    <Typography variant='body1' fontSize={20} mb={4} width={'100%'} maxWidth={700}>
                        For more details about my accomplishments, feel free to check out my&nbsp;
                        <Link href='../../Brendan McGuirk Resume.pdf' underline='hover'>resumé</Link>! 📄
                    </Typography>

                    <Typography variant='h5' mb={1}>Technical Skills:</Typography>
                    <Typography variant='body1' fontSize={20} mb={1}>TypeScript • C# • React • Redux • NodeJS • SQL/NoSQL • Docker • Kubernetes</Typography>
                </Stack>
            </Container>
        </Box>
    )
}
