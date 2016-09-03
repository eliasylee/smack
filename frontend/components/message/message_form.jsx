import React from 'react';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { author_id: this.props.currentUser.id,
                   body: this.props.messageBody,
                   chatable_type: this.props.chatType,
                   chatable_id: this.props.chatId };
  }

  handleSubmit (e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);

    if (this.props.type === "create") {
      this.props.createMessage({ message });
    } else {
      this.props.updateMessage({ message });
    }

    this.setState({ "body": "" });
  }

  update (field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) };
  }

  render () {
    <div className="createMessageBox">
      <form onClick={this.handleSubmit} className="createMessageForm">
        <div className="messageSubmitButton">
          <button type="submit">^</button>
        </div>
        <div className="createMessageBodyBox">
          <div className="bodyInputLine">
            <input type="text"
              value={this.state.body}
              onChange={this.update("body")}
              className="messageInput" />
          </div>
        </div>
        <div className="channelSubmitBoxOuter">
          <div className="channelSubmitBoxInner">
            <input className="channelSubmitButton" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  }
}

export default MessageForm;
