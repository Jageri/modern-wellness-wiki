# 033 抑郁 - 权威性审计记录

## 审计日期

2026-09-08

## 状态

**FIXED**

## 审计范围与方法

- 独立审计双语唯一条目“抑郁 / Depression”，未读取其他条目正文。
- 完成 5 组检索：死亡率大型 meta/队列、诊断与治疗指南、自杀风险和药物伤害、心理/药物/运动随机试验、炎症分型与抗炎治疗。
- 对最终保留的 5 个 PMID 分别打开 PubMed 条目页核验；结果见 `PMID_VERIFICATION.md`。

## 核心裁决

原文件名“+50%”不成立为可通用效应量，已撤为 `~`。2014 年汇总的发表偏倚校正 RR=1.52 只是特定研究集合的观察性平均值；更新的 2025 年 268 项队列 meta 分析显示，未匹配一般人群对照为 RR=2.10，而匹配躯体共病后为 RR=1.29，二者 I² 均为 99.9%。定义、人群、共病控制与严重度差异巨大，不能把其中任一数字写成所有抑郁或某个个体的固定死亡增幅。

条目已分开说明：

1. 抑郁症状筛查不等于临床诊断；“至少 2 周”是评估门槛的一部分，不是两个症状即可自行确诊。
2. 死亡率数据来自观察性研究，只支持关联；反向因果和残余混杂未排除。
3. 心理治疗、抗抑郁药和运动的随机试验证据针对症状改善，不等于已证明降低全因死亡。
4. 自杀风险是紧急评估重点，但群体 RR 不能预测个人；危机红旗不替代诊断和处方。
5. 已删除常规 hs-CRP 检测和自行讨论抗炎辅助治疗的建议。炎症富集试验仍属探索性，未显示反应率或缓解率显著提高。

## 十项检查

### 1. 来源质量 ✅

- 死亡关联以 2025 年 World Psychiatry 大型系统综述/meta 分析和 2018 年 BMC Medicine 伞形综述为主。
- 诊断、危机处理和治疗安全边界采用 WHO 与 NICE 指南。
- 症状治疗采用 CBT、抗抑郁药和运动的随机试验系统综述/meta 分析。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)、[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)、[WHO 2025](https://www.who.int/news-room/fact-sheets/detail/depression)、[NICE NG222](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations)

### 2. 结论一致性 ✅

- 主流证据支持抑郁与较高全因、自杀及自然原因死亡率相关。
- 主流证据不支持把相关性表述为固定因果效应；条目已采用“相关”并撤销“+50%”。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)、[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)

### 3. 反面证据 ✅

- 2018 年伞形综述指出，17 个汇总关联均未达到“令人信服”证据等级；采用结构化访谈和更充分混杂控制时证据减弱。
- 更新条目明确呈现这一削弱证据，而非只列支持死亡关联的研究。
- 来源：[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)

### 4. 效果量准确性 ✅

- 未匹配全因死亡：RR=2.10（95% CI 1.87–2.35），I²=99.9%。
- 共病匹配后全因死亡：RR=1.29（1.21–1.37），I²=99.9%。
- 自杀死亡：RR=9.89（7.59–12.88）；自然原因死亡：RR=1.63（1.51–1.75）。
- 以上均为相对风险，不是绝对风险或个人预测；原“+50%”已撤。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)

### 5. 利益冲突 ⚠️

- Machado 2018 声明无竞争利益；Noetel 2024 声明无相关支持或财务关系；Cipriani 2018 报告公共研究资助。
- Chan 2025 的核心死亡估计来自观察性队列，条目未把其抗抑郁药/ECT 与死亡降低的观察性汇总写成治疗因果结论。即使个别作者存在行业关系，也不改变本条目对该结果的降格处理。
- 来源：[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)、[Noetel 2024](https://pubmed.ncbi.nlm.nih.gov/38355154/)、[Cipriani 2018](https://pubmed.ncbi.nlm.nih.gov/29477251/)

### 6. 因果 vs 相关 ✅

- 已明确观察性死亡证据不能排除躯体疾病导致抑郁的反向因果、健康行为和医疗可及性等残余混杂。
- 治疗随机试验仅用于“减轻症状”，没有外推为“延寿”或“降低全因死亡”。
- 来源：[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)、[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)

### 7. 人群适用性 ✅

- 2025 年死亡率综述定义为重性抑郁障碍或持续性抑郁障碍，并非任何抑郁量表高分。
- 心理/药物 RCT 主要针对确诊或达到临床阈值的成人；条目没有将其等同于所有短暂低落者。
- 自杀与药物监测单列 18–25 岁及高风险者，符合 NICE 风险分层。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)、[NICE NG222](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations)

### 8. 研究局限性 ✅

- 已披露高度异质性、结构化诊断差异、共病、反向因果、残余混杂和量表筛查边界。
- 运动 meta 分析仅 1 项研究达到 Cochrane 低偏倚标准，可信度低至极低，已同步写入。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)、[Noetel 2024](https://pubmed.ncbi.nlm.nih.gov/38355154/)

### 9. 发表偏倚 ✅

- 既往死亡率汇总存在小样本效应和发表偏倚风险；伞形综述专门评估小样本效应与超额显著性偏倚，结论未达“令人信服”。
- 条目不再以发表偏倚校正后的单一 RR 作为文件名效应量。
- 来源：[Machado 2018](https://pubmed.ncbi.nlm.nih.gov/30025524/)、[Cuijpers 2014](https://pubmed.ncbi.nlm.nih.gov/24434956/)

### 10. 时效性 ✅

- 死亡率更新到检索截至 2025-01-26、发表于 2025 年的最大规模综述。
- WHO 抑郁事实页为 2025 年版本；NICE NG222 当前页面及 2026 年监测状态已复核。
- 来源：[Chan 2025](https://pubmed.ncbi.nlm.nih.gov/40948054/)、[WHO 2025](https://www.who.int/news-room/fact-sheets/detail/depression)、[NICE evidence status](https://www.nice.org.uk/Guidance/ng222/evidence)

## 治疗获益与伤害核查

- CBT：409 项试验、52,702 人的 2023 年汇总支持症状改善；与其他心理治疗的优势很小且敏感性分析多不显著。
- 抗抑郁药：522 项试验、116,477 名成人的 2018 年网络 meta 分析显示 21 种药物急性期均优于安慰剂，但证据质量中等至极低，药物间疗效和可接受性不同。
- 运动：218 项试验、14,170 人；步行/慢跑等显示中等症状效应，但研究偏倚风险明显。
- 药物伤害：NICE 要求讨论体重增加、镇静、性功能影响等不良反应，监测早期自杀意念，并逐步减量以降低撤药症状；18–25 岁或高自杀风险者开始/加量后应在 1 周复诊。
- 抗炎治疗：11 项炎症升高人群 RCT 的 2026 年 meta 分析显示症状量表小幅改善，但治疗反应 RR=1.28（95% CI 0.997–1.64）和缓解 RR=1.18（0.71–1.95）均未明确显著；不支持常规 hs-CRP 分型或自行用药。
- 来源：[CBT meta](https://pubmed.ncbi.nlm.nih.gov/36640411/)、[antidepressant NMA](https://pubmed.ncbi.nlm.nih.gov/29477251/)、[exercise NMA](https://pubmed.ncbi.nlm.nih.gov/38355154/)、[NICE NG222](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations)、[anti-inflammatory meta](https://pubmed.ncbi.nlm.nih.gov/41366844/)

## 自杀风险与危机边界

- 自杀风险必须直接评估；既往尝试、当前想法、计划、准备行为和是否可能立即行动影响紧急程度。
- 立即危险时应联系当地急救或急诊，并避免独处；条目不提供个体风险计算、诊断或处方。
- 不因存在自杀风险而拒绝抑郁治疗；应增加支持、考虑专科转诊并注意药物过量毒性。
- 来源：[WHO depression](https://www.who.int/news-room/fact-sheets/detail/depression)、[WHO suicide](https://www.who.int/news-room/fact-sheets/detail/suicide)、[NICE NG222](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations)

## 修改清单

1. 双语文件由 `+50%` 重命名为 `~`。
2. 标题由“抑郁/慢性压力”收窄为“抑郁”，停止混合两种暴露。
3. 撤销单一死亡率范围，改为未匹配与共病匹配结果并列，并披露 I²=99.9%。
4. 分开症状、诊断、关联与治疗结局。
5. 删除未被引用直接支撑的 HPA 轴、疾病风险、社交频率、每日 10 分钟正念及“约一半慢性炎症”等陈述。
6. 删除常规 hs-CRP 检测和抗炎治疗建议。
7. 补充自杀危机、躁狂鉴别、躯体共病、药物不良反应和撤药边界。
8. 为全部参考文献添加可访问超链接并同步中英文。

## 审计结论

**FIXED**：撤销不可泛化的“+50%”后，双语条目在来源、数值、因果边界、人群适用性、治疗获益/伤害和危机提示方面达到本轮发布标准。
