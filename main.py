import telebot

bot = telebot.TeleBot("YOUR_BOT_TOKEN")

@bot.message_handler(commands=['start', 'help'])
def send_info(message):
    info_text = (
        "ℹ️ **My Info**\n\n"
        "👤 **Telegram Username:** @joshuanex\n"
        "🤖 *Need help? Just ask!*"
    )
    bot.reply_to(message, info_text, parse_mode="Markdown")

bot.infinity_polling()
