<template>
  <div>
    <h1>Documentos Recentes</h1>
    <ul class="DocumentList">
      <li class="Document" v-for="document in documents" :key="document.id">
        <h2 class="DocumentTitle">{{document.title}}</h2>
        <UserProfile v-bind:id="document.ref" />
      </li>
    </ul>
    <button ref="theButton" class="mdc-button mdc-button--raised">Hello</button>
    <div ref="theTextField" class="mdc-text-field">
      <input class="mdc-text-field__input" id="text-field-hero-input" />
      <div class="mdc-line-ripple"></div>
      <label ref="theTextFieldLabel" for="text-field-hero-input" class="mdc-floating-label">Name</label>
    </div>
    <!-- <m-button class="mdc-button--raised">Hello</m-button> -->
  </div>
</template>

<script>
import { db } from "./db";
import UserProfile from "./UserProfile.vue";

import { Ripple, MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";
import { MDCFloatingLabel } from "@material/floating-label";

export default {
  components: {
    UserProfile
  },
  data() {
    return {
      documents: []
    };
  },
  firestore: {
    documents: db.collection("documents")
  },
  mounted: function() {
    new MDCRipple(this.$refs.theButton);
    new MDCTextField(this.$refs.theTextField);
  }
};
</script>

<style>
.DocumentList {
  padding: 0;
}

.Document {
  display: block;
  margin-bottom: 24px;
  width: 100%;
  background-color: google-color(grey, 200);
}

.DocumentTitle {
  font-weight: 900;
}
</style>