export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  if (password && password.length < 6) return '암호는 6자리 이상이어야 합니다..';

  return '';
};

export const password2Validator = (password:string, password2: string) => {
  if (!password2 || password2.length <= 0) return 'Password cannot be empty.';
  if (password2 && (password !== password2)) return 'Passwords do not match';

  return '';
};


export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};
