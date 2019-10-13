import React, { Component } from 'react';
import Creatable from 'react-select/creatable';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { TextField } from '@material-ui/core';
import './CreateDish.css';

class CreateDish extends Component {

    state = {
        dishName: '',
        ingredients: [],
        isLoading: false,
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ITEM'});
    }

    createNewIngredient = (name) => {
        return ({label: name, value: name})
    }

    handleCreate = (newIngredientName) => {
        this.setState({isLoading: true})
        this.props.dispatch({type: 'ADD_INGREDIENT', payload: {name: newIngredientName}})
        setTimeout(() => {
            const newIngredient = this.createNewIngredient(newIngredientName);
            console.log(newIngredient);
            console.groupEnd();
            this.setState({
                isLoading: false,
                ingredients: [...this.state.ingredients, newIngredient],
            });
        }, 1000);
    };

    handleChange = (value, actionMeta) => {
        this.setState({ ingredients: [...this.state.ingredients, value] })
    };

    render(){
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
                <div className="selectDiv">
                    <Creatable
                        isClearable
                        options={this.props.options}
                        onCreateOption={this.handleCreate}
                        onChange={this.handleChange} />
                </div>
                {/* {JSON.stringify(this.props.options)} */}
                {this.state.ingredients == null ? '' : <ul>{this.state.ingredients.map((item, index) => <li key={index}>{item.value}</li>)}</ul>}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    options: reduxState.ingredientOptions
})

export default connect(mapStateToProps)(CreateDish);