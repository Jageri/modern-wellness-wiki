# 068 鸡蛋 - Handoff

## 状态

**FIXED**

## 最终路径

- 中文：`wiki_zh/吃/~ 鸡蛋.md`
- 英文：`wiki_en/Diet/~ Eggs.md`

## 旧路径删除情况

- `wiki_zh/吃/≈ 鸡蛋.md`：已删除并迁移为 `~`。
- 英文原路径已为 `wiki_en/Diet/~ Eggs.md`：路径不变，内容已重写。
- 未创建任何数字死亡率前缀；现有证据不足以支持直接、稳定且可泛化的全因死亡/寿命效果数字。

## 最终 PMID 列表

`31838890, 32132002, 32635569, 33786032, 35711545, 39934049`

## 改动摘要

- 撤销“每天 1–2 个全蛋对健康人群安全”的统一处方和 ⭐⭐⭐⭐ 评级，改为观察性死亡证据矛盾、无长期硬终点 RCT 的 ⭐⭐。
- 用 2025 更新伞状综述和 2022 死亡 Meta 分析呈现高对低、线性剂量和非线性模型的差异；不把小幅观察性 RR 写成个人因果风险。
- 删除只突出中国队列保护性结果的写法，以 2020 CVD Meta 的总体和地区分层结果取代，并强调发病不等于死亡。
- 增加健康人短期 RCT 的 LDL-C 和 LDL-C/HDL-C 定量结果，纠正“膳食胆固醇影响有限”的泛化。
- 补充产业资助与作者倡议立场的双向偏倚、食物问卷和混杂、地域外推、替代食物、发表偏倚与高风险人群边界。
- 中英文结构、数字、核心结论、风险边界和 6 个 PMID 已同步。

## 核验命令与结果

```bash
test -f 'wiki_zh/吃/~ 鸡蛋.md' \
  && test -f 'wiki_en/Diet/~ Eggs.md' \
  && test ! -e 'wiki_zh/吃/≈ 鸡蛋.md'
# PASS

find 'audits/权威性审计记录-2026-09-06-全库复审/entries/068-鸡蛋' -maxdepth 1 -type f -print | sort
# 恰好 3 个文件：AUDIT.md、HANDOFF.md、PMID_VERIFICATION.md

rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_zh/吃/~ 鸡蛋.md' | sed 's#.*\/##' | sort -u
rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_en/Diet/~ Eggs.md' | sed 's#.*\/##' | sort -u
# 两侧均为：31838890 32132002 32635569 33786032 35711545 39934049

git diff --check -- 'wiki_zh/吃/≈ 鸡蛋.md' 'wiki_zh/吃/~ 鸡蛋.md' 'wiki_en/Diet/~ Eggs.md' 'audits/权威性审计记录-2026-09-06-全库复审/entries/068-鸡蛋'
# PASS
```

## 边界

- 未编辑 `INDEX.md`、`PROGRESS.md`、全局 `PMID_VERIFICATION.md`、批次报告或其他文章。
- 未执行 `git add`、`git commit` 或 `git push`。
