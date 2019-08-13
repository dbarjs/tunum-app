<template>
  <div id="app">
    <h1>Tunum App</h1>
    <RecentDocuments />
  </div>
</template>

<script>
import RecentDocuments from "./RecentDocuments.vue";
import UserProfile from "./UserProfile.vue";
export default {
  components: {
    RecentDocuments
    // UserProfile
  }
};
</script>