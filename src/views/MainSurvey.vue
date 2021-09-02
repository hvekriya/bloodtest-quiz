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

var surveyJSON = null;
const params = new URLSearchParams(window.location.search);

if (params.get("type") == "general-health") {
  surveyJSON = {
    surveyId: "c724a789-0baf-4f45-8894-83301426ce83",
    surveyPostId: "c18b3465-90c4-4098-9633-37569399c98c",
  };
} else if (params.get("type") == "exercise-goals") {
  surveyJSON = {
    surveyId: "9682a9c5-afba-42b0-b835-0edfcec0c8da",
    surveyPostId: "b162969a-a885-4bfc-b55b-ee51a2e60568",
  };
} else if (params.get("type") == "trouble-sleeping") {
  surveyJSON = {
    surveyId: "e09159cd-a0c7-41b7-a29b-67746b463bc6",
    surveyPostId: "c149f43d-433c-4372-892e-f0b1baf47f86",
  };
} else if (params.get("type") == "sexual-health") {
  surveyJSON = {
    surveyId: "54422021-4899-4ec2-b479-4e7df689fa3a",
    surveyPostId: "cd5968d2-81d0-4611-98d4-7b132552f6b6",
  };
} else {
  console.log("No Survey found");
}

// Server
const survey = new Survey.Model(surveyJSON);
survey.css = myCss;
survey.onValueChanged.add(surveyValueChanged);
survey.onAfterRenderQuestion.add(function (survey, options) {
  $(".rating").click(function () {
    $(".rating").removeClass("active");
    $(this).addClass("active");
  });
});

export default {
  name: "MainSurvey",
  data() {
    return {
      survey: survey,
    };
  },
};
</script>