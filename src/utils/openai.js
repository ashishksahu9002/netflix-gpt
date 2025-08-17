import OpenAI from "openai";
import conf from './conf'

const openai = new OpenAI({
  apiKey: conf.openaiApiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;