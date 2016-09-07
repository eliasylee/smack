import React from 'react';
import { withRouter } from 'react-router';

class DirectMessagesItem extends React.Component {
  constructor (props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.changeDirectMessage = this.changeDirectMessage.bind(this);
  }

  isActive () {
    const { stateDirectMessage, directMessage } = this.props;
    if (stateDirectMessage && directMessage.id === stateDirectMessage.id) {
      return "activeTextChannelButton";
    } else {
      return "inactiveTextChannelButton";
    }
  };

  isDisabled () {
    const { stateDirectMessage, directMessage } = this.props;
    if (stateDirectMessage && directMessage.id === stateDirectMessage.id) {
      return "disabled";
    } else {
      return "";
    }
  };

  changeDirectMessage () {
    const { stateDirectMessage, directMessage, router } = this.props;
    if (!stateDirectMessage || directMessage.id !== stateDirectMessage.id) {
      router.push(`/channels/@me/${directMessage.id}`)
    }
  };

  prepUserName (username) {
    let result = "";
    if (username) {
      username.split(" ").forEach( word => {
        result += word.slice(0, 1);
      });
    }
    return result;
  }

  render () {
    const { directMessage } = this.props;
    return (
      <div className={this.isActive()}
           onClick={this.changeDirectMessage}
           disabled={this.isDisabled()}>
        <div className="textChannelButtonLeft">
          <div className="userLogo">
            <div className="userLogoLetter">{this.prepUserName(directMessage.username)}</div>
          </div>
          <ul>#</ul>
          <ul>{directMessage.username}</ul>
        </div>
      </div>
    )
  }
}

export default withRouter(DirectMessagesItem);
