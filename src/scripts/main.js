// 10638 allowed guesses
// 2309 valid answers

// HTML elements
const htmlDivWordleBoard = document.getElementById("div-wordle-board");
const htmlDivKeyboardContainer = document.getElementById("div-keyboard");
const htmlDivPopupContainer = document.getElementById("div-popup-container");
const submitButton = document.getElementById("button-wordle-submit-button");

// constants
const strSquares = "🟥🟧🟨🟩🟦🟪🟫⬛⬜";
const strWinComments = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];
const strKeyStates = ["excluded", "included", "accepted"];
const strAlertInvalidGuess = "Not in word list";
const strAlertNotEnoughLetters = "Not enough letters";
const intAnswersCount = 2309;
const intAllowedGuessesCount = 10638;
const strAlphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const strAlphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
const intWordleLength = 5;
const strKeyboardConfig = "QWERTYUIOPASDFGHJKL↩ZXCVBNM⟵";
const intKeyboardSize = [10, 9, 9];
const intBlastPoints = [25, 50, 100, 2000];
const intBlastMultiplier = [6, 5, 4, 3, 2, 1];
const intKeySize = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const intBlastTime = 2; // in minutes, must be integer
const intBlitzTime = 4; // in minutes, must be integer

// Settings
var intKeyboardStyle = 0; // 0 - Wordle Style, 1 - Stephen Style
var intAnimations = 1; // 
var intAnimationDuration = 250;
var intPopupDuration = 2500;
var intAlertDuration = 1000;
var intScoreDuration = 750;

// global variables
var intKeyState = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var intAnswerID = funcRandomValueFromRange(0, intAnswersCount - 1);
var strAnswer = strAnswers[intAnswerID];
var intRow = 0;
var intTile = 0;
var intGameMode = 0; // 0 - Classic, 1 - Sprint, 2 - Blitz, 3 - Blast
var intScore = 0;
var intTime = [0, 0, 0];
var intervalTimer;

// document.title = strAnswer;

funcInitPage();
