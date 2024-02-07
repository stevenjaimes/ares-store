import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Función para detectar la ubicación del usuario utilizando un servicio externo
async function detectUserLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error('Failed to fetch user location.');
    }
    const data = await response.json();
    console.log("estas ubicado en: ")
    console.log(data)
    return { countryCode: data.country_code, currency: data.currency }; // Devuelve el código de país y la moneda
  } catch (error) {
    console.error('Error detecting user location:', error);
    return { countryCode: 'US', currency: 'USD' }; // Por defecto, devuelve Estados Unidos y dólares estadounidenses si hay un error
  }
}


// Función para formatear el precio según la ubicación del usuario
export async function formatPrice(
  price: number | string,
  country?: string,
  currency?: string,
  notation: Intl.NumberFormatOptions["notation"] = "standard" // Notación por defecto es "standard"
) {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  // Detecta la ubicación del usuario si no se proporciona el país y la moneda
  if (!country || !currency) {
    const locationData = await detectUserLocation();
    country = locationData.countryCode;
    currency = locationData.currency;
  }

  console.log(country)
  console.log(currency)

  // Determina el localizador a partir del país del usuario
  let locale;
  switch (country) {
    case "US":
      locale = "en-US"; // Estados Unidos
      break;
    case "CO":
      locale = "es-CO"; // Colombia
      break;
    // Agrega más casos para otros países si es necesario
    default:
      locale = "en-US"; // Por defecto, usar localización en inglés de Estados Unidos
  }

  console.log("moneda")
  console.log(locale)
  // Formatea el precio utilizando el localizador determinado, la moneda y la notación proporcionada
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    notation: notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
