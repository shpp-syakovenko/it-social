import {connect} from "react-redux";
import AddPost from "./AddPost";
import {addPostActionCreate} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addPostElement: (value) => {
            dispatch(addPostActionCreate(value));
        }
    }
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
