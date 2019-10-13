import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { TextField } from '@material-ui/core';
import './CreateDish.css';

class CreateDish extends Component {

    state = {
        dishName: '',
        ingredients: []
    }
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ITEM'})
    }

    handleChange = (value) => {
        this.setState({ingredients: [...this.state.ingredients, value] })
    }

    render(){
        const selectItems = this.props.item.map(item => {return {value: item.name, label: item.name}});
        const addIngredientSelect = <Select 
            options={selectItems}
            onChange={this.handleChange} />
        
        return(
            <div className="createDishDiv">
                <TextField
                    label="Dish name"
                    placeholder="e.g. Fusilli with basil pesto"
                    margin="normal"
                    fullWidth
                />
                <Divider variant="middle"/>
                <div className="labelDiv">Add ingredient...</div>
                <div className="selectDiv">{addIngredientSelect}</div>
                {this.state.ingredients == null ? '' : <ul>{this.state.ingredients.map((item, index) => <li key={index}>{item.value}</li>)}</ul>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    item: reduxState.item
})

export default connect(mapStateToProps)(CreateDish);