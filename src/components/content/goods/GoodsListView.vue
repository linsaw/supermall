<template>
  <div class="goods">
    <goods-list-item-view v-for="good in goods" :goods-item="good">
    </goods-list-item-view>
  </div>
</template>

<script>
  import GoodsListItemView from "@/components/content/goods/GoodsListItemView";

  export default {
    name: "GoodsListView",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItemView
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;

    padding: 2px;
  }
</style>
