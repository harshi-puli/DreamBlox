from reka import ChatMessage
from reka.client import Reka

client = Reka(api_key="7e8df0937435c48a00497457bff8a9c0d279d9e72f43d305e7daef9bf2631bb1")
response = client.chat.create(
    messages=[
        ChatMessage(
            content=[
                {"type": "image_url", "image_url": "https://v0.docs.reka.ai/_images/000000245576.jpg"},
                {"type": "text", "text": "What animal is this? Answer briefly"}
            ],
            role="user",
        )
    ],
    model="reka-core-20240501",
)
print(response.responses[0].message.content)

