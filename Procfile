web: uvicorn bot.main:init_webhook_app --host 0.0.0.0 --port $PORT
worker: python -m workers.cron_jobs
