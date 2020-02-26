import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    setEditMode = () =>{
        this.setState({
            editMode: true
        });
    }

    closeEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({ 
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({ 
                status: this.props.status
            });
        }
    }

    render() {
        return(
            <div className="status">
                { !this.state.editMode && 
                    <p onDoubleClick={this.setEditMode}>{this.state.status || "---------"}</p>
                }
                { this.state.editMode && 
                    <input type="text" onBlur={this.closeEditMode} autoFocus={true} onChange={this.onStatusChange} value={this.state.status}/>
                }
            </div>
        );
    }
}
export default ProfileStatus;