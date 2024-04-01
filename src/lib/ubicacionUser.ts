// Función para detectar la ubicación del usuario utilizando un servicio externo
export async function detectUserLocation() {
    try {
      if (typeof window !== "undefined") {
        // Obtener los datos almacenados en localStorage
  
        const storedData = localStorage.getItem("datos");
  
        // Verificar si hay datos almacenados en localStorage
        if (!storedData) {
          throw new Error("No se encontraron datos en localStorage.");
        }
  
        // constante que obtiene el json almacenado en el localStorage del navegador
        const storeDatafin = JSON.parse(storedData);
  
    
  
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch user location.");
        }
        const data = await response.json();
  
        if (data.currency == "COP") {
          var divisa = data.currency;
  
        } else {
          // Verificar si storeDatafin es un objeto
          if (typeof storeDatafin === "object" && storeDatafin !== null) {
            // Verificar si storeDatafin.rates es un objeto
            if (
              typeof storeDatafin.rates === "object" &&
              storeDatafin.rates !== null
            ) {
              // Iterar sobre las claves de storeDatafin.rates utilizando for...in
              for (const currency in storeDatafin.rates) {
                // Verificar si la clave actual coincide con data.currency
                if (currency === data.currency) {
                  var rate2 = storeDatafin.rates[currency];
                  var rate = rate2;
  
                  // Haz lo que necesites con la tasa de cambio...
                }
              }
            } else {
              console.log("storeDatafin.rates NO es un objeto válido");
            }
          } else {
            console.log("storeDatafin NO es un objeto válido");
          }
        }
  
        return {
          countryCode: data.country_code,
          currency: data.currency,
          divisa: rate,
        }; // Devuelve el código de país, la moneda, y la divisa
      } else {
        console.log("Entorno de servidor, no se puede acceder a localStorage");
        return { countryCode: "US", currency: "USD" }; // Por defecto, devuelve Estados Unidos y dólares estadounidenses si hay un error
      }
    } catch (error) {
      console.error("Error detecting user location:", error);
      return { countryCode: "US", currency: "USD" }; // Por defecto, devuelve Estados Unidos y dólares estadounidenses si hay un error
    }
  }
  