# PMID 验证日志

| 条目# | 引用 | PMID | 逐页获取结果 | 标题匹配 | 作者匹配 | 期刊/年份匹配 | 核心用途 | 日期 |
|---|---|---:|---|---|---|---|---|---|
| 029 | Cruz-Jentoft et al. 2019 | 30312372 | ✅ PubMed 页面及 NCBI E-utilities | ✅ | ✅ | ✅ | EWGSOP2 定义、确认与严重程度 | 2026-09-08 |
| 029 | Xu et al. 2022 | 34315158 | ✅ PubMed 页面及 NCBI E-utilities | ✅ | ✅ | ✅ | 56 项研究、42,108 人、全因死亡 HR 2.00 | 2026-09-08 |
| 029 | Chen et al. 2023 | 38030985 | ✅ PubMed 页面及 NCBI E-utilities | ✅ | ✅ | ✅ | 50 项 RCT 抗阻训练网络 Meta | 2026-09-08 |
| 029 | Yoshimura et al. 2025 | 39955964 | ✅ PubMed 页面及 NCBI E-utilities | ✅ | ✅ | ✅ | 13 项 RCT 蛋白干预、极低证据质量 | 2026-09-08 |
| 029 | Deutz et al. 2014 | 24814383 | ✅ PubMed 页面及 NCBI E-utilities | ✅ | ✅ | ✅ | ESPEN 蛋白质建议区间 | 2026-09-08 |

## 逐页核验说明

- 每个最终保留 PMID 均直接打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/`。
- PubMed 个别页面触发验证码或返回空渲染时，使用 NCBI 官方 E-utilities `efetch/esummary` 再核对 PMID、标题、首位作者、期刊与年份；未依赖搜索摘要写入 PMID。
- 最终正文未保留任何未核验 PMID。
