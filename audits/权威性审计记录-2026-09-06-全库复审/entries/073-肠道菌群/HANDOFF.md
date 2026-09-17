# 073 肠道菌群 - HANDOFF

## 状态

**FIXED**

本次修改了正文、引用集合及中文路径，因此不得标记 PASS。

## 最终双语路径

- 中文：`wiki_zh/吃/~ 肠道菌群.md`
- 英文：`wiki_en/Diet/~ Gut Microbiota.md`

## 旧路径

- `wiki_zh/吃/≈ 肠道菌群.md`：已删除并迁移为 `~`。
- 英文原路径已是 `wiki_en/Diet/~ Gut Microbiota.md`：路径不变，内容已重写。
- 未使用数字前缀；没有直接、准确且可泛化的人体全因死亡或寿命干预效果。

## 最终 PMID

`29757343, 30349083, 32531291, 33297486, 34256014, 38395525, 39290661`

7 个 PMID 均已亲自打开 PubMed 原始页并逐条记录；PubMed 反爬导致部分页面为空载或出现人机检查时，以 NCBI PubMed E-utilities XML 复核元数据和 COI 字段。

## 改动摘要

1. 撤销“菌群失调与多病强相关”对寿命价值的暗示，明确尚无人类随机证据证明改变菌群能降低全因死亡或延长寿命。
2. 将百岁老人菌群写回横断面关联，删除“高多样性/特定产丁酸菌即可解释长寿”的外推。
3. 精确呈现纤维 Meta 的菌群替代终点，并明确 α 多样性未提高、替代指标不能换算为临床获益。
4. 将 Wastyk 2021 限定为每组 18 人、17 周的探索性 RCT，补入 2024 年 87 人发酵蔬菜阴性 RCT 和 Wastyk 作者的微生物公司利益。
5. 删除“多菌株益生菌至少 4 周”规则，改为具体菌株/组合、适应证和安全性评价。
6. 删除 van Nood 2013 的孤立“94% 治愈率”，改用 2024 AGA 指南限定 FMT 的复发 CDI 适应证、免疫抑制边界和非 CDI 临床试验边界。
7. 将抗生素恢复描述限定为 12 名健康男性的特殊三联方案，不允许为保护菌群而拒绝或自行缩短必要治疗。
8. 中英文的结论、数字、安全边界与 7 个 PMID 已同步。

## 核验命令与结果

```bash
test -f 'wiki_zh/吃/~ 肠道菌群.md' \
  && test -f 'wiki_en/Diet/~ Gut Microbiota.md' \
  && test ! -e 'wiki_zh/吃/≈ 肠道菌群.md'
# PASS

find 'audits/权威性审计记录-2026-09-06-全库复审/entries/073-肠道菌群' \
  -maxdepth 1 -type f -print | sort
# PASS：恰好 AUDIT.md、HANDOFF.md、PMID_VERIFICATION.md

rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_zh/吃/~ 肠道菌群.md' | sed 's#.*/##' | sort -u
rg -o 'pubmed\.ncbi\.nlm\.nih\.gov/[0-9]+' 'wiki_en/Diet/~ Gut Microbiota.md' | sed 's#.*/##' | sort -u
# PASS：两侧均为 29757343、30349083、32531291、33297486、34256014、38395525、39290661

rg -n '[[:blank:]]+$' \
  'wiki_zh/吃/~ 肠道菌群.md' \
  'wiki_en/Diet/~ Gut Microbiota.md' \
  'audits/权威性审计记录-2026-09-06-全库复审/entries/073-肠道菌群'/*.md
# PASS：无行尾空白

git diff --check -- \
  'wiki_zh/吃/≈ 肠道菌群.md' \
  'wiki_zh/吃/~ 肠道菌群.md' \
  'wiki_en/Diet/~ Gut Microbiota.md' \
  'audits/权威性审计记录-2026-09-06-全库复审/entries/073-肠道菌群'
# PASS
```

## 边界

- 未编辑 `INDEX.md`、`PROGRESS.md`、全局 `PMID_VERIFICATION.md`、批次报告或其他文章。
- 未执行 `git add`、`git commit` 或 `git push`。
