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
            <button onClick={this.toggleUpdate()}>Update</button>
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

    let neatCreated = `${created[2]}/${created[3]}/${created[1]}`
    let neatUpdated = `(Updated at ${updated[2]}/${updated[3]}/${updated[1]})`

    if (created === updated) {
      return neatCreated;
    } else {
      return neatCreated + neatUpdated;
    }
  }

  displayBodyOrUpdate (message) {
    if (this.state.view) {
      return (
        <div classname="TextChannelMessageBody">
          {message.body}
        </div>
      )
    } else {
      return (
        <div classname="TextChannelMessageUpdate">
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
      <div classname="TextChannelMessageBox">
        <div classname="TextChannelMessageHeader">
          <div classname="TextChannelMessageAuthor">
            {message.author.username}
          </div>
          <div classname="TextChannelMessageTime">
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
