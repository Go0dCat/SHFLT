<template>
    <div class="wrapper">
      <h1>Schack</h1>
      <div>
        <ChessBoard />
      </div>
    </div>
    
</template>

<script>
// @ is an alias to /src
import ChessBoard from "@/components/ChessBoard.vue";

export default {
  name: "ChessView",
  components: {
    ChessBoard
  }
};
</script>
