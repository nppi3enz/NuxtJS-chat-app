<template>
  <div>
    <header>
      <h1>Nuxt.js Chat Demo</h1>
    </header>
    <main>
      <AblyChatComponent />
    </main>
    <footer>
      Powered by
      <a href="https://vercel.com" target="_blank">Vercel</a>
      and
      <a href="https://ably.com" target="_blank">Ably</a> |
      <a href="https://ably.com/blog/realtime-chat-app-nextjs-vercel" target="_blank">Original Article</a>
    </footer>
  </div>
</template>
<style>
body{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
  background: #e0e0e0;
  font-size: 1.2em;
}
header, footer{
  text-align: center;
}
header{
  color: #41B883;
  text-shadow: 2px 2px 3px #bbb;
}
footer, footer a{
  color: #888;
  font-size: 12px;
}
</style>
