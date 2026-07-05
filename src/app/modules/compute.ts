export function compute(number: string): string | null {
  const equations = number.split('');
  const numbers = equations.map(Number);

  function recurse(values: number[], exprs: string[]): string | null {
    if (values.length === 2) {
      if (values[0] + values[1] === 10) return `${exprs[0]} + ${exprs[1]}`;
      if (values[0] - values[1] === 10) return `${exprs[0]} - ${exprs[1]}`;
      if (values[1] - values[0] === 10) return `${exprs[1]} - ${exprs[0]}`;
      if (values[0] * values[1] === 10) return `${exprs[0]} * ${exprs[1]}`;
      if (values[0] / values[1] === 10) return `${exprs[0]} / ${exprs[1]}`;
      if (values[1] / values[0] === 10) return `${exprs[1]} / ${exprs[0]}`;
      return null;
    }

    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        const exprCopy = [...exprs];
        const leftExpr = exprCopy[i];
        const rightExpr = exprCopy[j];
        exprCopy.splice(j, 1);
        exprCopy.splice(i, 1);

        const valueCopy = [...values];
        const left = valueCopy[i];
        const right = valueCopy[j];
        valueCopy.splice(j, 1);
        valueCopy.splice(i, 1);

        let result: string | null;
        result = recurse(valueCopy.concat([left + right]), exprCopy.concat([`(${leftExpr} + ${rightExpr})`]));
        if (result !== null) return result;

        result = recurse(valueCopy.concat([left - right]), exprCopy.concat([`(${leftExpr} - ${rightExpr})`]));
        if (result !== null) return result;

        result = recurse(valueCopy.concat([right - left]), exprCopy.concat([`(${rightExpr} - ${leftExpr})`]));
        if (result !== null) return result;

        result = recurse(valueCopy.concat([left * right]), exprCopy.concat([`(${leftExpr} * ${rightExpr})`]));
        if (result !== null) return result;

        result = recurse(valueCopy.concat([left / right]), exprCopy.concat([`(${leftExpr} / ${rightExpr})`]));
        if (result !== null) return result;

        result = recurse(valueCopy.concat([right / left]), exprCopy.concat([`(${rightExpr} / ${leftExpr})`]));
        if (result !== null) return result;
      }
    }

    return null;
  }

  return recurse(numbers, equations);
}
