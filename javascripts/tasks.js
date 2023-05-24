const tasks = [
  {
    id: 1,
    description: "Milline rida lisab pildi väljundaknale?",
    targetElement: "#img",
    targetProperty: "src",
    correctValue: "https://motionarray.imgix.net/preview-292305-SKZWKoY5Wm-high_0006.jpg?w=660&q=60&fit=max&auto=format",
    correctRow: "7",
    preCheckRow: "0,2,3",
    option1: "See rida väljastab pildi väljundile, kuna kasutatakse 'img' elemendi ja lingitakse pildi 'src' atribuudi abil",
    option2: "See rida muudab 'img' elemendi taustavärviks punaseks",
    option3: "See rida peidab 'img' elemendi väljundaknast",
    correctOption: "Option 1"
  },
    {
      id: 2,
      description: "Add a border to the image with a width of 2px and a color of rgb(255, 0, 0)",
      targetElement: "#gif",
      targetProperty: "border",
      correctValue: "2px solid rgb(255, 0, 0)"
    },
    // Add more tasks here...
  ];