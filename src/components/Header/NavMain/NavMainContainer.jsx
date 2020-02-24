import React from "react";
import { connect } from "react-redux";
import NavMain from "./NavMain";
import { authoriseUser} from "./../../../redux/auth-reducer";


class NavMainContainer extends React.Component {
    componentDidMount() {
        this.props.authoriseUser();
    }
    render() {
        return <NavMain {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps,{ authoriseUser })(NavMainContainer);