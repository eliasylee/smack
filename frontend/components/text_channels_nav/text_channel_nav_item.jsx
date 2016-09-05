import React from 'react';
import { withRouter } from 'react-router';

class TextChannelNavItem extends React.Component {
  constructor (props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.handleDestroyTextChannel = this.handleDestroyTextChannel.bind(this);
    this.changeTextChannel = this.changeTextChannel.bind(this);
    this.textChannel = this.props.textChannel;
    this.placeDestroyTextChannelButton = this.placeDestroyTextChannelButton.bind(this);
  }

  isActive () {
    const { stateTextChannel, textChannel } = this.props;
    if (textChannel.id === stateTextChannel.id) {
      return "activeTextChannelButton";
    } else {
      return "inactiveTextChannelButton";
    }
  };

  isDisabled () {
    const { stateTextChannel, textChannel } = this.props;
    if (textChannel.id === stateTextChannel.id) {
      return "disabled";
    } else {
      return "";
    }
  };

  changeTextChannel () {
    this.props.clearTextMessages();
    this.props.router.push(`/channels/${this.props.channelId}/${this.props.textChannel.id}`)
  };

  handleDestroyTextChannel () {
    this.props.destroyTextChannel(this.textChannel);
    this.props.router.push(`/channels/${this.props.channelId}/${this.props.textChannelKeys[0]}`)
  };

  placeDestroyTextChannelButton () {
    const { textChannel, textChannelKeys } = this.props;
    if (textChannel.id === parseInt(textChannelKeys[0])) {
      return <div></div>
    } else {
      return <button onClick={this.handleDestroyTextChannel} className="textChannelDeleteButton">x</button>
    }
  }

  render () {
    const { textChannel } = this.props;
    return (
      <div className={this.isActive()}
           onClick={this.changeTextChannel}
           disabled={this.isDisabled()}>
        <div className="textChannelButtonLeft">
          <ul>#</ul>
          <ul>{textChannel.title}</ul>
        </div>
        {this.placeDestroyTextChannelButton()}
      </div>
    )
  };
}

export default withRouter(TextChannelNavItem);
