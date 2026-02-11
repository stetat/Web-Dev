let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "u good?",
    function() {alert("im good homie");},
    function() { alert("homie come help me");}
);