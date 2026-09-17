# PMID 验证日志

所有最终正文 PMID 均逐一打开 PubMed 原始页面，并以 PubMed 页面显示的标题、作者与期刊信息核对；另用 NCBI ESummary 交叉核对卷期页码与 DOI。

| 引用 | PMID | PubMed 原始页 | 标题匹配 | 作者匹配 | 期刊匹配 | 核对结果 |
|---|---:|---|---|---|---|---|
| Mataix-Cols et al., 2024 | 38091000 | https://pubmed.ncbi.nlm.nih.gov/38091000/ | ✅ All-Cause and Cause-Specific Mortality Among Individuals With Hypochondriasis | ✅ Mataix-Cols D; Isomura K; Sidorchuk A; et al. | ✅ JAMA Psychiatry, 81(3):284–291 | ✅ |
| Axelsson & Hedman-Lagerlöf, 2019 | 31859542 | https://pubmed.ncbi.nlm.nih.gov/31859542/ | ✅ Cognitive behavior therapy for health anxiety: systematic review and meta-analysis of clinical efficacy and health economic outcomes | ✅ Axelsson E; Hedman-Lagerlöf E | ✅ Expert Rev Pharmacoecon Outcomes Res, 19(6):663–676 | ✅ |
| Lai et al., 2026 | 42169209 | https://pubmed.ncbi.nlm.nih.gov/42169209/ | ✅ The comparative effectiveness of psychological interventions for health anxiety: systematic review and a network meta-analysis of randomised controlled trials | ✅ Lai L; Liu Y; Axelsson E; et al. | ✅ Br J Psychiatry, online ahead of print:1–10 | ✅ |
| Axelsson & Hedman-Lagerlöf, 2023 | 37614181 | https://pubmed.ncbi.nlm.nih.gov/37614181/ | ✅ Unwanted outcomes in cognitive behavior therapy for pathological health anxiety: a systematic review and a secondary original study of two randomized controlled trials | ✅ Axelsson E; Hedman-Lagerlöf E | ✅ Expert Rev Pharmacoecon Outcomes Res, 23(9):1001–1015 | ✅ |

## 验证过程记录

- 逐项访问上述四个 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始页面，检查标题、作者与期刊。
- 使用 NCBI ESummary 交叉核对：`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=38091000,31859542,42169209,37614181&retmode=json`。
- PMID 38091000 的期刊全文进一步核对样本、事件数、HR/CI、调整变量、局限、资助与披露：https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786 。
- 最终中英文 PMID 集合完全一致：`{31859542, 37614181, 38091000, 42169209}`。
