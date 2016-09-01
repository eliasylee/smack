{textChannels.map( textChannel => {
  return <TextChannelNavItem textChannel={textChannel}
                             channelId={channelId}
                             key={textChannel.id} />
})}
