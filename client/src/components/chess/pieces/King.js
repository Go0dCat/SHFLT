import Piece from './ChessPiece'
import Component from 'vue-class-component'

@Component
export default class King extends Piece {
    data() {
        return {
          // `hello` will be reactive as it is declared via `data` hook.
          Name: "King",
          img: "K",
        }
      }
}