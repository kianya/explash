import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import tileMediaData from './tileMediaData';
import tileData from "./TileData";
//import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => {
    return ({
        card: {
            display: 'flex',
            marginBottom: '1px',
            maxHeight: 100,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 100,
            height: 100,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    });
};

function MediaControlCard(props) {
  const { classes, theme } = props;
  return (
    <div>
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="headline">Live From Space</Typography>
                    <Typography variant="subheading" color="textSecondary">
                        Mac Miller
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="Previous">
                    </IconButton>
                    <IconButton aria-label="Play/pause">
                    </IconButton>
                    <IconButton aria-label="Next">
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image='MediaImage'
                title='Title'
            />
        </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);