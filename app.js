const fs = require('fs');

const OPENAI_API_KEY = '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';

function readArticleFile() {
    const filePath = './tresc-artykulu.txt';
    return fs.promises.readFile(filePath, 'utf8');
}


async function processArticleWithAI(articleContent) {
    const fetch = (await import('node-fetch')).default; 

    const prompt = `
        Przekształć poniższy artykuł na kod HTML z następującymi wytycznymi:
        - Użyj odpowiednich tagów HTML do strukturyzacji treści (np. <h1>, <p>, <ul>, <li>).
        - W miejscach, gdzie warto dodać grafiki, wstaw <img src="image_placeholder.jpg" alt="Opis grafiki">.
        - Umieść podpisy pod grafikami w odpowiednich tagach HTML.
        - Nie dodawaj znaczników <html>, <head> ani <body>.

        Artykuł:
        ${articleContent}
    `;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 1000, 
                temperature: 0.5
            })
        });

        const data = await response.json();

        console.log('Błąd:', JSON.stringify(data, null, 2));

        if (data && data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('err');
        }

    } catch (error) {
        console.error('err', error);
        throw error;
    }
}




function saveHTMLToFile(content) {
    const outputFilePath = './artykul.html'; 
    return fs.promises.writeFile(outputFilePath, content, 'utf8');
}


async function main() {
    try {
        
        const articleContent = await readArticleFile();
        
        
        const htmlContent = await processArticleWithAI(articleContent);
        
        
        await saveHTMLToFile(htmlContent);
        
        console.log('Plik artykul.html został wygenerowany.');
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}


main();
