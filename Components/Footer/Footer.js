import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <Box className="footer">
        <Grid container my={6}>
          <Grid mx={10} my={2}> <Typography fontSize={"25px"} fontWeight={"bolder"}> &copy; Copy right by Subrota chandra sarker (2023) </Typography> </Grid>
          <Grid mx={10} my={2}>
            <Link href={'https://www.facebook.com/subrotachandra22/'} target='blank'>
              <FacebookIcon className='footerIcon'> </FacebookIcon>
            </Link>

            <Link href={'https://www.instagram.com/subrotachandra12/'} target='blank'>
              <InstagramIcon className='footerIcon'> </InstagramIcon>
            </Link>

            <Link href={'https://github.com/subrota22'} target='blank'>
              <GitHubIcon className='footerIcon'> </GitHubIcon>
            </Link>

            <Link href={'https://www.linkedin.com/in/subrota-chandra-sarker-full-stack-developer/'} target='blank'>
              <LinkedInIcon className='footerIcon'> </LinkedInIcon>
            </Link>

            <Link href={'https://twitter.com/Subrota21087778'} target='blank'>
              <TwitterIcon className='footerIcon'> </TwitterIcon>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;