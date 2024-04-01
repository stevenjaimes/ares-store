
import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface PageProps {
    searchParams: {
        [key: string]: string|string[] | undefined;
    }
}

const VerifyEmailPage = ({ searchParams }:PageProps) => {
    
    console.log(searchParams)
    const token = searchParams.token; 
    const toEmail= searchParams.to;


    return( 
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {token && typeof token === "string" ? (
                <div className="grid gap-6">
                    <VerifyEmail token={token} />
                </div>
            ): (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                    <div className="relative mb-4 h-60 w-60 text-muted-foreground">  
                        <Image 
                            src="/hippo-email-sent.png" 
                            fill 
                            alt= "hippo envia un email de verificación"
                            />
                    </div>
                    <h3 className="font-semibold text-2xl">Comprueba tu correo</h3>

                    {toEmail ?( <p className="text-muted-foreground text-center ">
                        Vamos a enviar un enlace de verificación <span className="font-semibold">{toEmail}</span>.
                    </p>
                    ) : ( 
                    <p className="text-muted-foreground text-center "> Vamos a enviar un enlace de verificación de tu correo     </p>
                        
                 )}
                </div>
            )}    
        </div>
    </div>
    )
}

export default VerifyEmailPage;