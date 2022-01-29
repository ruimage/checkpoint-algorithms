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
      jest.clearAllMocks();

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

    it("собирает другие буквы в другое слово", () => {
      const anotherTree = [
        ["П", "и"],
        ["с", ["т", ["о"]]],
        "л",
        [["е", "т"], [["и", "к"]]],
        "и",
      ];
      const word = crawlTree(anotherTree);
      expect(word).toBe("Пистолетики");
    });

    it("использует рекурсию", () => {
      const SHOULD_HAVE_BEEN_RECURSIVELY_CALLED_TIMES = 8;

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

    xit("использует хэш-таблицу для более эффективного решения", () => {
      expect(twoSum.toString()).toMatch("= {}");
    });
  });
});
