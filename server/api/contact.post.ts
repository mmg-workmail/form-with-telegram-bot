import axios from "axios";
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const text = Object.entries(body)
    .map(([key, val]) => `${key} : ${val}`)
    .join("\n");

  const telegramApi = `https://api.telegram.org/bot${
    config.TELEGRAM_TOKEN_BOT
  }/sendMessage?chat_id=${config.CHAT_ID}&text=${encodeURI(text)}`;

  const response = await axios
    .request({ url: telegramApi })
    .then((response) => {
      return {
        message: "Is Done",
      };
    })
    .catch((error) => {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    });

  return { response };
});
