const tasks = [
 {
    id: 1,
    description: "Milline rida lisab pildi väljundaknale?",
    targetElement: "#img",
    targetProperty: 'src',
    correctValue: "https://motionarray.imgix.net/preview-292305-SKZWKoY5Wm-high_0006.jpg?w=660&q=60&fit=max&auto=format",
    correctRow: "7",
    correctEditor:"editorHTML",
    preCheckRow: {
      editor: "1,2,3",
      editorCSS: "",
      editorJS: ""
    },
    option1: "See rida väljastab pildi väljundile, kuna kasutatakse 'img' elemendi ja lingitakse pildi 'src' atribuudi abil",
    option2: "See rida muudab 'img' elemendi taustavärviks punaseks",
    option3: "See rida peidab 'img' elemendi väljundaknast",
    correctOption: "Option 1"
  },
  {
    id: 2,
    description: "Milline rida muudab kogu teksti väljunadaknas siniseks?",
    targetElement: "#outputIn *",
    targetProperty: "color",
    correctValue: "rgb(0, 0, 255)",
    correctRow: "2",
    correctEditor:"editorCSS",
    preCheckRow: {
      editor: "1,2,3",
      editorCSS: "0,12",
      editorJS: ""
    },
    option1: "Kogu teks on algusest peale sinine",
    option2: "See määrab igale elemendile kantud teksti värvi siniseks color: blue; atribuudiga",
    option3: "background-color: red; määrab vaikimisi teksti värvi siniseks",
    correctOption: "Option 2"
  },
  {
    id: 3,
    description: "Millise rea lisamise pärast, 'Some text here' saab läbiva joone kui linnukest vajutada",
    targetElement: "#box",
    targetProperty: "text-decoration",
    correctValue: "line-through solid rgb(0, 0, 0)",
    correctRow: "6",
    correctEditor:"editorJS",
    preCheckRow: {
      editor: "1,2,3,4,5",
      editorCSS: "9,10,11",
      editorJS: "4,7,8,9,10,11,12,13"
    },
    option1: "text = checkbox.parentNode, määrab 'text'-i div elementideks mille sees on 'checkbox'",
    option2: "checkbox.parentNode väidab ekslikult, et 'text' on div elemendid, mis sisaldavad 'checkbox'",
    option3: "Seda väärilist väidet, et 'text' on div elemendid, mis on 'checkbox'-i sees, esitab checkbox.parentNode",
    correctOption: "Option 1"
  },
  {
    id: 4,
    description: "Millise rea lisamise pärast, 'this the first text' kõrval on 'This text should right to the first text'",
    targetElement: ".container",
    targetProperty: "display",
    correctValue: "flex",
    correctRow: "8",
    correctEditor:"editorHTML",
    preCheckRow: {
      editor: "8,9,10",
      editorCSS: "16,17,18,19,20,21",
      editorJS: ""
    },
    option1: "Style.css stiiliga element on kadunud",
    option2: "Element millele rakendub style.css stiil on ülekaalus",
    option3: "Element millele rakendub style.css stiil on puudub",
    correctOption: "Option 3"
  },
  {
    id: 5,
    description: "Mis rea pärast väljundaknas pole midagi?",
    targetElement: ".container",
    targetProperty: "display",
    correctValue: "flex",
    correctRow: "14",
    correctEditor:"editorCSS",
    preCheckRow: {
      editor: "0,1,2,3,4,5,6,7,8,9,10",
      editorCSS: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21",
      editorJS: "4,7,8,9,10,11,12,13"
    },
    option1: "'display: none;' pärast väljundakanas on kõik nähtav",
    option2: "'display: none;' pärast väljundakanas pole midagi",
    option3: "Väljundaknas on midagi pärast 'display: none;'",
    correctOption: "Option 2"
  },
  {
    id: 6,
    description: "Mis rea pärast väljundaknas pole midagi?",
    targetElement: ".tab-pane.active",
    targetProperty: "display",
    correctValue: "block",
    correctRow: "25",
    correctEditor:"editorJS",
    preCheckRow: {
      editor: "12,13,14,15,16,17,18,19",
      editorCSS: "22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39",
      editorJS: "15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35"
    },
    option1: "'pane' ei ole funktsioonis defineeritud ja peatab scripti",
    option2: "'pane' on hästi määratletud funktsioon ja jätkab skripti tööd",
    option3: "Väljundaknas on midagi pärast 'display: none;'",
    correctOption: "Option 1"
  },
  
];