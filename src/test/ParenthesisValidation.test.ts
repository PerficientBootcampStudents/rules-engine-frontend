import { beforeEach, describe, expect,it } from 'vitest'

import Parenthesis from "../validation/validators/ParenthesisValidation";
import BadSyntaxError from "../error/BadSyntaxError";

describe("Parenthesis", () => {
  let parenthesis: Parenthesis;

  beforeEach(() => {
    parenthesis = new Parenthesis();
  });

  it("Debería lanzar un error si la regla no tiene paréntesis balanceados", () => {
    const rule: string = "(field1 = value1) AND field2 = value2)";
    expect(() => parenthesis.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería devolver true si la regla tiene paréntesis balanceados", () => {
    const rule: string = "(field1 = value1) AND (field2 = value2)";
    expect(parenthesis.validate(rule)).toBe(true);
  });

  it("Debería lanzar un error si la regla tiene paréntesis que no están en pareja", () => {
    const rule: string = "(field1 = value1) AND ((field2 = value2)";
    expect(() => parenthesis.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería lanzar un error si la regla tiene paréntesis que no están en pareja", () => {
    const rule: string = "field1 = value1) AND (field2 = value2)";
    expect(() => parenthesis.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería devolver true si la regla es válida y tiene varios pares de paréntesis", () => {
    const rule: string = "(field1 = value1) AND ((field2 = value2) OR (field3 = value3))";
    expect(parenthesis.validate(rule)).toBe(true);
  });

});
