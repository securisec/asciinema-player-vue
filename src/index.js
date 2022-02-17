import AsciinemaPlayer from "./components/asciinema-player.vue";

function install(Vue) {
  Vue.component(AsciinemaPlayer.name, AsciinemaPlayer);
}
if (window && window.Vue) install(window.Vue);
export { AsciinemaPlayer };
export default {
  AsciinemaPlayer,
  install
};
