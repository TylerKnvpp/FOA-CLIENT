function SignUpValidation(input: any) {
  let results: any = {
    isValid: false,
    error: "",
    field: "",
  };

  if (!input.protonMail.length) {
    results.error = "Please enter your Proton Mail.";
    results.field = "protonMail";
    return results;
  }

  if (!input.protonMail.includes("@")) {
    results.error = "Valid email required.";
    results.field = "protonMail";
    return results;
  }

  let splitEmailArray = input.protonMail.split("@");

  if (splitEmailArray[1] !== "protonmail.com") {
    results.error =
      "To create an account, you must sign up with a protonmail.com address.";
    results.field = "protonMail";
    return results;
  }

  if (!input.password.length) {
    results.error = "Please enter your password.";
    results.field = "password";
    return results;
  }

  if (input.password.length < 8) {
    results.error = "Your password must be longer than 8 characters.";
    results.field = "password";
    return results;
  }

  if (!input.referenceID.length) {
    results.error = "Please add your reference's ID.";
    results.field = "referenceID";
    return results;
  }

  results.isValid = true;
  return results;
}

export { SignUpValidation };
