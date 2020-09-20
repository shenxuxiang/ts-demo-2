module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    browser: true,
    es6: true,
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    $: false,
    fetch: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 使用空格缩进
    'indent': [2, 2],
    // 单引号
    'quotes': [2, 'single'],
    // 不使用 var
    'no-var': 2,
    // 强制使用分号
    'semi': 2,
    // 一行结束后面有空格就发出警告
    'no-trailing-spaces': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    // 禁止使用 alert confirm prompt
    'no-alert': 2,
    // 禁止给类赋值
    'no-class-assign': 2,
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 不能对 var 声明的变量使用 delete 操作符
    'no-delete-var': 2,
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,
    // switch 中的 case 标签不能重复
    'no-duplicate-case': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 块语句中的内容不能为空
    'no-empty': 2,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 函数调用时函数名与()之间不能有空格
    'no-spaced-func': 2,
    // 在调用 super()之前不能使用 this 或 super
    'no-this-before-super': 2,
    // 不能有未定义的变量
    'no-undef': 2,
    // 未定义前不能使用
    'no-use-before-define': 2,
    // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'jsx-quotes': [2, 'prefer-double'],
    // 禁止某些propTypes
    'react/forbid-prop-types': [2, {'forbid': ['any']}],
    // 在JSX中强制布尔属性符号
    'react/jsx-boolean-value': 2,
    // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-curly-spacing': [2, {'when': 'never', 'children': true}],
    // 验证JSX中的props缩进
    'react/jsx-indent-props': [2, 2],
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 2,
    // 防止在JSX中重复的props
    'react/jsx-no-duplicate-props': 2,
    // 在JSX中禁止未声明的变量
    'react/jsx-no-undef': 2,
    // 为用户定义的JSX组件强制使用PascalCase
    'react/jsx-pascal-case': 2,
    // 强化props按字母排序
    'react/jsx-sort-props': 0,
    // 防止反应被错误地标记为未使用
    'react/jsx-uses-react': 2,
    // 防止在JSX中使用的变量被错误地标记为未使用
    'react/jsx-uses-vars': 2,
    // 防止this.state的直接变异
    'react/no-direct-mutation-state': 2,
    // 防止每个文件有多个组件定义
    'react/no-multi-comp': 2, 
    // 防止使用未知的DOM属性
    'react/no-unknown-property': 2,
    // 为React组件强制执行ES5或ES6类
    'react/prefer-es6-class': 2,
    // 使用JSX时防止丢失React
    'react/react-in-jsx-scope': 2,
    // 强制组件方法顺序
    'react/sort-comp': 0,
    // 防止在数组中遍历中使用数组key做索引
    'react/no-array-index-key': 0,
    // 在JSX属性中强制或禁止等号周围的空格
    'react/jsx-equals-spacing': 2,
    // 对象字面量项尾不能有逗号
    'comma-dangle': 2,
    // 关闭函数参数个数的限制
    'max-params': 0,
    // 不需要 display-name
    'react/display-name': 0,
  }
};
