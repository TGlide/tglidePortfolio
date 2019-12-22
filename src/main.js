// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faLeaf,
  faLaptopCode,
  faPlus,
  faHeart,
  faEquals,
  faDesktop,
  faMobile,
  faMobileAlt,
  faMagic,
  faCog,
  faCoffee,
  faIceCream
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faCheck,
  faLeaf,
  faLaptopCode,
  faPlus,
  faHeart,
  faEquals,
  faDesktop,
  faMobile,
  faMobileAlt,
  faMagic,
  faCog,
  faCoffee,
  faIceCream
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("faIcon", FontAwesomeIcon);

// Buefy
import Buefy from "buefy";

Vue.use(Buefy, {
  defaultIconComponent: "faIcon",
  defaultIconPack: "fas"
});

// Font Awesome

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
