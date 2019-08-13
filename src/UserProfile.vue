<template>
  <div>
    <p>
      <strong>Autor:</strong>
      <span>{{user.name}}</span>
      <span>{{user.age}}</span>
    </p>
    <button ref="fooButton" class="mdc-button mdc-button--raised">Foo Button</button>
  </div>
</template>

<script>
import { db } from "./db";
const users = db.collection("users");
const documents = db.collection("documents");

import { MDCRipple } from "@material/ripple";

export default {
  props: ["id"],
  data() {
    return {
      user: {
        name: "",
        age: 0
      },
      documents: []
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$bind("user", users.doc(this.id)).then(user => {
          console.log(user);
        });
        this.$bind("documents", documents.where("ref", "==", this.id)).then(
          documents => {
            console.log("hahahah");
            console.log(documents);
            console.log(documents[1].title);
          }
        );
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      new MDCRipple(this.$refs.fooButton);
    });
  }
};
</script>