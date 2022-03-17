function inputNameFocus() {
  if ($("input[name='name']").val() == "Name") {
    $("input[name='name']").val("");
  }
}

function inputNameBlur() {
  if ($("input[name='name']").val() == "") {
    $("input[name='name']").val("Name");
  }
}

function inputEmailFocus() {
  if ($("input[name='email']").val() == "Email") {
    $("input[name='email']").val("");
  }
}

function inputEmailBlur() {
  if ($("input[name='email']").val() == "") {
    $("input[name='email']").val("Email");
  }
}

function inputSubjectFocus() {
  if ($("input[name='subject']").val() == "Subject") {
    $("input[name='subject']").val("");
  }
}

function inputSubjectBlur() {
  if ($("input[name='subject']").val() == "") {
    $("input[name='subject']").val("Subject");
  }
}

function inputMessageFocus() {
  if ($("textarea[name='message']").val() == "Message") {
    $("textarea[name='message']").val("");
  }
}

function inputMessageBlur() {
  if ($("textarea[name='message']").val() == "") {
    $("textarea[name='message']").val("Message");
  }
}
