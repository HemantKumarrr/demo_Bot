import { Telegraf } from "telegraf";
import express from "express";
import { message } from "telegraf/filters";
const app = express();
const PORT = process.env.PORT;
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome");
});

bot.on(message("text"), (ctx) => {
  const userMsg = ctx.update.message.text.toLowerCase();
  if (userMsg.includes("hi")) {
    ctx.reply(`Hello, ${ctx.update.message.from.first_name} How are you?`);
  } else if (userMsg === "badiya") {
    ctx.reply("Good!");
  } else if (userMsg === "baekar") {
    ctx.reply("Hope! everything is well");
  }
});

app.get("/", (req, res) => {
  res.send("App is Working");
});

bot.launch();
app.listen(PORT, () => {
  console.log(`Listening at PORT : ${PORT}`);
});
