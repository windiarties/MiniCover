import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Switch, Route } from 'react-router-dom'
import statistic from './content/statisticchart'
import chartcover from './content/chartcover'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class='page-content'>
                    <div class='row'>
                        <div class='col-md-3'>
                            <Sidebar />
                        </div>
                        <div class='col-md-9'>
                            <div class='row'>
                                <Switch>
                                    <Route exact path='/statistic' component={statistic} />
                                    <Route exact path='/chartcover' component={chartcover} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard