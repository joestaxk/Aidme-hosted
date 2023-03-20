function validateUserInput(userInput) {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "address",
      "country",
      "gender",
      "password",
      "confirmPassword",
    ];
  
    const missingFields = requiredFields.filter((field) => !userInput[field]);
    if (missingFields.length) {
      throw new Error(`Missing fields: ${missingFields.join(", ")}`);
    }
  
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(userInput.email)) {
      throw new Error("Invalid email address");
    }
  
    if (userInput.password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    if (userInput.password !== userInput.confirmPassword) {
      throw new Error("Passwords do not match");
    }
  
    return userInput;
  }

  
  const bcrypt = require("bcrypt");

  function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
  