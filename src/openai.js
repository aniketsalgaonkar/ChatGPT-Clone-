import OpenAIApi from "openai";

const openai = new OpenAIApi({
  apiKey: `${process.env.APIKEY}`,
  dangerouslyAllowBrowser: true,
});
// const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.choices[0].text;
}
