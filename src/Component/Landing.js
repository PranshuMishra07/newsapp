import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link, Switch} from "react-router-dom";
import Search from './Search';
import Home from './Home';
import logo from  './logo.png';

const styles = theme => ({
    root: {
        width: '100%',
    },
});

class Landing extends React.Component {
    render() {

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <img src={logo} style={{height:"60px",width:"60px",padding:"5px" }} />
                    Mumbai Mirror
                    </Toolbar>
                </AppBar>
                <nav>

                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Switch>
                        <Route path="/search" component={Search} />
                        <Route path="/" component={Home} />
                    </Switch>
                </nav>

            </div>
        )

    }

    ;
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);