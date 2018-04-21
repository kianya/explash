import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  root: {
    width: 500,
    textColor: theme.palette.background.white,
  },
  title: {
    color: theme.palette.primary.white,
  },
});

function PositionedTooltips(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <Grid container justify="center">
        <Grid item>
          <Tooltip id="tooltip-top-start" title="Add" placement="top-start" style>
            <Button >top-start</Button>
          </Tooltip>
          <Tooltip id="tooltip-top" title="Add" placement="top">
            <Button class="explashtooltips">top</Button>
          </Tooltip>
          <Tooltip id="tooltip-top-end" title="Add" placement="top-end">
            <Button class="explashtooltips">top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedTooltips);
