import React from 'react';
import { Link } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '2px',
    },
    title: {
        flexGrow: 1,
    },

});

export const SideBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h7" className={classes.title}>
                    <Link
                            to="/"
                            className="text-white"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/directories"
                            className="text-white"
                        >
                            Directorios
                        </Link>
                    </Typography>
                    <Button color="inherit" >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
