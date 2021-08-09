import utils, { defaultOptions } from './utils';
import VueTelInput from './components/vue-tel-input.vue';

export function install(Vue, customOptions = {}) {
  if (install.installed) return;
  install.installed = true;

  const {
    dropdownOptions: customDropdownOptions,
    inputOptions: customInputOptions,
    ...otherCustomOptions
  } = customOptions;
  const {
    dropdownOptions: defaultDropdownOptions,
    inputOptions: defaultInputOptions,
    ...otherDefaultOptions
  } = defaultOptions;

  utils.options = {
    inputOptions: {
      ...defaultInputOptions,
      ...customInputOptions,
    },
    dropdownOptions: {
      ...defaultDropdownOptions,
      ...customDropdownOptions,
    },
    ...otherDefaultOptions,
    ...otherCustomOptions,
  };

  Vue.component('vue-tel-input', VueTelInput);
}

export { VueTelInput };

const plugin = {
  install,
};

export default plugin;
