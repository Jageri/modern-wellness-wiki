# 项目文档 / Project documentation

每类规则只在下表指定的文档中定义和修改。README 与网站首页提供阅读导航；配套 skill 提供执行顺序，均通过链接使用这些规则。

Each rule has one maintained source below. The project README and homepage provide navigation; companion skills read these documents instead of keeping separate copies of the rules. Editorial standards are maintained in Chinese.

## 规则归属

| 内容 | 唯一维护位置 |
| --- | --- |
| 收录范围、文件命名、条目字段、引用呈现 | [条目撰写标准](standards/条目撰写标准.md) |
| 星级与证据确定性的含义 | [证据评级规范](standards/证据评级规范.md) |
| 原始来源核验、十维检查、审计判定与留痕 | [条目权威性审计标准](standards/条目权威性审计标准.md) |
| 如何发现缺口、定义和计算覆盖率 | [条目完整性审计标准](standards/条目完整性审计标准.md) |
| 复审周期、条目登记、验证和发布流程 | [维护说明](tracking/维护说明.md) |

修改某类要求时，更新其唯一维护文档和对应实现；其他位置保留链接及必要的读者提示，不复制规则全文或另设阈值。

## 当前状态与历史记录

- [待完善清单](tracking/待完善条目清单.md)只维护尚需处理的主题与工作，不复制已完成的修复报告。
- `tracking/entries.json` 维护条目 ID、双语路径及复审元数据；网页数量和复审状态由它生成。
- 工程事实以仓库的 `package.json`、`package-lock.json` 和 `.github/workflows/` 为准，文档说明用法和原因，不另记一套依赖版本或执行命令定义。
- [历史审计档案](https://github.com/Jageri/modern-wellness-wiki/tree/main/audits)和[版本历史](https://github.com/Jageri/modern-wellness-wiki/blob/main/CHANGELOG.md)保留当时的结论与数字。查看时以记录日期为准，不作为现行规则或实时库存。
