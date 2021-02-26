<template>
  <div class="is-flex is-align-self-center">
    <!-- Previous Page Button -->
    <button
      class="button is-small"
      :class="page === 1 ? 'is-static' : 'has-text-link'"
      :style="{borderRadius: '50%'}"
      @click="$store.dispatch('prevPage')"
    >
      <span class="icon">
        <i class="fas fa-angle-left" aria-hidden="true" />
      </span>
    </button>
    <!-- Pager Number -->
    <span class="has-text-white mx-2">
      {{ `${ pager.page } of ${pager.total_pages}` }}
    </span>
    <!-- Next Page Button -->
    <button
      class="button is-small"
      :class="page === pager.total_pages ? 'is-static' : 'has-text-link'"
      :style="{borderRadius: '50%'}"
      @click="$store.dispatch('nextPage')"
    >
      <span class="icon">
        <i class="fas fa-angle-right" aria-hidden="true" />
      </span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GlobalPager',
  props: {
    pager: {
      type: Object,
      required: true,
      default: null
    }
  },

  computed: {
    ...mapGetters({
      page: 'getActivePage'
    })
  }
}
</script>
