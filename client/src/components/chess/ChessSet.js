import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ChessSet extends Vue {
    data() {
        return {
          // `hello` will be reactive as it is declared via `data` hook.
          hello: undefined
        }
      }
}