export default {
 title: "Health Quiz",
 description: "Get to know yourself",
 pages: [
  {
   name: "Intro",
   elements: [
    {
     type: "text",
     name: "q_name",
     title: "What's your name?",
     isRequired: true
    }
   ]
  },
  {
   name: "Quiz type",
   elements: [
    {
     type: "radiogroup",
     name: "q_quiz_type",
     title: "{q_name}, What quiz would you like to take?",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "General Health MOT"
      },
      {
       value: "item2",
       text: "Tired All The Time"
      },
      {
       value: "item3",
       text: "Exercise Goals "
      },
      {
       value: "item4",
       text: "Trouble Sleeping"
      }
     ]
    }
   ]
  },
  {
   name: "Sex",
   elements: [
    {
     type: "radiogroup",
     name: "q_sex",
     title: "{q_name}, What sex were you assigned at birth",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "Male"
      },
      {
       value: "item2",
       text: "Female"
      }
     ]
    }
   ]
  },
  {
   name: "Diet",
   elements: [
    {
     type: "radiogroup",
     name: "q_diet",
     title: "{q_name}, How would you classify your diet?",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "Eat everything"
      },
      {
       value: "item2",
       text: "Only meat"
      },
      {
       value: "item3",
       text: "Vegetarian"
      },
      {
       value: "item4",
       text: "Vegan"
      },
      {
       value: "item5",
       text: "Gluten free"
      },
      {
       value: "item6",
       text: "Pescatarian"
      },
      {
       value: "item7",
       text: "Paleo"
      }
     ],
     hasOther: true,
     otherText: "Other"
    },
    {
     type: "html",
     name: "question1",
     visibleIf: "{q_diet} = 'item3' or {q_diet} = 'item4'",
     html: "<h3>Did you know?</h3><br>\n<div>\n<img src=\"https://www.londonmedicallaboratory.co.uk/images/og-image.jpg\" alt=\"London Medical Lab logo\" width=\"100\" height=\"100\" style=\"float:left\">\n<p style=\"float:right\">Vegans and vegetarians are at a higher risk of developing vitamin B12 and Iron deficiency? These micronutrients are vital for one's energy levels and should be supplemented with if found to be low.</p>\n</div>"
    }
   ]
  },
  {
   name: "Age",
   elements: [
    {
     type: "text",
     name: "q_age",
     title: "{q_name}, What's your age?",
     isRequired: true,
     inputType: "number",
     min: "16",
     minErrorText: "Your age can't be lower than 16"
    }
   ]
  },
  {
   name: "Weight",
   elements: [
    {
     type: "text",
     name: "q_weight",
     title: "{q_name}, What's your weight?",
     description: "Enter your weight in KG",
     isRequired: true,
     inputType: "number",
     minErrorText: "Your age can't be lower than 16"
    }
   ]
  },
  {
   name: "Height",
   elements: [
    {
     type: "text",
     name: "q_height",
     title: "{q_name}, What's your height?",
     description: "Enter your height in metres",
     isRequired: true,
     inputType: "number",
     minErrorText: "Your age can't be lower than 16"
    },
    {
     type: "html",
     name: "BMI",
     visibleIf: "{q_height} notempty",
     html: "<p>{q_weight}/({q_height}*2)</p>"
    }
   ]
  },
  {
   name: "Sleep",
   elements: [
    {
     type: "radiogroup",
     name: "q_sleep",
     title: "{q_name}, How many hours of sleep are you getting?",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "Less than 5 hours"
      },
      {
       value: "item2",
       text: "Less than 7 hours"
      },
      {
       value: "item3",
       text: "More than 7 hours"
      }
     ]
    }
   ]
  },
  {
   name: "Stress",
   elements: [
    {
     type: "rating",
     name: "q_stress",
     title: "{q_name}, How stressed do you feel on a typical day?",
     description: "1 being extremely stressed and 10 being no stress at all",
     isRequired: true,
     rateMax: 10
    }
   ]
  },
  {
   name: "Ethnicity",
   elements: [
    {
     type: "radiogroup",
     name: "q_ethnicity",
     title: "{q_name}, What is your ethnicity?",
     isRequired: true,
     choices: [
      {
       value: "item1",
       text: "White"
      },
      {
       value: "item2",
       text: "Black African"
      },
      {
       value: "item3",
       text: "Black Caribbean"
      },
      {
       value: "item4",
       text: "Bangladeshi"
      },
      {
       value: "item5",
       text: "Chinese"
      },
      {
       value: "item6",
       text: "Indian"
      },
      {
       value: "item7",
       text: "Pakistani"
      },
      {
       value: "item8",
       text: "Other Asian"
      },
      {
       value: "item9",
       text: "Mixed Ethnicity"
      }
     ],
     hasOther: true,
     otherText: "Other"
    }
   ]
  },
  {
   name: "Results_Male",
   elements: [
    {
     type: "html",
     name: "Profile",
     html: "<h3>You made it to the end {q_name}</h3><br>\n\n<div>\n<img src=\"https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg\" alt=\"Man avatar logo\" width=\"100\" height=\"100\">\n\n<p>Based on your personalised health questionnaire, we estimate that you are in the moderate risk category for poor energy levels and fatigue. This may mean that you are at an increased risk of developing chronic conditions associated with poor sleep and energy levels</p>\n</div>\n<p><b>We recommend the following:</b></p>"
    },
    {
     type: "html",
     name: "Vitamin B12 & Vitamin D",
     html: "<div class=\"recommend\">\n<a href=\"\">Vitamin B12 + Vitamin D</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Vitamin B9",
     html: "<div class=\"recommend\">\n<a href=\"\">Vitamin B9</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Thyroid Profile",
     html: "<div class=\"recommend\">\n<a href=\"\">Thyroid Profile</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Full Iron Profile",
     html: "<div class=\"recommend\">\n<a href=\"\">Full Iron Profile</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Liver Functions Test",
     html: "<div class=\"recommend\">\n<a href=\"\">Liver Functions Test</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "HBA1C Diabetes",
     html: "<div class=\"recommend\">\n<a href=\"\">HBA1C Diabetes</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Cholesterol",
     visibleIf: "{q_ethnicity} = 'item6' or {q_ethnicity} = 'item7'",
     html: "<div class=\"recommend\">\n<a href=\"\">Cholesterol</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "Creatinine",
     visibleIf: "{q_ethnicity} = 'item6' or {q_ethnicity} = 'item7'",
     html: "<div class=\"recommend\">\n<a href=\"\">Creatinine</a>\n</div>\n\n\n\n\n"
    },
    {
     type: "html",
     name: "question3",
     html: "<small>It is important to note that blood tests are not a substitute for seeing a medical doctor. If you have any symptoms you should discuss this first with your regular doctor and see how we can help you in your health journey</small>"
    }
   ],
   visibleIf: "{q_sex} = 'item1'",
   questionTitleLocation: "left"
  }
 ],
 triggers: [
  {
   type: "runexpression",
   expression: "{q_height} notempty",
   setToName: "BMI",
   runExpression: "{q_weight}/({q_height}*2)"
  }
 ],
 questionTitlePattern: "requireNumTitle"
}