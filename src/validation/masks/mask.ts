export function mask(
  input: HTMLInputElement,
  format: (value: string) => string
) {
  const cursorPosition = input.selectionStart || 0;
  const formattedValue = format(input.value);
  input.value = formattedValue;


  setTimeout(() => {
    let newCursorPosition = cursorPosition;

    if (cursorPosition > 0) {
      const originalChar = input.value[cursorPosition];
      const formattedChar = formattedValue[cursorPosition];
      const isNotEmpty = /\d/.test(originalChar);
      const hasEspecialChar = /[\^w]/.test(formattedChar);
      if (isNotEmpty) ++newCursorPosition;
      if (isNotEmpty && hasEspecialChar) ++newCursorPosition;
    }

    input.setSelectionRange(newCursorPosition, newCursorPosition);
  });
}
