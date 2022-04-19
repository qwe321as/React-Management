import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    deleteCustomer(id) {

        const url = '/api/customers/' + id;
        fetch(url, { method: 'DELETE' });
        this.props.stateRefresh();

    }
    render() {
        return (
            /*            <{(e) => { this.deleteCustomer(this.props.id) }}> */

            <Button variant='contained' color='secondary' onClick={this.handleClickOpen}> 삭제 </Button>
                <Dialog>
                <DialogTitle>
                        삭제 경고

                    </DialogTitle>
                </Dialog >
        )
    }

}

export default CustomerDelete;