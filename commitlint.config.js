module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    // 信息的总长度不能大于 72
    "header-max-length": [2, "always", 72],
    // scope 的大小写格式
    "scope-case": [2, "always", "lower-case"],
    // 描述信息的大小写格式
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case"],
    ],
    // 描述信息不能为空
    "subject-empty": [2, "never"],
    // 描述信息不需要以值结尾
    "subject-full-stop": [2, "never", "."],
    // type 的大小写格式为小写
    "type-case": [2, "always", "lower-case"],
    // type 不可以为空
    "type-empty": [2, "never"],
    // 下面列举的所有 type 都可以使用
    "type-enum": [2, "always", [
      "build",
      "chore",
      "ci",
      "docs",
      "feat",
      "fix",
      "perf",
      "refactor",
      "revert",
      "style",
      "test",
    ]],
  },
}
