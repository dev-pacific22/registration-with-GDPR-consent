import React, { Component } from "react";
import { StyleSheet, BackAndroid, Alert } from "react-native";
import { View, Card, Label, Row, Button, Text } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addConsentAction, fetchConsentForUSer } from "../actions";
import { styles } from "./Style";
import { COLORS, CONSENT_ARRAY } from "../utils";

class ConsentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    BackAndroid.addEventListener("hardwareBackPress", () => {
      this.onDeclineClick();
    });
  }
  onAcknowledgeClick = () => {
    const { navigate } = this.props.navigation;
    let { currentIndex } = this.state;
    if (currentIndex <= 2) {
      currentIndex++;
      this.setState({ currentIndex });
    } else if (currentIndex == 3) {
      this.props.addConsentAction({ isAccepted: true }, navigate);
    }
  };
  onDeclineClick = () => {
    Alert.alert(
      "Decline Consents?",
      "To register with our application, you have to accept all the consent.",
      [
        {
          text: "Decline",
          onPress: () => BackAndroid.exitApp(),
          style: "cancel"
        },
        { text: "Continue" }
      ],
      { cancelable: false }
    );
  };
  componentDidMount = () => {
    //TODO: to check for the current user accepted the consent if yes redirect him to home screen.
    this.props.fetchConsentForUSer(this.props.navigation.navigate);
  };

  handleBackButtonClick() {
    this.onDeclineClick();
    return true;
  }
  render() {
    const { consentArray } = this.props;
    const { currentIndex } = this.state;
    return (
      <View style={localStyles.rootContainerStyle}>
        <Spinner visible={this.props.isLoading} textStyle={{ color: "#FFF" }} />

        <Card style={localStyles.containerStyle}>
          <Label style={styles.labelHeader}>Consent Screen</Label>
          <Label style={styles.labelQuestionTitle}>
            {consentArray[currentIndex].consentTitle}
          </Label>
          <Label style={styles.labelQuestion}>
            {consentArray[currentIndex].consentDescription}
          </Label>
          <Row style={localStyles.rowStyle}>
            <Button
              bordered
              style={[localStyles.buttonRegister]}
              onPress={() => this.onDeclineClick()}
            >
              <Text uppercase={false}>Decline</Text>
            </Button>
            <Button
              style={[localStyles.buttonRegister, styles.buttonSolid]}
              onPress={() => this.onAcknowledgeClick()}
            >
              <Text uppercase={false} style={styles.buttonText}>
                Acknowledge
              </Text>
            </Button>
          </Row>
        </Card>
      </View>
    );
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener("hardwareBackPress");
  }
}

ConsentScreen.defaultProps = {
  isSuccess: false,
  isLoading: false,
  consentArray: CONSENT_ARRAY
};

const mapStateToProps = ({ consents }) => {
  const { isError, isLoading } = consents;
  return { isError, isLoading };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addConsentAction, fetchConsentForUSer },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsentScreen);
const localStyles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR
  },
  containerStyle: {
    padding: 15,
    alignSelf: "center"
  },
  buttonRegister: {
    marginTop: 15,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  rowStyle: {
    justifyContent: "flex-end"
  }
});
