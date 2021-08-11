import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Projectcard from './Projectcard'
import chalImg from './chch.png'
import cmp110 from './110.png'
import backgrnd from './back.png'
import Typography from '@material-ui/core/Typography'


const chch = {
    name: 'Cherokee Challenge',
    des: 'Flutter and firebase mobile application prototype to learn the Cherokee language.',
    img: chalImg
}

const travel = {
    name: 'Travel Blog',
    des: 'React website created as a travel blog.',
    img: null

}

const comp110 = {
    name: 'COMP110',
    des: 'Information on working as a teaching assistant for COMP110, in introductory computer science class, at UNC Chapel Hill.',
    img: cmp110

}

const Projects = () => {
    return (
        <div className="projects">
            <div style={{
                backgroundImage: `url(${backgrnd})`,
                backgroundPosition: "top",
                position: "absolute",
                width: "100%",
                height: "1200px",
                objectFit: "contain",
                transform: "translate(0%, -32%)",
                zIndex: "-1"
            }}>
            </div>
            <Container>
                <Typography>
                    Below are some of the projects I've been working on. Click on "learn more" to see details! 
                </Typography>
            </Container>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Projectcard project={chch} />
                    </Grid>
                    <Grid item item xs={12} md={6} lg={4}>
                        <Projectcard project={travel} />
                    </Grid>
                    <Grid item item xs={12} md={6} lg={4}>
                        <Projectcard project={comp110} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default Projects;