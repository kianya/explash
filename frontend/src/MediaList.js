import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem//, ListItemIcon
    , ListItemText } from 'material-ui/List';
//import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function MediaList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>

          <ListItemText inset primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="Eric Hoffman" />
        </ListItem>
      </List>
    </div>
  );
}

MediaList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaList);