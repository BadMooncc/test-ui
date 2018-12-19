import Vue from 'vue';
import Store from './store';

const bus = new Store(Vue, {
  height: '1',
  weight: 18,
  choice: []
});
export default bus;

