<script lang="ts" setup>
defineProps({
  terms: {
    type: Array,
    default: [],
  },
  selectedTerm: {
    type: Function,
    default: () => false,
  },
  selected: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div>
    <p>Divididas em:</p>
    <div class="row">
      <div
        v-for="(term, i) in terms"
        :key="i"
        @click="selectedTerm({ term: term.term, amount: term.amount })"
        class="col-6 mb-4"
      >
        <CardTerm
          :term="term.term"
          :amount="term.amount"
          :selected="selected == term.term"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
