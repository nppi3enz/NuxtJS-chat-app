<template>
  <div class="container">
    <div class="chat-area">
      <span v-for="item in receivedMessages" :key="item.key" :class="['bubble', item.type]">
        {{ item.text }}
      </span>
    </div>
    <div class="control">
      <textarea v-model="msg" name="" rows="4" placeholder="Type Message Here..." @keydown.prevent.enter="sendMessage()" />
      <button id="sendBtn" type="button" @click="sendMessage()">
        SEND
      </button>
    </div>
  </div>
</template>
<script>
import Ably from 'ably/promises'
export default {
  data () {
    return {
      msg: '',
      receivedMessages: [],
      channel: null,
      connectionId: null
    }
  },
  mounted () {
    const self = this
    const ably = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' })
    ably.connection.on('connected', function () {
      self.connectionId = ably.connection.id
      console.log('successful connection')
    })
    this.channel = ably.channels.get('chat-demo')
    this.channel.subscribe('chat-message', function (message) {
      self.callbackOnMessage(message)
    })
  },
  methods: {
    sendMessage () {
      this.channel.publish('chat-message', { msg: this.msg })
      this.msg = ''
    },
    callbackOnMessage (message) {
      const author = message.connectionId === this.connectionId ? 'me' : 'other'
      this.receivedMessages.push({
        text: message.data.msg,
        type: author
      })
    }
  }
}
</script>
<style scoped>
.container{
  margin: 0 auto;
  background: #fff;
  display:block;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin-bottom: 10px;
}
.chat-area{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 1em;
  overflow-y: scroll;
  height: 500px;
  padding: 20px;
}
.control{
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ccc;
}
textarea{
  width: 100%;
  height: 80px;
  font-size: 1.3em;
  padding: 10px 20px;
  border:0px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
}
#sendBtn{
  background: #34495E;
  color: #fff;
  border:0px;
  width: 150px;
  height: 100px;
  font-size: 1.3em;
}
#sendBtn:hover{
  background: #345e3f;
  cursor: pointer;
}
.bubble{
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
}
.bubble.me{
  background: #41B883;
  color: #fff;
  align-self: flex-end;
  border-bottom-right-radius: 0px;
}
.bubble.other{
  background: #e6e6e6;
  color: #000;
  align-self: flex-start;
  border-bottom-left-radius: 0px;
}
</style>
