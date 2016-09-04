import React from 'react';
import MessageFormContainer from '../message/message_form_container';

class TextChannelChatItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { view: true }
    this.handleDestroyMessage = this.handleDestroyMessage.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this)
    this.message = this.props.message;
  }

  handleDestroyMessage () {
    this.props.destroyMessage(this.message);
  }

  toggleUpdate () {
    let nextState = !this.state.view;
    this.setState({ view: nextState })
  }

  displayChangeButton (currentUser, message, destroyMessage) {
    if (message.author.id === currentUser.id) {
      return (
        <div className="textChannelMessageChange">
          <div className="textChannelMessageEdit">
            <button onClick={this.toggleUpdate}>Update</button>
          </div>
          <div className="textChannelMessageDelete">
            <button onClick={this.handleDestroyMessage}>Delete</button>
          </div>
        </div>
      )
    }
  }

  prepTimeDisplay (message) {
    let created = message.created_at.slice(0, 10).split("-");
    let updated = message.created_at.slice(0, 10).split("-");

    let neatCreated = `${created[1]}/${created[2]}/${created[0]}`
    let neatUpdated = `(Updated at ${updated[1]}/${updated[2]}/${updated[0]})`

    if (created[0] === updated[0] && created[1] === updated[1] && created[2] === updated[2]) {
      return neatCreated;
    } else {
      return neatCreated + neatUpdated;
    }
  }

  displayBodyOrUpdate (message) {
    if (this.state.view) {
      return (
        <div className="textChannelMessageMessage">
          {message.body}
        </div>
      )
    } else {
      return (
        <div className="textChannelMessageUpdate">
          <MessageFormContainer chatType="TextChannel"
                                chatId={message.chatable_Id}
                                messageBody={message.body}
                                action="update" />
        </div>
      )
    }
  }

  render () {
    const { message, currentUser, destroyMessage } = this.props
    return (
      <div className="textChannelMessageBox">
        <div className="textChannelMessageHeader">
          <div className="textChannelMessageAuthor">
            {message.author.username}
          </div>
          <div className="textChannelMessageTime">
            {this.prepTimeDisplay(message)}
          </div>
        </div>
        <div className="textChannelMessageBody">
          {this.displayBodyOrUpdate(message)}
          {this.displayChangeButton(currentUser, message)}
        </div>
      </div>
    )
  }
}

export default TextChannelChatItem;
