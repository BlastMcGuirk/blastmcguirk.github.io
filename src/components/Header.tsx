import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

export interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

export default function Header(props: HeaderProps) {
    return (
        <AppBar color="inherit" elevation={0}>
            <Toolbar>
                <Box flexGrow={1}>
                    <IconButton onClick={() => props.setCurrentPage('/')} 
                                size="large" 
                                edge="start" 
                                color={props.currentPage === '/' ? "primary" : undefined}>
                        <HomeIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Box>
                <Button variant="text" 
                        size="large" 
                        color={props.currentPage === "/about" ? "primary" : "inherit"} 
                        onClick={() => props.setCurrentPage('/about')}>About</Button>
                <Button variant="text" 
                        size="large" 
                        color={props.currentPage === "/projects" ? "primary" : "inherit"} 
                        onClick={() => props.setCurrentPage('/projects')}>Projects</Button>
                <Button variant="text" 
                        size="large" 
                        color={props.currentPage === "/honorsAndAwards" ? "primary" : "inherit"} 
                        onClick={() => props.setCurrentPage('/honorsAndAwards')}>Honors & Awards</Button>
            </Toolbar>
        </AppBar>
    );
}