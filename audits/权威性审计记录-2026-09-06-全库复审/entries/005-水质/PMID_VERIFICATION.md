# 005「水质」PMID 原页验证

**验证日期**：2026-09-07

**规则**：正文出现的每个 PMID 均直接打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/`，核对标题、作者、期刊与年份。搜索摘要不单独作为通过依据。

| PMID | 正文引用 | PubMed 原页结果 | 标题 | 作者 | 期刊/年份 | 结论 |
|---|---|---|---|---|---|---|
| [36571558](https://pubmed.ncbi.nlm.nih.gov/36571558/) | Sunardi D, et al. | ✅ 2026-09-07 打开原页 | *Health effects of alkaline, oxygenated, and demineralized water compared to mineral water among healthy population: a systematic review* | Diana Sunardi, Dian Novita Chandra, Bernie Endyarni Medise, Nurul Ratna Mutu Manikam, Dewi Friska, Wiji Lestari, Putri Novia Choiri Insani | *Reviews on Environmental Health*；电子发表 2022-12-27，纸本卷期 2024 | ✅ 标题、首作者、期刊和年份与正文匹配；正文采用电子发表年份 2022。 |
| [32735575](https://pubmed.ncbi.nlm.nih.gov/32735575/) | Danopoulos E, et al. | ✅ 2026-09-07 打开原页 | *Microplastic contamination of drinking water: A systematic review* | Evangelos Danopoulos, Maureen Twiddy, Jeanette M Rotchell | *PLoS One*. 2020;15(7):e0236838 | ✅ 标题、作者、期刊、年份匹配；摘要明确 12 项研究及 I²>95%。 |
| [38256045](https://pubmed.ncbi.nlm.nih.gov/38256045/) | Dhillon G, et al. | ✅ 2026-09-07 打开原页 | *Hydrogen Water: Extra Healthy or a Hoax?-A Systematic Review* | Gagandeep Dhillon, Venkata Buddhavarapu, Harpreet Grewal, Pranjal Sharma, Ram Kishun Verma, Ripudaman Munjal, Ramprakash Devadoss, Rahul Kashyap | *International Journal of Molecular Sciences*. 2024;25(2):973 | ✅ 标题、作者、期刊、年份匹配；摘要为 25 篇并要求更大样本、更严谨研究。 |

## 失败或移除项

- 原双语正文没有 PMID，因此没有原 PMID 失败项。
- PMID 26488938（Clasen 2015 Cochrane）在一次直接打开中返回空正文，未达到本项目的 PMID 原页内容核验门槛；正文引用改用已打开并核对的 Cochrane 官方页面，**不在正文标注该 PMID**。
- PMID 29016318（煮沸系统综述）直接打开遇到 PubMed reCAPTCHA；未写入正文，也不以搜索摘要替代原页核验。
