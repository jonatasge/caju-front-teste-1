export function validateCpf(value?: string) {
  if (value === undefined) return false;
  
  const cpf = value.replace(/\D/g, "");

  if (cpf.length !== 11) return false;

  const isRepeated = /^(\d)\1{10}$/.test(cpf);
  if (isRepeated) return false;

  if (!isCheckDigitValid(cpf, 10)) return false;
  if (!isCheckDigitValid(cpf, 11)) return false;

  return true;
}

function isCheckDigitValid(cpf: string, digit: number) {
  let sum = 0;
  for (let i = 0; i < digit - 1; i++) {
    sum += parseInt(cpf[i]) * (digit - i);
  }

  let checkDigit = (sum * 10) % 11;
  if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
  return !(parseInt(cpf[digit - 1]) !== checkDigit);
}
