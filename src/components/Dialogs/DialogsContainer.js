import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreate} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageElement: (value) => {
            dispatch(addMessageActionCreate(value));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default withAuthRedirect(DialogsContainer);
