import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
    // todos in the body of the POST req
    const { todos } = await request.json();

    // Comunicate with openAI GPT
    try {
        const response = await openai.createChatCompletion({
            "model": "gpt-3.5-turbo",
            "temperature": 0.8,
            "n": 1,
            "stream": false,
            "messages": [
                {
                    "role": "system",
                    "content": `When responding, welcome the user always as Mr.Sonny and say welcome to the Trello clone App!. Limit the response to 200 characters`,
                },
                {
                    "role": "user",
                    "content": `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`
                },
            ]
        });

        console.log('response de openAI ->', response)
        const {data} = response;
        console.log("DATA IS: ", data);
        console.log(data.choices[0].message);

        return NextResponse.json(data.choices[0].message);
    } catch (error) {
        console.log("Falló esta mrd")
        console.log(error)
    }
}