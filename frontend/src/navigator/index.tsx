import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Authorization from '../pages/Authorization/AuthorizationContainer'
import Dashboard from '../pages/Dashboard/DashboardContainer'
import MyDocuments from '../pages/MyDocuments/MyDocumentsContainer'
import ArchivedDocuments from '../pages/ArchivedDocuments/ArchivedDocumentsContainer'
import DocumentEdit from '../pages/DocumentEdit/DocumentEditContainer'
import DocumentDetails from '../pages/DocumentDetails/DocumentDetailsContainer'
import ProviderDashboard from '../pages/provider/dashboard/DashboardContainer'
import ProviderNewUser from '../pages/provider/NewUser/NewUserContainer'
import Settings from '../pages/Settings/SettingsContainer'

import Layout from "../components/Layout";

export const routes = {
    DASHBOARD: '/',
    MY_DOCUMENTS: '/documents',
    ARCHIVED_DOCUMENTS: '/documents/archived',
    NEW_DOCUMENT: '/documents/new',
    DOCUMENT_DETAILS: '/documents/:id',
    DOCUMENT_EDIT: '/documents/:id/edit',
    PROVIDER_DASHBOARD: '/provider',
    PROVIDER_NEW_USER: '/provider/new-user',
    SETTINGS: '/settings',
    SIGN_IN: '/sign-in'
}
export default function RootNavigator() {
    return (
        <Router>
            <Switch>
                <Route path={routes.SIGN_IN}><Authorization /></Route>
                <Route path="/">
                    <Layout>
                        <Route path={routes.DASHBOARD} exact><Dashboard /></Route>
                        <Route path={routes.MY_DOCUMENTS} exact><MyDocuments /></Route>
                        
                        <Route path={routes.ARCHIVED_DOCUMENTS} exact><ArchivedDocuments /></Route>
                        <Route path={routes.NEW_DOCUMENT} exact><DocumentEdit /></Route>

                        {/*<Route path={routes.DOCUMENT_DETAILS} exact><DocumentDetails /></Route>*/}
                        { /*<Route path={routes.DOCUMENT_EDIT} exact><DocumentEdit /></Route>*/}
                        
                        
           
                        
                        <Route path={routes.PROVIDER_DASHBOARD}><ProviderDashboard /></Route>
                        <Route path={routes.PROVIDER_NEW_USER}><ProviderNewUser /></Route>
                        <Route path={routes.SETTINGS}><Settings /></Route>
                        
                    </Layout>
                </Route>

            </Switch>
        </Router>
    )
}