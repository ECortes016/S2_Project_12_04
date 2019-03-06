"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Emmanuel Cortes Castaneda
   Date: 3.5.19  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

var reportHTML = "<h1>" + raceTitle + "</h1>";

for (var i = 0; i <= 7; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th></th>Candidate<th>Votes</th>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

document.getElementById('section').innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";

    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes + "(" + candidatePercent + ")</td></tr>"
    }
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}