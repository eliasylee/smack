/* globals Pusher */

import React from 'react';
import { withRouter } from 'react-router';
import DirectChatMessageItem from './direct_chat_message_item';
import MessageFormContainer from '../message/message_form_container';

class DirectChatMessage extends React.Component {
  constructor (props) {
    super(props);
    this.createPusherChannel = this.createPusherChannel.bind(this);
    this.displayHeader = this.displayHeader.bind(this);
    this.waitForMessages = this.waitForMessages.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.currentUser) {
      this.props.router.push(`/login`);
    }

    if (newProps.directMessage.id) {
      this.createPusherChannel();
    }
  }

  createPusherChannel () {
    let pusher = new Pusher('a6428d82cdddd683832f', {
      encrypted: true
    });

    let channel = pusher.subscribe('direct_message_' + this.props.directMessage.id);
    channel.bind('message_posted', function (data) {
      this.props.fetchOneDirectMessage(this.props.directMessage.id);
    });
  }

  displayHeader () {
    return (
      <header className="textChannelChatBoxHeader">
        <div className="textChannelChatBoxHeaderLeft">
          <div className="textChannelChatBoxHash">#</div>
          <div className="textChannelChatBoxName">{this.props.directMessage.username}</div>
        </div>
      </header>
    )
  }

  waitForMessages () {
    const { directChatMessages, directMessage, currentUser, destroyDirectChatMessage } = this.props;

    if (directChatMessages) {
      let keys = Object.keys(directChatMessages).reverse()
      return (
        <div className="textChannelMessagesBox">
          {keys.reverse().map( key => {
            return <DirectChatMessageItem message={directChatMessages[key]}
                                          directMessage={directMessage}
                                          currentUser={currentUser}
                                          destroyMessage={destroyDirectChatMessage}
                                          key={key} />
          })}
        </div>
      )
    }
  }

  render () {
    const { directMessage } = this.props;
    return (
      <div className="textChannelChatBoxBackground">
        <div className="textChannelChatBox">
          {this.displayHeader()}
          {this.waitForMessages()}
          <MessageFormContainer chatType="DirectMessage"
                                chatId={directMessage.id}
                                textChannelTitle={directMessage.username}
                                action="create" />
        </div>
        <div className="channelSubscriptionsBox">
        </div>
      </div>
    )
  }
}

export default withRouter(DirectChatMessage);
