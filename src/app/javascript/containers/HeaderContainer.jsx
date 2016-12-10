import { connect } from 'react-redux';
import { resetApp } from '../actions/app';
import Component from '../components/HeaderComponent';

export { Component as PureHeaderContainer };

const Container = connect(null, { resetApp })(Component);

export default Container;
