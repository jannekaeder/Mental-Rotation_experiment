// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro', {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Thank you for participating in our experiment!
            <br />
            <br />
            You well need around 10 minutes to complete this experiment. Please make sure that you will not be distracted during this time and try to concentrate on the task.
            <br />
            <br />
            Click on the button below to receive instructions.`,
   buttonText: 'Show instructions'
});



// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    text:  `In this experiment you will be shown two pictures of geometric figures in each trial. You will have to decide whether the two figures are the same except for their orientation.
            Press the f-key whenever the two figures are the same and press the j-key whenever the figures are different.
            <br />
            <br />
            On each trial, you will first see a fixation cross in the middle of the screen, which prompts you that the next trial is about to start. Please center your gaze at the fixation cross at the start of each trial.
            Please try to press the key as soon as possible while also trying to make as few errors as you can.
            <br />
            <br />
            Before the actual experiment starts, a practice session will give you the possibility to familiarize yourself with the task. Click the botton below to start with the practice.`,
    buttonText: 'Start with practice'
});

const practice_end = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'practice_end',
    title: 'Instructions',
    text:  `The practice is over now.
            <br />
            <br />
            Please continue with the actual test-sessions now.
            <br />
            Remember that 'f' is for same and 'j' for different.
            <br />
            Try to be as fast and accurate as possible.`,
    buttonText: 'Start Test'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test', {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a forcedChoice view
const practice = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 12,
    // name and trial_type should be identical to the variable name
    name: 'practice',
    trial_type: 'practice',
    data: _.shuffle(trial_info.key_press_practice),
    pause: 1000,
    fix_duration: 500,
    hook: {
      after_response_enabled: check_response
    }
});


const key_press_2A = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 48,
    // name and trial_type should be identical to the variable name
    name: 'key_press_2A',
    trial_type: 'key_press_2A',
    data: _.shuffle(trial_info.key_press),
    pause: 1000,
    fix_duration: 500

});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

// If the provided templates are not enough, we can just create custom view templates in 02_custom_views_templates.js and use them here
