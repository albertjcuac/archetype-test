import { CssInjector } from "@empathyco/x-archetype-utils";
import { XInstaller } from '@empathyco/x-components';
import Vue from 'vue';
import { installXOptions } from './x-components/plugin.options';

declare global {
  interface Window {
    __enableVueDevtools__?: boolean;
  }
}

Vue.config.productionTip = false;
Vue.config.devtools = window.__enableVueDevtools__ ?? false;

new CssInjector(true);
new XInstaller(installXOptions).init();
