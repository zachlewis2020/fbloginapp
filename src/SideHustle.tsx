import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';
import HustleItems from './HustleItems';

interface props {
  isLoggedIn: boolean;
  name: String;
  email: String
}

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

class SideHustle extends React.Component<props> {


  constructor(props: Readonly<props>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: { preventDefault: () => void; }) {

    event.preventDefault();
  }

  render() {

    return (
      <div >
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Paper >
              Service Person: {this.props.name}
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <HustleItems/>
           </Grid>
        </Grid>
        <hr />
      </div >
    );
  }
}

export default withStyles(styles)(SideHustle);
