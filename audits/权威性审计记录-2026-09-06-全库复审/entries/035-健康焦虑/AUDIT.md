# 035 疑病症（病理性健康焦虑）— 权威性审计记录

## 审计信息

- 审计日期：2026-09-06
- 审计人：Codex 独立审计 agent
- 结果：FIXED
- 搜索：4 批、13 个英文检索式；每批之间间隔超过 1 秒
- 核心判断：`+69%` 可保留，但仅代表瑞典专科医疗中 ICD-10 疑病症诊断者相对于匹配对照的社会人口学调整后全因死亡 HR 1.69，不代表一般健康焦虑者的因果效应或个人寿命缩短比例。

## 逐项检查

### 1. 来源质量 ✅

- 死亡率核心来源为同行评审的瑞典全国匹配队列，链接全国患者登记与死因登记；是当前直接问题上规模最大的研究，但仍是单项观察性研究。
- 治疗结论由 2019 年系统综述/Meta 分析、2026 年网络 Meta 分析支持；不良结局由 2023 年系统综述支持。
- 删除了非核心的 2006 年小型双胞胎遗传力段，避免弱证据稀释条目焦点。
- 来源：[JAMA Psychiatry 全文](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)、[PMID 38091000](https://pubmed.ncbi.nlm.nih.gov/38091000/)、[PMID 31859542](https://pubmed.ncbi.nlm.nih.gov/31859542/)、[PMID 42169209](https://pubmed.ncbi.nlm.nih.gov/42169209/)、[PMID 37614181](https://pubmed.ncbi.nlm.nih.gov/37614181/)

### 2. 结论一致性 ✅

- 原文的 HR 1.69（95% CI 1.47–1.93）、样本 4,129/41,290、事件数 268/1,761 与正文一致。
- 原条目把临床确诊“疑病症”泛化为所有“健康焦虑”，现已同步收窄标题与表述。
- 原英文引用将 JAMA Psychiatry 页码写为 132–140；PubMed 核对后修正为 81(3):284–291。
- 来源：[JAMA 表 1–3 与全文](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)、[PMID 38091000](https://pubmed.ncbi.nlm.nih.gov/38091000/)

### 3. 反面证据 ⚠️

- 该死亡队列自述为首项直接研究临床确诊疑病症全因与死因别死亡率的大型研究；未找到同等级独立国家队列重复，故不能称“多项研究一致”。
- 原论文讨论指出，较早系统综述曾提示疑病症者自杀尝试可能更少，但其纳入研究有方法学局限；“自杀尝试”与“自杀死亡”不是同一结局。正文已披露此不一致。
- 来源：[JAMA Discussion](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)、[PubMed mortality search](https://pubmed.ncbi.nlm.nih.gov/?term=hypochondriasis+all-cause+mortality)

### 4. 效果量准确性 ✅

- 全因死亡：HR 1.69（1.47–1.93），准确。
- 自然死因：HR 1.60（1.38–1.85），准确。
- 循环系统：HR 1.52（1.21–1.92），准确。
- 呼吸系统：HR 2.33（1.50–3.61），准确。
- 肿瘤：HR 0.99（0.74–1.33），置信区间包含 1，已标为无显著差异。
- 非自然死因：HR 2.43（1.61–3.68），准确。
- 自杀：HR 4.14（2.44–7.03），准确；29 对 53 个事件，且共病调整后不再明确。
- 补入粗死亡率 8.5 对 5.5/1,000 人年及绝对差约 3.0/1,000 人年，明确 HR 不等于绝对风险或寿命缩短 69%。
- CBT 原文主结果不是 Cohen's d≈1.0；修正为 Hedges' g 0.79（0.57–1.01），发表偏倚校正后 g=0.62。
- 来源：[JAMA 表 2](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)、[PMID 31859542](https://pubmed.ncbi.nlm.nih.gov/31859542/)

### 5. 利益冲突 ⚠️

- 死亡研究由瑞典公共/非营利机构资助；论文披露部分作者在本研究之外从 UpToDate、药企或基金会获得费用/资助，但未见针对疑病症死亡率结论的直接商业资助。
- 治疗综述作者之间、以及治疗与死亡论文之间存在研究者重叠；Axelsson、Hedman-Lagerlöf 是该领域长期研究者，需考虑研究者忠诚/非财务利益的可能性。正文没有据此夸大治疗结论，并纳入发表偏倚校正值与不良结局。
- 2026 网络 Meta 分析也包含 Axelsson；其结论仅用于症状治疗，不用于推断死亡获益。
- 来源：[JAMA disclosures/funding](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)、[PMID 31859542](https://pubmed.ncbi.nlm.nih.gov/31859542/)、[PMID 42169209](https://pubmed.ncbi.nlm.nih.gov/42169209/)

### 6. 因果 vs 相关 ✅

- 全文统一使用“关联”“HR”“观察性队列”；删除“焦虑的人反而更早死于可预防原因”等易产生因果暗示的措辞。
- 明确慢性应激、生活方式、就医回避等只是作者假说，未进行中介验证。
- 明确 CBT 试验考察症状结局，不能证明治疗降低死亡率。
- 来源：[JAMA Discussion and Limitations](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)

### 7. 人群适用性 ✅

- 明确样本为瑞典专科医疗中被正式记录 ICD-10 疑病症诊断者；56.7% 女性，首次诊断中位年龄 34.5 岁。
- 不外推到普通健康担心、亚临床健康焦虑、基层未诊断者、儿童或其他国家医疗系统。
- 治疗网络 Meta 分析为有明显健康焦虑的成人（35 项试验，3,263 人；平均年龄约 37 岁，67% 女性）。
- 来源：[PMID 38091000](https://pubmed.ncbi.nlm.nih.gov/38091000/)、[PMID 42169209](https://pubmed.ncbi.nlm.nih.gov/42169209/)

### 8. 研究局限性 ✅

- 已披露：无基层医疗数据、严重漏诊、专科诊断选择偏倚、对照污染、剩余混杂、随访末社会经济变量可能是中介、死因事件数较少、未确定意图死亡归入自杀、跨国家外推有限。
- 进一步调整抑郁或焦虑相关障碍时，自杀 HR 的置信区间不再明确；正文已列数字。
- 原条目所谓“23 年随访”实际是纳入/登记时间跨度；现改为两组平均随访 7.7 年。
- 来源：[JAMA Strengths and Limitations](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2812786)

### 9. 发表偏倚 ⚠️

- 单项死亡队列无法评估漏斗图或发表偏倚，且尚无独立重复；正文明确这一点。
- CBT 2019 Meta 分析报告未校正 g=0.79、发表偏倚校正后 g=0.62，正文并列两值。
- 不良结局综述显示 10% 报告至少一个不良事件、17% 退出，研究间异质性显著，已纳入正文以平衡疗效叙述。
- 来源：[PMID 31859542](https://pubmed.ncbi.nlm.nih.gov/31859542/)、[PMID 37614181](https://pubmed.ncbi.nlm.nih.gov/37614181/)

### 10. 时效性 ✅

- 核心死亡队列发表于 2024 年；检索至 2026-09-06 未发现同等级独立重复。
- 治疗证据更新至 2026 年网络 Meta 分析（数据库检索更新至 2025-01-16）。
- 来源：[PMID 38091000](https://pubmed.ncbi.nlm.nih.gov/38091000/)、[PMID 42169209](https://pubmed.ncbi.nlm.nih.gov/42169209/)

## 搜索记录

以下均以英文关键词检索；按 skill 要求，各搜索批次间隔至少 1 秒：

1. [PubMed: hypochondriasis mortality Mataix-Cols](https://pubmed.ncbi.nlm.nih.gov/?term=hypochondriasis+mortality+Mataix-Cols)
2. [PubMed: health anxiety cognitive behavioral therapy systematic review meta-analysis](https://pubmed.ncbi.nlm.nih.gov/?term=health+anxiety+cognitive+behavioral+therapy+systematic+review+meta-analysis)
3. [PubMed: health anxiety treatment systematic review randomized 2024](https://pubmed.ncbi.nlm.nih.gov/?term=health+anxiety+treatment+systematic+review+randomized+2024)
4. [PubMed: genetic environmental origins health anxiety Taylor 2006](https://pubmed.ncbi.nlm.nih.gov/?term=genetic+environmental+origins+health+anxiety+Taylor+2006)
5. [PubMed: hypochondriasis mortality cohort replication](https://pubmed.ncbi.nlm.nih.gov/?term=hypochondriasis+mortality+cohort+replication)
6. [PubMed: illness anxiety disorder DSM-5 hypochondriasis diagnosis review](https://pubmed.ncbi.nlm.nih.gov/?term=illness+anxiety+disorder+DSM-5+hypochondriasis+diagnosis+review)
7. [PubMed: health anxiety all-cause mortality cohort](https://pubmed.ncbi.nlm.nih.gov/?term=health+anxiety+all-cause+mortality+cohort)
8. [PubMed: PMID 38091000 correction retraction comment](https://pubmed.ncbi.nlm.nih.gov/?term=38091000+correction+retraction+comment)
9. [PubMed: PMID 31859542 publication bias conflict interest](https://pubmed.ncbi.nlm.nih.gov/?term=31859542+publication+bias+conflict+interest)
10. [PubMed: PMID 16757996 heritability 35](https://pubmed.ncbi.nlm.nih.gov/?term=16757996+heritability+35)
11. [PubMed: hypochondriasis all-cause mortality 2025 2026](https://pubmed.ncbi.nlm.nih.gov/?term=hypochondriasis+all-cause+mortality+2025+2026)
12. [Publisher/DOI: 2026 network Meta-analysis](https://doi.org/10.1192/bjp.2026.10647)
13. [Publisher/DOI: 2019 CBT Meta-analysis](https://doi.org/10.1080/14737167.2019.1703182)

## 发现并修正的问题

1. 中英文标题外推过宽；同步改为“疑病症（病理性健康焦虑）/Hypochondriasis (Pathological Health Anxiety)”。
2. JAMA Psychiatry 卷期页码错误，已修正。
3. CBT 综述作者、年份、卷期页码与效果量错误，已按 PubMed 修正。
4. “23 年随访”把研究时间窗口误写为个体随访，改为平均 7.7 年。
5. 补充绝对死亡率、共病调整后的敏感性结果、反面证据、外推边界、剩余混杂、发表偏倚和不良治疗结局。
6. 删除与核心寿命结论关联弱的遗传力段，并删除可能污名化/因果化的“最怕死反而更早死”叙事。

## 最终结论

修正后通过本轮审计。数字前缀可保留，因为其直接、准确地表示全因死亡 HR 1.69；条目已把适用对象限定为瑞典专科登记的临床疑病症诊断人群，并明确单项观察性证据和未重复边界。
