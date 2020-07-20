import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props); //ask nisarg why props in this one
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with you email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            type="email"
            label="email"
            required
          />

          <FormInput
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            type="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
