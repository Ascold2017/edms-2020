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
export default function RootNavigator() {
    return (
        <Router>
            <Switch>
                <Route path="/sign-in"><Authorization /></Route>
                <Route path="/">
                    <Layout>
                        <Route path="/" exact><Dashboard /></Route>
                        <Route path="/documents"><MyDocuments /></Route>
                        <Route path="/documents/archived"><ArchivedDocuments /></Route>
                        <Route path="/documents/new"><DocumentEdit /></Route>
                        <Route path="/documents/:id/edit"><DocumentEdit /></Route>
                        <Route path="/documents/:id"><DocumentDetails /></Route>
                        <Route path="/provider"><ProviderDashboard /></Route>
                        <Route path="/provider/new-user"><ProviderNewUser /></Route>
                        <Route path="/settings"><Settings /></Route>
                        
                    </Layout>
                </Route>

            </Switch>
        </Router>
    )
}