import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Home from './Home';
import logo from './logo.png';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class Landing extends React.Component {

    state = {
        value: "null",
        id: 0
    }

    handlechangeInput = async e => {
        this.setState({ value: e.target.value });
    }

    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.setState({ id: 1 })
        }
    }

    toggleHome = () => {
        this.setState({ id: 0 });

    }
    render() {

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className="Top">
                    <Toolbar>
                        <div onClick={this.toggleHome}><img src={logo} style={{ height: "60px", width: "60px", padding: "5px" }} /></div>
                        Mumbai Mirror
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                name="input"
                                onChange={this.handlechangeInput}
                                onKeyDown={this.keyPress}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <nav>
                    {this.state.id === 0 ? <Home /> : <Search data={this.state.value} />}
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