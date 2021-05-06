import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import CATEGORIES from '../../data/categories';
import TablesChairs from './TablesChairs';
import Storage from './Storage';
import Sleep from './Sleep';
import SofasArmchairs from './SofasArmchairs';

class StoreDisplay extends Component {
    render() {

        if (CATEGORIES) {
            var categories = Object.keys(CATEGORIES).map((key, index) => {
                return (
                    <h3><Link className='link' to={'/store/'+ CATEGORIES[key]}>{CATEGORIES[key]}</Link></h3>
                )
            })
        }

        return (
            <div>
                {categories}
                <Switch>
                    <Route path='/store/Sofas%20and%20Armchairs' exact component={SofasArmchairs} />
                    <Route path='/store/Tables%20and%20chairs' exact component={TablesChairs} />
                    <Route path='/store/Storage%20System%20and%20Units' exact component={Storage} />
                    <Route path='/store/Sleeping%20Area' exact component={Sleep} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(StoreDisplay);