import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "../components";
import { navigateToWelcome } from "navigation/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ navigateToWelcome }, dispatch);

export default connect(null, mapDispatchToProps)(Component);
