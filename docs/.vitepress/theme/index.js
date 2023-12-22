// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import YouTube from "../../components/YouTube.vue";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('YouTube',  YouTube)
  }
}