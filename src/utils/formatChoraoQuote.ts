import { ChoraoQuote } from "src/types";

export function formatChoraoQuote(choraoQuote: ChoraoQuote) {
  return `"${choraoQuote.quote}"\n\n- Chorão (${choraoQuote.song})`;
}
