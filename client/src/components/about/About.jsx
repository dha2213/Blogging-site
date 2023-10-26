
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Dhananjay Yadav</Typography>
                <Text variant="h5">I am a passionate CSE student at IIIT Guwahati, specializing in frontend development.
                 Proficient in HTML, CSS, and JavaScript, I enjoy creating user-friendly and visually appealing websites.
                  I have worked on various projects, honing my problem-solving and design skills. With a drive to excel in the tech industry,
                   I aspire to make a meaningful impact through my work.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/dha2213" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/dhananjay061/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or send me an Email
                    <Link href="mailto:dhananjayyadav221303@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;