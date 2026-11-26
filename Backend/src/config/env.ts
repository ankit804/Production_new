import "dotenv/config"  

function required(name: string): string {
    const value = process.env[name]
    if (!value) {
        throw new Error(`.env not found....`)
    }
    return value
}


export const env={
    PORT:Number(process.env.PORT ?? 5000),
    CLIENT_URL: required("CLIENT_URL"),
    NODE_ENV:process.env.NODE_ENV ?? "development"
} as const