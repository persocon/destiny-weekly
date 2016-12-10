import { connect } from 'react-redux';
import { resetApp } from '../actions/app';
import Component from '../components/HeaderComponent';

// const mapDispatchToProps = (dispatch) => ({
//   handleLogOut: (event) => {
//     event.preventDefault();
//     dispatch(resetApp());
//   },
// });

export { Component as PureHeaderContainer };

const Container = connect(null, { resetApp })(Component);

export default Container;
