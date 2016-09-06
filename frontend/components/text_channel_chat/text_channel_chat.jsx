import React from 'react';
import { withRouter } from 'react-router';
import TextChannelChatItem from './text_channel_chat_item';
import MessageFormContainer from '../message/message_form_container';
import TextChannelFormContainer from '../text_channel_form/text_channel_form_container';
import ChannelFriendsContainer from '../channel_friends/channel_friends_container';

class TextChannelChat extends React.Component {
  constructor (props) {
    super(props);
    this.state = { view: true }
    this.toggleView = this.toggleView.bind(this);
    this.message = this.props.message;
    this.displayHeaderOrUpdate = this.displayHeaderOrUpdate.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.currentUser) {
      this.props.router.push(`/login`);
    }
  }

  displayHeaderOrUpdate () {
    const { currentUser, textChannel } = this.props;
    if (this.state.view) {
      return (
        <header className="textChannelChatBoxHeader">
          <div className="textChannelChatBoxHeaderLeft">
            <div className="textChannelChatBoxHash">#</div>
            <div className="textChannelChatBoxName">{textChannel.title}</div>
            <div className="textChannelChatBoxSeparator">|</div>
            <div className="textChannelChatBoxDescription">{textChannel.description}</div>
          </div>
          <div className="textChannelChatBoxHeaderRight">
            {this.displayChangeButton()}
          </div>
        </header>
      )
    } else {
      return (
        <TextChannelFormContainer textChannel={textChannel}
                                  currentUser={this.props.currentUser}
                                  toggleView={this.toggleView} />
      )
    }
  }

  waitForMessages () {
    const { textChannel, messages, currentUser, destroyMessage } = this.props;

    if (messages) {
      let messageKeys = Object.keys(messages).reverse()
      return (
        <div className="textChannelMessagesBox">
          {messageKeys.reverse().map( messageKey => {
            return <TextChannelChatItem message={messages[messageKey]}
                                   textChannel={textChannel}
                                   currentUser={currentUser}
                                   destroyMessage={destroyMessage}
                                   key={messageKey} />
          })}
        </div>
      )
    }
  }

  toggleView () {
    let newStatus = !this.state.view;
    this.setState({ "view": newStatus });
  }

  displayChangeButton () {
    const { currentUser, channel } = this.props;
    if (currentUser && channel.admin) {
      if (channel.admin.id === currentUser.id) {
        return (
          <div className="textChannelEditButtonBox">
            <div className="textChannelEditButton">
              <button onClick={this.toggleView}>Edit</button>
            </div>
          </div>
        )
      }
    }
  }

  render () {
    const { textChannel } = this.props;
    return (
      <div className="textChannelChatBoxBackground">
        <div className="textChannelChatBox">
          {this.displayHeaderOrUpdate()}
          {this.waitForMessages()}
          <MessageFormContainer chatType="TextChannel"
                                chatId={textChannel.id}
                                textChannelTitle={textChannel.title}
                                action="create" />
        </div>
        <div className="channelMembers">

        </div>
      </div>
    )
  }
}

export default withRouter(TextChannelChat);
