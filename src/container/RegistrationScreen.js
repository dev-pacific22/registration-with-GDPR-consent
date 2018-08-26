import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Label, Button, Text, View } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onRegisterClickAction } from "../actions";
import FloatingInput from "../components/FloatingInput";
import { COLORS, CONSTANTS } from "../utils";
import { styles } from "./Style";
import validator from "validator";
import { strings } from '../i18n';

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      name: "",
      email: "",
      password: ""
    };
  }

  /**
   * Handle register click action..
   * @params : none
   * @returns : none
   */
  onRegisterClick = () => {
    const errors = this.validateRegistrationForm();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const { name, email, password } = this.state;
      this.props.onRegisterClickAction({ name, email, password });
    }
  };

  /**
   * Handle validation for complete form.
   * @params : none
   * @returns : error object if there is any invalid entry.
   */
  validateRegistrationForm = () => {
    const errors = {};
    const { name, email, password } = this.state;
    if (name.length <= 0) {
      errors.hasErrorName = true;
      errors.errorMessageName = strings('error.enter_full_name');
    }
    if (!validator.isEmail(email)) {
      errors.hasErrorEmail = true;
      errors.errorMessageEmail = strings('error.enter_valid_email');
    }
    if (!CONSTANTS.REGEX.PASSWORD_REGEX.test(password)) {
      errors.hasErrorPassword = true;
      errors.errorMessagePassword = strings('error.enter_valid_password');
    }
    return errors;
  };
  /**
   * OnChange event handler for name field
   * @params : changed value
   * @returns : none
   */
  onNameChange = value => {
    this.setState({ name: value });
  };
  /**
   * OnChange event handler for email field
   * @params : changed value
   * @returns : none
   */
  onEmailChange = value => {
    this.setState({ email: value });
  };
  /**
   * OnChange event handler for password field
   * @params : changed value
   * @returns : none
   */
  onPasswordChange = value => {
    this.setState({ password: value });
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    if (!nextProps.isError) {
      this.props.navigation.navigate("Consent", { user: nextProps.user });
    }
    return true;
  };

  render() {
    const { email, name, password } = this.state;
    const {
      hasErrorName,
      errorMessageName,
      hasErrorEmail,
      errorMessageEmail,
      hasErrorPassword,
      errorMessagePassword
    } = this.state.errors;
    return (
      <View style={localStyles.rootContainerStyle}>
        <Spinner visible={this.props.isLoading} textStyle={{ color: "#FFF" }} />
        <Card style={localStyles.containerStyle}>
          <Label style={styles.labelHeader}>{strings('label.register_screen')}</Label>
          <FloatingInput
            placeHolder={strings('placeholder.full_name')}
            iconName="account-box"
            hasError={hasErrorName}
            errorMessage={errorMessageName}
            value={name}
            onChangeText={this.onNameChange}
          />

          <FloatingInput
            placeHolder={strings('placeholder.email')}
            iconName="account-box"
            hasError={hasErrorEmail}
            errorMessage={errorMessageEmail}
            value={email}
            onChangeText={this.onEmailChange}
          />
          <FloatingInput
            placeHolder={strings('placeholder.password')}
            iconName="lock"
            hasError={hasErrorPassword}
            errorMessage={errorMessagePassword}
            value={password}
            onChangeText={this.onPasswordChange}
            hasSecureTextEntry={true}
          />
          <Button
            style={[localStyles.buttonRegister, styles.buttonSolid]}
            onPress={() => this.onRegisterClick()}
          >
            <Text uppercase={false} style={styles.buttonText}>
              {strings('button.register')}
            </Text>
          </Button>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ registration }) => {
  const { isError, isLoading, message, user } = registration;
  return { isError, isLoading, message, user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onRegisterClickAction }, dispatch);
};

RegistrationScreen.defaultProps = {
  isLoading: false,
  isError: true
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationScreen);

const localStyles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR
  },
  containerStyle: {
    alignSelf: "stretch",
    margin: 15,
    padding: 15,
    alignSelf: "center"
  },
  buttonRegister: {
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    alignSelf: "center"
  }
});
