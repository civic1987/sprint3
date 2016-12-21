<template>
    <section>
        <nav class="navbar navbar-default">
  <div class="navbar-header">
    <router-link to="/" class="navbar-brand">CodingAcadmey Vue</router-link>
  </div>
  <div>
    <ul class="nav navbar-nav">
      <li>
        <router-link to="/events">Events</router-link>
      </li>
      <li>
        <router-link to="/places">Places</router-link>
      </li>
      <li>
        <router-link to="/emails">Emails</router-link>
      </li>
    </ul>
  </div>
</nav>
    </section>
</template>

<script>
    export default {
  name: 'main-nav'
}
</script>