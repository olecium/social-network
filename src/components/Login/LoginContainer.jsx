import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return <Login {...this.props} captcha={this.props.captcha} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        captcha: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps,{ userLogin })(LoginContainer);