<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      link="/help"
      alternative
    >
      <vue-headline level="2">Notfall</vue-headline>
      <br />
      <vue-headline level="3">Hilfe im medizinischen Notfall</vue-headline>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cumque eaque voluptas, autem reprehenderit et
        ad hic unde eveniet a esse iure delectus deleniti ratione fugit cupiditate consequatur quia quam!
      </p>
      <br />
      <p>
        <li>direkte Hilfe im Notfall</li>
        <li>Notruf absetzen</li>
        <li>Anleitung der ersten Hilfe</li>
      </p>
      <p>
        <br />
        <vue-button color="primary" target="/help" as="a">
          <vue-icon-bullhorn />Hilfe
        </vue-button>
      </p>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueIconBullhorn from '@components/Icons/VueIconBullhorn/VueIconBullhorn.vue';

export default {
  metaInfo: {
    title: 'MyLausitz',
    meta: [
      {
        name: 'description',
        content: 'MyLausitz - Hilfe bei medizinischen Notfaellen',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'og:site_name', content: 'vuesion' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'og:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    VueButton,
    VueIconBullhorn,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
