import React, { Component } from 'react';
import * as administratorsAction from '../../store/actions/index';
import { connect } from 'react-redux';




class Administrators extends Component {

    componentDidMount() {
        console.log("Administrators List : ", this.props.onInitAdministrators());
        console.log("Admins ",this.props.initialAdmins);
    }

    render() {
        return (
            <>
                <h2>Affichage des administrateurs</h2>
                <div>
                    Administrators List:
               

            </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        initialAdmins: state.admins,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitAdministrators: () => { dispatch(administratorsAction.fetchAllAdmins()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
