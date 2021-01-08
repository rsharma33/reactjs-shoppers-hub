import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.qty || 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.doParent = this.doParent.bind(this);
    this.feed = this.feed.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.prod_qty) this.setState({ value: nextProps.item.prod_qty });
  }
  doParent(newValue) {
    if (this.props.getTotal) this.props.getTotal(newValue);
    else this.props.setQty(newValue);
  }
  increment() {
    const newValue = Number(this.state.value) + 1;
    this.setState({ value: newValue });
    this.doParent(newValue);
  }
  decrement() {
    if (this.state.value > 1) {
      const newValue = Number(this.state.value) - 1;
      this.setState({ value: newValue });
      this.doParent(newValue);
    }
  }
  feed(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    this.doParent(newValue);
  }

  render() {
    return (
      <div className="stepper-input">
        <button className="btn btn-sm btn-secondary decrement" onClick={this.decrement}><span className="far fa-caret-square-down" /></button>
        <input type="number" className="quantity text-center" style={{"width":"48px"}} value={this.state.value} onChange={this.feed} min="1" step="1" />
        <button className="btn btn-sm btn-secondary increment" onClick={this.increment}><span className="far fa-caret-square-up" /></button>
      </div>
    );
  }
}

Counter.propTypes = {
  item: PropTypes.shape({
    prod_id: PropTypes.string,
    prod_name: PropTypes.string,
    guid: PropTypes.string,
    prod_incart: PropTypes.bool,
    prod_category: PropTypes.string,
    prod_price: PropTypes.number,
    prod_qty: PropTypes.number,
    prod_reviews: PropTypes.number,
    prod_image: PropTypes.object,
    prod_rating: PropTypes.number,
    prod_color: PropTypes.string,
    prod_shortdesc: PropTypes.string,
    prod_longdesc: PropTypes.string
  }),
  qty: PropTypes.number,
  getTotal: PropTypes.func,
  setQty: PropTypes.func,
};

Counter.defaultProps = {
  item: PropTypes.shape({
    prod_id: '',
    prod_name: '',
    guid: '',
    prod_incart: false,
    prod_category: '',
    prod_price: 0,
    prod_qty: 0,
    prod_reviews: 0,
    prod_image: {
      'large': '',
      'medium': '',
      'small': ''
    },
    prod_rating: 0,
    prod_color: '',
    prod_shortdesc: '',
    prod_longdesc: ''
  }),
  qty: 0,
  getTotal: null,
  setQty: null
};
