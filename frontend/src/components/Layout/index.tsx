import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText, Avatar, Typography,  } from '@material-ui/core';
import Dashboard from '@material-ui/icons/Dashboard'
import FileCopy from '@material-ui/icons/FileCopy'
import Settings from '@material-ui/icons/Settings'
import { Link } from 'react-router-dom'
const drawerWidth = 105
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    title: {
        flexGrow: 1,
    },
    logo: { marginBottom: theme.spacing(3) },
    drawerPaper: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        padding: theme.spacing(3),
        marginLeft: drawerWidth
    },
    link: { textDecoration: 'none' },
    menuItem: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    menuItemIcon: { display: 'flex', justifyContent: 'center' }
}));
export default function Layout({ children }: any) {
    const classes = useStyles();
    return <>

        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Avatar src="/logo192.png" className={classes.logo}/>
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button classes={{ root: classes.menuItem }}>
                        <ListItemIcon classes={{ root: classes.menuItemIcon }}><Dashboard /></ListItemIcon>
                        <ListItemText style={{ fontSize: 9 }} secondary="Dashboard" />
                    </ListItem>
                </Link>
                <Link to="/documents" className={classes.link}>
                    <ListItem button classes={{ root: classes.menuItem }}>
                        <ListItemIcon classes={{ root: classes.menuItemIcon }}><FileCopy /></ListItemIcon>
                        <ListItemText style={{ fontSize: 9 }} secondary="Documents" />
                    </ListItem>
                </Link>
                
            </List>
            <Link to="/settings" style={{ marginTop: 'auto'  }} className={[classes.menuItem, classes.link].join(' ')}>
                <Settings />
                <ListItemText style={{ fontSize: 9 }} secondary="Settings" />
            </Link>
        </Drawer>

        <main className={classes.content}>
            {children}
        </main>
    </>
}