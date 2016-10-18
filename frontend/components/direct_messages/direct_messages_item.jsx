import React from 'react';
import { withRouter } from 'react-router';

class DirectMessagesItem extends React.Component {
  constructor (props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.changeDirectMessage = this.changeDirectMessage.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  isActive () {
    const { stateDirectMessage, directMessage } = this.props;
    if (stateDirectMessage && directMessage.id === stateDirectMessage.id) {
      return "activeDirectMessageButton";
    } else {
      return "inactiveDirectMessageButton";
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

  handleDestroy () {
    const { directMessage, destroyDirectMessage, router } = this.props;
    destroyDirectMessage(directMessage.id);
    router.push(`/channels/@me`);
  }

  displayDestroyButton () {
    const { stateDirectMessage, directMessage } = this.props;
    if (stateDirectMessage && directMessage.id === stateDirectMessage.id) {
      return "destroyDirectMessageBox";
    } else {
      return "invisibleDirectMessageBox";
    }
  }

  idCreator (color) {
    return `c${color}`
  }

  render () {
    const { directMessage, destroyDirectMessage } = this.props;
    return (
      <div className={this.isActive()}
           onClick={this.changeDirectMessage}
           disabled={this.isDisabled()}>
        <div className="directMessageLeftSide">
          <div className="directMessageUserLogo">
            <div className="directMessageUserLogoLetter" id={this.idCreator(directMessage.color)}>{this.prepUserName(directMessage.username)}</div>
          </div>
          <div className="textChannelButtonLeft">
            <ul>{directMessage.username}</ul>
          </div>
        </div>
        <div className={this.displayDestroyButton()}>
          <button className="destroyDirectMessageButton"
                  onClick={this.handleDestroy}><i className="fa fa-ban" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  }
}

export default withRouter(DirectMessagesItem);
