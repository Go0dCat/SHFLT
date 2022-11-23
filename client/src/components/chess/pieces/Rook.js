import Piece from './ChessPiece'
import Component from 'vue-class-component'

@Component
export default class Rook extends Piece {
    data() {
        return {
          // `hello` will be reactive as it is declared via `data` hook.
          Name: "Rook",
          img: "R",
        }
      }
}