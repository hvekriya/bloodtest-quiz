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
  };
} else if (params.get("type") == "exercise-goals") {
  surveyJSON = {
    surveyId: "9682a9c5-afba-42b0-b835-0edfcec0c8da",
  };
} else if (params.get("type") == "trouble-sleeping") {
  surveyJSON = {
    surveyId: "e09159cd-a0c7-41b7-a29b-67746b463bc6",
  };
} else if (params.get("type") == "sexual-health") {
  surveyJSON = {
    surveyId: "54422021-4899-4ec2-b479-4e7df689fa3a",
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