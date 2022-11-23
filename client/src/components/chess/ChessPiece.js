import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ChessPiece extends Vue {
    data() {
        return {
          // `hello` will be reactive as it is declared via `data` hook.
          Position: [0,0],
          AllowedMoves: undefined,
        }
      }
}