from openai import OpenAI

client = OpenAI(
    base_url="https://api.reka.ai/v1",
    api_key=7e8df0937435c48a00497457bff8a9c0d279d9e72f43d305e7daef9bf2631bb1
)

completion = client.chat.completions.create(
    model="reka-flash-research",
    messages=[
      {
          "role": "user",
          "content": (
              "Check for new or updated IRS tax-compliance regulations or guidance issued in the past 7 days.\n\n"
              "List:\n- Title of update\n- Date issued\n- Summary of key changes\n- Link to official IRS source"
          )
      },
  ]
)
