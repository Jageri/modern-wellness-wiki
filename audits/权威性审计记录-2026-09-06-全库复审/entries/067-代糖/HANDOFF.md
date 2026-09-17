# HANDOFF - 067 代糖

## 状态

**FIXED**

## 最终路径

- 中文旧路径：`wiki_zh/吃/? 代糖.md`
- 中文最终路径：`wiki_zh/吃/~ 代糖.md`
- 中文旧路径删除：**是**
- 英文旧路径：`wiki_en/Diet/~ Artificial Sweeteners.md`
- 英文最终路径：`wiki_en/Diet/~ Artificial Sweeteners.md`（路径不变，正文已修正）
- 英文旧路径删除：不适用（最终路径与原路径相同）

## 最终 PMID

- 中文：`30602577, 36638072, 39085903, 40913681`
- 英文：`30602577, 36638072, 39085903, 40913681`
- 集合一致性：**PASS**
- 原始页逐条核验：**PASS（4/4）**

## 改动摘要

1. 中文历史 `?` 前缀统一迁移为 `~`；无数字文件名前缀，因为不存在直接、稳定、可泛化的全因死亡因果效应。
2. 重写核心结论：水和无糖饮品优先；代糖饮料可作为替代含糖饮料的过渡工具，但不是无限量健康饮料。
3. 同时呈现观察性高摄入死亡关联与替代含糖饮料时的相反方向，避免单向选择性叙事。
4. 纳入 2026 RCT Meta 分析，明确短期小幅体重效应、I²=84%、长期亚组不显著，且不是死亡证据。
5. 修正 WHO 建议的范围：有条件建议；排除既有糖尿病；糖醇不在定义内；不替代单个甜味剂毒理安全评估。
6. 删除未充分支持的儿童味觉发育和普遍肠道菌群断言。
7. 补充 IARC 2B 危害识别与 JECFA ADI 风险评估的区别、糖醇胃肠反应和苯丙酮尿症边界。
8. 中英文证据、数字、限制、行动建议和 PMID 集合完全同步。

## 核验命令与结果

以下命令在 2026-09-16 对最终文件执行：

```bash
find 'audits/权威性审计记录-2026-09-06-全库复审/entries/067-代糖' -maxdepth 1 -type f -exec basename {} \; | sort
test ! -e 'wiki_zh/吃/? 代糖.md'
test -f 'wiki_zh/吃/~ 代糖.md'
test -f 'wiki_en/Diet/~ Artificial Sweeteners.md'
rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_zh/吃/~ 代糖.md' 'wiki_en/Diet/~ Artificial Sweeteners.md'
rg -n '[[:blank:]]+$' 'wiki_zh/吃/~ 代糖.md' 'wiki_en/Diet/~ Artificial Sweeteners.md' 'audits/权威性审计记录-2026-09-06-全库复审/entries/067-代糖/'
git diff --check -- 'wiki_zh/吃/? 代糖.md' 'wiki_zh/吃/~ 代糖.md' 'wiki_en/Diet/~ Artificial Sweeteners.md' 'audits/权威性审计记录-2026-09-06-全库复审/entries/067-代糖/'
```

结果：

- 专属目录文件数与名称：**PASS，恰好 3 个文件：`AUDIT.md`、`HANDOFF.md`、`PMID_VERIFICATION.md`**。
- 路径：**PASS，中文旧路径不存在，中文和英文最终路径存在**。
- PMID：**PASS，中英文均为同一 4 个 PMID**。
- 行尾空格：**PASS，无匹配**。
- `git diff --check`：**PASS，无输出**。

## 边界

- 未编辑 `INDEX.md`、`PROGRESS.md`、全局 `PMID_VERIFICATION.md`、批次报告、其他条目或仓库根目录 `entries/`。
- 未执行 git commit 或 push。
- 本条目提供群体证据解释，不替代糖尿病、苯丙酮尿症或个体营养治疗方案。
