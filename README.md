# Tunum App

## Vue + Vue Templates

### Basic Vue Instance

index.js
```javascript
import Vue from "vue";
import App from "./App.vue";

const appElement = document.createElement("div");
appElement.id = "app";
document.body.appendChild(appElement);

new Vue({
  el: appElement,
  render: h => h(App),
});

```

### Basic Vue App Template
```javascript
<template>
  <div id="app">
    <h1>Tunum App</h1>
    <RecentDocuments />
  </div>
</template>

<script>
import RecentDocuments from "./RecentDocuments.vue";
export default {
  components: {
    RecentDocuments
  }
};
</script>

<style>
body {
  background: red;
  color: white;
}
</style>
```

### Basic Vue Component 

```javascript
<template>
  <div>
    <h1>Documentos Recentes</h1>
    <ul class="DocumentList">
      <li class="Document" v-for="document in documents" :key="document.id">
        <h2 class="DocumentTitle">{{document.title}}</h2>
        <UserProfile v-bind:id="document.ref" />
      </li>
    </ul>
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  data() {
    return {
      documents: [
        {
          ref: 123,
          title: "Documento 1"
        },
        {
          ref: 124,
          title: "Documento 2"
        }
      ]
    };
  },
};
</script>

<style></style>
```

# VueFire

[Vuefire Referene]([https://link](https://vuefire.vuejs.org/api/vuefire.html#bind))