import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayMenu extends Component {
    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_MENU' })
    }

    render(){
        return (
            <div>
                Test
                {JSON.stringify(this.props.menu)}
                {this.props.menu.map(item => <div key={item.id}>{item.name}, supplied by: {item.supplier_name}</div>)}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    menu: reduxState.menu,
    item: reduxState.item
})

export default connect(mapStateToProps)(DisplayMenu);