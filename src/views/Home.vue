<template>
  <div class="home">
    <div class="form">
      <flow-form
        ref="flowform"
        v-on:complete="onComplete"
        v-on:submit="onSubmit"
        v-bind:questions="questions"
        v-bind:language="language"
        v-bind:standalone="true"
      >
        <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
        <!-- We've overriden the default "complete" slot content -->
        <template v-slot:complete>
          <div class="f-section-wrap">
            <p>
              <span class="fh2">Thank you. 🙏</span>
              <span class="f-section-text">
                Great work, the survey is completed, and our demo is done. You
                can review your answers or press submit.
              </span>
            </p>
            <p class="f-description">
              Note: No data will be saved and/or sent in this demo.
            </p>
          </div>
        </template>

        <!-- We've overriden the default "completeButton" slot content -->
        <template v-slot:completeButton>
          <div class="f-submit" v-if="!submitted">
            <button
              class="o-btn-action"
              ref="button"
              type="submit"
              href="#"
              v-on:click.prevent="onSendData()"
              aria-label="Press to submit"
            >
              <span>{{ language.submitText }}</span>
            </button>
            <a
              class="f-enter-desc"
              href="#"
              v-on:click.prevent="onSendData()"
              v-html="language.formatString(language.pressEnter)"
            >
            </a>
          </div>

          <p class="text-success" v-if="submitted">Submitted succesfully.</p>
        </template>
      </flow-form>
    </div>
  </div>
</template>

<script>
import FlowForm, {
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";
import {
  WidthType,
  BorderStyle,
  Document,
  Paragraph,
  Packer,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";

export default {
  name: "Home",
  components: {
    FlowForm,
    Document,
    Paragraph,
    Packer,
    TextRun,
    saveAs,
    BorderStyle,
    WidthType,
  },
  data() {
    return {
      submitted: false,
      completed: false,
      language: new LanguageModel({}),
      questions: [
        // QuestionModel array
        new QuestionModel({
          id: "application_type",
          tagline: "",
          title: "Who would you like to sponsor?",
          type: QuestionType.MultipleChoice,
          required: true,
          options: [
            new ChoiceOption({
              label: "Family/Relative",
            }),
            new ChoiceOption({
              label: "Friend",
            }),
            new ChoiceOption({
              label: "Priest",
            }),
            new ChoiceOption({
              label: "Student",
            }),
            new ChoiceOption({
              label: "Worker",
            }),
          ],
        }),
        new QuestionModel({
          id: "fullname",
          tagline: "",
          title: "What is their full name?",
          type: QuestionType.Text,
          required: true,
          placeholder: "",
        }),
      ],
    };
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyListener);
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.onKeyListener);
  },
  methods: {
    createDOC(data) {
      /* START OF DOC */

      // Create a new Document an save it in a variable
      let doc = new Document();
      // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
      // This simple example will only contain one section
      doc.addSection({
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun(`This is sponsor letter for ${data.answers[1]} `),
              new TextRun({
                text: `to visit UK to see their ${data.answers[0]}.`,
                bold: false,
              }),
            ],
          }),
        ],
      });

      // To export into a .docx file
      this.saveDocumentToFile(doc, `sponsor_letter.docx`);
      // Used to export the file into a .docx file
    },

    saveDocumentToFile(doc, fileName) {
      const mimeType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      Packer.toBlob(doc).then((blob) => {
        const docblob = blob.slice(0, blob.size, mimeType);
        saveAs(docblob, fileName);
      });
    },

    onKeyListener($event) {
      // We've overriden the default "complete" slot so
      // we need to implement the "keyup" listener manually.
      if ($event.key === "Enter" && this.completed && !this.submitted) {
        this.onSendData();
      }
    },
    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed;
    },
    /* eslint-disable-next-line no-unused-vars */
    onSubmit(questionList) {
      // This method will only be called if you don't override the
      // completeButton slot.
      this.onSendData();
    },

    onSendData() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;
      this.submitted = true;
      /* eslint-disable-next-line no-unused-vars */
      const data = this.getData();
      this.createDOC(data);
    },
    getData() {
      const data = {
        questions: [],
        answers: [],
      };
      this.questions.forEach((question) => {
        if (question.title) {
          let answer = question.answer;
          if (typeof answer === "object") {
            answer = answer.join(", ");
          }
          data.questions.push(question.title);
          data.answers.push(answer);
        }
      });
      return data;
    },
  },
};
</script>
