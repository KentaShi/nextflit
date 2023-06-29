import { magicAdmin } from "@/lib/magic"

export default async function (req, res) {
    if (req.method === "POST") {
        try {
            const auth = req.headers.autorization
            const didToken = auth ? auth.substr(7) : ""
            console.log({ didToken })
            // invoke magic
            const metadata = await magicAdmin.users.getMetadataByToken(didToken)
            console.log({ metadata })
            res.send({ done: true })
        } catch (error) {
            res.send({ error })
        }
    } else {
        res.send({ error: "wrong method" })
    }
}
