# vuetify-snackbar-toast

> less redundant code, less time expensive, more sweet ;)

Vuetify-snackbar-toast purpose is to make the launching of snackbars more sweet and easier ^

## Install

With **npm** installed, run

```
$ npm install vuetify-snackbar-toast
```

With **yarn** installed, run

```
$ yarn add vuetify-snackbar-toast
```

if you do not have vuetify installed, you should install it according to [vuetify tutorial][1]

On your **main.js** file you should import the vuetify-snackbar-toast plugin and use it with **Vue.use**
```js
import Vue from 'vue';
import toast from 'vuetify-snackbar-toast';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(toast);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

```
On your **app.vue** file you should add the v-toast component
```vue
<template>
	<v-app>
		<v-main>
      		<v-toast />
    	</v-main>
	</v-app>
</template>
<script>
import { VToast } from 'vuetify-snackbar-toast';

export default {
  name: 'App',
  components: { VToast },
};
</script>

```
## Usage
to launch a snackbar you should just call a function in any vue component
```js
this.$toast.success('Hello world!');
```

## Methods
### shortcut Functions
There are 4 shortcuts included into the $toast property, they are: **success**, **info**, **warn**, **danger**.
the way to call them is 
```js 
this.$toast.success(text, config);
this.$toast.warn(text, config);
this.$toast.info(text, config);
this.$toast.danger(text, config);
```
### show(config)
The show function is similar to the others, but you send just the config param, if the text a property of the object
```js 
this.$toast.show(config);
```
### Config[optional on shortcut functions]
the configuration param is optional an object with some options

**if you're using the shortcut functions you shouldn't send the text property here**
```js
{
  timeout: 7000, // time in microsseconds
  open: true, 
  color: "primary", // based on vuetify colors,
  text: "Text you want to show",
}
```
## Acknowledgments

vuetify-snackbar-toast was inspired by all the times i had to repeat the same code, putting snackbars, variables to control it, and so on.
With this package you can finally focus just on when to show the snackbars.

## Contribute
We can work together and make this package more useful to our community! 
To suggest new features you should open an issue and we will discuss about how it could be implemented and then include it in the project
## See Also

- [`VueJS`](https://vuejs.org/)
- [`Vuetify`](https://vuetifyjs.com/en)

## License

MIT


[1]: https://vuetifyjs.com/en/getting-started/installation/#vue-ui-install "vuetify tutorial"