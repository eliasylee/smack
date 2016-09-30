import React from 'react';

class TextChannelForm extends React.Component {
  constructor (props) {
    super(props);
    let tempDescription = this.props.textChannel.description || ""
    this.state = {
      id: this.props.textChannel.id,
      title: this.props.textChannel.title,
      description: tempDescription
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editTextChannelForm = this.editTextChannelForm.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let text_channel = Object.assign({}, this.state);
    text_channel.title = this.state.title.toLowerCase();
    this.props.updateTextChannel({ text_channel });
    this.props.toggleView();
  }

  updateState (property) {
    return e => this.setState({[property]: e.target.value});
  }

  editTextChannelForm () {
    const { toggleView } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="editTextChannelForm">
        <div className="editTextChannelNameBorderedBox">
          <div className="textChannelChatBoxHash">#</div>
          <div className="editTextChannelNameBox">
            <input type="text"
              value={this.state.title}
              onChange={this.updateState("title")}
              className="textChannelTitleInput" />
          </div>
        </div>
        <div className="textChannelChatBoxSeparator">|</div>
        <div className="editTextChannelDescriptionBorderedBox">
          <div className="editTextChannelDescriptionBox">
            <input type="text"
                   value={this.state.description}
                   onChange={this.updateState("description")}
                   className="textChannelDescriptionInput" />
          </div>
        </div>
        <div className="textChannelSubmitBox">
          <input className="textChannelSubmitButton" type="submit" value="Done" />
        </div>
      </form>
    )
  }

  render () {
    return (
      <div className="editTextChannelBox">
        {this.editTextChannelForm()}
      </div>
    )
  }
}

export default TextChannelForm;
