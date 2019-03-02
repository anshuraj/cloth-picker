import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Form from './Form';

class LoginDialog extends React.Component {
  state = {
    isLoginOpen: true
  };

  handleClickOpen = () => {
    this.setState({
      isLoginOpen: true,
    });
  };

  handleClose = value => {
    this.setState({ isLoginOpen: false });
  };

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
        <Dialog open={this.state.isLoginOpen} onClose={this.handleClose} aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Login to view your wardrobe</DialogTitle>
          <DialogContent>
            <Form />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default LoginDialog;