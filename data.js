
// From What App do you want survey_responses

//setRequestGetSurveyResponses('ch.suedhang.apps.bdi');
setRequestGetSurveyResponses('ch.suedhang.apps.bscl_anq');


// loadData
this.dispatch('actionGetCurrentPatient');
this.dispatch('actionGetCurrentPatientStays');
this.dispatch('actionGetSurveyResponses');
this.dispatch('actionGetCurrentUser');
this.dispatch('actionGetClinic');
this.dispatch('actionGetApps');
