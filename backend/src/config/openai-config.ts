import { OpenAI} from "openai/";

//error may occur because replaced Configuration by OpenAI
export const configureOpenAI = () => {
  const config = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
  });
  return config;
}; 