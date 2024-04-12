"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";


const perks = [
  {
    name: "Envío rápido y seguro",
    Icon: ArrowDownToLine,
    description:
      "Recibe tus productos en minutos y con total seguridad. ¡Entrega express para tu hogar!",
  },
  {
    name: "Calidad garantizada",
    Icon: CheckCircle,
    description:
      "Cada producto en nuestra plataforma es verificado por nuestro equipo para garantizar los más altos estándares de calidad. ¿No estás satisfecho? ¡Te ofrecemos una garantía de devolución de 30 días!",
  },
  {
    name: "Comprometidos con el medio ambiente",
    Icon: Leaf,
    description:
      "Nos comprometemos a destinar el 1% de nuestras ventas a la preservación y restauración del medio ambiente natural. ¡Cuidemos juntos nuestro planeta!",
  },
];

export default function Home() {

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Tu destino para productos de hogar de{" "}
            <span className="text-blue-600"> calidad excepcional</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            {" "}
            Bienvenidos a Ares Store{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending de todo{" "}
            </Link>
            <Button variant="ghost">Our quality promise &rarr; </Button>
          </div>
        </div>
        {/* TODO: List products   */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12  sm:grid-cols-2  sm:gap-x-6  md:grid-cols-3 md:gap-x-2 md:gap-y-0 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center  md:flex md:flex-start  lg:block"
              >
                <div className=" flex justify-center md:flex-shrink-0 ">                  
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0  lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>   
    </>
  );
}
