const defaultValues = {
  timeout: 7000,
  open: true,
  color: '',
  text: '',
};
class Toast{
  constructor() {
    if(! Toast.instance){
      Toast.instance = this;
    }
    return Toast.instance;
  }
  show(snackbarData) {
    this.updateFunction({ ...defaultValues, ...snackbarData });
  }
  init(updateFunction) {
    this.updateFunction = updateFunction;
  }

  info(text, snackbarData) {
    this.show({ ...snackbarData, text, color: 'info' });
  }
  danger(text, snackbarData) {
    this.show({ ...snackbarData, text, color: 'red' });
  }
  warn(text, snackbarData) {
    this.show({ ...snackbarData, text, color: 'warning' });
  }
  success(text, snackbarData) {
    this.show({ ...snackbarData, text, color: 'success' });
  }
}
const install = (vue) => {
  // eslint-disable-next-line
  vue.prototype.$toast = new Toast();
}
export const $toast = new Toast();
export default install;