import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid rgba(20, 13, 13, 0.877)',
    padding: '25px',
    borderRadius: '5px'
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  btn: {
    border: '1px solid black',
    padding: '5px 50px',
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F9A51A',
    color: 'rgba(20, 13, 13, 0.877)'
  },
}));

export default function SignIn() {
  
  const classes = useStyles();
  //Sign with google account
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
 

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      // The signed-in user info.
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email: email};
      setLoggedInUser(signedInUser);
      history.replace(from);
      console.log(signedInUser)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const {register, handleSubmit, control, errors} = useForm()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h2" variant="h5" >
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit((data)=> alert(JSON.stringify(data)))}>
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register({ required: "PASSWORD REQUIRED", minLength: 6})}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password &&  <p>{errors.password.message} </p> }
          <Grid container>
            <Grid item xs>
                <FormControlLabel
                control={
                  <Controller as={Checkbox} control={control} name="remember" color="primary" defaultValue={false}/>}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
              Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <br/>
          <span>---------or-----------</span>
          <br/>
          <br/>
          <Button className={classes.btn}> <FontAwesomeIcon icon={faFacebook}/> <span>Continue with Facebook</span> </Button>
          <br/>
          <br/>
          <Button className={classes.btn} onClick= {handleGoogleSignIn} > <FontAwesomeIcon icon={faGoogle} /> Continue with Gmail</Button>
        </form>
      </div>
    </Container>
  );
}