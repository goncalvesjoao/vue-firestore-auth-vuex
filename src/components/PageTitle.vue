-<template>
  <v-layout align-center row class="pl-1">
    <div>
      <h1 class="headline pr-3">{{ title }}</h1>
    </div>

    <v-spacer />

    <div v-if="loading !== undefined">
      <v-btn icon class="mr-0">
        <v-progress-circular
          :size="18"
          :width="2"
          class="right"
          v-if="loading"
          :indeterminate="loading"
        />

        <v-icon v-else class="text--secondary" @click="$emit('onRefresh')">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['title', 'loading', 'onRefresh']
}
</script>

<style>

</style>
