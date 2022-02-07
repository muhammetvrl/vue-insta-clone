<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      type: String,
      default: "span",
    },
    size: {
      type: String,
      default: "md", //md:14, sm:12, xs:11, xxs: 10
      validator: function (value) {
        return ["md", "sm", "xs", "xxs"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style>
.md {
  font-size: 12px;
}

.sm {
  font-size: 12px;
}

.xs {
  font-size: 12px;
}

.xxs {
  font-size: 12px;
}
</style>
