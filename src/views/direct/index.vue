<template>
  <div class="explore">
    <CustomText tag="h1" size="xs"> Merhaba Direct </CustomText>
    <IconHome />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from "../../components/CustomText.vue";
import IconHome from "../../icons/home.svg";
export default {
  name: "Direct",
  components: {
    CustomText,
    IconHome,
  },
};
</script>
