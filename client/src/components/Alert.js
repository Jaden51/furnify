import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {
    render() {
        const { alerts } = this.props

        return (
            <div>
                {
                    alerts.map(alert => {
                        return (
                            <div key={alert.id}>
                                {alert.msg}
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alerts: state.alerts,
    }
}

export default connect(mapStateToProps)(Alert);