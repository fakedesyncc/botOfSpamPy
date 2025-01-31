from telethon import TelegramClient, events
api_id = 'XXXX'
api_hash = 'XXXX'

phone_number = '+XXXX'

client = TelegramClient('session_name', api_id, api_hash)

spam_tasks = set()

async def send_message_periodically(event, interval=0.1):
    try:
        while True:
            await event.reply('я забрал:D')
            await asyncio.sleep(interval)
    except asyncio.CancelledError:
        pass

@client.on(events.NewMessage)
async def handler(event):
    message = event.message.message.lower()
    if 'газз' in message:
        task = asyncio.create_task(send_message_periodically(event))
        spam_tasks.add(task)
        task.add_done_callback(lambda t: spam_tasks.discard(t))

async def main():
    await client.start(phone_number)
    print("Client Created")
    # Подключаемся и ждем новых сообщений
    await client.run_until_disconnected()

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot stopped")
        for task in spam_tasks:
            task.cancel()
