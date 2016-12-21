<template>
    <section>
        <div>
  <h1>Events Component</h1>
  <events-details></events-details>
  <events-edit></events-edit>
  <events-filter></events-filter>
  <events-group></events-group>
  <events-list></events-list>
  <events-preview></events-preview>
</div>
    </section>
</template>

<script>
import EventsDetails from './events-components/events-details.vue'
import EventsEdit from './events-components/events-edit.vue'
import EventsFilter from './events-components/events-filter.vue'
import EventsGroup from './events-components/events-group.vue'
import EventsList from './events-components/events-list.vue'
import EventsPreview from './events-components/events-preview.vue'

    export default  {
  data() {
    return {
      
    }
  },
  components:{
        'events-details' : EventsDetails,
        'events-edit' : EventsEdit,
        'events-filter' : EventsFilter,
        'events-group' : EventsGroup,
        'events-list' : EventsList,
        'events-preview' : EventsPreview,
    }
}
</script>

<style>
h1{
    color:orange;
}

</style>