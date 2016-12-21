<template>
    <section>
        <div>
            <h1>Places Component</h1>
        </div>
        <places-list></places-list>
        <places-details></places-details>
        <places-map></places-map>
        <places-preview></places-preview>
    </section>
</template>

<script>
import PlacesList from './places-components/places-list'
import PlacesDetails from './places-components/places-details'
import PlacesPreview from './places-components/places-preview'
import PlacesMap from './places-components/places-map'


    export default  {
  data() {
    return {
      
    }
  },
  components:{
      'places-list': PlacesList,
      'places-details': PlacesDetails,
      'places-preview': PlacesPreview,
      'places-map': PlacesMap
  }
}
</script>

<style>
    h1 {
        color: orange;
    }
</style>