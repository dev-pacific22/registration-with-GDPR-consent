import React, { Component } from "react";
import { StyleSheet, BackAndroid, Alert } from "react-native";
import { View, Card, Label, Row, Button, Text } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
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
    let { currentIndex } = this.state;
    if (currentIndex <= 2) {
      currentIndex++;
      this.setState({ currentIndex });
    } else if (currentIndex == 3) {
      // TODO : Make Server call to store result.
    }
  };
  onDeclineClick = () => {
    Alert.alert(
      "Decline Consents",
      "To register with our application, you have to accept all the consent.",
      [
        {
          text: "Cancel",
          onPress: () => BackAndroid.exitApp(),
          style: "cancel"
        },
        { text: "Continue" }
      ],
      { cancelable: false }
    );
  };
  componentDidMount = () => {
    alert(JSON.stringify(this.props.user));
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
  isLoading: false,
  consentArray: CONSENT_ARRAY
};
export default ConsentScreen;
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
