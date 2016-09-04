import React from 'react';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: this.props.messageBody,
                   chatable_type: this.props.chatType,
                   chatable_id: this.props.chatId };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  createMessageForm () {
    return (
      <form onSubmit={this.handleSubmit} className="createMessageForm">
        <div className="channelSubmitBoxOuter">
          <div className="channelSubmitBoxInner">
            <input className="channelSubmitButton" type="submit" value="^" />
          </div>
        </div>
        <div className="createMessageBodyBox">
          <div className="bodyInputLine">
            <input type="text"
              value={this.state.body}
              onChange={this.updateState("body")}
              className="messageInput" />
          </div>
        </div>
      </form>
    )
  }

  render () {
    return (
      <div className="createMessageBoxOuter">
        <div className="createMessageBoxInner">
          {this.createMessageForm()}
        </div>
      </div>
    )
  }
}

export default MessageForm;
