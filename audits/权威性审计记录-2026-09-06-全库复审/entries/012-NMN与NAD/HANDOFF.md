# 012「NMN 与 NAD+」交接

## 状态

- 独立状态：FIXED
- 结论：已完成完整权威性复审与双语同步。
- 中文路径已按非数字规则从 `?` 迁移为 `~`。
- 证据星级维持 ⭐⭐，但重新定义为“人体短期替代终点有信号、临床抗衰老/延寿未证实”。
- 未修改 INDEX、PROGRESS、总日志、批次报告或其他条目；未执行 git 操作。

## 主要变化

1. 把“提高 NAD+”与“改善健康/延长寿命”明确拆开。
2. 更新至 2026 年系统综述：15 项 RCT，剂量 250–2,000 mg/天，最长 24 周，多数代谢结局阴性，短期安全性尚可但长期未知。
3. 保留 Yoshino 2021 的阳性替代终点，同时标注特定人群、小样本和专利/许可利益。
4. 纳入 Pencina 2023 的阴性运动/代谢终点及产业关系。
5. 删除动物延寿外推、无依据的肿瘤机制劝诫、具体自用剂量、价格及单一实验室追踪建议。
6. 更新美国 FDA 2025-09-29 监管判断，并强调不构成功效/安全批准。

## 交付文件

- `wiki_zh/吃/补剂/~ NMN与NAD+.md`
- `wiki_en/Diet/Supplements/~ NMN & NAD+.md`
- `audits/权威性审计记录-2026-09-06-全库复审/entries/012-NMN与NAD/AUDIT.md`
- `audits/权威性审计记录-2026-09-06-全库复审/entries/012-NMN与NAD/PMID_VERIFICATION.md`
- `audits/权威性审计记录-2026-09-06-全库复审/entries/012-NMN与NAD/HANDOFF.md`

## 验证命令

```text
PASS old-question-path-absent
PASS bilingual-files-exist
PASS audit-file-count=3
PASS bilingual-pmid-sets-match
PMID: 33888596
PMID: 36740954
PMID: 39116016
PMID: 42514320
PASS each-retained-pmid-in-zh-en-log
PASS all-deliverables-nonempty
PASS key-claim-markers=14
PASS PubMed 42514320 HTTP 203
PASS PubMed 39116016 HTTP 203
PASS PubMed 33888596 HTTP 203
PASS PubMed 36740954 HTTP 203
FINAL PASS: paths, exact 3-file audit directory, no placeholders, bilingual PubMed links aligned
```

说明：PubMed 对命令行请求返回 203（2xx 成功响应）；每个 PMID 另已在网页工具中实际打开对应 PubMed 原页并核对元数据。禁用表述扫描无命中，包括动物延寿外推、`250–500 mg` 自用建议、价格、单一实验室追踪建议和“为肿瘤细胞供能”的确定性说法。
