/**
 * Get string form LocalizedString
 */
export default function (value, lang = 'en') {
  return typeof value === 'object' && typeof value[lang] === 'string' ? value[lang] : value;
}
