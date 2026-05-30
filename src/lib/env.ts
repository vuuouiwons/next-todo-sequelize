import { z } from "zod";

const envSchema = z.object({
    POSTGRES_USER: z.string().min(1, "Database user is required"),
    POSTGRES_PASSWORD: z.string().min(1, "Database password is required"),
    POSTGRES_HOST: z.string().min(1, "Database host is required"),
    POSTGRES_PORT: z.coerce.number().default(5432),
    POSTGRES_DATABASE: z.string().min(1, "Database name is required"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    throw new Error("Missing or invalid environment variables. Fix your environment variable file.");
}

export const env = parsedEnv.data;

