import {connect} from "react-redux";
import AddPost from "./AddPost";
import {addPostActionCreate, updatePostTextActionCreate} from "../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText,
        postData: state.profilePage.postData
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChangeText: (event) => {
            dispatch(updatePostTextActionCreate(event.target.value));
        },
        addPostElement: (event) => {
            event.preventDefault();
            dispatch(addPostActionCreate());
        }
    }
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
