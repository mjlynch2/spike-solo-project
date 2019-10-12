import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

class CreateDish extends Component {
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ITEM'})
    }

    render(){
        const selectItems = this.props.item.map(item => {return {value: item.name, label: item.name}});
        return(
            <>
                <Select options = {selectItems}/>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    item: reduxState.item
})

export default connect(mapStateToProps)(CreateDish);