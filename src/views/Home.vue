<template>
  <div class="container">
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";
import * as widgets from "surveyjs-widgets";
import { init as customWidget } from "../components/customwidget";
import Quiz from "../quiz/quiz";
// widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);
SurveyVue.Serializer.addProperty("question", "tag:number");
var myCss = {
  matrix: {
    root: "table table-striped",
  },
  html: "sv_html",
  image: {
    image: "img-fluid",
    root: "sv_q_image",
  },
  // navigationButton: "btn"
};

export default {
  components: {
    Survey,
  },
  data() {
    var surveyJSON = {
      surveyId: "c724a789-0baf-4f45-8894-83301426ce83",
      surveyPostId: "c18b3465-90c4-4098-9633-37569399c98c",
    }; // Server
    // var surveyJSON = Quiz.General // Local
    var model = new SurveyVue.Model(surveyJSON);
    model.css = myCss;
    return {
      survey: model,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/main.scss";
</style>