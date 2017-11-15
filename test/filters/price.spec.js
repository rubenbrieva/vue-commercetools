import priceFilter from '../../src/filters/price';

describe('Filters > Price', () => {
  const sampleMoney = {
    centAmount: 6999,
    currencyCode: 'USD',
  };

  const samplePrice = {
    id: 'xxxx-xxxx-xxxx',
    value: sampleMoney,
  };

  it('should return formated price from Money object', () => {
    expect(priceFilter(sampleMoney)).toBe('$69.99');
  });

  it('should return formated price from Price object', () => {
    expect(priceFilter(samplePrice)).toBe('$69.99');
  });

  it('should return formated price with postfix currency position', () => {
    expect(priceFilter(samplePrice, 'postfix')).toBe('69.99$');
  });

  it('should return init object if format is incorrect', () => {
    const wornPriceString = '69.99$';
    const wornPriceObject = { first: 1 };
    const wornPriceObjectValue = { value: { centAmount: '6999' } };
    const wornMoneyObject = { centAmount: '6999' };

    expect(priceFilter(wornPriceString)).toBe(wornPriceString);
    expect(priceFilter(wornPriceObject)).toBe(wornPriceObject);
    expect(priceFilter(wornPriceObjectValue)).toBe(wornPriceObjectValue);
    expect(priceFilter(wornMoneyObject)).toBe(wornMoneyObject);
  });
});
