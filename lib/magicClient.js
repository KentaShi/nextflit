import { Magic } from "magic-sdk"

const createMagic = () => {
    return (
        typeof window !== "undefined" &&
        new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY)
    )
}
export const magic = createMagic()

console.log("Magic initialization", magic)
