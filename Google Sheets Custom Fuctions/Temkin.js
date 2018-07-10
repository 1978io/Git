  /**
   * Returns the Temkin (SEE) rating
   * @param {A:A} successScores Range containing Success Scores
   * @param {B:B} effortScores Range containing Effort Scores
   * @param {C:C} emotionScores Range containing Emotion Scores
   * @param {1} headers [Optional] The number of header rows at
   * the top of the data. If omitted, the value will be guessed 
   * based on the content of the data
   * @return "Temkin Rating"
   * @customfunction
   */

  function TEMKIN(successScores, effortScores, emotionScores, headers) {
  
    var sheet = SpreadsheetApp.getActiveSheet();
    successScores = successScores.slice(headers);
    effortScores = effortScores.slice(headers);
    emotionScores = emotionScores.slice(headers);
    successScores = successScores.filter(Number);
    effortScores = effortScores.filter(Number);
    emotionScores = emotionScores.filter(Number);
    var surveyCount = successScores.length;
    var successDe = 0;
    var successPro = 0;
    var effortDe = 0;
    var effortPro = 0;
    var emotionDe = 0;
    var emotionPro = 0;
    var success = 0;
    var effort = 0;
    var emotion = 0;
    var temkin = 0;
  
    for(var i = 0; i < surveyCount; i++) {
      if(successScores[i] < 4) {successDe++;}
      if(successScores[i] > 5) {successPro++;}
      if(effortScores[i] < 4) {effortDe++;}
      if(effortScores[i] > 5) {effortPro++;}
      if(emotionScores[i] < 4) {emotionDe++;}
      if(emotionScores[i] > 5) {emotionPro++;}
    }
   
    success = (successPro/surveyCount) - (successDe/surveyCount);
    effort = (effortPro/surveyCount) - (effortDe/surveyCount);
    emotion = (emotionPro/surveyCount) - (emotionDe/surveyCount);
    temkin = (success + effort + emotion) / 3;
    
    return(temkin);
  }
  