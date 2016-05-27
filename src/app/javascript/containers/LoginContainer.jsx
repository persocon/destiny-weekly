import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { setAppScreen } from '../actions/app';
import Component from '../components/LoginComponent';

const mapStateToProps = (state) => ({ character_list: state.character_list });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    event.preventDefault();
    const username = event.target.getElementsByClassName('username')[0].value;
    const platform = event.target.getElementsByClassName('platform')[0].value;
    if (username) {
      dispatch(setUser(platform, username));
      dispatch(setAppScreen('character_list'));
    } else {
      const input = event.target.getElementsByClassName('username')[0];
      input.classList.add('noUserName');
      input.focus();
    }
  },
  onUsernameChange: (event) => {
    const input = event.target;
    if (input.classList.contains('noUserName') && input.value.length >= 1) {
      input.classList.remove('noUserName');
    }
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
