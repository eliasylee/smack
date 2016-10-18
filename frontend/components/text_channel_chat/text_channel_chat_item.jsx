import React from 'react';
import MessageFormContainer from '../message/message_form_container';

class TextChannelChatItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { view: true }
    this.handleDestroyMessage = this.handleDestroyMessage.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.message = this.props.message;
  }

  handleDestroyMessage () {
    this.props.destroyMessage(this.message);
  }

  toggleUpdate () {
    let nextState = !this.state.view;
    this.setState({ view: nextState })
  }

  displayChangeButton (currentUser, message) {
    if (currentUser) {
      if (message.author.id === currentUser.id) {
        return (
          <div className="textChannelMessageChange">
            <div className="messageEditButton">
              <button onClick={this.toggleUpdate}><i className="fa fa-pencil" aria-hidden="true"></i></button>
            </div>
            <div className="messageDeleteButton">
              <button onClick={this.handleDestroyMessage}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        )
      }
    }
  }

  formatTime (object, type) {
    let date = object.slice(0, 10).split("-");
    let time = object.slice(11, 19).split(":");
    let hour = parseInt((time[0] + 14) % 24);
    let AmPm;

    if (hour > 12 && hour !== 0) {
      time[0] = (hour - 12).toString();
      AmPm = "PM";
    } else {
      AmPm = "AM";
    }

    if (type === "create") {
      return `${date[1]}/${date[2]}/${date[0]}`;
    } else {
      return `${date[1]}/${date[2]}/${date[0]} at ${time[0]}:${time[1]} ${AmPm}`;
    }
  }

  prepTimeDisplay (timeString) {
    let createdTime = timeString.created_at;
    let updatedTime = timeString.updated_at;

    let createCheck = createdTime.slice(11, 19).split(":");
    let updateCheck = updatedTime.slice(11, 19).split(":");

    let createFormatted = this.formatTime(createdTime, "create");
    let updateFormatted = this.formatTime(updatedTime, "update");

    if (createCheck[0] === updateCheck[0] &&
        createCheck[1] === updateCheck[1] &&
        createCheck[2] === updateCheck[2]) {
      return (
        <div className="textChannelMessageTime">{createFormatted}</div>
      )
    } else {
      return (
        <div className="textChannelMessageTime">
          <div className="createdTime">{createFormatted}</div>
          <div className="revealEdit">(edited)
            <div className="editedTime">{updateFormatted}</div>
          </div>
        </div>
      )
    }
  }

  displayBodyOrUpdate (message, textChannel) {
    if (this.state.view) {
      return (
        <div className="textChannelMessageMessage">
          {message.body}
        </div>
      )
    } else {
      return (
        <MessageFormContainer chatType="TextChannel"
                              chatId={textChannel.id}
                              messageId={message.id}
                              messageBody={message.body}
                              toggleUpdate={this.toggleUpdate}
                              action="update" />
      )
    }
  }

  prepUserName (username) {
    let result = "";
    if (username) {
      username.split(" ").forEach( word => {
        result += word.slice(0, 1);
      });
    }
    return result;
  }

  idCreator (color) {
    return `c${color}`
  }

  render () {
    const { message, currentUser, textChannel } = this.props
    return (
      <div className="textChannelMessageBox">
        <div className="userLogo messageBoxLogo" id={this.idCreator(message.author.color)}>
          <div className="userLogoLetter messageBoxLogoLetter">{this.prepUserName(message.author.username)}</div>
        </div>
        <div className="textChannelMessageBoxInner">
          <div className="textChannelMessageHeader">
            <div className="textChannelMessageAuthor">
              {message.author.username}
            </div>
            {this.prepTimeDisplay(message)}
          </div>
          <div className="textChannelMessageBody">
            {this.displayBodyOrUpdate(message, textChannel)}
            {this.displayChangeButton(currentUser, message)}
          </div>
        </div>
      </div>
    )
  }
}

export default TextChannelChatItem;
