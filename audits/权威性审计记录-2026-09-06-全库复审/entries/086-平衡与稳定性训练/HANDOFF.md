# 086 平衡与稳定性训练 — HANDOFF

## 状态

**FIXED**

## 已完成

- 修订中文条目：`wiki_zh/动/日常/~ 平衡与稳定性训练.md`
- 修订英文条目：`wiki_en/Exercise/Daily/~ Balance and Stability Training.md`
- 保留 `~` 数字前缀；没有可准确归属于平衡训练的全因死亡或寿命效果量。
- 逐项区分跌倒次数、跌倒人数、伤害性跌倒次数、伤害性跌倒人数、骨折、功能测试和全因死亡。
- 分开社区老人、养老机构、神经疾病、助行受限人群与年轻一般成年人。
- 分开平衡/功能训练、多种运动组合、单纯抗阻训练与多因素干预。
- 双语正文引用与 PMID 集合一致；所有最终 PMID 已打开 PubMed 原页并记录。

## 关键验收口径

- 可接受结论：社区老年人中，持续的平衡/功能训练减少跌倒；许多有效方案包含力量训练。
- 不可接受外推：平衡测试改善 = 少跌倒；少跌倒 = 少骨折；少跌倒 = 延寿；FAMILY 复合方案 = 单一动作效果。
- 骨折：最新 USPSTF 合并结果不显著，保留“不确定”。
- 死亡/寿命：无平衡训练直接获益数字，`~` 必须保留。

## 文件范围

本次只编辑目标中英文条目，并在以下目录新增恰好三份文件：

`audits/权威性审计记录-2026-09-06-全库复审/entries/086-平衡与稳定性训练/`

- `AUDIT.md`
- `PMID_VERIFICATION.md`
- `HANDOFF.md`

未编辑共享索引、其他条目或仓库根 `entries/`，未 commit，未 push。仓库原有大量未提交变更均保留。

## 建议验收命令

```bash
find 'audits/权威性审计记录-2026-09-06-全库复审/entries/086-平衡与稳定性训练' -maxdepth 1 -type f -print
rg -o 'PMID: [0-9]+' 'wiki_zh/动/日常/~ 平衡与稳定性训练.md' | sort -u
rg -o 'PMID: [0-9]+' 'wiki_en/Exercise/Daily/~ Balance and Stability Training.md' | sort -u
git diff --check
```
