import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function Projectcard({ project }) {
    const classes = useStyles();
    
    return ( 
        <div className="project-card">
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component='img'
                image={ project.img }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                { project.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                { project.des }
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="secondary">
                Learn More
            </Button>
            </CardActions>
        </Card>
      </div>
     );
}
 
