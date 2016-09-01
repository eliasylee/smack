import React from 'react';
import TextChannelNavItem from './text_channel_nav_item';

class TextChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const textChannel = Object.assign({}, this.state);
    this.props.createTextChannel({textChannel});
  }

  update (property) {
    return e => this.setState({[property]: e.target.value});
  }

  createTextChannelForm () {
    return (
      <div className="createTextChannelFormBoxInner">
        <span className="closeCreateTextChannelForm">x</span>
        <form onClick={this.handleSubmit} className="createTextChannelForm">
          <div className="createTextChannelNameBox">
            {this.renderTitleTitle()}
            <div className="titleInputLine">
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="sessionInput" />
            </div>
          </div>
          <div className="createTextChannelDescriptionBox">
            <div className="descriptionWord">Description</div>
            <div className="descriptionInputLine">
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="textChannelInput" />
            </div>
          </div>
          <div className="textChannelSubmitBoxOuter">
            <div className="textChannelSubmitBoxInner">
              <input className="textChannelSubmitButton" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }

  render () {
    const { textChannels } = this.props.channel;
    const channelId = this.props.channel.id;
    return (
      <div className="textChannelNavBarBackground">
        <div className="textChannelNavBar">
          <div className="navBarSeparator"></div>
          <div className="textChannelNavBarButtons">
            {textChannels.map( textChannel => {
              return <TextChannelNavItem textChannel={textChannel}
                                         channelId={channelId}
                                         key={textChannel.id} />
            })}
          </div>
          <div className="createTextChannelButtonBox">
            <button className="createTextChannelButton">+</button>
          </div>
        </div>
        <div className="createTextChannelFormBoxOuter">
          {this.createTextChannelForm()}
        </div>
      </div>
    );
  }
}

export default TextChannelNav;
