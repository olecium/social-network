import { connect } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";

let mapStateToProps = (state) => {
    return {
        navList: state.sidebar.nav,
        friendList: state.sidebar.friendList
    };
}

let mapDispatchToProps = (dispatch) => {
    return {};
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;