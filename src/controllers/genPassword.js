const generator = (length, digits, special) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const useDigits = "0123456789";
  const useSpecial = "!@#$%^&*()_+-={}[]:<>?";
  let userPassword = "";
  let toGenerate;

  if (digits) {
    toGenerate = lower + upper + useDigits;
  }
  if (special) {
    toGenerate = lower + upper + useSpecial;
  }
  if (digits === true && special === true) {
    toGenerate = lower + upper + useDigits + useSpecial;
  } else {
    toGenerate = lower + upper;
  }

  for (let i = 0; i < length; i++) {
    userPassword += toGenerate[Math.floor(Math.random() * toGenerate.length)];
  }

  return userPassword;
};

export default generator;
