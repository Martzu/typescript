
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fme from './fme.jpg';



const Copyright = () => {
    let email = '';
    let password = '';
    let vault = '';
    const isValid = email.length > 0 && password.length > 0 && vault.length > 0;
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://fme.ro/">
                FmeInterns
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles(theme => ({

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
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Login() {
    const classes = useStyles();
    const [password, setPassword] = useState("");
    const [vault, setVault] = useState("");
    const [username, setUsername] = useState("");
    const isValid = !(username.length > 0 && username.includes("@vvtechpartner.com") && vault.length > 0 && password.length > 0);
    return (
        <Container component="main" maxWidth="xs" >

            <div className={classes.paper}>
                <Avatar className={classes.avatar} src={Fme}/>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField type = "email" onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="emailTextField"
                        label="Veeva User"
                        name="Email"
                        autoComplete="Veeva User"
                    />
                    <TextField onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Password"
                        label="Veeva Password"
                        type="password"
                        id="passwordTextField"
                        autoComplete="Veeva Password"
                    />
                    <TextField onChange={(e) => setVault(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Vault"
                        label="Veeva Vault"
                        type="vault"
                        id="vaultTextField"
                        autoComplete="Veeva Vault"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button disabled = {isValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}