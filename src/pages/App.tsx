import { Box, Container, Stack, Toolbar } from '@mui/material';
import Summary from '../components/Summary';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Awards from './Awards';

export default function App() {
    const [currentPage, setCurrentPage] = useState('/');
    
    return (
        <Stack sx={{ minHeight: "100vh" }}>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Toolbar />
            
            {(currentPage === '/') && (
                <Box>
                    <Container
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 2
                        }}
                    >
                        <Summary />
                    </Container>
                </Box>
            )}
            {(currentPage === '/about') && <About />}
            {(currentPage === '/projects') && <Projects />}
            {(currentPage === '/honorsAndAwards') && <Awards />}

            <Footer />
        </Stack>
    )
}
