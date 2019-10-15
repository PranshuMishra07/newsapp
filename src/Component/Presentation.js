import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import posed from 'react-pose';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import "./Home.scss";


const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});


const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});
class Presentation extends Component {
    state = {
        isVisible: true,
        id: 0,
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentDidMount() {
        if (this.props.data.length === 0) {
            setInterval(() => {
                this.setState({ isVisible: !this.state.isVisible });
            }, 500);
        }
    }
    handleChange = id => () => {
        this.setState((preState) => {
            return { id }
        });
        return id;
    };


    render() {
        const { isVisible, id } = this.state;
        const { classes, data } = this.props;
        return (
            <Grid container xs={12}>
                {
                    this.props.data.length === 0 ? <div style={{margin:"auto"}} >
                        <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
                    </div>
                        : <Grid container xs={12}>
                            <Grid item xs={6} itemclassName="Left">
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                                {data[id].source.name.charAt(0).toUpperCase()}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        }
                                        title={data[id].source.name}
                                        subheader={data[id].publishedAt}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={data[id].urlToImage}
                                        title={data[id].content}
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            {data[id].content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} className="Right">
                                <List className={classes.root} subheader={<li />}>
                                    {data.map((value, id) => (
                                        <li key={`section-${value}`} className={classes.listSection}>
                                            <ul className={classes.ul} onClick={this.handleChange(id)}>
                                                <ListSubheader>{`${value.source.name}`}</ListSubheader>
                                                <ListItem button>
                                                    <ListItemText primary={value.title} />
                                                </ListItem>
                                                <Divider />
                                            </ul>
                                        </li>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                }
            </Grid>
        )
    }
}


export default withStyles(styles)(Presentation);
