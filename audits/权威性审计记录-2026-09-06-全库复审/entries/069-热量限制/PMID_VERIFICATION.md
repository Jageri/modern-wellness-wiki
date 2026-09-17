# 069 热量限制 - PMID 逐条核验日志

核验日期：2026-09-16。以下每个最终保留 PMID 均由本审计 agent 亲自打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始条目页，并对照 PubMed EFetch/摘要或全文核对标题、作者、期刊、年份和正文用途。PMID 24691430 的首次直接打开触发 PubMed 浏览器校验页，随后通过该 PubMed 原始条目的搜索视图、NCBI EFetch 和对应 PMC 全文交叉核验。

| PMID | PubMed 核验信息 | 正文用途 | 核验结果 |
|---|---|---|---|
| [24691430](https://pubmed.ncbi.nlm.nih.gov/24691430/) | Colman RJ et al.; *Nature Communications*; 2014; “Caloric restriction reduces age-related and all-cause mortality in rhesus monkeys” | 威斯康星 76 只恒河猴；约 30% 限制；年龄相关死亡 HR 2.89、全因死亡 HR 1.78，均为对照相对限制组 | ✅ 标题、首作者、期刊、年份、PMID/PMCID 和 HR/CI 匹配；NIH/VA/校内资助，PubMed 未记录 COI 声明 |
| [22932268](https://pubmed.ncbi.nlm.nih.gov/22932268/) | Mattison JA et al.; *Nature*; 2012; “Impact of caloric restriction on health and survival in rhesus monkeys from the NIA study” | NIA 恒河猴未发现生存改善；饮食、饲养和设计可能影响寿命效应 | ✅ 标题、作者、期刊、年份和阴性生存结论匹配；NIH intramural/NIDDK 资助 |
| [28094793](https://pubmed.ncbi.nlm.nih.gov/28094793/) | Mattison JA et al.; *Nature Communications*; 2017; “Caloric restriction improves health and survival of rhesus monkeys” | 两中心直接比较；解释饮食、摄入、性别和起始年龄差异；不作为人体延寿证明 | ✅ 标题、作者、期刊、年份和摘要结论匹配；核对 PubMed COI（多名作者有营养/长寿企业或咨询关系） |
| [26187233](https://pubmed.ncbi.nlm.nih.gov/26187233/) | Ravussin E et al.; *J Gerontol A Biol Sci Med Sci*; 2015; “A 2-Year Randomized Controlled Trial of Human Caloric Restriction: Feasibility and Effects on Predictors of Health Span and Longevity” | 218 人、21–51 岁、BMI 21.9–28.0；完成率；实际 11.7% 限制；替代终点边界 | ✅ 标题、作者、期刊、年份、样本、人群、完成率和结果匹配；NIA/NIDDK 资助 |
| [31303390](https://pubmed.ncbi.nlm.nih.gov/31303390/) | Kraus WE et al.; *Lancet Diabetes & Endocrinology*; 2019; “2 years of calorie restriction and cardiometabolic risk (CALERIE): exploratory outcomes of a multicentre, phase 2, randomised controlled trial” | 实际 11.9% 限制、7.5 kg 减重及心代谢危险因素改善；均非死亡/寿命结局 | ✅ 标题、作者、期刊、年份、样本、数字和探索性终点匹配；NIH 资助，作者声明无 COI |
| [26332798](https://pubmed.ncbi.nlm.nih.gov/26332798/) | Villareal DT et al.; *Journal of Bone and Mineral Research*; 2016; “Effect of Two-Year Caloric Restriction on Bone Metabolism and Bone Mineral Density in Non-Obese Younger Adults: A Randomized Clinical Trial” | 腰椎、全髋、股骨颈 BMD 下降；长期骨折风险未知 | ✅ 标题、作者、期刊、年份、样本及 BMD 方向/数字匹配；NIA/NIDDK 资助 |
| [28228420](https://pubmed.ncbi.nlm.nih.gov/28228420/) | Das SK et al.; *American Journal of Clinical Nutrition*; 2017; “Body-composition changes in the Comprehensive Assessment of Long-term Effects of Reducing Intake of Energy (CALERIE)-2 study: a 2-y randomized controlled trial of calorie restriction in nonobese humans” | 实际 11.9% 限制；相对对照脂肪减少且瘦体重约下降 2.0 kg | ✅ 标题、作者、期刊、年份、样本和身体组成结果匹配；NIA 资助 |
| [37118425](https://pubmed.ncbi.nlm.nih.gov/37118425/) | Waziry R et al.; *Nature Aging*; 2023; “Effect of long-term caloric restriction on DNA methylation measures of biological aging in healthy adults from the CALERIE trial” | 事后 DNA 甲基化分析；DunedinPACE 小幅变化，PhenoAge/GrimAge 无显著变化；需长期硬终点 | ✅ 标题、作者、期刊、年份和结果匹配；核对 COI：两名作者是已商业许可 DunedinPACE 的相关发明人 |
| [40247012](https://pubmed.ncbi.nlm.nih.gov/40247012/) | Wang A, Speakman JR; *Nature Reviews Endocrinology*; 2025; “Potential downsides of calorie restriction” | 人类寿命收益不确定；骨、饥饿、怕冷、伤口、生殖、感染等风险谱及人体资料不足 | ✅ 标题、作者、期刊、年份和摘要范围匹配；作者声明无 COI |

## 最终 PMID 集合

`22932268, 24691430, 26187233, 26332798, 28094793, 28228420, 31303390, 37118425, 40247012`

中英文条目 PMID 集合完全一致；没有保留未经 PubMed 原始条目页核验的 PMID。
