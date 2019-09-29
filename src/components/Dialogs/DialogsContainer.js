import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreate, updateMessageActionCreate} from "../../redux/dialogsReducer";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (event) =>{
            let text = event.target.value;
            dispatch(updateMessageActionCreate(text));
        },
        addMessageElement: (event) => {
            event.preventDefault();
            dispatch(addMessageActionCreate());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
