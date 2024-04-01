export async function datospais (country:string|undefined): Promise<string> {

    let locale:string; 

    switch (country) {
        case "AED":
          locale = "ar-AE"; // Emiratos Árabes Unidos
          break;
        case "AFN":
          locale = "ps-AF"; // Afganistán
          break;
        case "ALL":
          locale = "sq-AL"; // Albania
          break;
        case "AMD":
          locale = "hy-AM"; // Armenia
          break;
        case "ANG":
          locale = "nl-CW"; // Antillas Neerlandesas
          break;
        case "AOA":
          locale = "pt-AO"; // Angola
          break;
        case "ARS":
          locale = "es-AR"; // Argentina
          break;
        case "AUD":
          locale = "en-AU"; // Australia
          break;
        case "AWG":
          locale = "nl-AW"; // Aruba
          break;
        case "AZN":
          locale = "az-AZ"; // Azerbaiyán
          break;
        case "BAM":
          locale = "bs-BA"; // Bosnia y Herzegovina
          break;
        case "BBD":
          locale = "en-BB"; // Barbados
          break;
        case "BDT":
          locale = "bn-BD"; // Bangladesh
          break;
        case "BGN":
          locale = "bg-BG"; // Bulgaria
          break;
        case "BHD":
          locale = "ar-BH"; // Bahréin
          break;
        case "BIF":
          locale = "rn-BI"; // Burundi
          break;
        case "BMD":
          locale = "en-BM"; // Bermudas
          break;
        case "BND":
          locale = "ms-BN"; // Brunéi
          break;
        case "BOB":
          locale = "es-BO"; // Bolivia
          break;
        case "BRL":
          locale = "pt-BR"; // Brasil
          break;
        case "BSD":
          locale = "en-BS"; // Bahamas
          break;
        case "BTC":
          locale = ""; // Bitcoin
          break;
        case "BTN":
          locale = "dz-BT"; // Bután
          break;
        case "BWP":
          locale = "en-BW"; // Botsuana
          break;
        case "BYN":
          locale = "be-BY"; // Bielorrusia
          break;
        case "BYR":
          locale = "be-BY"; // Bielorrusia (anteriormente)
          break;
        case "BZD":
          locale = "en-BZ"; // Belice
          break;
        case "CAD":
          locale = "en-CA"; // Canadá
          break;
        case "CDF":
          locale = "fr-CD"; // República Democrática del Congo
          break;
        case "CHF":
          locale = "de-CH"; // Suiza
          break;
        case "CLF":
          locale = "es-CL"; // Unidad de fomento chilena (CLF)
          break;
        case "CLP":
          locale = "es-CL"; // Chile
          break;
        case "CNY":
          locale = "zh-CN"; // China
          break;
        case "COP":
          locale = "es-CO"; // Colombia
          break;
        case "CRC":
          locale = "es-CR"; // Costa Rica
          break;
        case "CUC":
          locale = "es-CU"; // Cuba
          break;
        case "CUP":
          locale = "es-CU"; // Cuba (anteriormente)
          break;
        case "CVE":
          locale = "pt-CV"; // Cabo Verde
          break;
        case "CZK":
          locale = "cs-CZ"; // República Checa
          break;
        case "DJF":
          locale = "fr-DJ"; // Yibuti
          break;
        case "DKK":
          locale = "da-DK"; // Dinamarca
          break;
        case "DOP":
          locale = "es-DO"; // República Dominicana
          break;
        case "DZD":
          locale = "ar-DZ"; // Argelia
          break;
        case "EGP":
          locale = "ar-EG"; // Egipto
          break;
        case "ERN":
          locale = "aa-ER"; // Eritrea
          break;
        case "ETB":
          locale = "am-ET"; // Etiopía
          break;
        case "EUR":
          locale = "es-ES"; // Euro - España
          break;
        case "FJD":
          locale = "en-FJ"; // Fiyi
          break;
        case "FKP":
          locale = "en-FK"; // Islas Malvinas
          break;
        case "GBP":
          locale = "en-GB"; // Libra esterlina - Reino Unido
          break;
        case "GEL":
          locale = "ka-GE"; // Georgia
          break;
        case "GGP":
          locale = "en-GG"; // Guernsey
          break;
        case "GHS":
          locale = "ak-GH"; // Ghana
          break;
        case "GIP":
          locale = "en-GI"; // Gibraltar
          break;
        case "GMD":
          locale = "ff-GN"; // Gambia
          break;
        case "GNF":
          locale = "ff-GN"; // Guinea
          break;
        case "GTQ":
          locale = "es-GT"; // Guatemala
          break;
        case "GYD":
          locale = "en-GY"; // Guyana
          break;
        case "HKD":
          locale = "zh-HK"; // Hong Kong
          break;
        case "HNL":
          locale = "es-HN"; // Honduras
          break;
        case "HRK":
          locale = "hr-HR"; // Croacia
          break;
        case "HTG":
          locale = "ht-HT"; // Haití
          break;
        case "HUF":
          locale = "hu-HU"; // Hungría
          break;
        case "IDR":
          locale = "id-ID"; // Indonesia
          break;
        case "ILS":
          locale = "he-IL"; // Israel
          break;
        case "IMP":
          locale = "en-IM"; // Isla de Man
          break;
        case "INR":
          locale = "hi-IN"; // India
          break;
        case "IQD":
          locale = "ar-IQ"; // Irak
          break;
        case "IRR":
          locale = "fa-IR"; // Irán
          break;
        case "ISK":
          locale = "is-IS"; // Islandia
          break;
        case "JEP":
          locale = "en-JE"; // Jersey
          break;
        case "JMD":
          locale = "en-JM"; // Jamaica
          break;
        case "JOD":
          locale = "ar-JO"; // Jordania
          break;
        case "JPY":
          locale = "ja-JP"; // Japón
          break;
        case "KES":
          locale = "sw-KE"; // Kenia
          break;
        case "KGS":
          locale = "ky-KG"; // Kirguistán
          break;
        case "KHR":
          locale = "km-KH"; // Camboya
          break;
        case "KMF":
          locale = "ar-KM"; // Comoras
          break;
        case "KPW":
          locale = "ko-KP"; // Corea del Norte
          break;
        case "KRW":
          locale = "ko-KR"; // Corea del Sur
          break;
        case "KWD":
          locale = "ar-KW"; // Kuwait
          break;
        case "KYD":
          locale = "en-KY"; // Islas Caimán
          break;
        case "KZT":
          locale = "kk-KZ"; // Kazajistán
          break;
        case "LAK":
          locale = "lo-LA"; // Laos
          break;
        case "LBP":
          locale = "ar-LB"; // Líbano
          break;
        case "LKR":
          locale = "si-LK"; // Sri Lanka
          break;
        case "LRD":
          locale = "en-LR"; // Liberia
          break;
        case "LSL":
          locale = "st-LS"; // Lesoto
          break;
        case "LTL":
          locale = "lt-LT"; // Lituania
          break;
        case "LVL":
          locale = "lv-LV"; // Letonia
          break;
        case "LYD":
          locale = "ar-LY"; // Libia
          break;
        case "MAD":
          locale = "ar-MA"; // Marruecos
          break;
        case "MDL":
          locale = "ro-MD"; // Moldavia
          break;
        case "MGA":
          locale = "mg-MG"; // Madagascar
          break;
        case "MKD":
          locale = "mk-MK"; // Macedonia del Norte
          break;
        case "MMK":
          locale = "my-MM"; // Myanmar
          break;
        case "MNT":
          locale = "mn-MN"; // Mongolia
          break;
        case "MOP":
          locale = "zh-MO"; // Macao
          break;
        case "MRU":
          locale = "ar-MR"; // Mauritania
          break;
        case "MUR":
          locale = "mfe-MU"; // Mauricio
          break;
        case "MVR":
          locale = "dv-MV"; // Maldivas
          break;
        case "MWK":
          locale = "ny-MW"; // Malaui
          break;
        case "MXN":
          locale = "es-MX"; // México
          break;
        case "MYR":
          locale = "ms-MY"; // Malasia
          break;
        case "MZN":
          locale = "pt-MZ"; // Mozambique
          break;
        case "NAD":
          locale = "af-NA"; // Namibia
          break;
        case "NGN":
          locale = "ig-NG"; // Nigeria
          break;
        case "NIO":
          locale = "es-NI"; // Nicaragua
          break;
        case "NOK":
          locale = "nb-NO"; // Noruega
          break;
        case "NPR":
          locale = "ne-NP"; // Nepal
          break;
        case "NZD":
          locale = "en-NZ"; // Nueva Zelanda
          break;
        case "OMR":
          locale = "ar-OM"; // Omán
          break;
        case "PAB":
          locale = "es-PA"; // Panamá
          break;
        case "PEN":
          locale = "es-PE"; // Perú
          break;
        case "PGK":
          locale = "en-PG"; // Papúa Nueva Guinea
          break;
        case "PHP":
          locale = "fil-PH"; // Filipinas
          break;
        case "PKR":
          locale = "ur-PK"; // Pakistán
          break;
        case "PLN":
          locale = "pl-PL"; // Polonia
          break;
        case "PYG":
          locale = "gn-PY"; // Paraguay
          break;
        case "QAR":
          locale = "ar-QA"; // Catar
          break;
        case "RON":
          locale = "ro-RO"; // Rumania
          break;
        case "RSD":
          locale = "sr-RS"; // Serbia
          break;
        case "RUB":
          locale = "ru-RU"; // Rusia
          break;
        case "RWF":
          locale = "rw-RW"; // Ruanda
          break;
        case "SAR":
          locale = "ar-SA"; // Arabia Saudita
          break;
        case "SBD":
          locale = "en-SB"; // Islas Salomón
          break;
        case "SCR":
          locale = "fr-SC"; // Seychelles
          break;
        case "SDG":
          locale = "ar-SD"; // Sudán
          break;
        case "SEK":
          locale = "sv-SE"; // Suecia
          break;
        case "SGD":
          locale = "zh-SG"; // Singapur
          break;
        case "SHP":
          locale = "en-SH"; // Santa Elena, Ascensión y Tristán de Acuña
          break;
        case "SLL":
          locale = "en-SL"; // Sierra Leona
          break;
        case "SOS":
          locale = "so-SO"; // Somalia
          break;
        case "SRD":
          locale = "nl-SR"; // Surinam
          break;
        case "STD":
          locale = "pt-ST"; // Santo Tomé y Príncipe
          break;
        case "SVC":
          locale = "es-SV"; // El Salvador
          break;
        case "SYP":
          locale = "ar-SY"; // Siria
          break;
        case "SZL":
          locale = "ss-SZ"; // Esuatini
          break;
        case "THB":
          locale = "th-TH"; // Tailandia
          break;
        case "TJS":
          locale = "tg-TJ"; // Tayikistán
          break;
        case "TMT":
          locale = "tk-TM"; // Turkmenistán
          break;
        case "TND":
          locale = "ar-TN"; // Túnez
          break;
        case "TOP":
          locale = "to-TO"; // Tonga
          break;
        case "TRY":
          locale = "tr-TR"; // Turquía
          break;
        case "TTD":
          locale = "en-TT"; // Trinidad y Tobago
          break;
        case "TWD":
          locale = "zh-TW"; // Taiwán
          break;
        case "TZS":
          locale = "sw-TZ"; // Tanzania
          break;
        case "UAH":
          locale = "uk-UA"; // Ucrania
          break;
        case "UGX":
          locale = "lg-UG"; // Uganda
          break;
        case "USD":
          locale = "en-US"; // Estados Unidos
          break;
        case "UYU":
          locale = "es-UY"; // Uruguay
          break;
        case "UZS":
          locale = "uz-UZ"; // Uzbekistán
          break;
        case "VEF":
          locale = "es-VE"; // Venezuela
          break;
        case "VES":
          locale = "es-VE"; // Venezuela (anteriormente)
          break;
        case "VND":
          locale = "vi-VN"; // Vietnam
          break;
        case "VUV":
          locale = "bi-VU"; // Vanuatu
          break;
        case "WST":
          locale = "sm-WS"; // Samoa
          break;
        case "XAF":
          locale = "fr-CM"; // África Central
          break;
        case "CFA":
          locale = "fr-CM"; // África Central (anteriormente)
          break;
        case "BEA":
          locale = "fr-CM"; // África Central (anteriormente)
          break;
        case "XAG":
          locale = ""; // Plata (onza troy)
          break;
        case "XAU":
          locale = ""; // Oro (onza troy)
          break;
        case "XCD":
          locale = "en-AG"; // Organización de Estados del Caribe Oriental
          break;
        case "XDR":
          locale = ""; // Derechos Especiales de Giro (FMI)
          break;
        case "XOF":
          locale = "fr-BJ"; // Unión Económica y Monetaria del África Occidental
          break;
        case "CFA":
          locale = "fr-BJ"; // Unión Económica y Monetaria del África Occidental (anteriormente)
          break;
        case "BCE":
          locale = "fr-BJ"; // Unión Económica y Monetaria del África Occidental (anteriormente)
          break;
        case "XPF":
          locale = "fr-PF"; // CFP franco
          break;
        case "CFP":
          locale = "fr-PF"; // CFP franco (anteriormente)
          break;
        case "YER":
          locale = "ar-YE"; // Yemen
          break;
        case "ZAR":
          locale = "zu-ZA"; // Sudáfrica
          break;
        case "ZMK":
          locale = "en-ZM"; // Zambía
          break;
        case "ZMW":
          locale = "en-ZM"; // Zambía (anteriormente)
          break;
        case "ZWL":
          locale = "en-ZW"; // Zimbabue
          break;
        default:
          locale = "en-US"; // Por defecto, usar localización en inglés de Estados Unidos


     
      }
      return(locale);

}