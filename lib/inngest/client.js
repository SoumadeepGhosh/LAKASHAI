import {Inngest} from "inngest"

export const inngest = new Inngest({id: "lakshai", name: "Lakshai",
    credentials: {
        gemini:{
            apikey: process.env.GEMINI_API_KEY,
        },
    },
});