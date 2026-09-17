# PMID 验证日志

验证日期：2026-09-08
验证方式：逐个直接打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/`；若页面触发 PubMed 的浏览器检查，同时以限定到同一 PubMed 原页的精确检索回读完整元数据。四个原页均由命令行再次请求并返回 HTTP 203，最终 URL 未跳离 PubMed。

| 条目 | 引用 | PMID | PubMed 原页已打开 | 标题 | 作者/机构 | 期刊、年份、卷页 | DOI | 结果 |
|---|---|---:|---|---|---|---|---|---|
| 020 | Park et al. IARC Working Group Report | 41812202 | ✅ | ✅ | ✅ Park JY, Lee YC, Moayyedi P, et al. | ✅ *N Engl J Med*. 2026;394(11):1131-1137 | ✅ 10.1056/NEJMsb2515372 | PASS |
| 020 | Ford et al. updated meta-analysis | 39824392 | ✅ | ✅ | ✅ Ford AC, Yuan Y, Park JY, Forman D, Moayyedi P | ✅ *Gastroenterology*. 2025;169(2):261-276 | ✅ 10.1053/j.gastro.2024.12.033 | PASS |
| 020 | Chinese adult clinical-practice guideline | 42427040 | ✅ | ✅ | ✅ Helicobacter pylori Study Group, Chinese Society of Gastroenterology, Chinese Medical Association | ✅ *Zhonghua Nei Ke Za Zhi*. 2026;65(7):651-680 | ✅ 10.3760/cma.j.cn112138-20260330-00183 | PASS |
| 020 | Chey et al. ACG guideline | 39626064 | ✅ | ✅ | ✅ Chey WD, Howden CW, Moss SF, Morgan DR, Greer KB, Grover S, Shah SC | ✅ *Am J Gastroenterol*. 2024;119(9):1730-1753 | ✅ 10.14309/ajg.0000000000002968 | PASS |

## PMID 集合

`39824392, 39626064, 41812202, 42427040`

正文中没有其他 PMID。DailyMed 产品说明书没有 PMID，按其官方标签页直接核验。
