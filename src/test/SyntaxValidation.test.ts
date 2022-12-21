import { beforeEach, describe, expect,it } from 'vitest'
import SyntaxValidation from "../validation/validators/SyntaxValidation";
import BadSyntaxError from "../error/BadSyntaxError";

describe("SyntaxValidation", () => {
  let syntaxValidation: SyntaxValidation;

  beforeEach(() => {
    syntaxValidation = new SyntaxValidation();
  });


  it("Debería lanzar un error si la regla es una cadena vacía", () => {
    const rule: string = "";
    expect(() => syntaxValidation.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería devolver true si la regla es válida", () => {
    const rule: string = "field1 = value1";
    expect(syntaxValidation.validate(rule)).toBe(true);
  });

});
