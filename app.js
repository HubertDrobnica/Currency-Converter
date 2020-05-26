// variables
const addCurrencyBtn = document.querySelector('button');
const addCurrencyList = document.querySelector('.add-currency-list');
const currencyList = document.querySelector('.currencies');

const currencies = [
  {
    name: 'US Dollar',
    entity: 'USD',
    symbol: "&#36;", 
    flagURL: 'https://www.geonames.org/flags/m/us.png',
    rate: 1,
  }, 
  {
    name: 'Euro',
    entity: 'EUR',
    symbol: "&#8364;",
    flagURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
    rate: 0.93,
  },
  {
    name: 'Japanese Yen',
    entity: 'JPY',
    symbol: "&#165;",
    flagURL: 'https://www.geonames.org/flags/m/jp.png',
    rate: 108.46 
  },
  {
    name: 'British Pound',
    entity: 'GBP',
    symbol: "&#163;",
    flagURL: 'https://www.geonames.org/flags/m/gb.png',
    rate: 0.80
  },
  {
    name: "Australian Dollar",
    entity: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif",
    rate: 1.58 
  },
  {
    name: "Canadian Dollar",
    entity: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif",
    rate: 1.40 
  },
  {
    name: "Swiss Franc",
    entity: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif",
    rate: 0.97 
  },
  {
    name: "Chinese Yuan Renminbi",
    entity: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif",
    rate: 7.04
  },
  {
    name: "Swedish Korona",
    entity: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif",
    rate: 9.95 
  },
  {
    name: "New Zealand Dollar",
    entity: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif",
    rate: 1.65 
  },
  {
    name: "Mexican Peso",
    entity: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif",
    rate: 23.56
  },
  {
    name: "Singapore Dollar",
    entity: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif",
    rate: 1.42
  },
  {
    name: "Hong Kong Dollar",
    entity: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif",
    rate: 7.75 
  },
  {
    name: "Norwegian Krone",
    entity: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif",
    rate: 10.24
  },
  {
    name: "South Korean Won",
    entity: "KRW",
    symbol: "\u20A9",
    flagURL: "http://www.geonames.org/flags/l/kr.gif",
    rate: 1210.49
  },
  {
    name: "Turkish Lira",
    entity: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif",
    rate: 6.68 
  },
  {
    name: "Russian Ruble",
    entity: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif",
    rate: 74.29
    
  },
  {
    name: "Indian Rupee",
    entity: "INR",
    symbol: "\u20B9",
    flagURL: "http://www.geonames.org/flags/l/in.gif",
    rate: 75.91
  },
  {
    name: "Brazilian Real",
    entity: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif",
    rate: 5.11 
  },
  {
    name: "South African Rand",
    entity: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif",
    rate: 18.04 
  },
  {
    name: "Philippine Peso",
    entity: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif",
    rate: 50.70 
  },
  {
    name: "Czech Korona",
    entity: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif",
    rate: 24.73

  },
  {
    name: "Indonesian Rupee",
    entity: "IDR",
    symbol: "\u0052\u0070",
    flagURL: "http://www.geonames.org/flags/l/id.gif",
    rate: 15982.65
  },
  {
    name: "Malaysian Ringgit",
    entity: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif",
    rate: 4.33
  },
  {
    name: "Hungarian Forint",
    entity: "HUF",
    symbol: "\u0046\u0074",
    flagURL: "http://www.geonames.org/flags/l/hu.gif",
    rate: 323.40 
  },
  {
    name: "Icelandic Korona",
    entity: "ISK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/is.gif",
    rate: 142.67
  },
  {
    name: "Croatian Kuna",
    entity: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif",
    rate: 6.97
  },
  {
    name: "Bulgarian Lev",
    entity: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif",
    rate: 1.79
  },
  {
    name: "Romanian Leu",
    entity: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif",
    rate: 4.42
  },
  {
    name: "Danish Korone",
    entity: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif",
    rate: 6.83

  },
  {
    name: "Thai Baht",
    entity: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif",
    rate: 32.67
  },
  {
    name: "Polish Zloty",
    entity: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif",
    rate: 4.16
  },
  {
    name: "Israeli Shekel",
    entity: "ILS",
    symbol: "\u20AA",
    flagURL: "http://www.geonames.org/flags/l/il.gif",
    rate: 3.57 
  }
]

const baseCurrency = ['USD', 'EUR', 'GBP', 'AUD'];
let firstElementCurrencies;
let baseCurrencyRate;


// Click Events 
addCurrencyBtn.addEventListener('click', function(e){
  addCurrencyList.classList.toggle('open');
  addCurrencyBtn.classList.toggle('change-color-button');
})

addCurrencyList.addEventListener('click', addCurrencyListClick);
function addCurrencyListClick(e) {
  const clickedListItem = e.target.closest('li');
  if(!clickedListItem.classList.contains('disabled')) {
    const newCurrency = currencies.find(c => c.entity===clickedListItem.getAttribute('data-currency'));
    if(newCurrency) InsertDataIntoCurrency(newCurrency);
  }
}

currencyList.addEventListener('click', removeCurrencyList);
function removeCurrencyList(e){
  if(event.target.classList.contains('close')){
    const parentNode = event.target.parentNode
    parentNode.remove();
    addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove('disabled');
    if(parentNode.classList.contains('base-currency')) {
      const newfirstElementCount = currencyList.querySelector('.currency');
      if(newfirstElementCount) {
        calculateNewBaseCurrency(newfirstElementCount)
      }
    }
  }
}

function calculateNewBaseCurrency(newfirstElementCount) {
  firstElementCount = newfirstElementCount.id;
  const newBaseCurrencyRate = currencies.find(currency => currency.entity===firstElementCount).rate;

}


// Insert value into currency tag html
function populateAddCurrencyList() {
  for(let i=0; i < currencies.length; i++) {
      addCurrencyList.insertAdjacentHTML('beforeend',
      `<li class="add-currency-list-item" data-currency="${currencies[i].entity}"><img src=${currencies[i].flagURL} alt="" class="flag"><span>${currencies[i].name}</span></li>`)
  }
}

function basePopulateCurrency() {
  for(let i=0; i<baseCurrency.length; i++) {
    const currency = currencies.find(c => c.entity===baseCurrency[i])
    if(currency) InsertDataIntoCurrency(currency)
  }
}

function InsertDataIntoCurrency(currency) {
  if(currencyList.childElementCount===0) {
    firstElementCount = currency.entity;
  }
  addCurrencyList.querySelector(`[data-currency=${currency.entity}]`).classList.add('disabled');
  const baseCurrencyRate = currencies.find(c => c.entity===firstElementCount).rate;
  const exchangeRate = currency.entity===firstElementCount ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);

  currencyList.insertAdjacentHTML('beforeend', 
  `<li class="currency ${currency.entity===firstElementCount ? "base-currency" : ""}" id=${currency.entity}>
    <div class="info">
      <img class="flag" src=${currency.flagURL} alt="">
      <span>${currency.symbol}</span>
      <div>
        <input placeholder="0.0000">
        <p class="currency-name">${currency.name}</p>
        <p class="base-currency-rate">${baseCurrencyRate}${firstElementCount} - ${exchangeRate}${currency.entity}</p>
      </div>
    </div>
    <p class="close">X</p>
  </li>`)
}



populateAddCurrencyList();
basePopulateCurrency();

// addCurrencyList.querySelector(`[data-currency=${parentNode}]`).classList.remove('disabled')