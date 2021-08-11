import Bloglist from './Bloglist';
import useFetch from './useFetch';
import backgroundVid from './falling.mp4'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Box, Grid } from '@material-ui/core';
import Footer from './Footer';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="Home">
            <div>
                <video autoPlay muted id="video"
                style={{
                    margin: "80px auto",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(0%, -101.3%)",
                    paddingBottom: "100",
                    zIndex: "-1"}}>
                    <source src={backgroundVid} type='video/mp4'/>
                </video>
            </div>
            <div className="home-lower">
                <Container>
                    <p> I am a computer science and math student at the University of North Carolina Chapel Hill. When it comes to coding, I am interested in both front and 
                    back end development, as well as learning more about information/data security, working with APIs, and hardware. I like finding connections with other 
                    disciplines and I am always excited to learn new things! To take a look at some of my work head on over to the projects tab, or if you want to contact 
                    me (maybe you need to get rid of a coupon for free ice cream?) my information is below. </p>
                    <br></br>    
                    <Grid container spacing={10} alignItems="center" justify="center">
                        <Grid item>
                            <Button style={{maxWidth: '200px', maxHeight: '80px', minWidth: '180px', minHeight: '50px'}} variant="outlined" color="primary" size="large" fullWidth='true'>Projects</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{maxWidth: '200px', maxHeight: '80px', minWidth: '180px', minHeight: '50px'}} variant="outlined" color="primary" size="large">Contact</Button>
                        </Grid>
                    </Grid>
                </Container>    
            </div>
           <Footer />
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

export default Home;