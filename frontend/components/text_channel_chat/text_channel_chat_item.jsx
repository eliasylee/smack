import React from 'react';
import MessageFormContainer from '../message/message_form_container';

class TextChannelChatItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { view: true }
  }

  handleDestroyMessage (message, destroyMessage) {
    this.props.destroyMessage(message);
  }

  toggleUpdate () {
    let nextState = !this.state.viewOrEdit;
    this.setState({ view: nextState })
  }

  displayChangeButton (currentUser, message, destroyMessage) {
    if (message.author.id === currentUser.id) {
      return (
        <div className="TextChannelMessageChange">
          <div className="TextChannelMessageEdit">
            <button onClick={this.toggleUpdate}>Update</button>
          </div>
          <div className="TextChannelMessageDelete">
            <button onClick={this.handleDestroyMessage(message)}>Delete</button>
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
        <div className="TextChannelMessageBody">
          {message.body}
        </div>
      )
    } else {
      return (
        <div className="TextChannelMessageUpdate">
          <MessageFormContainer chatType="TextChannel"
                                chatId={message.chatId}
                                messageBody={message.body}
                                action="update" />
        </div>
      )
    }
  }

  render () {
    const { message, currentUser, destroyMessage } = this.props
    return (
      <div className="TextChannelMessageBox">
        <div className="TextChannelMessageHeader">
          <div className="TextChannelMessageAuthor">
            {message.author.username}
          </div>
          <div className="TextChannelMessageTime">
            {this.prepTimeDisplay(message)}
          </div>
        </div>
        {this.displayBodyOrUpdate(message)}
        {this.displayChangeButton(currentUser, message)}
      </div>
    )
  }
}

export default TextChannelChatItem;
