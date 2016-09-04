import React from 'react';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { id: this.props.messageId,
                   body: this.props.messageBody,
                   chatable_type: this.props.chatType,
                   chatable_id: this.props.chatId };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.messageFormClass = this.messageFormClass.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let message = this.state;
    message.chatable_id = this.props.chatId;

    if (this.props.action === "create") {
      this.props.createMessage({ message });
    } else {
      this.props.updateMessage({ message });
    }

    this.setState({ "body": "" })
  }

  updateState (field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) };
  }

  messageFormClass () {
    if (this.props.action === "create") {
      return "messageBoxOuter createMessageBox"
    } else {
      return "messageBoxOuter editMessageBox"
    }
  }

  createPlaceHolder (textChannelTitle) {
    return (
      `Chat in ${textChannelTitle}...`
    )
  }

  createMessageForm (textChannelTitle) {
    return (
      <form onSubmit={this.handleSubmit} className="createMessageForm">
        <div className="textMessageSubmitBox">
          <input className="textMessageSubmitButton" type="submit" value="^" />
        </div>
        <div className="createMessageBodyBox">
          <input type="textarea"
            placeholder={this.createPlaceHolder(textChannelTitle)}
            value={this.state.body}
            onChange={this.updateState("body")}
            className="messageInput" />
        </div>
      </form>
    )
  }

  render () {
    const { textChannelTitle } = this.props
    return (
      <div className={this.messageFormClass()}>
        <div className="messageBoxInner">
          {this.createMessageForm(textChannelTitle)}
        </div>
      </div>
    )
  }
}

export default MessageForm;
