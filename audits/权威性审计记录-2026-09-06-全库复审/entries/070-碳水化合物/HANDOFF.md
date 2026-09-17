# 070 碳水化合物 - HANDOFF

## 状态

**FIXED**

本次修改了正文内容、引用集合与中文路径，因此不得标记 PASS。

## 最终路径

- 中文：`wiki_zh/吃/饮食模式/~ 碳水化合物.md`
- 英文：`wiki_en/Diet/Dietary Patterns/~ Carbohydrates.md`

## 旧路径删除情况

- `wiki_zh/吃/饮食模式/≈ 碳水化合物.md`：已删除，并迁移为 `~`。
- 英文原路径已是 `~`，未变更路径。

## 最终 PMID 列表

`30122560, 36586217, 38374828, 30638909, 33441384, 38237807`

中英文集合一致，6 个 PMID 均已亲自打开 PubMed 原始页并在 `PMID_VERIFICATION.md` 逐条记录。

## 改动摘要

1. 将“50–55% 是长期死亡率最低的通用区间”改为特定队列/汇总中的观察性 U 形关联，禁止作为个人处方。
2. 增加 2023 年观察性汇总与 2024 年 NHANES 反面证据，明确证据不一致。
3. 分开宏量营养素占比、食物来源/纤维质量、替代营养素与糖尿病短期代谢 RCT。
4. 精确更正低碳水糖尿病缓解定义，保留停药定义下不显著、12 个月证据稀少和效果减弱。
5. 补充低 BMI 人群中 LDL 可升高的试验汇总，以及用药低血糖、胃肠耐受和急症信号。
6. 披露 IAFNS 产业汇资、低碳水食谱书/调整碳水饮食书籍版税等利益冲突背景。
7. 删除杂粮单餐、进餐顺序等窄代谢终点的过度细节，使条目回到长寿与长期健康决策主线。

## 核验命令与结果

```text
git diff --check -- <old-zh> <new-zh> <en> <audit-dir>
结果：PASS（无空白错误）

rg -n '[[:blank:]]+$' <new-zh> <en> <audit-dir>/*.md
结果：PASS（无行尾空白）

rg -o 'PMID: [0-9]+' <new-zh> | sort -u
rg -o 'PMID: [0-9]+' <en> | sort -u
结果：PASS（中英文均为 30122560, 30638909, 33441384, 36586217, 38237807, 38374828）

test ! -e 'wiki_zh/吃/饮食模式/≈ 碳水化合物.md'
test -e 'wiki_zh/吃/饮食模式/~ 碳水化合物.md'
test -e 'wiki_en/Diet/Dietary Patterns/~ Carbohydrates.md'
结果：PASS

find 'audits/权威性审计记录-2026-09-06-全库复审/entries/070-碳水化合物' -maxdepth 1 -type f -print | sort
结果：PASS（恰好 AUDIT.md、PMID_VERIFICATION.md、HANDOFF.md）
```

## 边界

- 未编辑 `INDEX.md`、`PROGRESS.md`、全局 `PMID_VERIFICATION.md`、批次报告或其他条目。
- 未执行 `git commit` 或 `git push`。
