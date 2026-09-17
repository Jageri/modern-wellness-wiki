# 046 芬兰式干桑拿 - PMID 验证日志

验证日期：2026-09-09
验证人：`audit_046_dry_sauna_retry`

每个最终保留的 PMID 均逐个打开 `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`。PubMed 原始页的页面抓取偶发 reCAPTCHA 或空正文；此时并未凭搜索摘要猜测，而是再通过 NCBI E-utilities `efetch.fcgi?db=pubmed&id=<PMID>&retmode=xml` 逐条复核。

| 引用 | PMID | PubMed 原始页逐个打开结果 | NCBI 复核 | 题名 | 作者 | 期刊/年份 | DOI | 结果 |
|---|---:|---|---|---|---|---|---|---|
| Laukkanen et al. 2015 | [25705824](https://pubmed.ncbi.nlm.nih.gov/25705824/) | 已直接访问；本次一次返回 reCAPTCHA，另由 PubMed 搜索页返回完整记录 | E-utilities XML 成功 | Association between sauna bathing and fatal cardiovascular and all-cause mortality events | Tanjaniina Laukkanen; Hassan Khan; Francesco Zaccardi; Jari A Laukkanen | JAMA Internal Medicine, 2015 | 10.1001/jamainternmed.2014.8187 | ✅ 一致 |
| Laukkanen et al. 2018 | [30486813](https://pubmed.ncbi.nlm.nih.gov/30486813/) | 已直接访问；页面正文抓取为空，全文以 PMC/BMC 复核 | E-utilities XML 成功 | Sauna bathing is associated with reduced cardiovascular mortality and improves risk prediction in men and women: a prospective cohort study | Tanjaniina Laukkanen; Setor K Kunutsor; Hassan Khan; et al. | BMC Medicine, 2018 | 10.1186/s12916-018-1198-0 | ✅ 一致 |
| Kivimäki et al. 2015 | [26436738](https://pubmed.ncbi.nlm.nih.gov/26436738/) | 已直接访问；本次返回 reCAPTCHA，另由 PubMed 搜索页返回记录 | E-utilities XML 成功 | The Link Between Sauna Bathing and Mortality May Be Noncausal | Mika Kivimäki; Marianna Virtanen; Jane E Ferrie | JAMA Internal Medicine, 2015 | 10.1001/jamainternmed.2015.3426 | ✅ 一致 |
| Hamaya et al. 2025 | [41049507](https://pubmed.ncbi.nlm.nih.gov/41049507/) | 已直接访问；完整显示题名、作者、期刊、PMID、DOI、摘要和利益冲突 | E-utilities XML 成功 | Non-acute effects of passive heating interventions on cardiometabolic risk and vascular health: systematic review and meta-analysis of randomized controlled trials | Rikuta Hamaya; Yuki Joyama; Tomohiro Miyata; et al. | American Journal of Preventive Cardiology, 2025 | 10.1016/j.ajpc.2025.101082 | ✅ 一致 |
| Hussain & Cohen 2018 | [29849692](https://pubmed.ncbi.nlm.nih.gov/29849692/) | 已直接访问；完整显示题名、作者、期刊、PMID、DOI 和摘要 | E-utilities XML 成功 | Clinical Effects of Regular Dry Sauna Bathing: A Systematic Review | Joy Hussain; Marc Cohen | Evidence-Based Complementary and Alternative Medicine, 2018 | 10.1155/2018/1857413 | ✅ 一致 |
| Hannuksela & Ellahham 2001 | [11165553](https://pubmed.ncbi.nlm.nih.gov/11165553/) | 已直接访问；页面正文抓取为空，另由 PubMed 搜索页返回完整记录和摘要 | E-utilities XML 成功 | Benefits and risks of sauna bathing | Minna L Hannuksela; Samer Ellahham | The American Journal of Medicine, 2001 | 10.1016/S0002-9343(00)00671-9 | ✅ 一致 |

## 双语 PMID 集合核对

- 中文：`11165553, 25705824, 26436738, 29849692, 30486813, 41049507`
- 英文：`11165553, 25705824, 26436738, 29849692, 30486813, 41049507`
- 去重、排序后比较：`PASS`
- 未经验证 PMID：无
