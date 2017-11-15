import labelFilter from '../../src/filters/label';

describe('Filters > Label', () => {
  const sampleLocalizedString = {
    de: 'wert',
    en: 'value',
    es: 'valor',
  };

  it('should return default language value [en]', () => {
    expect(labelFilter(sampleLocalizedString)).toBe('value');
  });

  it('should return the value for the indicated language', () => {
    const lang = 'es';
    expect(labelFilter(sampleLocalizedString, lang)).toBe('valor');
  });

  it('should return Sample object when the indicated language not exist', () => {
    const lang = 'fr';
    expect(labelFilter(sampleLocalizedString, lang)).toBe(sampleLocalizedString);
  });

  it('should return Sample object when object is not a LocalizedString', () => {
    const sampleString = 'fr';
    expect(labelFilter(sampleString)).toBe(sampleString);
  });
});
