import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Fab, Grid, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {v4 as uuid} from 'uuid';

const useStyles = makeStyles((theme) => ({
  container: {},
  formContent: {
    padding: theme.spacing(4),
  },
  formItem: {
    padding: theme.spacing(0, 2, 2, 0),
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


export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const classes = useStyles();

  const addTodo = () => {
    todoList.push({
      id: uuid(),
      title,
      message
    });
    setTodoList(todoList);
    setTitle('');
    setMessage('');
  }

  return (
    <Container className={classes.container} >
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (title && message) {
            addTodo();
          }
        }}>
        <Grid container className={classes.formContent}>
          <Grid
              item
              xs={12}
              md={4}
              className={classes.formItem}
            >
            <TextField
              id="standard-basic"
              label="Title"
              className={classes.formItem}
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </Grid>
          <Grid
              item
              xs={12}
              md={6}
              className={classes.formItem}
            >
            <TextField
              id="standard-basic"
              label="Message"
              className={classes.formItem}
              fullWidth
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)} />
          </Grid>
          <Grid
              item
              xs={12}
              md={2}
              className={classes.formItem}
          >
            <Fab
              color="primary"
              aria-label="add"
              type="submit">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </form>
      <Grid container className={classes.formContent}>
        {todoList.map(todo => (
          <Grid item key={todo.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {todo.title}
                </Typography>
                <Typography>
                  {todo.message}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
