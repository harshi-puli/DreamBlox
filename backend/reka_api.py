from reka.client import Reka

# You can also set the API key using the REKA_API_KEY environment variable.
client = Reka(api_key="7e8df0937435c48a00497457bff8a9c0d279d9e72f43d305e7daef9bf2631bb1")

response = client.chat.create(
    messages=[
        {
            "content": "What is the fifth prime number?",
            "role": "user",
        }
    ],
    model="reka-core-20240501",
)
print(response.responses[0].message.content)
