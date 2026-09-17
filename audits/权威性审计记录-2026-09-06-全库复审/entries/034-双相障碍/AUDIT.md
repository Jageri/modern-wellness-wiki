# 034 双相障碍：权威性审计记录

## 审计信息

- 审计日期：2026-09-06
- 审计范围：中文 `wiki_zh/心/情绪/+102% 双相障碍.md`；英文 `wiki_en/Mind/Emotions/+102% Bipolar Disorder.md`
- 审计方式：从当前正文重新提取每个核心结论；独立检索 PubMed、PubMed Central/Europe PMC、论文出版社页面、WHO 与 NICE；未采用旧审计结论。
- 成功搜索：4 批、8 个检索式；另逐项抓取 PubMed 原始记录与全文/指南页面。
- 审计结果：**需修正，已修正（FIXED）**。
- 命名判断：保留 `+102%`。核心 Meta 分析直接报告全因死亡 RR 2.02（95% CI 1.89–2.16），`(2.02-1)×100%=102%`；这是准确的全因死亡相对效应，不属于应改为 `~` 的非数字证据。

## 核心结论与数字核验

1. **全因死亡 RR 2.02（95% CI 1.89–2.16）**：准确。原文共纳入 57 个样本、678,353 名双相障碍患者，但全因死亡汇总实际为 39 个样本、450,397 名患者。旧正文未区分总纳入样本与该结局的分析样本，已修正。
2. **自杀死亡 RR 11.69（95% CI 9.22–14.81）**：准确，k=25。
3. **自然原因死亡 RR 1.90（95% CI 1.75–2.06）**：准确，k=17。
4. **心血管死亡 RR 1.76（95% CI 1.53–2.01）**：与 PubMed 摘要一致；全文表格因四舍五入显示上限 2.02。正文沿用 PubMed 摘要数值并明确其为汇总相对风险。
5. **潜在寿命损失 12.89 年（95% CI 12.72–13.07）**：数值准确，但它是按研究样本量加权的平均值，不是常规逆方差 Meta 估计。多数研究未报告标准误/置信区间，作者外推合并标准误来构造 CI，且无法正式检验该 YPLL 汇总的异质性或发表偏倚。已补充这些关键限制。
6. **2022 年勘误**：PMID 35357278 只更正男性寿命森林图中 4 个点估计的排列，不改变 12.89 年 YPLL 结果。已加入勘误文献并说明影响范围。
7. **2026 年时效性校验**：台湾双相 II 型全国队列报告匹配人群全因死亡校正 HR 1.62（95% CI 1.47–1.78），同胞内比较 HR 1.31（95% CI 1.00–1.72）。该结果支持方向一致，但提示亚型、对照选择和家族混杂可改变估计，不能把总体 RR 2.02直接套用于个人。

## 十项审计

### 1. 来源质量：通过

- 核心效应来自同行评审系统综述/Meta 分析；补充证据为 JAMA Network Open 全国队列；诊断和管理建议来自 WHO 与 NICE。
- 核心死亡率 Meta 分析只纳入观察性研究，因此不能按干预 RCT 解释。
- 来源：[PubMed 37491460](https://pubmed.ncbi.nlm.nih.gov/37491460/)、[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[PubMed 41945344](https://pubmed.ncbi.nlm.nih.gov/41945344/)、[WHO](https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder)、[NICE CG185](https://www.nice.org.uk/guidance/cg185)

### 2. 结论一致性：通过（修正后）

- “双相障碍与全因死亡风险升高相关”与 2023 Meta、较早的 2015 Meta 和 2026 双相 II 型队列方向一致。
- 删除了没有被所列指南直接支持的“一张化验单不能确诊”泛化句，改为 NICE 明确支持的“基层不使用问卷识别”和专业纵向评估。
- 来源：[PubMed 37491460](https://pubmed.ncbi.nlm.nih.gov/37491460/)、[PubMed 25735195](https://pubmed.ncbi.nlm.nih.gov/25735195/)、[NICE recommendations](https://www.nice.org.uk/guidance/cg185/chapter/recommendations)

### 3. 反面证据：通过（已呈现异质性）

- 未发现同等级证据支持总体全因死亡风险不升高；但效应并不均一。核心 Meta 的全因死亡 95% 预测区间为 1.37–2.98。
- 2026 年双相 II 型同胞内估计低于匹配一般人群估计；同胞内自然原因死亡不再显著。这不是推翻总体结论，而是残余家族混杂/亚型差异的重要反面边界。
- 核心 Meta 中癌症死亡 RR 0.99（95% CI 0.88–1.11），显示不能声称所有死因均升高。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[PubMed 41945344](https://pubmed.ncbi.nlm.nih.gov/41945344/)

### 4. 效果量准确性：通过（修正后）

- 已区分总纳入患者数 678,353 与全因死亡汇总样本数 450,397。
- 已区分 RR 与 HR；未把相对风险描述为绝对风险。
- 已说明 RR 2.02 对应“相对高 102%”，但不能给出个人绝对死亡概率。
- 来源：[PubMed 37491460](https://pubmed.ncbi.nlm.nih.gov/37491460/)、[PubMed 41945344](https://pubmed.ncbi.nlm.nih.gov/41945344/)

### 5. 利益冲突：通过（已披露）

- 核心 Meta 分析作者 Marco Solmi 披露从 Angelini、Lundbeck、Otsuka 获得报酬或担任顾问；研究获 CAPES 奖学金及 Baszucki Brain Research Fund 发表费用支持。
- 2026 队列由台湾国家科学及技术委员会资助，资助方无研究角色；多名作者披露课题外药企研究经费、个人费用、期权或专利关系。
- 2022 YPLL 综述由香港研究资助局支持，资助方无研究角色，作者声明无相关利益冲突。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[全文 PMC13058765](https://pmc.ncbi.nlm.nih.gov/articles/PMC13058765/)、[Cambridge 原文](https://doi.org/10.1192/bjp.2022.19)

### 6. 因果与相关：通过（修正后）

- 正文明确死亡率证据为观察性，采用“相关/风险升高”表述。
- 未声称双相诊断本身单独造成全部超额死亡，也未声称条目所列照护措施已经由 RCT 证明可降低全因死亡。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)

### 7. 人群适用性：通过（已补充）

- 核心 Meta 纳入年龄至少 15 岁、来自 16 个国家的样本，但研究时期、医疗系统、诊断方法与疾病严重度不同；多数研究未报告双相 I/II 亚型。
- 2026 队列仅为台湾、年龄至少 12 岁、经精神科医师至少两次诊断的双相 II 型人群，不能直接外推至所有国家、所有亚型或个体。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[全文 PMC13058765](https://pmc.ncbi.nlm.nih.gov/articles/PMC13058765/)

### 8. 研究局限性：通过（已补充）

- 核心 Meta：I²=96.8%；年龄无法作为 Meta 回归变量；大多数研究不报告亚型或症状负担；残余混杂与反向因果不能排除。
- YPLL 综述：仅 13 项研究；地区代表性有限；多数研究缺乏方差；外推标准误可能损害真实方差准确性；无法检验 YPLL 异质性/发表偏倚。
- 2026 队列：回顾性行政数据库、诊断错分与未测量混杂仍可能存在；同胞分析置信区间更宽。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[Cambridge 原文](https://doi.org/10.1192/bjp.2022.19)、[全文 PMC13058765](https://pmc.ncbi.nlm.nih.gov/articles/PMC13058765/)

### 9. 发表偏倚：通过（已补充）

- 核心全因死亡分析 Egger P=0.036，提示小样本效应/发表偏倚；男性和女性分层检验不显著。
- YPLL 因大多数研究缺方差，无法正式评估发表偏倚；不能把极窄 CI 当作高度确定性的证据。
- 来源：[全文 PMC10611575](https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/)、[Cambridge 原文](https://doi.org/10.1192/bjp.2022.19)

### 10. 时效性：通过

- 检索至 2026 年 9 月；纳入 2026 年双相 II 型全国队列以检验核心 Meta 后的亚型证据。
- WHO 双相障碍事实页日期为 2025-09-08；NICE CG185 最后复核日期为 2025-09-02。
- 2026 年队列没有推翻总体风险升高方向，但明显强化“人群/亚型与混杂边界”。
- 来源：[PubMed 41945344](https://pubmed.ncbi.nlm.nih.gov/41945344/)、[WHO](https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder)、[NICE overview](https://www.nice.org.uk/guidance/cg185)

## 修改摘要

1. 保留中英文 `+102%` 路径与标题。
2. 将“57 项研究、678,353 人”与全因死亡实际分析“39 个样本、450,397 人”拆开表述。
3. 新增 I²、预测区间、Egger P 值及 GRADE 中等确定性。
4. 纠正 12.89 年的统计方法描述并加入勘误及其影响范围。
5. 加入 2026 年台湾双相 II 型队列，展示更低的亚型/同胞内估计与外推边界。
6. 收紧诊断、治疗、监测、危机和因果措辞；中英文完全同步。
7. 补充研究资金和利益冲突披露。

## 检索与验证 URL

- https://pubmed.ncbi.nlm.nih.gov/37491460/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10611575/
- https://pubmed.ncbi.nlm.nih.gov/35184778/
- https://pubmed.ncbi.nlm.nih.gov/35357278/
- https://doi.org/10.1192/bjp.2022.19
- https://doi.org/10.1192/bjp.2022.40
- https://pubmed.ncbi.nlm.nih.gov/41945344/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13058765/
- https://pubmed.ncbi.nlm.nih.gov/25735195/
- https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder
- https://www.nice.org.uk/guidance/cg185
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations

## 未决事项

- 核心文献不提供可用于条目级统一展示的个人绝对风险；不应从 RR 反推个人寿命或死亡概率。
- 没有随机试验直接证明正文所列综合管理措施能把全因死亡降低到某个确定幅度。
- 高异质性的来源仍未充分解释；未来大型、按双相 I/II 型分层且报告绝对风险的研究可能改变点估计。
