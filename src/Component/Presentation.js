import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import posed from 'react-pose';
import "./Home.scss";


const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

export default class Presentation extends Component {
    state = {
        expanded: null,
        isVisible: true,
    }

    componentDidMount() {
        if(this.props.data.length===0){
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 500);
    }
    }
    handleChange = id => (expanded) => {
        this.setState((preState) => {
            return { expanded: preState.expanded === id ? false : id }
        });
    };

    render() {
        const { expanded,isVisible } = this.state;
        // console.log(this.props);
        return (
            <div>
                <div>

                    {this.props.data.length === 0
                        ? <div>
                            <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />
                        </div>
                        :
                        <div>

                            {this.props.data.map((value, id) => (
                                <div>
                                    <ExpansionPanel square expanded={expanded === id} onChange={this.handleChange(id)}>
                                        <ExpansionPanelSummary >
                                            <Grid container spacing={16} wrap >
                                                <Grid item xs={1}> <img src={value.urlToImage} alt="no image found" style={{ width: '80px', height: '80px' }} /> </Grid>
                                                <Grid item xs={8}>{value.title}</Grid>
                                                <Grid item xs={2}>{value.source.name}</Grid>
                                                <Grid item xs={1}>{value.publishedAt}</Grid>
                                            </Grid>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12}> {value.content} </Grid>
                                                <Grid item xs={10}><a href={value.url} target="_blank" >{value.url} </a> </Grid>
                                                <Grid item xs={2}>{value.author} </Grid>
                                            </Grid>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                            ))
                            }
                        </div>
                    }
                </div>
            </div>

        )
    }
}



