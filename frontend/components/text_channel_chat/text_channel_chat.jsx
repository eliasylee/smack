import React from 'react';
import TextChannelChatItem from './text_channel_chat_item';
import MessageFormContainer from '../message/message_form_container';

class TextChannelChat extends React.Component {
  render () {
    const { textChannel, currentUser, messages, updateMessage, destroyMessage } = this.props;
    return (
      <div className="textChannelChatBoxOuter">
        <div className="textChannelChatBoxInner">
          <header className="textChannelChatBoxHeader">
            <div className="textChannelChatBoxHash">#</div>
            <div className="textChannelChatBoxName">{textChannel.name}</div>
            <div className="textChannelChatBoxSeparator">|</div>
            <div className="textChannelChatBoxDescription">{textChannel.description}</div>
          </header>
          <div className="textChannelMessagesBox">
            {messages.map( message => {
              return <TextChannelChatItem message={message}
                                     currentUser={currentUser}
                                     destroyMessage={destroyMessage}
                                     key={textChannel.id} />
            })}
          </div>
          <MessageFormContainer chatType="TextChannel"
                                chatId={textChannel.id}
                                action="create" />
        </div>
      </div>
    )
  }
}

export default TextChannelChat;
