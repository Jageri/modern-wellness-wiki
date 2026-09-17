# 053 果汁 - PMID 验证日志

验证日期：2026-09-16

方法：每个最终 PMID 均逐一打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始页，核对标题、作者、期刊和年份；同时使用 PubMed EFetch XML 与可用的 PMC/Europe PMC 全文核对效果量、人群、暴露定义、限制及利益冲突。

| 引用 | PMID | PubMed 原始页 | 标题/作者/期刊匹配 | 内容核验 | 结果 |
|---|---:|---|---|---|---|
| Collin LJ et al. 2019 | 31099861 | https://pubmed.ncbi.nlm.nih.gov/31099861/ | ✅ *Association of Sugary Beverage Consumption With Mortality Risk in US Adults*; Collin et al.; *JAMA Network Open* | ✅ REGARDS 13,440 人；每 12 oz/日果汁 HR 1.24（1.09–1.42）；SSB HR 1.06（0.96–1.16）；合并糖饮料 HR 1.11（1.03–1.19） | PASS |
| Pan B et al. 2022 | 34121531 | https://pubmed.ncbi.nlm.nih.gov/34121531/ | ✅ *Association of soft drink and 100% fruit juice consumption with all-cause mortality, cardiovascular diseases mortality, and cancer mortality*; Pan et al.; *Critical Reviews in Food Science and Nutrition* | ✅ 13 项研究、1,539,127 人；100% 果汁全因和 CVD 死亡关联不确定 | PASS |
| Zhang Z et al. 2022 | 35631268 | https://pubmed.ncbi.nlm.nih.gov/35631268/ | ✅ *A Prospective Study of Fruit Juice Consumption and the Risk of Overall and Cardiovascular Disease Mortality*; Zhang et al.; *Nutrients* | ✅ NHANES 40,074 人；≥250 g/日对不摄入 HR 1.30（1.11–1.52）；整果等能量替代 HR 1.09（1.02–1.16） | PASS |
| Li B et al. 2023 | 37006931 | https://pubmed.ncbi.nlm.nih.gov/37006931/ | ✅ *Consumption of sugar sweetened beverages, artificially sweetened beverages and fruit juices and risk of type 2 diabetes, hypertension, cardiovascular disease, and mortality*; Li et al.; *Frontiers in Nutrition* | ✅ 果汁最高对最低全因死亡 RR 1.26（1.14–1.40），仅 2 研究，果汁定义不一 | PASS |
| Chazelas E et al. 2019 | 31292122 | https://pubmed.ncbi.nlm.nih.gov/31292122/ | ✅ *Sugary drink consumption and risk of cancer: results from NutriNet-Santé prospective cohort*; Chazelas et al.; *BMJ* | ✅ 每 100 mL/日 100% 果汁与总体癌症发病 HR 1.12（1.03–1.23）；非死亡结局 | PASS |
| D'Elia L et al. 2021 | 33150530 | https://pubmed.ncbi.nlm.nih.gov/33150530/ | ✅ *100% Fruit juice intake and cardiovascular risk: a systematic review and meta-analysis of prospective and randomised controlled studies*; D'Elia et al.; *European Journal of Nutrition* | ✅ 21 项前瞻性研究+35 项 RCT；低中摄入与卒中/总 CVD 逆相关；不是全因死亡证据；AIJN 资助 | PASS |
| Beckett EL et al. 2025 | 38679915 | https://pubmed.ncbi.nlm.nih.gov/38679915/ | ✅ *Health effects of drinking 100% juice: an umbrella review of systematic reviews with meta-analyses*; Beckett et al.; *Nutrition Reviews* | ✅ 100% 果汁全因死亡汇总无显著关联，低/极低确定性；Ausveg/Hort Innovation 资助，FOODiQ 关联 | PASS |

## 最终 PMID 集合

`31099861, 31292122, 33150530, 34121531, 35631268, 37006931, 38679915`

中英文正文的 PMID 集合必须与上述集合完全相同。
