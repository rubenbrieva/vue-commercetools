import currencyDB from 'typographic-currency-db';

/**
 * Get object Money
 */
function getMoneyObject(value) {
  if (typeof value === 'object') {
    if (typeof value.value === 'object' && typeof value.value.centAmount === 'number') {
      return value.value;
    } else if (typeof value.centAmount === 'number') {
      return value;
    }

    return undefined;
  }

  return undefined;
}

/**
 * Get price string from Price / Money object
 */
export default function (value, currencySymbolPosition = 'prefix') {
  const money = getMoneyObject(value);

  if (typeof money === 'object') {
    const numberValue = money.centAmount / 100;
    const currencyValue = currencyDB[money.currencyCode];

    return currencySymbolPosition === 'prefix'
      ? `${currencyValue}${numberValue}`
      : `${numberValue}${currencyValue}`;
  }

  return value;
}
