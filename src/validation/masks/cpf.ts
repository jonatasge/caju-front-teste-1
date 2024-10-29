import { mask } from "./mask";

export function maskCpf(input: HTMLInputElement) {
  return mask(input, (value: string) => {
    const cpf = value.replace(/\D/g, "");
    const part = cpf.padEnd(11, "_").match(/.{1,3}/g) as string[];
    return `${part[0]}.${part[1]}.${part[2]}-${part[3].slice(0, 2)}`;
  });
}
