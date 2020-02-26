import React from "react";
import { connect } from "react-redux";
import { authoriseLogin } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return <Login {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps,{ authoriseLogin })(LoginContainer);