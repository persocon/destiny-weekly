import { connect } from 'react-redux';
import { resetApp } from '../actions/app';
import Component from '../components/BackToLoginComponent';

export { Component as PureBackToLoginContainer };

const Container = connect(null, { resetApp })(Component);

export default Container;
