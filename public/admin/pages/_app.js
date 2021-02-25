import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import cookie from 'js-cookie'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
import {connect} from 'react-redux'
import store from '../store/store'
import App from 'next/app';
import { fetchAdmin } from '../store/actions/adminActions';

class MyApp extends App {
  componentDidMount() {
    if(cookie.get('admin_token') !== undefined) {
      this.props.fetchAdmin()
    }
  }
  render() {
      const {Component, pageProps} = this.props;
      const compName = Component.name
      return (
          <Provider store={store}>
            <Component {...pageProps}/>

          </Provider>
      );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  // loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchAdmin:() => dispatch(fetchAdmin())
});

MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

// //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);
export default wrapper.withRedux(MyApp);

// export default MyApp
