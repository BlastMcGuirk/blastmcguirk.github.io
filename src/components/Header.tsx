import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <AppBar color="inherit" elevation={0}>
            <Toolbar>
                <Box flexGrow={1}>
                    <IconButton href="/" size="large" edge="start" color={location.pathname === "/" ? "primary" : undefined}>
                        <HomeIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Box>
                <Button variant="text" size="large" color={location.pathname === "/about" ? "primary" : "inherit"} href="/about">About</Button>
                <Button variant="text" size="large" color={location.pathname === "/projects" ? "primary" : "inherit"} href="/projects">Projects</Button>
                <Button variant="text" size="large" color={location.pathname === "/awards" ? "primary" : "inherit"} href="/awards">Honors & Awards</Button>
            </Toolbar>
        </AppBar>
    );
}