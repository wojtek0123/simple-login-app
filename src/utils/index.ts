export const MAX_INPUT_LENGTH = 75;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_EMAIL_LENGTH = 100;

export const rules = {
  required: (value: string) => checkIsFieldRequired(value) || 'Required!',
  counter: (value: string) =>
    checkLength(value) || `Max ${MAX_INPUT_LENGTH} characters`,
  email: (value: string) => checkEmail(value) || 'Invalid email',
  passwordCounter: (value: string) =>
    checkPasswordLength(value) || 'Min 8 characters',
};

export const checkIsFieldRequired = (value: string) => {
  return !!value;
};

export const checkLength = (value: string) => {
  return value.length <= MAX_INPUT_LENGTH ? true : false;
};

export const checkEmail = (value: string) => {
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return pattern.test(value);
};

export const checkPasswordLength = (value: string) => {
  return value.length >= MIN_PASSWORD_LENGTH ? true : false;
};

export const comparePasswords = (
  password: string,
  repeatedPassword: string
) => {
  return password === repeatedPassword ? true : false;
};
