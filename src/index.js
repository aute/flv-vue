import flvPlayer from './flv-player';
// eslint-disable-next-line
const install = function (Vue) {
  Vue.component(flvPlayer.name, flvPlayer);
};

export default {
  install,
};
