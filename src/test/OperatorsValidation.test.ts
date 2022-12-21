import OperatorsValidation from "../validation/validators/OperatorsValidation";
import { Operators } from "../constants/Operators";
import BadSyntaxError from "../error/BadSyntaxError";
import { beforeEach, describe, expect,it } from 'vitest'


describe("OperatorsValidation", () => {
  let operatorsValidation: OperatorsValidation;

  beforeEach(() => {
    operatorsValidation = new OperatorsValidation();
  });

  it("Debería lanzar un error si la regla tiene más de 3 operadores lógicos", () => {
    const rule: string = `field1 ${Operators.AND} field2 ${Operators.OR} field3 ${Operators.AND} field4`;
    expect(() => operatorsValidation.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería lanzar un error si la regla no tiene un solo operador en cada segmento dividido por un operador lógico", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.AND} field2 ${Operators.EQUAL} value2 ${Operators.AND} field3 ${Operators.EQUAL} value3`;
    expect(() => operatorsValidation.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería lanzar un error si la regla no tiene ningún operador lógico", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 field2 ${Operators.EQUAL} value2`;
    expect(() => operatorsValidation.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería lanzar un error si la regla tiene más de un operador lógico en un segmento dividido por un operador lógico", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.AND} field2 ${Operators.EQUAL} value2 ${Operators.OR} field3 ${Operators.EQUAL} value3`;
    expect(() => operatorsValidation.validate(rule)).toThrow(BadSyntaxError);
  });

  it("Debería devolver true si la regla es válida y tiene sólo operadores OR", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.OR} field2 ${Operators.EQUAL} value2`;
    expect(operatorsValidation.validate(rule)).toBe(true);
  });

  it("Debería devolver true si la regla es válida y tiene sólo operadores AND", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.AND} field2 ${Operators.EQUAL} value2`;
    expect(operatorsValidation.validate(rule)).toBe(true);
  });

  it("Debería devolver true si la regla es válida y tiene tanto operadores AND como OR", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.AND} field2 ${Operators.EQUAL} value2 ${Operators.OR} field3 ${Operators.EQUAL} value3`;
    expect(operatorsValidation.validate(rule)).toBe(true);
  });

  it("Debería devolver true si la regla es válida y sólo tiene un segmento", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1`;
    expect(operatorsValidation.validate(rule)).toBe(true);
  });




  it("Debería devolver true si la regla es válida", () => {
    const rule: string = `field1 ${Operators.EQUAL} value1 ${Operators.AND} field2 ${Operators.EQUAL} value2`;
    expect(operatorsValidation.validate(rule)).toBe(true);
  });
});
