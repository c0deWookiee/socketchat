export default (body, title) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>bitch</title>
     <style type="text/css">
     .roomWrapper {
      position: fixed;
      z-index: 5;
      right: 0;
      top: 10vh;
      bottom: 6.3vh;
      max-height: 80vh;
      width: 15vw;
      overflow: scroll; }
      .roomWrapper .roomBox {
        position: absolute;
        font-size: 0.2em;
        background-color: white;
        height: 100%;
        width: 100%; }
        .roomWrapper .roomBox :nth-child(even) {
          background: white; }
          .roomWrapper .roomBox :nth-child(even):hover {
            color: #ccc; }
        .roomWrapper .roomBox :nth-child(odd) {
          background: #ccc; }
          .roomWrapper .roomBox :nth-child(odd):hover {
            color: white; }
    
    .roomList {
      margin: auto;
      border-bottom: 2px solid #ccc;
      align-items: center; }
      .roomList:hover {
        cursor: pointer; }
    .header-container {
      width: 100vw;
      display: grid;
      grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
      background: #0077b5;
      top: 0;
      height: 10vh;
      z-index: 2; }
      .header-container .header-title {
        grid-column-start: 3;
        display: flex;
        align-self: center;
        margin: auto;
        font-size: 0.7em;
        color: white; }
      .header-container .buttonWrapper {
        margin-left: auto;
        display: flex;
        flex-direction: row;
        align-items: center; }
        .header-container .buttonWrapper .showRoom-btn {
          grid-column-start: 4;
          grid-column-end: 4;
          font-size: 0.2em;
          background: white;
          border: none;
          color: #0077b5;
          margin-right: 20px; }
          .header-container .buttonWrapper .showRoom-btn:hover {
            animation: headerButtonOffset 0.2s forwards;
            cursor: pointer; }
          .header-container .buttonWrapper .showRoom-btn:focus {
            outline: none; }
        .header-container .buttonWrapper .createRoom-btn {
          font-size: inherit;
          grid-column-start: 5;
          grid-column-end: 5;
          font-size: 0.2em;
          border: none;
          background: white;
          color: #0077b5;
          margin-right: 20px; }
          .header-container .buttonWrapper .createRoom-btn:hover {
            animation: headerButtonOffset 0.2s forwards;
            cursor: pointer; }
          .header-container .buttonWrapper .createRoom-btn:focus {
            outline: none; }
    
    @keyframes headerButtonOffset {
      0% {
        box-shadow: 0 0 0 0; }
      100% {
        box-shadow: 5px 5px 0 #e5e5e5; } }
    .message-log {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      width: 60vw;
      padding-left: 1vw;
      padding-right: 1vw;
      max-height: 78vh;
      margin-right: 25vw;
      margin-left: 25vw;
      overflow: scroll;
      overflow-x: hidden; }
      .message-log .right-message {
        display: flex;
        justify-content: flex-end;
        flex-shrink: 0; }
      .message-log .left-message {
        display: flex;
        justify-content: flex-start;
        flex-shrink: 0; }
    
    .other-message {
      position: relative;
      word-wrap: break-word;
      border-radius: 25px;
      margin: 12px;
      padding: 1vh;
      background-color: white;
      width: fit-content;
      max-width: 30vw;
      box-shadow: 1px 1px black, 2px 2px black, 5px 5px black;
      white-space: pre-wrap;
      z-index: 1; }
      .other-message:hover {
        transform: translateX(-10px) scale(1.1); }
      .other-message .username {
        font-size: 0.15em;
        text-decoration: underline;
        font-weight: bold;
        color: #0077b5; }
        .other-message .username:hover {
          cursor: pointer; }
      .other-message .message-text {
        max-width: 30vw;
        font-size: 0.15em;
        width: fit-content;
        min-width: 20vw;
        padding: 1vh; }
    
    .message {
      position: relative;
      word-wrap: break-word;
      border-radius: 25px;
      margin: 12px;
      padding: 1vh;
      background-color: white;
      width: fit-content;
      max-width: 30vw;
      box-shadow: 1px 1px #0077b5, 2px 2px #0077b5, 5px 5px #0077b5;
      white-space: pre-wrap;
      z-index: 1; }
      .message:hover {
        transform: translateX(-10px) scale(1.1); }
      .message .username {
        font-size: 0.15em;
        text-decoration: underline;
        font-weight: bold;
        color: #0077b5; }
        .message .username:hover {
          cursor: pointer; }
      .message .message-text {
        max-width: 30vw;
        font-size: 0.15em;
        width: fit-content;
        min-width: 20vw;
        padding: 1vh; }
    
    .room-message {
      position: relative;
      font-size: 0.1em; }
    @font-face {
      font-family: DanielsFont;
      src: url(111661196d65a2675d088a540f3b37e3.ttf) format("TrueType"); }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: calc(1em + 1vw); }
    
    .primoContainer {
      font-size: 1em;
      top: 0; }
    
    body {
      font-family: DanielsFont;
      background: #eaeaea; }
    
    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: white;
      padding: 3px;
      position: fixed;
      bottom: 0;
      width: 60vw;
      z-index: 2; }
      form textarea {
        position: relative;
        border: 0;
        width: 85vw;
        height: 12vh;
        font-size: 0.17em;
        resize: none;
        user-select: none;
        border: #0077b5;
        outline: none; }
        form textarea:focus {
          animation: drawTopBorder 0.2s forwards; }
      form button {
        width: 13.2vw;
        height: 10vh;
        background: #0077b5;
        border: none;
        color: white;
        font-size: 0.3em;
        margin-right: auto;
        margin-left: auto; }
        form button:hover {
          cursor: pointer;
          animation: sendShadow 0.2s forwards; }
    
    .form-container {
      display: flex;
      justify-content: center; }
    
    .chatWindow {
      height: 50vh;
      width: 25vw;
      background: #e5e5e5; }
    
    @keyframes drawTopBorder {
      0% {
        border-top: 0px transparent;
        border-bottom: 0px transparent;
        border-left: 0px transparent; }
      100% {
        border-top: 5px solid #0077b5;
        border-bottom: 5px solid #0077b5;
        border-left: 5px solid #0077b5; } }
    
    @keyframes sendShadow {
      0% {
        box-shadow: 0 0 0 0; }
      100% {
        box-shadow: 10px 10px 0 dodgerblue; } }
    
     </style>
    </head>
    <body>
      <div id="root">
      ${body}
      
      </div>
      <div id="portal"></div>
      <div id="chatPortal"></div>
  
  </html>
  `
}