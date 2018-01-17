import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "../components";

//dummy methods
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(
  Component
);
