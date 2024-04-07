import { Request, Response } from 'express'; 
import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = async (req: Request, res: Response)=> {
    try {
        // Usa fetchRequestHandler para manejar la solicitud
        const response = await fetchRequestHandler({
            endpoint: "/api/trpc",
            req,
            router: appRouter,
            // @ts-expect-error  context already passed from express middleware
            createContext: () => ({}),
        });

        // Devuelve la respuesta obtenida
        res.status(response.status).json(await response.json());
    } catch (error) {
        // Si hay un error, devuelve una respuesta de error
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default handler;
