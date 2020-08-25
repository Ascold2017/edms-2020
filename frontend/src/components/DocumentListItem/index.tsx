
import React from 'react'
import { makeStyles, Avatar, Typography, Card } from '@material-ui/core'

export default function DocumentListItem() {
    const classes = useStyles()

    return (
        <Card className={classes.documentsListItem}>
        <Typography variant="h5" component="h4">Document 1</Typography>
        <Typography variant="subtitle2">Access opened at: 25.09.2020 18:42</Typography>
        <Typography variant="subtitle2">Deadline to sign: 25.09.2020 21:42</Typography>
        <Typography variant="subtitle2">Current route:</Typography>
        <div className={classes.documentsListItemRouting}>
            <Avatar>M</Avatar>
            <Avatar className={classes.documentsListItemActiveRoute}>M</Avatar>
            <Avatar>M</Avatar>
            <Avatar>M</Avatar>
        </div>
        <footer className={classes.documentsListItemBottom}>
            <Typography variant="subtitle2">Created: 25.09.2020 18:42</Typography>
            <Typography variant="subtitle2">Author: Mihail Pogosyan</Typography>
        </footer>
    </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    documentsListItem: {
        padding: theme.spacing(2)
    },
    documentsListItemRouting: {
        display: 'flex',
        overflowX: 'auto',
        '& > *' : {
            margin: theme.spacing(1)
        }
    },
    documentsListItemActiveRoute: {
        boxShadow: theme.shadows['5']
    },
    documentsListItemBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1)
    }
}))