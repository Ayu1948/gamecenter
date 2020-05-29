<template>
  <div class="home">
    <ul class="banner-ul">
      <li
        v-for="(item, index) in bannerImgList"
        :key="item"
        :class="index === bannerIndex ? 'active' : ''"
        @mouseenter="handleHover(index)"
      >
        <a href="/">
          <img :src="item.first" alt />
          <img :src="item.second" alt />
        </a>
      </li>
    </ul>
    <div class="wrap">
      <div class="left-box">
        <div class="select-box"></div>
        <div class="hotgame-box"></div>
      </div>
      <div class="right-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerIndex: 0,
      bannerImgList: [
        {
          aHref: "",
          first:
            "http://image.37wan.cn/upload/image/20200423/1587632595413654.jpg",
          second:
            "http://image.37wan.cn/upload/image/20200423/1587632593428593.jpg"
        },
        {
          aHref: "",
          first:
            "http://image.37wan.cn/upload/image/20200407/1586266015590916.jpg",
          second:
            "http://image.37wan.cn/upload/image/20200407/1586266191216482.jpg"
        },
        {
          aHref: "",
          first:
            "http://image.37wan.cn/upload/image/20200520/1589949350877723.jpg",
          second:
            "http://image.37wan.cn/upload/image/20200520/1589949290735403.jpg"
        },
        {
          aHref: "",
          first:
            "http://image.37wan.cn/upload/image/20200311/1583915616519258.jpg",
          second:
            "http://image.37wan.cn/upload/image/20200311/1583915671601925.png"
        },
        {
          aHref: "",
          first:
            "http://image.37wan.cn/upload/image/20200313/1584066255674856.png",
          second:
            "http://image.37wan.cn/upload/image/20200313/1584066240567225.jpg"
        }
      ]
    };
  },
  methods: {
    handleHover(index) {
      if (this.bannerIndex !== index) {
        this.bannerIndex = index;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 1260px;
  margin: 0 auto;
}
.banner-ul {
  width: 100%;
  height: 320px;
  overflow: hidden;
  margin: 0 auto 20px;
  li {
    width: 108px;
    height: 320px;
    margin-right: 2px;
    display: inline-block;
    transition: width 0.3s ease;
    overflow: hidden;
    &:last-child {
      margin: 0;
    }
    &.active {
      width: 820px;
      img:first-child {
        display: inline-block;
      }
      img:last-child {
        display: none;
      }
    }
    img:first-child {
      width: 820px;
      display: none;
    }
    img:last-child {
      width: 108px;
      display: inline-block;
    }
  }
}
</style>