import React from "react";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {DialogsMessageTextarea} from "./DialogsMessageTextarea";
import {addMessage, changeMessageText} from "../../redux/dialogs_reducer";



const mapStateToProps = (state: RootStoreType) => ({
	newMessageText: state.dialogsReducer.newMessageText,
})

export default connect(mapStateToProps, {addMessage, changeMessageText})(DialogsMessageTextarea)