import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Star from '@material-ui/icons/Star';
import { fetchReviews } from '../../controller/handlers';
import { IAppState } from '../../store/types';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    minHeight: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

interface ISightCardProps {
  sightId: string,
  title: string | null,
  pictureUrl: string,
  info: string | null,
  rate: string,
}

const SightCard: React.FC<ISightCardProps> = (props: ISightCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const reviews = useSelector((state: IAppState) => state.reviews);
  // const isLoading = useSelector((state: IAppState) => state.isLoading);//I will need it
  // const isLoggedIn = useSelector((state: IAppState) => state.loggedIn);

  useEffect(() => {
    setExpanded(false);
  }, [props.sightId]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={props.pictureUrl}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Star />
          <span>
            {props.rate}
          </span>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => {
            handleExpandClick();
            dispatch(fetchReviews(props.sightId));
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {reviews && !reviews.length
          && (
          <Card>
            <CardHeader
              title={t('first_review')}
            />
            <Button>
              {t('give_feedback')}
            </Button>
          </Card>
          )}
          {reviews && reviews.length > 0 && (
          <Button>
            {t('give_feedback')}
          </Button>
          )}
          {reviews && reviews.map((review) => (
            <Card key={review.user + review.sightId}>
              <CardContent>
                <div>
                  <span>
                    <Star />
                    {review.rate.toFixed(1)}
                  </span>
                  <span>
                    {review.user}
                  </span>
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SightCard;
