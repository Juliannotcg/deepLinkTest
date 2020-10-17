import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Computer from '@material-ui/icons/Chat';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))

const Home = () => {
  const[deppLink, setDeppLink] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setDeppLink(event.target.value)
  };

  return(<Container component="main" maxWidth="xs">
        <CssBaseline />
     <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <Computer />
         </Avatar>
         <Typography component="h1" variant="h5">
         Test DeepLink Video
         </Typography>
         <form className={classes.form} noValidate>
         <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="deepLink"
             label="Insert Deeplink"
             name="deepLink"
             autoFocus
             onChange={handleChange}
         />
         <Button
            href={deppLink}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
          Assistir
        </Button>
         </form>
     </div>
</Container>);
}

export default Home;