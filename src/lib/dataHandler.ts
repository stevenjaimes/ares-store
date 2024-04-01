
export async function obtenerDatosAPI() {
  try {
    if (typeof window !== 'undefined') {
      console.log("quiero saber si entro aca final para saber si consumio la api")
      const url = 'https://api.apilayer.com/fixer/latest?base=COP&symbols=EUR,USD,AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BRL,BSD,BTC,BTN,BWP,BYN,BYR,BZD,CAD,CDF,CHF,CLF,CLP,CNY,COP,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EGP,ERN,ETB,EUR,FJD,FKP,GBP,GEL,GGP,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,IMP,INR,IQD,IRR,ISK,JEP,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LTL,LVL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRU,MUR,MVR,MWK,MXN,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PKR,PLN,PYG,QAR,RON,RSD,RUB,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SLE,SLL,SOS,SRD,STD,SVC,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VES,VND,VUV,WST,XAF,XCD,XDR,XOF,XPF,YER,ZAR,ZMK,ZMW,ZWL';
      const apiKey = 'xt703H6sb9QmAjbhPgzL6jsagSoa5xiL';
      const options = {
        method: 'GET',
        headers: {
          'apikey': apiKey
        }
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API.');
      }
      const data = await response.json();
      localStorage.setItem('datos', JSON.stringify(data));
      console.log('Datos almacenados localmente en localStorage');
    } else {
      console.log('Entorno de servidor, no se puede acceder a localStorage');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}