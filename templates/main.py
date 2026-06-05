import telebot
import time
from threading import Thread

# 1. Put your token from BotFather here
BOT_TOKEN = "YOUR_BOT_TOKEN"
bot = telebot.TeleBot(BOT_TOKEN)

# 2. This handles your /start command
@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "👋 Hello! I am live and responding to your commands!")

# 3. This handles your background tasks (simulating your background worker)
def background_worker():
    while True:
        print("Background worker is quietly processing data...")
        time.sleep(10)  # Runs every 10 seconds

# Start the background worker thread
worker_thread = Thread(target=background_worker, daemon=True)
worker_thread.start()

# 4. Tell the bot to start looking for messages permanently
print("Bot is starting up...")
bot.infinity_polling()
