# PMID 验证日志

验证日期：2026-09-09

流程：对最终正文中的每个 PMID，逐个打开 `https://pubmed.ncbi.nlm.nih.gov/<PMID>/` 原始页，核对标题、作者、期刊、年份和 PMID。PubMed 反爬页或空页响应时，仍记录该原始页打开结果，并使用 NCBI ESummary 及 PubMed 检索记录交叉核对；PMID 41341515 另由 PubMed 页面的 citation meta 字段直接确认。

| 条目# | 引用 | PMID | PubMed 原始页 | 打开/交叉核对结果 | 标题 | 作者 | 期刊/年份 | 验证人 |
|---|---|---:|---|---|---|---|---|---|
| 050 | Tähkämö 2019 | 30311830 | https://pubmed.ncbi.nlm.nih.gov/30311830/ | ✅ 已逐个打开；PubMed 记录 + NCBI ESummary 交叉核对 | ✅ | ✅ Tähkämö / Partonen / Pesonen | ✅ Chronobiology International, 2019 | audit-050 |
| 050 | Schöllhorn 2023 | 36854795 | https://pubmed.ncbi.nlm.nih.gov/36854795/ | ✅ 已逐个打开；PubMed 记录 + NCBI ESummary + PMC9974389 | ✅ | ✅ Schöllhorn et al. | ✅ Communications Biology, 2023 | audit-050 |
| 050 | Luna-Rangel 2025 | 41341515 | https://pubmed.ncbi.nlm.nih.gov/41341515/ | ✅ 已逐个打开；citation meta + NCBI ESummary + PMC12668929 | ✅ | ✅ Luna-Rangel et al. | ✅ Frontiers in Neurology, 2025 | audit-050 |
| 050 | Singh 2023 | 37593770 | https://pubmed.ncbi.nlm.nih.gov/37593770/ | ✅ 已逐个打开；PubMed 记录 + NCBI ESummary + PMC10436683 | ✅ | ✅ Singh et al. | ✅ Cochrane Database of Systematic Reviews, 2023 | audit-050 |
| 050 | He 2020 | 32040492 | https://pubmed.ncbi.nlm.nih.gov/32040492/ | ✅ 已逐个打开（返回反爬页）；PubMed 检索记录 + NCBI ESummary 交叉核对 | ✅ | ✅ He / Tu / Xiao / Su / Tang | ✅ PLOS ONE, 2020 | audit-050 |
| 050 | Hartstein 2024 | 38806392 | https://pubmed.ncbi.nlm.nih.gov/38806392/ | ✅ 已逐个打开；PubMed 原始页正文 + NCBI ESummary | ✅ | ✅ Hartstein et al. | ✅ Sleep Health, 2024 | audit-050 |
| 050 | Windred 2024 | 39405349 | https://pubmed.ncbi.nlm.nih.gov/39405349/ | ✅ 已逐个打开；PubMed 记录 + NCBI ESummary 交叉核对 | ✅ | ✅ Windred et al. | ✅ PNAS, 2024 | audit-050 |
| 050 | Liang 2024 | 38053269 | https://pubmed.ncbi.nlm.nih.gov/38053269/ | ✅ 已逐个打开；PubMed 原始页正文 + NCBI ESummary | ✅ | ✅ Liang et al. | ✅ Occupational and Environmental Medicine, 2024 | audit-050 |
| 050 | Teran 2020 | 32168244 | https://pubmed.ncbi.nlm.nih.gov/32168244/ | ✅ 已逐个打开；PubMed 原始页正文完整显示 | ✅ | ✅ Teran et al. | ✅ Optometry and Vision Science, 2020 | audit-050 |

## 最终 PMID 集合

`30311830, 36854795, 41341515, 37593770, 32040492, 38806392, 39405349, 38053269, 32168244`

中英文正文 PMID 集合已核对一致。
