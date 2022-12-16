import { countDown } from "../../utils/countDown.js";

describe("tests for countDown function", () => {
    const string = 'Привет';
    const boolean = true;
    const zero = null;
    const number = 3;

  
    it("should operate correctly with string, boolean, zero and number value", () => {
      expect(countDown(string)).toBe('Ошибка! Введена строка. Введите число');
      expect(countDown(boolean)).toBe('Ошибка! Введен булевый тип. Введите число');
      expect(countDown(zero)).toBe('Ошибка! Введите число');
      expect(countDown(number)).toBe("321");
    });
  });

  xdescribe("corner test for countDown function", () => {
    it("null check", () => {
      expect(countDown(0)).toBe(0);
    });
  });