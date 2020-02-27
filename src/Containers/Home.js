import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Home from '../Pages/Home';

//Action Creator
import { storeLocationList } from '../Actions/battle';

const mapStateToProps = state => {
  return { battle: state.battle, locationList: state.battle.locationList }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    storeLocationList
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))