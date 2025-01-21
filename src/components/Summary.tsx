import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Summary() {
  return (
    <Stack
      spacing={1}
      useFlexGap
      sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
    >
      <Typography
        variant="h1"
        mb={4}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          fontSize: 'clamp(3rem, 10vw, 3.5rem)',
        }}
      >
        Brendan&nbsp;
        <Typography
          component="span"
          variant="h1"
          color="primary"
          sx={{
            fontSize: 'inherit',
          }}
        >
          McGuirk
        </Typography>
      </Typography>
      
      <Typography
        variant="h5"
        mb={4}
        sx={{
          textAlign: 'center',
          width: { sm: '100%', md: '80%' },
        }}
      >
        Hi! My name is Brendan!
        <br/>
        I am a 
        <Typography
          component="span"
          variant="h1"
          color="primary"
          sx={{
            fontSize: 'inherit',
          }}
        >
          &nbsp;full-stack developer&nbsp;
        </Typography>
        working with 
        <Typography
          component="span"
          variant="h1"
          color="primary"
          sx={{
            fontSize: 'inherit',
          }}
        >&nbsp;React/Redux&nbsp;
          </Typography>
          and many different back-ends with 
          
          <Typography
          component="span"
          variant="h1"
          color="primary"
          sx={{
            fontSize: 'inherit',
          }}
        >
          &nbsp;5+ years of experience
          </Typography>
          .
      </Typography>

      <Typography variant='h5'>🏢 Software Engineer II at Jacobs Engineering</Typography>
      <Typography variant='h5'>🧑‍🎓 M.S. in Computer Science</Typography>
      <Typography variant='h5' mb={4}>🧠 Conference Participant & Eternal Student</Typography>

      <Typography variant='h5'>🌍 Located in Oregon</Typography>
      <Typography variant='h5'>🪖 US Army Veteran</Typography>
      <Typography variant='h5' mb={4}>🏞️ Nature Lover (hiking, skiing, running)</Typography>
    </Stack>
  );
}