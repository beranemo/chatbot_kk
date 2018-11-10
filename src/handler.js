const {LineHandler} = require('bottender')

exports.lineHandler = new LineHandler()
  .onText(async context => {
      const text = context.event.text
      const reply = text
      await context.replyText(reply)
    }
  )