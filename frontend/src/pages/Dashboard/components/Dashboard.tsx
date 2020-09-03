import React from 'react'
import { makeStyles, Typography, } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DocumentListItem from '../../../components/DocumentListItem'
import { routes } from '../../../navigator'

export default function Dashboard () {
    const classes = useStyles()

    const renderDocumentsTosSignList = () => (
       <DocumentListItem />
    )
    return <div className={classes.root}>
        <Typography variant="h2" component="h1" className={classes.title}>Welcome to EDMS!</Typography>

            <Link to={routes.NEW_DOCUMENT} className={classes.actionBarItem}>
                <span>Create new document</span>
            </Link>
            <Link to={routes.MY_DOCUMENTS} className={classes.actionBarItem}>
                <span>My documents</span>
            </Link>

        <div className={classes.documentsList}>
            <Typography variant="subtitle1" component="h3">Documents to sign</Typography>
           { renderDocumentsTosSignList() }
        </div>

    </div>
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr 1fr',
        gridGap: theme.spacing(2),
        gridTemplateColumns: '1fr 1fr'
    },
    title: {
        gridColumn: '1 / 3',
    },

    actionBarItem: {
        padding: theme.spacing(2),
        borderRadius: 6,
        borderWidth: 3,
        borderStyle: 'solid',
        fontSize: theme.typography.fontSize * 1.5,
        textDecoration: 'none',
        '&:first-child' : {
            borderColor: theme.palette['success'].main,
            color: theme.palette['success'].main,
        },
        '&:last-child': {
            borderColor: theme.palette['info'].main,
            color:  theme.palette['info'].main,
        }
    },
   
    documentsList: {

    },
}))