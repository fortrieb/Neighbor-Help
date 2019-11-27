<template>
  <div :class="$style.help">
    <form>
      <vue-grid>
        <!-- <vue-breadcrumb :items="breadCrumbItems"></vue-breadcrumb> -->
        <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Hilfe' }]" />

        <vue-grid-row>
          <vue-grid-item fill>
            <vue-headline level="1">Hilfe</vue-headline>
            <br />
            <p>Hier wird ihnen geholfen.</p>
          </vue-grid-item>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-item fill>
            <vue-headline level="2">Wer braucht Hilfe?</vue-headline>
            <br />
          </vue-grid-item>
          <vue-grid-item>
            <vue-input
              name="firstname"
              id="firstname"
              placeholder="Vorname"
              validation="required"
              v-model="form.firstname"
            />
          </vue-grid-item>
          <vue-grid-item>
            <vue-input
              name="lastname"
              id="lastname"
              placeholder="Nachname"
              validation="required"
              v-model="form.lastname"
            />
          </vue-grid-item>
        </vue-grid-row>
        <vue-grid-row> </vue-grid-row>
        <vue-grid-row>
          <vue-grid-item fill>
            <vue-headline level="2">Hilfe rufen</vue-headline>
            <br />
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </form>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <vue-button @click="show = true" color="secondary">Notfall</vue-button>
          <br />
          <vue-modal :show="show" @close="show = false">
            <vue-headline level="3">Herzinfarkt</vue-headline>
            <vue-grid>
              <vue-grid-row>
                <vue-grid-item>
                  <p><ul>
                    <li>Lebt die Person</li>
                    <li>Atmung aktiv</li>
                    <li>Puls vorhanden</li>
                  </ul></p>
                </vue-grid-item>
                <vue-grid-item>
                  <vue-image
                    :style="{ width: '320px' }"
                    src="https://st2.depositphotos.com/4297405/7616/v/950/depositphotos_76165073-stock-illustration-illustration-first-aid-person-measuring.jpg"
                  />
                </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                <vue-grid-item fill>
                  <vue-headline level="3">Notruf</vue-headline>
                </vue-grid-item>
                <vue-grid-item fill>
                  <vue-button as="a" target="tel:112">112 anrufen</vue-button>
                </vue-grid-item>
                <vue-grid-item>
                  <br />
                  <vue-headline level="3">Person lebt</vue-headline>
                  <vue-button color="primary" @click="show = false">Ende</vue-button>
                </vue-grid-item>
              </vue-grid-row>
            </vue-grid>
          </vue-modal>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { registerModule } from '@/app/store';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import VueInput from '@components/VueInput/VueInput.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueCheckbox from '@components/VueCheckbox/VueCheckbox.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import VueModal from '@components/VueModal/VueModal.vue';

import { HelpModule } from '../module';

export default {
  metaInfo: {
    title: 'Help',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueButton,
    VueHeadline,
    VueInput,
    VueSelect,
    VueCheckbox,
    VueImage,
    VueModal,
  },
  data(): any {
    return {
      show: false,
      form: {
        firstname: 'Oma',
        lastname: 'Erna',
        emergency: false,
      },
    };
  },
  methods: {},
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('common.home' /* Home */), href: '/' },
        { label: this.$t('common.Help' /* Help */), href: '/help' },
      ];
    },
  },
  beforeCreate() {
    registerModule('help', HelpModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('help', HelpModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchHelp', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
    return Promise.resolve();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.help {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
