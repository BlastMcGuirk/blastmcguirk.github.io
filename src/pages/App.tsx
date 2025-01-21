import { Box, Container } from '@mui/material';
import Summary from '../components/Summary';

export default function App() {
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
                <Summary />
            </Container>
        </Box>
    )
}
