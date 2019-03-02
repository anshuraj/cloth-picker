import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginDialog from '../LoginDialog/LoginDialog';

class App extends Component {
  
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
              Pick your clothes
            </Typography>
            <LoginDialog />
          </Toolbar>
        </AppBar>
        <Button color="primary">
          Add new cloth
        </Button>
      </div>
    );
  }
}

export default App;
