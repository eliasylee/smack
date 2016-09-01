import React from 'react';
import TextChannelNavItem from './text_channel_nav_item';

class TextChannelNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.textChannels = this.props.textChannels;
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

  renderTitleTitle () {
    let errors = this.props.errors.map( error => {
      return error
    });

    if (errors === []) {
      return <div className="titleWord">Title</div>;
    } else {
      return <div className="titleWord channelErrors">{errors[0]}</div>;
    }
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

  waitForTextChannels () {
    const { textChannels, channel } = this.props;
    const channelId = channel.id;

    if (textChannels) {
      return (
        <div className="textChannelNavBarButtons">
          {textChannels.map( textChannel => {
            return <TextChannelNavItem textChannel={textChannel}
                                       channelId={channel.id}
                                       key={textChannel.id} />
          })}
        </div>
      )
    }
  }

  render () {
    return (
      <div className="textChannelNavBarBackground">
        <div className="textChannelNavBar">
          <span className="textChannelNavBarHeaderBox">
            <span className="textChannelTitleHeader">
              <span>{this.props.channel.title}</span>
            </span>
          </span>
          <span className="textChannelNavBarTitleBox">
            <span className="textChannelNavBarTitle">
              <span>Text Channels</span>
            </span>
          </span>
          <div className="navBarSeparator"></div>
          {this.waitForTextChannels()}
        </div>
        <div className="createTextChannelFormBoxOuter">
          {this.createTextChannelForm()}
        </div>
      </div>
    );
  }
}

export default TextChannelNav;