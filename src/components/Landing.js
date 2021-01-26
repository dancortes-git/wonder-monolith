import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.heroContent}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Welcome
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
        Use our Wonderful Card Task List
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
        Amazing thinks, jobs, tasks with wonderful images chosen for each task.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to="/pricing">
              <Button variant="contained" color="primary">
                Pricing
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
