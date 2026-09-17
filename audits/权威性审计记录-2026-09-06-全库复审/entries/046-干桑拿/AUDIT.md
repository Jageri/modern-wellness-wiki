# 046 芬兰式干桑拿 - 权威性审计记

## 审计结论

- 审计日期：2026-09-09
- 结果：需修正，已修正
- 数字前缀判定：删除 `-40%`，保留 `~`

旧 `-40%` 可追溯到一个直接报告全因死亡的前瞻性队列，但数字仅代表东芬兰 42–60 岁男性中，每周 4–7 次相对每周 1 次的观察性 HR 0.60（95% CI 0.46–0.80）。高频组仅 201 人，对照不是不用桑拿，无死亡终点 RCT，也无跨国家、跨族群的独立复制。这个条件性相对 HR 不能代表标题“芬兰式干桑拿”对一般人群的因果效果，因此不符合数字前缀规则。

## 独立检索过程

本次不沿用失败实例的草稿结论，从当前正文和 HEAD 原版重新提取主张。共执行 6 批、24 个英文查询，检索间隔不少于 1 秒，覆盖：

1. `sauna bathing fatal cardiovascular all-cause mortality 2015 KIHD 2315`
2. `25705824 sauna full text`、`25705824 0.60 all-cause mortality sauna`
3. `sauna men women cardiovascular mortality 2018 1688`、`30486813 female subgroup sauna`
4. `passive heating randomized systematic review 2025 cardiometabolic sauna`
5. `sauna safety unstable angina recent myocardial infarction severe aortic stenosis alcohol review`
6. `clinical effects regular dry sauna systematic review adverse events 2018`
7. `sauna all-cause mortality cohort 2024 2025 2026 Finland PubMed`
8. `sauna mortality prospective cohort non Finnish PubMed`
9. `traditional Finnish sauna all cause mortality replication cohort`

主要核查来源：

- [JAMA Internal Medicine 2015 原始研究](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2130724)
- [BMC Medicine 2018 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6262976/)
- [JAMA Internal Medicine 2015 非因果评论](https://pubmed.ncbi.nlm.nih.gov/26436738/)
- [American Journal of Preventive Cardiology 2025 RCT 系统综述全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC12490526/)
- [2018 干桑拿临床效应系统综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5941775/)
- [The American Journal of Medicine 2001 获益与风险综述](https://pubmed.ncbi.nlm.nih.gov/11165553/)

所有最终 PMID 又分别打开 PubMed 原始 URL；对页面遇到验证挑战或正文抓取为空的项目，使用 NCBI E-utilities `efetch` 逐条复核题名、作者、期刊、年份和 DOI。详见 `PMID_VERIFICATION.md`。

## 十项检查

### 1. 来源质量 ⚠️

- 死亡主证据是人口基础前瞻性队列，终点明确，但不是随机试验。
- 2018 年分析为 KIHD 原男性队列 11 年随访时加入女性后的样本，含 821 名男性随访者，并非完全独立队列。
- 2025 年系统综述仅纳入 RCT，但混合多种被动加热方式，疗程仅 2–15 周，无死亡或寿命终点。

### 2. 结论一致性 ⚠️→✅

- 可支持的结论是“更高频传统芬兰桑拿与较低死亡率相关”，不是已证明的保护效果或延寿剂量。
- 旧文“2018 年扩展至女性”过度：研究只报告心血管死亡，高频女性组 73 人中无事件，HR 无法估计；性别交互不显著也不等于女性获益得到确认。
- 已删除 Peter Attia 处方、红外桑拿等效、热水浴替代和“80–90°C 最优”等死亡研究不支持的表述。

### 3. 反面证据 ⚠️

- 2015 年 JAMA 同期评论指出健康使用者、自我选择和反向因果可能造成非因果关联。
- 2025 年 RCT 综述中，多数心血管代谢和血管替代指标的合并结果无显著改善；总体 SBP 差 -2.46 mmHg（95% CI -5.02 至 0.10）。
- 为避免反向挑选，正文同时保留了该综述的支持性结果：全身加热亚组 SBP -4.11 mmHg（95% CI -7.36 至 -0.86）。这一短期替代终点不能确认或否定死亡获益。

### 4. 效果量准确性 ⚠️→✅

- 2015 男性研究，4–7 次/周 vs 1 次/周：全因死亡 HR 0.60（0.46–0.80），致死性 CVD HR 0.50（0.33–0.77），SCD HR 0.37（0.18–0.75）。
- 粗事件数：全因死亡 62/201（30.8%）vs 295/601（49.1%）。随访时间和混杂条件不同，不可把粗比例当作随机干预 ARR/NNT。
- >19 vs <11 分钟仅 SCD HR 0.48（0.31–0.75）；时长与全因死亡的 P for trend = 0.93，不支持“15–20 分钟最优”。
- 2018 总体基线危险因素+体力活动/社会经济状态模型：CVD 死亡 HR 0.36（0.17–0.77）；加入随访中 CHD 的模型为 0.23（0.08–0.65）。正文采用前者，并明确只是 CVD 死亡。

### 5. 利益冲突 ✅

- 2015 分析由 Finnish Medical Foundation、Finnish Foundation for Cardiovascular Research 和 Finnish Cultural Foundation 支持，报告无利益冲突。
- 2018 分析由 Finnish Foundation for Cardiovascular Research 支持，作者声明无竞争性利益。
- 2025 综述披露 Hamaya 持有 Everyone Cohort Inc.；Sesso 曾接受 Pure Encapsulations、American Pistachio Growers 调查者发起研究资助，并有 Council for Responsible Nutrition、BASF、Haleon 和 NIH 讲课/差旅报酬。未披露直接桑拿产业资助。

### 6. 因果 vs 相关 ⚠️→✅

已将“保护效果”“效果最佳”等因果语言改为观察性关联，明确残余混杂、反向因果和健康使用者偏倚不能排除。

### 7. 人群适用性 ⚠️→✅

- 全因死亡 HR 限于东芬兰 42–60 岁男性。
- 2018 年样本为 Kuopio 地区 53.4–73.8 岁男女，高频女性组无 CVD 死亡事件，不能证明女性获益。
- 不可外推至年轻人、非北欧人群、不习惯桑拿者，或红外桑拿/蒸汽房/热水浴。

### 8. 研究局限性 ⚠️→✅

已披露基线一次性自报、暴露可能随时间改变、高频组小、主要参照为每周 1 次、性别分层统计效能不足、残余混杂和反向因果。2025 RCT 综述的中高偏倚风险、小样本、未设盲、未预注册和异质性也已补入。

### 9. 发表偏倚 ⚠️

- 死亡证据集中于同一 KIHD 队列/研究网络，无法对死亡效果作正式漏斗图检验；同一队列的多次阳性分析不是独立复制。
- 2025 RCT 综述的 BP 漏斗图看似不对称；DBP Egger 检验 P=0.041，但去掉一项研究后不再显著，提示小样本效应/发表偏倚的不确定性。

### 10. 时效性 ⚠️→✅

- 2015/2018 仍是直接死亡核心证据；[2022 年炎症分层分析](https://pmc.ncbi.nlm.nih.gov/articles/PMC9792415/) 和 [2024 年收缩压交互分析](https://pubmed.ncbi.nlm.nih.gov/38410962/) 仍使用 KIHD 男性队列，不属于独立复制。
- 纳入了检索截至 2024-11-04、2025 年发表的 RCT 系统综述。
- 截至 2026-09-09 的本次更新检索，未找到能恢复数字前缀的死亡终点 RCT 或独立跨地区复制。

## 桑拿类型、风险与实践边界

- KIHD 所研究为传统芬兰式桑拿：相对湿度约 10%–20%，向热石泼水可短暂增湿；2015 年男性研究平均温度为 78.9°C。这不支持“必须≥80°C”或向其他热疗模式外推。
- 2001 综述把不稳定型心绞痛、近期心肌梗死和重度主动脉瓣狭窄列为禁忌，并指出酒精与低血压、心律失常和猝死风险增加相关。
- 2018 干桑拿系统综述纳入 40 项研究、3,855 人，仅 13 项 RCT，多数研究 n<40；作者明确认为不良作用频率和程度仍需更高质量数据。
- 已删除旧文无准确来源的“约 30% 桑拿相关心脏事件涉及酒精”，保留可直接支持的定性风险边界。

## 发现并修正的问题

1. 数字标题把特定男性队列的条件性 HR 泛化为通用干预效果；改为 `~` 并收窄标题。
2. 澄清 2018 年分析与原 KIHD 队列的重叠，补入高频女性组 0 事件/HR 不可估计，不再声称女性获益已验证。
3. 明确 2015 年主要参照是每周 1 次，而非不桑拿。
4. 删除固定频率、时长、温度“最优”的因果处方。
5. 删除机制链、Peter Attia、红外桑拿等效、热水浴替代和痴呆数字等偏离本条目死亡主题的扩张。
6. 补入 2025 RCT 综述的支持与不支持结果、偏倚风险和发表偏倚迹象。
7. 扩充低血压、脱水、晕厥/跌倒、热病、烫伤、酒精和高风险心血管状态的安全边界，并明确安全数据不充分。

## 最终参考文献

- [PMID 25705824](https://pubmed.ncbi.nlm.nih.gov/25705824/)
- [PMID 30486813](https://pubmed.ncbi.nlm.nih.gov/30486813/)
- [PMID 26436738](https://pubmed.ncbi.nlm.nih.gov/26436738/)
- [PMID 41049507](https://pubmed.ncbi.nlm.nih.gov/41049507/)
- [PMID 29849692](https://pubmed.ncbi.nlm.nih.gov/29849692/)
- [PMID 11165553](https://pubmed.ncbi.nlm.nih.gov/11165553/)
