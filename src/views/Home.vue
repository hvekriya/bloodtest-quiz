<template>
  <div class="container">
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import $ from "jquery";
import * as Survey from "survey-vue";
Survey.StylesManager.applyTheme("bootstrap");

var myCss = {
  matrix: {
    root: "table table-striped",
  },
  html: "sv_html",
  image: {
    image: "img-fluid",
    root: "sv_q_image",
  },
  rating: {
    item: "btn btn-secondary rating",
  },
  // navigationButton: "btn"
};

var surveyData = "";

const surveyValueChanged = function (sender, options) {
  console.log(sender.data);
  surveyData = sender.data;
};

const surveyJSON = {
  surveyId: "c724a789-0baf-4f45-8894-83301426ce83",
  surveyPostId: "c18b3465-90c4-4098-9633-37569399c98c",
}; // Server
const survey = new Survey.Model(surveyJSON);
survey.css = myCss;
survey.onValueChanged.add(surveyValueChanged);
survey.onAfterRenderQuestion.add(function (survey, options) {
  $(".rating").click(function () {
    console.log("hi");
    $(".rating").removeClass("active");
    $(this).addClass("active");
  });
});

export default {
  data() {
    return {
      survey: survey,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/main.scss";
</style>