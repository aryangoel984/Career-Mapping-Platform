export default async function handler(req, res) {
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405 });
    }

    try {
        const { message } = await req.json();
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `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`,
            },
            body: JSON.stringify({
                model: "gpt-4", // Change to gpt-3.5-turbo if needed
                messages: [{ role: "user", content: message }],
            }),
        });

        const data = await response.json();
        return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to fetch response" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}