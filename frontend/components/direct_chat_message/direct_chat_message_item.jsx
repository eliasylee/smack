import React from 'react';
import MessageFormContainer from '../message/message_form_container';

class DirectChatMessageItem extends React.Component {
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

  prepTimeDisplay (message) {
    let createdDate = message.created_at.slice(0, 10).split("-");
    let createdTime = message.created_at.slice(11, 19).split(":");
    let createdHour = parseInt(createdTime[0] - 7);
    let createdAmPm;

    let updatedDate = message.updated_at.slice(0, 10).split("-");
    let updatedTime = message.updated_at.slice(11, 19).split(":");
    let updatedHour = parseInt(updatedTime[0] - 7);
    let updatedAmPm;

    if (createdHour > 12) {
      createdTime[0] = (createdHour - 12).toString();
      createdAmPm = "PM";
    } else if (updatedHour === 0) {
      createdTime[0] = (createdHour + 12).toString();
      createdAmPm = "AM";
    } else {
      createdAmPm = "AM";
    }

    if (updatedHour > 12) {
      updatedTime[0] = (updatedHour - 12).toString();
      updatedAmPm = "PM";
    } else if (updatedHour === 0) {
      updatedTime[0] = (updatedHour + 12).toString();
      updatedAmPm = "AM";
    } else {
      updatedAmPm = "AM";
    }

    let neatCreated = `${createdDate[1]}/${createdDate[2]}/${createdDate[0]}`;
    let neatUpdated = `${updatedDate[1]}/${updatedDate[2]}/${updatedDate[0]} at ${updatedTime[0]}:${updatedTime[1]} ${updatedAmPm}`;

    if (createdTime[0] === updatedTime[0] && createdTime[1] === updatedTime[1] && createdTime[2] === updatedTime[2]) {
      return (
        <div className="textChannelMessageTime">{neatCreated}</div>
      )
    } else {
      return (
        <div className="textChannelMessageTime">
          <div className="createdTime">{neatCreated}</div>
          <div className="revealEdit">(edited)
              <div className="editedTime">{neatUpdated}</div>
          </div>
        </div>
      )
    }
  }

  displayBodyOrUpdate (message, directMessage) {
    if (this.state.view) {
      return (
        <div className="textChannelMessageMessage">
          {message.body}
        </div>
      )
    } else {
      return (
        <MessageFormContainer chatType="DirectMessage"
                              chatId={directMessage.id}
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

  render () {
    const { message, currentUser, directMessage } = this.props;
    return (
      <div className="textChannelMessageBox">
        <div className="userLogo messageBoxLogo">
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
            {this.displayBodyOrUpdate(message, directMessage)}
            {this.displayChangeButton(currentUser, message)}
          </div>
        </div>
      </div>
    )
  }
}

export default DirectChatMessageItem;
