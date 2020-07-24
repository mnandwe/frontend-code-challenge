import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import './Filter.css'

class FilterCategory extends Component {
  
  constructor(){
    super();
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    const target = event.target;
    const value = target.value;
    this.props.setFilter(value);
  }



  render() {
    return (
      <div id="filter-options">
        <label htmlFor="filter"> <span>Show</span>
        <select name="filter" onChange={this.handleFilter}>
        <option value="all" key="default">All</option>
            {
                this.props.categories.map((cat,index)=><option value={cat} key={index+'_'+cat}> {cat} </option>)
            }
        </select>
        </label>
      </div>
    )
  }
}
// eslint-disable-next-line react/no-typos
FilterCategory.proptypes = {
  categories: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  categories: state.manageItems.categories
})
const mapDispatchToProps = dispatch => ({
  setFilter: item => dispatch(setFilter(item))
})


export default connect(mapStateToProps,mapDispatchToProps)(FilterCategory)