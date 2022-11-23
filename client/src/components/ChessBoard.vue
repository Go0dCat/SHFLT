<template>
    <div class="chess-grid wrapper">
       <template v-for="(row, key) in chessboard.size" v-bind:key="key">
        
        <template v-for="(col, key) in chessboard.size" v-bind:key="key">
            <div class="chess-cell" :class="[IsDarkSquare(col, row) ? 'background-color-neutral': 'background-color-primary']">{{row}}, {{col}}</div>
        </template>

       </template>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chessboard: {
                    size: 8
                }
            }
        },
        methods: {
            IsDarkSquare(col, row) {
                let res1 = col % 2;
                let res2 = row % 2;
                if(res1 != res2 ) {
                    return false;
                }
                return true;
            }
        }
    }
</script>