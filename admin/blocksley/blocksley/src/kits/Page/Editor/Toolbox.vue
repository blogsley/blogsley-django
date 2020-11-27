<template>
  <div>
  <q-btn-group class="menu-btn-group">
    <q-btn
      @click="vu.floatLeft"
    >
      <q-icon name="mdi-format-align-left" />
    </q-btn>
    <q-btn
      @click="vu.floatRight"
    >
      <q-icon name="mdi-format-align-right" />
    </q-btn>
  </q-btn-group>
  </div>
</template>

<script>
import UiMixin from '../../../mixins/ui'

export default {
  name: 'BasicToolbox',
  mixins: [UiMixin],
  props: ['vu', 'editor'],
  components: {
  },
  methods: {
  }
}
</script>
