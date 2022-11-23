
import Vue from 'vue'
import Component from 'vue-class-component'

import King from './chess/King.js'

@Component( {
  components: {},
  props: {}
})
export default class ChessSet extends Vue {
    data() {
        return {
          // `hello` will be reactive as it is declared via `data` hook.
          color: undefined,
          pieces: {
            King: King,

          }
        }
      }
}