/**
 * Consent screen component to show and record user consent.
 */
import React, { Component } from "react";
import { StyleSheet, BackHandler, Alert } from "react-native";
import {
  View,
  Card,
  Label,
  Row,
  Button,
  Text,
  Header,
  Left,
  Icon,
  Body,
  Title
} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addConsentAction, fetchConsentForUSer } from "../actions";
import { styles } from "./Style";
import { COLORS, CONSENT_ARRAY } from "../utils";
import { strings } from "../i18n";

class ConsentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  /**
   * Handle user action on acknowledge click.
   * @params : none
   * @returns : none
   */
  onAcknowledgeClick = () => {
    const { navigation } = this.props;
    let { currentIndex } = this.state;
    if (currentIndex <= 2) {
      currentIndex++;
      this.setState({ currentIndex });
    } else if (currentIndex == 3) {
      this.props.addConsentAction({ isAccepted: true }, navigation);
    }
  };
  /**
   * Handle user action on decline click.
   * @params : none
   * @returns : none
   */
  onDeclineClick = () => {
    Alert.alert(
      strings("title.decline_consents"),
      strings("message.decline_message"),
      [
        {
          text: strings("button.decline"),
          onPress: () => BackHandler.exitApp(),
          style: "cancel"
        },
        { text: strings("button.continue") }
      ],
      { cancelable: false }
    );
    return false;
  };
  componentDidMount = () => {
    // Check for the current user accepted the consent if yes redirect him to home screen.
    this.props.fetchConsentForUSer(this.props.navigation);
  };
  render() {
    const { consentArray } = this.props;
    const { currentIndex } = this.state;
    return (
      <React.Fragment>
        <Header>
          <Left>
            <Button transparent onPress={() => this.onDeclineClick()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{strings('title.gdpr_consents')}</Title>
          </Body>
        </Header>
        <View style={localStyles.rootContainerStyle}>
          <Spinner
            visible={this.props.isLoading}
            textStyle={{ color: "#FFF" }}
          />

          <Card style={localStyles.containerStyle}>
            <Label style={styles.labelHeader}>{strings('label.consents')}</Label>
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
                <Text uppercase={false}>{strings('button.decline')}</Text>
              </Button>
              <Button
                style={[localStyles.buttonRegister, styles.buttonSolid]}
                onPress={() => this.onAcknowledgeClick()}
              >
                <Text uppercase={false} style={styles.buttonText}>
                 {strings('button.acknowledge')}
                </Text>
              </Button>
            </Row>
          </Card>
        </View>
      </React.Fragment>
    );
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
