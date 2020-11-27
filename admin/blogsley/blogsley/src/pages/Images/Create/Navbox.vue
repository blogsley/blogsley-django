<template>
<div class="fit">
  <navbox-shell>

    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$router.go(-1)"
      >
        <q-icon name="mdi-chevron-left" />
      </q-btn>

      <q-toolbar-title shrink>
        {{view.title}}
      </q-toolbar-title>

    </q-toolbar>
  </navbox-shell>
</div>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import NavboxShell from 'components/NavboxShell'

export default {
  name: 'DefaultNavbox',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
    NavboxShell
  },
  methods: {
  }
}
</script>
