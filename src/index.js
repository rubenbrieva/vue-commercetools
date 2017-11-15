import * as filters from './filters';

const VueCommercetools = {
  install(Vue) {
    // Install filters
    Object.keys(filters).forEach(key => {
      if (Vue.filter(key)) {
        console.warn(`[filter duplication]: A filter named ${key} has already been installed.`);
      } else {
        Vue.filter(key, filters[key]);
      }
    });
  },
};

export default VueCommercetools;

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCommercetools);
}
