"use client";

import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { formatPrice } from "@/lib/format-moneda";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemCount = 0;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2  ">
        <ShoppingBag 
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-gray-700"
        />
        <span className="ml-1 mb-3 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0  sm:max-w-lg  ">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: Cart Logic */}
              Items Carrito
            </div>

            <div className="space-y-4 pr-6 ">
              <Separator className="h-px bg-border" />
              <div className="space-y-1.5 text-sm">
                <div className="flex ">
                  <span className="flex-1"> Envío </span>
                  <span>{formatPrice(12000)} </span>
                </div>
                <div className="flex ">
                  <span className="flex-1"> Tasas adicionales </span>
                  <span>{formatPrice(1400)}</span>
                </div>
                <div className="flex ">
                  <span className="flex-1"> Total </span>
                  <span>{formatPrice(14000)}</span>
                </div>
              </div>
        <SheetFooter>
          
          <SheetTrigger asChild>
            <Link href='/cart'  className={buttonVariants({
              className: "w-full"
            })}> 
            
            Continuar al Checkout
            </Link>

          </SheetTrigger>
          </SheetFooter>    
            
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div aria-hidden='true' className='relative mb-4 h-60 w-60 text-muted-foreground'>
            
              <Image  src='/hippo-empty-cart.png' fill alt='empty-cart' />
            </div>
            <div className="text-xl font-semibold">
              Tu carrito está vacío
            </div>
            <SheetTrigger asChild>

              <Link  href='/products' className={buttonVariants({
                variant:"link",
                size:"sm",
                className: "text-sm text-muted-foreground",
              }
              
              )}>
                Agrega Items a tu carro para comprar
              </Link>
            </SheetTrigger>

          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
