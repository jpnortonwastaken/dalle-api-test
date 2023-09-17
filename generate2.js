import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(config);

const prompt = 'a dog breathing fire with angel wings';
const numberOfImages = 1;
const imageSize = '1024x1024';

openai
    .createImage({
        prompt: prompt,
        n: numberOfImages,
        size: imageSize
    })
    .then((data) => {
        console.log(data.data.data);
    });
