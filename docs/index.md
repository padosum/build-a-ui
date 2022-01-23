<style lang="scss" scoped>
@import "../src/components/index/layout.scss"
</style>

<script setup>
import Calendar from "../src/components/index/Calendar.vue"
import Logo from "../src/images/logo.svg"
</script>
<link href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet">

<div class="container">
  <div class="intro">
    <img
      :src="Logo"
      class="logo"
      alt="Build a UI"
      title="Build a UI"
    />

# Build a UI
I have to
- <span class="complete">build a UI...</span>
- build a UI...
- build a UI...
- build a UI...
- build a UI...
- build a UI...

</div>
<Calendar>
</Calendar>
</div>