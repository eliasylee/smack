import React from 'react';
import { withRouter } from 'react-router';
import TextChannelChatItem from './text_channel_chat_item';
import MessageFormContainer from '../message/message_form_container';

class TextChannelChat extends React.Component {
  componentWillReceiveProps (newProps) {
    if (!newProps.currentUser) {
      this.props.router.push(`/login`);
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
                                   textChannelId={textChannel.id}
                                   currentUser={currentUser}
                                   destroyMessage={destroyMessage}
                                   key={messageKey} />
          })}
        </div>
      )
    }
  }

  render () {
    const { textChannel } = this.props;
    return (
      <div className="textChannelChatBoxBackground">
        <div className="textChannelChatBox">
          <header className="textChannelChatBoxHeader">
            <div className="textChannelChatBoxHash">#</div>
            <div className="textChannelChatBoxName">{textChannel.title}</div>
            <div className="textChannelChatBoxSeparator">|</div>
            <div className="textChannelChatBoxDescription">{textChannel.description}</div>
          </header>
          {this.waitForMessages()}
          <MessageFormContainer chatType="TextChannel"
                                chatId={textChannel.id}
                                action="create" />
        </div>
      </div>
    )
  }
}

export default withRouter(TextChannelChat);
