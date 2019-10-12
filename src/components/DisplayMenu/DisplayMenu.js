import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateDish from '../CreateDish/CreateDish';

class DisplayMenu extends Component {
    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MENU' })
    }

    render(){
        return (
            <div>
                {/* {this.props.menu.map(item => <div key={item.id}>{item.name}, supplied by: {item.supplier_name}</div>)} */}
                <CreateDish />
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
    item: reduxState.item
})

export default connect(mapStateToProps)(DisplayMenu);