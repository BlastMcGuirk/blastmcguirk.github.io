import { Box, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box marginTop={"auto"} display={"flex"} justifyContent={"center"}>
            <IconButton href="https://www.linkedin.com/in/brendan-w-mcguirk/"
                        size="large">
                <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton href="https://github.com/BlastMcGuirk"
                        size="large">
                <GitHubIcon sx={{ fontSize: 40 }} />
            </IconButton>
        </Box>
    );
}