function spellString(text: string): string {
  return Array.from(text).join("-");
}

console.log(spellString("Desenvolvedor"));
