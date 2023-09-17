import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);

const prompt = 'Oil painting of yoshi running and then falling off of a cliff with waterfall.';
const numberOfImages = 1;
const imageSize = '1024x1024';

const result = await openai.createImage({
    prompt: prompt,
    n: numberOfImages,
    size: imageSize
})

let url = result.data.data[0].url;

console.log('URL: ' + url);

// Save Image URL to Disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() );
writeFileSync(`./images/${Date.now()}.png`, buffer);
