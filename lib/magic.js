import { Magic } from "@magic-sdk/admin"

export const magicAdmin = new Magic(process.env.NEXT_PUBLIC_MAGIC_SECRET_KEY)
