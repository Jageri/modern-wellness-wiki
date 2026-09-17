# PMID 验证日志 - 084 VO₂ max

验证日期：2026-09-16

每个最终 PMID 均由本审计 agent 逐一打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始页，并用 NCBI PubMed ESummary 交叉核对标题、第一作者、期刊和年份。只记录最终保留在双语正文中的 PMID。

| PMID | PubMed 原页核验 | 标题 / 第一作者 / 期刊 / 年份 | 核验要点 |
|---|---|---|---|
| [30646252](https://pubmed.ncbi.nlm.nih.gov/30646252/) | ✅ 原页已打开 | *Association of Cardiorespiratory Fitness With Long-term Mortality Among Adults Undergoing Exercise Treadmill Testing* / Mandsager K / *JAMA Network Open* / 2018 | 122,007 名转诊成人；暴露为估算峰值 METs；低 vs elite HR 5.04（4.10–6.20）；无 COI 报告 |
| [19454641](https://pubmed.ncbi.nlm.nih.gov/19454641/) | ✅ 原页已打开 | *Cardiorespiratory fitness as a quantitative predictor of all-cause mortality and cardiovascular events in healthy men and women: a meta-analysis* / Kodama S / *JAMA* / 2009 | 33 项观察性队列；每高 1 MET 全因死亡 RR 0.87（0.84–0.90）；低 vs 高 RR 1.70（1.51–1.92） |
| [27881567](https://pubmed.ncbi.nlm.nih.gov/27881567/) | ✅ 原页已打开 | *Importance of Assessing Cardiorespiratory Fitness in Clinical Practice: A Case for Fitness as a Clinical Vital Sign* / Ross R / *Circulation* / 2016 | AHA 科学声明；支持 CRF 风险分层价值，不是死亡干预试验 |
| [39538060](https://pubmed.ncbi.nlm.nih.gov/39538060/) | ✅ 原页已打开 | *Changes in Cardiorespiratory Fitness Following Exercise Training Prescribed Relative to Traditional Intensity Anchors and Physiological Thresholds* / Meyler SJR / *Sports Medicine* / 2025 | 42 项研究、1,544 人；有对照研究 4.1 vs 1.8 mL·kg⁻¹·min⁻¹；作者声明无相关 COI、无专项资助 |
| [33722760](https://pubmed.ncbi.nlm.nih.gov/33722760/) | ✅ 原页已打开 | *Risk of bias and reporting practices in studies comparing VO₂max responses to sprint interval vs. continuous training* / Bonafiglia JT / *Journal of Sport and Health Science* / 2022 | 28 项研究、719 人；SIT vs MICT Hedges' g -0.004（-0.08–0.07）；所有研究偏倚风险不明确、报告质量较差 |
| [34782330](https://pubmed.ncbi.nlm.nih.gov/34782330/) | ✅ 原页已打开 | *ARTP statement on cardiopulmonary exercise testing 2021* / Pritchard A / *BMJ Open Respiratory Research* / 2021 | CPET 的标准化、质量保证和安全实施专业声明 |

## 集合核对

- 中文正文：`19454641, 27881567, 30646252, 33722760, 34782330, 39538060`
- 英文正文：`19454641, 27881567, 30646252, 33722760, 34782330, 39538060`
- 结果：**完全一致**

## 交叉核对端点

- PubMed ESummary：<https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=30646252,19454641,27881567,39538060,33722760,34782330&retmode=json>
