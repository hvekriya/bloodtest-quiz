<template>
  <div class="container">
    <div class="panel-heading card-header">
      <!---->
      <div
        class="sv_header__text"
        style="max-width: calc(((100% - 5px) - 2em) - 200px)"
      >
        <h3 class="">
          <span style="position: static"
            ><span style="position: static"
              >Blood Test Direct Surveys</span
            ></span
          >
        </h3>
        <h5 class="">
          <span style="position: static"
            ><span style="position: static">Get to know yourself</span></span
          >
        </h5>
      </div>
      <div class="sv_logo sv-logo--right">
        <img
          src="https://www.londonmedicallaboratory.co.uk/images/london-medical-laboratory-logo.png"
          width="200px"
          height="100px"
          alt="General Health MOT"
          class="sv_logo__image"
          style="object-fit: contain"
        />
      </div>
      <div class="sv-logo--right-tail"></div>
    </div>

    <div class="mt-4 mb-4">
      <h5
        aria-label="kj, What sex were you assigned at birth"
        id="sq_101_ariaTitle"
        class=""
      >
        <div class="sv-title-actions">
          <span class="sv-title-actions__title"
            ><!---->
            <div>
              <!---->
              <span style="position: static"
                ><span style="position: static"
                  >What survey would you like to do?</span
                ></span
              >
              <!---->
            </div></span
          >
          <!---->
        </div>
      </h5>
      <div class="small">
        <span style="position: static"
          ><span style="position: static"></span
        ></span>
      </div>
    </div>
    <a href="/survey/?type=general-health" class="btn btn-secondary survey-type"
      >General Health MOT</a
    ><br /><br />
    <a href="/survey/?type=exercise-goals" class="btn btn-secondary survey-type"
      >Exercise Goals</a
    ><br /><br />
    <a
      href="/survey/?type=trouble-sleeping"
      class="btn btn-secondary survey-type"
      >Trouble Sleeping</a
    ><br /><br />
    <a href="/survey/?type=sexual-health" class="btn btn-secondary survey-type">
      Sexual Health</a
    >
  </div>
</template>

<script>
export default {
  name: "Type",
};
</script>

<style lang="scss">
@import "../assets/main.scss";

.sv_header__text {
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
}
.sv-logo--right {
  display: inline-block;
  vertical-align: top;
  margin-left: 2em;
  float: right;
}
.survey-type {
  width: 100%;
  height: 100%;
  border: 2px solid $secondary;
  background-color: $gray-200;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $black;
  width: 100%;
  padding: 1.5rem;
  cursor: pointer;
}
</style>
