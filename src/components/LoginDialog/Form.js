import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
  state = {
    isLogin: true
  };

  toggleLoginAndSignup = () => this.setState(prevState => ({ isLogin: !prevState.isLogin }));

  render() {
    const {isLogin} = this.state;
    return (
      <form>
        <TextField
          required
          fullWidth
          name="email"
          label="Email"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <Button variant="contained" color="primary">
          {isLogin ? 'Login' : 'Signup'}
        </Button>
        <Button variant="text" style={{marginLeft: '15px'}} onClick={this.toggleLoginAndSignup} >
          {isLogin ? `Don't have account, signup instead`: `Already have an account, Login`}
        </Button>
      </form>
    );
  }
}

export default Form;
