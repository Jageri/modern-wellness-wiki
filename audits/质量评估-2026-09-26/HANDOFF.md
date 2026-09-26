# 整改交接

日期：2026-09-26。

- 状态：本地整改与验证完成，未提交、推送或部署。
- 范围和验证：见 [REMEDIATION.md](REMEDIATION.md)；原问题与抽样边界见 [REPORT.md](REPORT.md)；新增和抽查论文的原始记录核验见 [PMID_VERIFICATION.md](PMID_VERIFICATION.md)。
- 已修正文献：葡萄糖胺中英文补入 PMID 36971848；17 对条目整理既有引用。不是全库重新医学复审。
- 自动检查：`npm run check`；依赖安全检查：`npm audit --audit-level=moderate`。新增内容通过 `docs/tracking/entries.json` 登记，不修改总数常量。
- 持续维护：依照条目清单实际复审，不能只改日期；新选题、全库旧星级实质复评、独立医学专家署名复核仍在现行待办中。
- 发布后需确认：远程 CI、线上修订页面、对应新审计链接与 GitHub Pages 部署结果。此次本地浏览器通过不等于线上验收。
