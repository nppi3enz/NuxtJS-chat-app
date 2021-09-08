<template>
  <div class="container">
    <div class="chat-area">
      <span class="bubble me">
        Text 1
      </span>
      <span class="bubble other">
        Text 2
      </span>
      <span class="bubble me">
        Text 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt magnam exercitationem asperiores aliquid cupiditate, alias odio hic facere reiciendis voluptas at, libero quos vel non iste amet, aspernatur perspiciatis unde!
      </span>
      <span class="bubble other">
        Text 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laudantium animi perferendis temporibus quod expedita dolor quae harum iusto molestias, sapiente ab doloremque inventore quasi. Modi vitae porro cupiditate suscipit.
      </span>
      <span class="bubble me">
        Text 5
      </span>
      <span class="bubble other">
        Text 6
      </span>
      <span class="bubble me">
        Text 7
      </span>
      <span class="bubble other">
        Text 8
      </span>
    </div>
    <div class="control">
      <textarea v-model="msg" name="" rows="4" placeholder="Type Message Here..." />
      <button id="sendBtn" type="button">
        SEND
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
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
