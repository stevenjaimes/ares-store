import { obtenerDatosAPI } from "./dataHandler";
import { datospais } from "./datospais";
import { detectUserLocation } from "./ubicacionUser";


// Función para formatear el precio según la ubicación del usuario
export async function formatPrice(
  price: number | string,
  country?: string,
  currency?: string,
  notation: Intl.NumberFormatOptions["notation"] = "standard", // Notación por defecto es "standard"
  rate?: number | undefined // Tasa de cambio
) {
  var numericPrice = typeof price === "string" ? parseFloat(price) : price;
 

  // Detecta la ubicación del usuario si no se proporciona el país y la moneda
  if (!country || !currency) {
    const locationData = await detectUserLocation();
    country = locationData.countryCode;
    currency = locationData.currency;
    rate = locationData.divisa;
  }

   if (rate) {
    numericPrice = numericPrice * rate;  
  }

  // Determina el localizador a partir del país del usuario  
  let locale; 
   locale = await datospais(country);

  // Formatea el precio utilizando el localizador determinado, la moneda y la notación proporcionada
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    notation: notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
