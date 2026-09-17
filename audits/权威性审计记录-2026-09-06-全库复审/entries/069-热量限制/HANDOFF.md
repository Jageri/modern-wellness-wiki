# 069 热量限制 - Handoff

## 状态

**FIXED**

## 最终路径

- 中文：`wiki_zh/吃/饮食模式/~ 热量限制.md`
- 英文：`wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md`

## 旧路径删除情况

- `wiki_zh/吃/饮食模式/≈ 热量限制.md`：已删除并迁移为 `~`。
- 英文原路径已为 `wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md`：路径不变，内容已重写。
- 未创建数字前缀；现有数字只涉及恒河猴死亡或人体替代终点，不是直接、准确且可泛化的人类全因死亡/寿命效果。

## 最终 PMID 列表

`22932268, 24691430, 26187233, 26332798, 28094793, 28228420, 31303390, 37118425, 40247012`

## 改动摘要

- 将核心结论改为“尚无人类随机试验证明延寿或降低全因死亡”，严格分开动物寿命、人体代谢指标和 DNA 甲基化替代指标。
- 澄清 CALERIE 计划 25%、实际约 12%，样本为 218 名较年轻、健康、无肥胖成人，不能直接外推。
- 把威斯康星恒河猴 HR 写明为对照相对限制组，并并列 NIA 阴性结果；不再写“死亡率降低 2.9 倍”。
- 补充瘦体重约下降 2.0 kg、多个部位骨密度下降、人体长期骨折和其他风险未知。
- 披露 DunedinPACE 与 PhenoAge/GrimAge 结果不一致、相关发明商业许可 COI，以及恒河猴联合分析作者的企业/咨询关系。
- 删除“八分饱已有显著收益”、16:8、5:2、Blue Zones 最小晚餐和固定 `<1200 kcal/天` 等未由本条目证据验证的处方。
- 中英文结构、数字、结论、风险、人群边界和 9 个 PMID 已同步。

## 核验命令与结果

```bash
test -f 'wiki_zh/吃/饮食模式/~ 热量限制.md' \
  && test -f 'wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md' \
  && test ! -e 'wiki_zh/吃/饮食模式/≈ 热量限制.md'
# PASS

find 'audits/权威性审计记录-2026-09-06-全库复审/entries/069-热量限制' -maxdepth 1 -type f -print | sort
# 恰好 3 个文件：AUDIT.md、HANDOFF.md、PMID_VERIFICATION.md

rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_zh/吃/饮食模式/~ 热量限制.md' | sed 's#.*\/##' | sort -u
rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md' | sed 's#.*\/##' | sort -u
# 两侧均为：22932268 24691430 26187233 26332798 28094793 28228420 31303390 37118425 40247012

git diff --check -- 'wiki_zh/吃/饮食模式/≈ 热量限制.md' 'wiki_zh/吃/饮食模式/~ 热量限制.md' 'wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md' 'audits/权威性审计记录-2026-09-06-全库复审/entries/069-热量限制'
# PASS
```

## 边界

- 未编辑 `INDEX.md`、`PROGRESS.md`、全局 `PMID_VERIFICATION.md`、批次报告或其他文章。
- 未执行 `git add`、`git commit` 或 `git push`。

## 2026-09-17 二次抽查整改

- CALERIE 人数与年龄口径已统一；恒河猴联合分析的利益冲突披露已补齐。
- 最终 9 个 PMID 与 `~` 前缀均不变。
