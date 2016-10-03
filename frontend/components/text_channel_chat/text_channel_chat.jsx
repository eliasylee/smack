/* global Pusher */

import React from 'react';
import { withRouter } from 'react-router';
import TextChannelChatItem from './text_channel_chat_item';
import MessageFormContainer from '../message/message_form_container';
import TextChannelFormContainer from '../text_channel_form/text_channel_form_container';
import ChannelSubscriptionsContainer from '../channel_subscriptions/channel_subscriptions_container';

class TextChannelChat extends React.Component {
  constructor (props) {
    super(props);
    this.state = { view: true }
    this.toggleView = this.toggleView.bind(this);
    this.message = this.props.message;
    this.displayHeaderOrUpdate = this.displayHeaderOrUpdate.bind(this);
    this.createPusherChannel = this.createPusherChannel.bind(this);
  }

  componentDidUpdate () {
    let objDiv = document.getElementById("scrollBottom");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentDidMount () {
    let objDiv = document.getElementById("scrollBottom");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentWillUnmount () {
    window.pusher.unsubscribe('text_channel_' + this.props.textChannel.id);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.textChannel.id) {
      let newChannel = 'text_channel_' + newProps.textChannel.id;

      if (!window.pusher || !window.pusher.channels.channels[newChannel]) {
        this.createPusherChannel(newProps.textChannel.id);
      }
    }

    if (window.pusher && newProps.textChannel.id !== this.props.textChannel.id) {
      window.pusher.unsubscribe('text_channel_' + this.props.textChannel.id);
    }
  }

  createPusherChannel (textChannelId) {
    if (!window.pusher) {
      window.pusher = new Pusher('a6428d82cdddd683832f', {
        encrypted: true
      });
    }

    let channel = window.pusher.subscribe('text_channel_' + textChannelId);
    channel.bind('message_action', data => {
      this.props.fetchOneTextChannel(this.props.textChannel.id);
    });
    channel.bind('text_channel_destroyed', data => {
      let channelId = this.props.channel.id;
      let textChannels = Object.keys(this.props.channel.textChannels);
      this.props.router.push(`/channels/${channelId}/${textChannels[0]}`);
    });
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
        <div className="textChannelMessagesBox" id="scrollBottom">
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
              <button onClick={this.toggleView}><i className="fa fa-pencil" aria-hidden="true"></i></button>
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
        <div className="channelSubscriptionsBox">
          <ChannelSubscriptionsContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(TextChannelChat);
