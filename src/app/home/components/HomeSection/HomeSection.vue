<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <a :href="link" :title="title">
            <vue-image :src="image" :native="false" :class="$style.image" />
          </a>
        </vue-grid-item>
        <vue-grid-item :class="$style.text">
          <slot />
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import VueButton from '@components/VueButton/VueButton.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid, VueButton },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  padding: $space-48 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }
}

.alternative {
  background: $brand-bg-color-variant;
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}
</style>
