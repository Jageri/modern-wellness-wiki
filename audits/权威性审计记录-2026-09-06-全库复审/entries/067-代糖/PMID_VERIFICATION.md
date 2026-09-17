# 067 代糖 - PMID 原始页核验日志

核验日期：2026-09-16

核验人：独立科学审计 agent

方法：逐个打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始条目页，并以 NCBI E-utilities 元数据复核标题、作者、期刊、日期和 DOI。以下 4 个 PMID 是最终中英文正文的完整且一致的 PMID 集合。

| PMID | PubMed 原始页 | 标题 / 第一作者 / 期刊 / 年份 | 正文使用内容 | 结果 |
|---|---|---|---|---|
| 39085903 | <https://pubmed.ncbi.nlm.nih.gov/39085903/> | *Artificially sweetened beverage consumption and all-cause and cause-specific mortality: an updated systematic review and dose-response meta-analysis of prospective cohort studies.* / Zhangling Chen / *Nutrition Journal* / 2024 | 11 队列、2,196,503 人、235,609 死亡；全因 RR 1.13、CVD 死亡 RR 1.26、替代模型低 4%–6% | PASS |
| 40913681 | <https://pubmed.ncbi.nlm.nih.gov/40913681/> | *Effects of non-nutritive sweeteners on body weight: a systematic review and meta-analysis of randomized controlled trial (RCT) studies.* / Dongxu Li / *Journal of Endocrinological Investigation* / 2026（2025-09-06 电子发表） | 19 RCT；替代热量糖 MD -0.79 kg，I²=84%；<18 周 -0.91 kg，>18 周不显著 | PASS |
| 30602577 | <https://pubmed.ncbi.nlm.nih.gov/30602577/> | *Association between intake of non-sugar sweeteners and health outcomes: systematic review and meta-analyses of randomised and non-randomised controlled trials and observational studies.* / Ingrid Toews / *BMJ* / 2019 | 56 项研究；成人 BMI 结果来自 2 项、174 人；多数研究小且短，确定性有限 | PASS |
| 36638072 | <https://pubmed.ncbi.nlm.nih.gov/36638072/> | *Artificial sweeteners and risk of cardiovascular diseases: results from the prospective NutriNet-Santé cohort.* / Charlotte Debras / *BMJ* / 2022 | 103,388 人；CVD 发生率 346 对 314/10 万人年；HR 1.09（1.01–1.18） | PASS |

## 逐 PMID 核验细节

### PMID 39085903

- 原始页打开：PASS。
- 作者：Zhangling Chen, Cheng Wei, Sander Lamballais, et al.；与引用匹配。
- 期刊/年份：*Nutrition Journal*. 2024 Jul 31;23(1):86；与引用匹配。
- DOI：`10.1186/s12937-024-00985-7`。
- 研究设计：前瞻性队列的系统综述和剂量反应 Meta 分析；不是随机试验。
- 数字核对：11 队列；2,196,503 人；235,609 死亡；全因死亡 RR 1.13（1.06–1.21，I²=66.3%）；CVD 死亡 RR 1.26（1.10–1.44，I²=52.0%）；替代 1 份/日含糖饮料与人工甜味饮料的次级分析为低 4%–6%。
- 局限核对：美国和欧洲成人队列；自报暴露、反向因果、残余混杂；研究报告未发现显著发表偏倚，但纳入研究数有限。

### PMID 40913681

- 原始页打开：PASS。
- 作者：Dongxu Li, Lingyu Han, Zhihong Yu, et al.；与引用匹配。
- 期刊/年份：*Journal of Endocrinological Investigation*. 2026 Jan;49(1):11-24；电子发表 2025-09-06。
- DOI：`10.1007/s40618-025-02654-w`。
- 研究设计：19 项随机试验的系统综述和 Meta 分析；结局为体重，不是死亡。
- 数字核对：仅在替代热量糖的比较中 MD -0.79 kg（-1.55 至 -0.04，P=0.04，I²=84%）；<18 周 MD -0.91 kg；>18 周 P=0.51。
- 局限核对：异质性高、随访多较短、比较对象决定结果；不能外推为长期减重、慢病或死亡获益。

### PMID 30602577

- 原始页打开：PASS。
- 作者：Ingrid Toews, Szimonetta Lohner, Daniela Küllenberg de Gaudry, Harriet Sommer, Joerg J Meerpohl；与引用匹配。
- 期刊/年份：*BMJ*. 2019 Jan 2;364:k4718；与引用匹配。
- DOI：`10.1136/bmj.k4718`。
- 研究设计：随机/非随机试验及观察性研究的系统综述，按 Cochrane 方法开展。
- 数字核对：56 项研究；成人 BMI MD -0.6（-1.19 至 -0.01）仅来自 2 项、174 人；多数其他结局未见明确差异。
- 利益冲突核对：WHO 资助；作者声明研究独立、无相关商业财务关系。

### PMID 36638072

- 原始页打开：PASS。
- 作者：Charlotte Debras, Eloi Chazelas, Laury Sellem, et al.；与引用匹配。
- 期刊/年份：*BMJ*. 2022 Sep 7;378:e071204；与引用匹配。PubMed 收录号为 36638072，虽进入 PubMed 的日期较晚，引用年份仍为论文正式发表的 2022。
- DOI：`10.1136/bmj-2022-071204`。
- 研究设计：法国 NutriNet-Santé 人群前瞻性队列；结局为心血管病发生，不是死亡。
- 数字核对：103,388 人，平均 42.2 岁，79.8% 女性；较高摄入者与不摄入者 CVD 发生率 346 对 314/10 万人年；HR 1.09（1.01–1.18）。
- 利益冲突核对：法国和欧洲公共机构支持；作者声明无相关财务关系。

## 集合一致性

- 中文正文：`30602577, 36638072, 39085903, 40913681`
- 英文正文：`30602577, 36638072, 39085903, 40913681`
- 结论：完全一致，且每个 PMID 均有原始页逐条核验记录。
