import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateDish extends Component {

    state = {
        isOpen: false
    }
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ITEM'})
    }

    handleOpen = () => {
        this.setState({isOpen: true})
    }

    handleClose = () => {
        this.setState({isOpen: false})
    }

    render(){
        const selectItems = this.props.item.map(item => {return {value: item.name, label: item.name}});
        const addIngredientSelect = <Select options={selectItems} isMulti/>
        return(
            <>
                <Typography variant='h4'>Create New Dish</Typography>
                <Fab color="primary" size="medium" aria-label="Add" onClick={this.handleOpen}><AddIcon/></Fab>
                {/* <Select options = {selectItems}/> */}
                <Dialog
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullScreen
                >
                    <DialogTitle id="form-dialog-title">Add Ingredient</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add an ingredient and amount
                        </DialogContentText>
                        {addIngredientSelect}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Add Ingredient
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    item: reduxState.item
})

export default connect(mapStateToProps)(CreateDish);