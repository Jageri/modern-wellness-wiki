# 031 睡眠呼吸暂停 - 权威性审计记录

## 审计日期: 2026-09-08
## 本条目检索式数: 12
## 状态: FIXED

## 审计结论

原条目的方向基本合理，但标题及摘要把不同严重度、观察性关联和治疗效应压缩为“+30~100%”，无法成立为统一的全因死亡因果数字。中度 OSA 的全因死亡 HR 1.28（95%CI 0.96–1.69）不显著；重度 HR 2.13（1.68–2.68）是队列 Meta 的关联。原条目还把混合研究设计的 PAP 死亡率 Meta 与 RCT 证据并列，容易造成 CPAP 已被证明降低死亡的印象。已同步撤销中英文文件名数字为 `~`，并重写严重度、治疗状态、硬终点、诊断、驾驶、减重及依从性边界。

## 检索记录

1. `obstructive sleep apnea all-cause mortality severe meta-analysis Fu 2017 27502205`
2. `positive airway pressure all-cause cardiovascular mortality meta-analysis 2025 40118084`
3. `CPAP cardiovascular outcomes randomized meta-analysis adherence obstructive sleep apnea SAVE 27571048`
4. `official guideline obstructive sleep apnea diagnosis screening driving weight loss CPAP AASM ATS guideline`
5. `site:pubmed.ncbi.nlm.nih.gov/28162150 28162150`
6. `site:pubmed.ncbi.nlm.nih.gov/30736887 30736887`
7. `site:pubmed.ncbi.nlm.nih.gov/30215551 30215551`
8. `site:pubmed.ncbi.nlm.nih.gov/39083193 39083193`
9. `USPSTF obstructive sleep apnea screening adults recommendation 2022`
10. `成人阻塞性睡眠呼吸暂停诊治指南 2025 中华结核和呼吸杂志 官方`
11. `thoracic sleep apnea driving risk guideline high-risk driver`
12. `AASM diagnostic testing adult obstructive sleep apnea questionnaires not diagnose`

主要核验入口：
- PubMed: https://pubmed.ncbi.nlm.nih.gov/27502205/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/40118084/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/39083193/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/27571048/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/37787793/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/28162150/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/30736887/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/30215551/
- PubMed: https://pubmed.ncbi.nlm.nih.gov/41820035/
- AASM diagnostic guideline: https://aasm.org/resources/clinicalguidelines/diagnostic-testing-osa.pdf
- ATS driving guideline: https://www.thoracic.org/statements/resources/sleep-medicine/Sleep-Apnea-Sleepiness-Driving.pdf
- USPSTF screening statement: https://www.uspreventiveservicestaskforce.org/uspstf/document/RecommendationStatementFinal/obstructive-sleep-apnea-in-adults-screening

## 十项检查

### 1. 来源质量 ✅
- 使用中国胸科学会 2025 版成人 OSA 指南（2026 年正式刊出）、AASM/ATS 指南、队列 Meta、RCT、RCT 个体数据 Meta 和更新系统综述。
- 删除无法由原引文支撑的“中国成人患病率 11.8%”“公务员确诊率 0.9%”等旁支数字。

### 2. 结论一致性 ✅
- 严重 OSA 的死亡关联得到队列 Meta 支持；轻度和中度全因死亡置信区间跨 1。
- CPAP 改善 AHI、嗜睡和生活质量，但 RCT 总体未证实死亡/MACE 获益。

### 3. 反面证据 ✅
- 明示 SAVE 阴性结果、2024 更新 Meta 的阴性硬终点，以及 2023 RCT-IPD Meta 的随机比较阴性结果。

### 4. 效果量准确性 ✅
- Fu：轻/中/重度全因死亡 HR 1.19/1.28/2.13；心血管死亡 HR 1.24/2.05/2.73，均逐项保留 CI。
- SAVE：主要复合终点 17.0% 对 15.4%，HR 1.10（0.91–1.32）。
- 2023 IPD：随机比较 HR 1.01（0.87–1.17）；按治疗依从性分析 HR 0.69（0.52–0.92）。
- 2024 Meta：全因死亡 RR 0.92（0.72–1.16）、心血管死亡 RR 0.63（0.33–1.19）、MACE RR 0.73（0.52–1.03）。

### 5. 利益冲突 ✅
- 明示 2025 PAP 死亡率 Meta 由 ResMed 资助，多位作者存在 PAP 产业关系。

### 6. 因果 vs 相关 ✅
- 将 OSA–死亡、PAP–死亡以及依从性亚组全部按研究设计降格表述；不再宣称 CPAP 已被证明延长寿命。

### 7. 人群适用性 ✅
- 明示 SAVE 为 45–75 岁、已有心脑血管病、以男性和轻微嗜睡者为主；IPD Meta 82.1% 为男性，属于二级预防人群。

### 8. 研究局限性 ✅
- 披露观察性混杂、健康使用者偏倚、按依从性分析非随机、RCT 依从性偏低及硬终点把握度问题。

### 9. 发表偏倚 ⚠️
- 现有摘要不足以对每个 Meta 的漏斗图作一致判断；未臆造“无发表偏倚”。以研究设计、CI、利益冲突和反面证据共同限定可信度。

### 10. 时效性 ✅
- 纳入 2024 更新 Meta、2025 Lancet Respiratory Medicine Meta，以及题为 2025、实际于 2026 年刊出的中国成人 OSA 指南。

## 筛查、诊断、驾驶、减重与依从性核查

- **筛查**：STOP-Bang 可用于高风险筛查；Epworth 只评估嗜睡。USPSTF 对无症状普通成人全人群筛查为证据不足，而中国指南不建议无高危特征者常规筛查。
- **诊断**：问卷、症状、消费级可穿戴设备不能确诊；PSG 是金标准，适当的无复杂共病成人可使用医嘱下 HSAT，阴性/不确定/技术不合格且仍怀疑时转 PSG。
- **驾驶**：驾驶中入睡或发生困倦相关险情/事故者应停止驾驶并尽快评估；不以单一 Epworth 阈值代替实际安全史。
- **减重**：超重/肥胖者推荐减少能量摄入、身体活动和行为支持组成的综合干预；删除未经完整核实且易被误用为承诺的“减重 10% → AHI 固定下降 26%/50%”。
- **依从性**：≥4 小时/日是研究分界而非充分治疗目标；指南强调教育、早期故障排查、行为支持、远程监测和客观用机数据随访。

## 最终判定

**FIXED**：中英文已同步修正；核心数字、研究设计、利益冲突与临床行动边界均可追溯。机械检查通过后可交付，无需 HOLD。
