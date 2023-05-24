function popUp(alert) {
    let output = "Väljundis pole oodatud tulemus"
    let answerWrong = "Vale vastus!"
    let answerRight = "Õige vastus!"
    switch(alert) {
      case 1:
        alertPop(output, false)
        break;
      case 2:
        alertPop(answerWrong, false)
        break;
      case 3:
        alertPop(answerRight, true)
        break;
    }
}

function alertPop(type, green) {
    if (!green) {
    const alertHTML = `<div class="alert">${type}</div>`;
    document.body.insertAdjacentHTML('beforeend', alertHTML);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    else {
    const alertHTML = `<div style="background-color: green;" class="alert">${type}</div>`;
    document.body.insertAdjacentHTML('beforeend', alertHTML);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}