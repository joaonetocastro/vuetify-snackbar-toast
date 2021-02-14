import Toast from './Toast.vue';

const defaultValues = {
  timeout: 7000,
  open: true,
  color: '',
  text: '',

};
const toast = (vue) => {
  vue.component('toast', Toast);
  function show(snackbarData) {
    toast.updateFunction({ ...defaultValues, ...snackbarData });
  }
  function init(updateFunction) {
    toast.updateFunction = updateFunction;
  }

  function info(text, snackbarData) {
    show({ ...snackbarData, text, color: 'info' });
  }
  function danger(text, snackbarData) {
    show({ ...snackbarData, text, color: 'red' });
  }
  function warn(text, snackbarData) {
    show({ ...snackbarData, text, color: 'warning' });
  }
  function success(text, snackbarData) {
    show({ ...snackbarData, text, color: 'success' });
  }
  // eslint-disable-next-line
  vue.prototype.$toast = {init, info, warn, danger, success};
};

export default toast;
