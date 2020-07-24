import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';

import {removeItem} from '../../redux/actions'
import './Item.css';


/**
 * Renders item and dispatches item deletion
 */
class Item extends Component {
    
    deleteItem(event) {
        this.props.removeItem(this.props.item)
    }


    render() {
        return (
                <div className='row'>
                    <div className='cell'>
                        <span>{this.props.item.item}</span>
                    </div>
                    <div className='cell'>
                        <span>{this.props.item.category}</span>
                    </div>
                    <div className='cell number'>
                        <span>${this.props.item.price.toFixed(2) }</span>
                    </div>
                    <div className='cell action'>
                        <span onClick={this.deleteItem.bind(this)} ><CloseIcon/> </span>
                    </div>
                </div>
        );
    }
}
Item.propTypes = {
    item: PropTypes.shape({
        item: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired}).isRequired,
    removeItem: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
  })
  

export default connect(null, mapDispatchToProps)(Item);