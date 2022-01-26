const functions = require("../index");

describe("Чекпоинт Algorithms", () => {
  const mock = jest.spyOn(functions, "crawlTree");
  const { crawlTree, twoSum } = functions;

  describe("Проход по дереву", () => {
    /**
     * Дано двоичное дерево в виде многомерного массива.
     * Нужно пройтись по нему рекурсией и соединить все вершины в строку.
     */
    let tree;
    beforeEach(() => {
      tree = [
        [
          [["П", "р"], "и"],
          ["в", ["е", "т"]],
        ],
        [["и", "к"], "и"],
      ];
    });
    it("собирает буквы в слово", () => {
      const word = crawlTree(tree);
      expect(word).toBe("Приветики");
    });
    it("не использует читы", () => {
      expect(crawlTree.toString()).not.toMatch(
        /П[\s\S]*р[\s\S]*и[\s\S]*в[\s\S]*е[\s\S]*т[\s\S]*и[\s\S]*к[\s\S]*и/im
      );
    });
    it("не использует flat", () => {
      expect(crawlTree.toString()).not.toContain(".flat");
    });
    it("не использует join", () => {
      expect(crawlTree.toString()).not.toContain(".join");
    });
    it("использует рекурсию", () => {
      const SHOULD_HAVE_BEEN_RECURSIVELY_CALLED_TIMES = 16;

      functions.crawlTree(tree);
      expect(mock).toHaveBeenCalledTimes(
        SHOULD_HAVE_BEEN_RECURSIVELY_CALLED_TIMES
      );
    });
  });

  describe("Поиск индексов двух чисел которые суммируются в заданное число", () => {
    it("отрабатывает для первого случая", () => {
      const arr = [3, 2, 4];
      const target = 6;
      expect(twoSum(arr, target)).toEqual([1, 2]);
    });
    it("отрабатывает для второго случая", () => {
      const arr = [2, 7, 11, 15];
      const target = 9;
      expect(twoSum(arr, target)).toEqual([0, 1]);
    });
    it("отрабатывает для третьего случая", () => {
      const arr = [3, 3];
      const target = 6;
      expect(twoSum(arr, target)).toEqual([0, 1]);
    });
    it("использует хэш-таблицу для более эффективного решения", () => {
      expect(twoSum.toString()).toMatch("{}");
    });
  });
});
