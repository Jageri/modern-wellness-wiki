# 001 褪黑素 - 权威性审计记录

## 基本信息

- 审计日期：2026-09-07（Asia/Shanghai）
- 审计范围：仅中文 `+100% 褪黑素.md` 与英文 `+100% Melatonin.md`
- 最终判定：**FIXED**
- 新文件名前缀：`~`
- 理由：没有直接支持普通人全因死亡或寿命效应的长期 RCT；死亡观察性信号方向矛盾，不能保留 `+100%`。

## 当前条目主张与引用提取

原条目核心主张包括：短期睡眠有效、55 岁以上慢性失眠有效、短期 RCT 无严重不良事件、2025 AHA 会议摘要中长期使用与心衰及死亡增加相关、长期心血管 RCT 不存在、建议固定低剂量和不超过 3 个月、产品含量可偏离 −83% 至 +478%。原正文唯一显式 PMID 为 `35652450`；另引用 DOI `10.1161/circ.152.suppl_3.4371606`、`10.1111/jpi.12782`、`10.1016/j.eclinm.2023.102083` 及 PMC9251346、PMC3656905。

主要问题：文件名把关联性死亡信号误作确定寿命效应；睡眠疗效结论过度确定；把短期不良事件数据写成“安全”；未纳入 2024 前瞻性队列及 2026 心血管 RCT Meta；固定剂量、服用时点、3 个月禁限、每 3 个月复评、卧室温度、呼吸抑制和多项特殊人群断言没有逐项引用；把基础机制列为“中等”临床证据；参考文献不完整且正文出现未列入参考文献的 PMID。

## 独立英文检索记录

检索于 2026-09-07 09:50–10:06 CST 完成。每组检索独立发起，调用间隔超过 1 秒。

1. **长期死亡/心衰信号**
   - 关键词：`melatonin mortality heart failure long-term insomnia cohort Nnadi 2025`
   - 关键词：`Effect of Long-term Melatonin Supplementation 4371606`
   - 关键词：`melatonin long term cardiovascular safety cohort systematic review 2025 2026`
   - 来源：[Circulation DOI](https://doi.org/10.1161/circ.152.suppl_3.4371606)、[Crossref DOI 记录](https://api.crossref.org/works/10.1161/circ.152.suppl_3.4371606)、[AHA 新闻室](https://newsroom.heart.org/news/long-term-use-of-melatonin-supplements-to-support-sleep-may-have-negative-health-effects)、[PMID 38710189](https://pubmed.ncbi.nlm.nih.gov/38710189/)、[PMID 35652450](https://pubmed.ncbi.nlm.nih.gov/35652450/)
2. **成人失眠疗效与阴性证据**
   - 关键词：`melatonin adults insomnia systematic review meta-analysis sleep onset latency adverse events`
   - 关键词：`efficacy melatonin ramelteon acute long-term insomnia adults systematic review meta-analysis`
   - 来源：[PMID 36179487](https://pubmed.ncbi.nlm.nih.gov/36179487/)、[PMID 37434463](https://pubmed.ncbi.nlm.nih.gov/37434463/)
3. **安全性与剂量/产品质量**
   - 关键词：`melatonin long term safety systematic review adults adverse events`
   - 关键词：`melatonin supplement content label variability 478 83 serotonin`
   - 来源：[PMID 34923676](https://pubmed.ncbi.nlm.nih.gov/34923676/)、[PMID 27855744](https://pubmed.ncbi.nlm.nih.gov/27855744/)、[NCCIH](https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know)
4. **指南与一线治疗**
   - 关键词：`AASM clinical practice guideline melatonin chronic insomnia adults recommendation`
   - 关键词：`chronic insomnia CBT-I initial treatment guideline ACP`
   - 来源：[AASM 指南 PDF](https://aasm.org/wp-content/uploads/2017/07/PharmacologicTreatmentofInsomnia.pdf)、[PMID 27998379](https://pubmed.ncbi.nlm.nih.gov/27998379/)、[PMID 27136449](https://pubmed.ncbi.nlm.nih.gov/27136449/)
5. **最新心血管 RCT 汇总**
   - 关键词：`Melatonin Supplementation Cardiovascular Outcomes randomized trials meta-analysis 2026`
   - 来源：[PMID 42123177](https://pubmed.ncbi.nlm.nih.gov/42123177/)、[PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC13164420/)

## 十维审计

### 1. 来源质量：⚠️ → ✅（修正后）

原条目的主要死亡危害结论依赖未同行评审会议摘要，且把基础研究用于临床安全推断。修订后明确降权会议摘要，并加入 NIH 资助的三项前瞻性队列、最新心血管 RCT Meta、失眠 Meta 与指南。会议摘要仅保留为风险信号。

### 2. 结论一致性：❌ → ✅

原结论称“短期睡眠调节有效”过宽。Maruani 2023 对缓释制剂显示约 5–6 分钟改善，但 Choi 2022 在无合并症成人中未见多个主要睡眠终点显著改善；AASM 推荐也不支持成人慢性失眠常规使用。修订后呈现分歧和适应证边界。

### 3. 反面证据：❌ → ✅

补入 Li 2024 的中性心血管队列（HR 0.94，CI 跨 1）、Sutton 2022 的特殊脓毒症场景相反死亡关联、Choi 2022 成人失眠阴性 Meta，以及 Ang 2026 的短期心血管 RCT 汇总。明确这些证据也不能证明延寿或长期安全。

### 4. 效果量准确性：⚠️ → ✅

所有保留数字均与 PubMed 原页、Crossref 摘要或全文逐项核对；相对效应同时给出可获得的绝对比例/差值，CI 跨无效线时明确“不显著”。详见“数字核验”。

### 5. 利益冲突：⚠️ → ✅

- Li 2024：NIH 资助；一位作者披露与 Eli Lilly、Apnimed、Jazz Pharma 等关系，其余作者无竞争利益声明。未发现与褪黑素厂商直接相关的资助说明。
- Ang 2026：无外部资助，作者声明无相关利益冲突。
- Choi 2022：作者声明无利益冲突。
- AASM 指南讨论了药物试验普遍存在产业资助和发表偏倚，推荐证据为极低质量。
- Nnadi 2025：可访问 AHA 页面称披露与资金列于摘要，但出版页受反爬限制，无法完整核对具体内容；因此不把其利益冲突状态写成“无”。

### 6. 因果 vs 相关：❌ → ✅

原条目虽提示混杂，但标题及动作建议仍把单个观察性信号实质化。修订后对 Nnadi、Li、Sutton 三项观察性结果统一使用“相关/信号”，不写“导致”，并列出暴露错分、适应证混杂、残余混杂和人群差异。

### 7. 人群适用性：⚠️ → ✅

分别限定为：失眠电子病历患者、中老年美国健康职业队列、住院脓毒症退伍军人、既有心血管病患者、成人慢性失眠患者。删除将儿童证据、动物机制和特殊住院人群外推到普通成人长期使用的表达。

### 8. 研究局限性：❌ → ✅

补充会议摘要未同行评审、剂量与实际服用未知、OTC 暴露错分、失眠严重程度缺失；前瞻队列自报二分类暴露；RCT 随访短、剂量/途径异质、偏倚风险高、不良事件漏报；产品抽检样本小且地域/年份受限。

### 9. 发表偏倚：⚠️ → ✅

Menczel Schrire 2022 中 37% 试验完全不提不良事件，只有 4 项低偏倚风险研究进入主要 Meta；Ang 2026 研究数少，漏斗图检出发表偏倚能力有限，且综述未预注册 PROSPERO；AASM 对潜在产业资助和发表偏倚降级。正文据此不把“未见严重不良事件”解释为安全已证实。

### 10. 时效性：❌ → ✅

原文截至 2025 年会议摘要，遗漏 2024 前瞻性队列及 2026 心血管 RCT Meta。修订纳入检索截止 2026-09-07 的最新可核证临床汇总，并保留较旧但仍直接相关的指南与产品化验研究。

## 核心数字核验

| 主张 | 核验结果 | 证据与边界 |
|---|---|---|
| Nnadi 样本 130,828 | ✅ | 65,414 对 65,414；失眠 EHR 倾向匹配队列，非 RCT |
| 5 年全因死亡 7.8% vs 4.3%，HR 2.09（1.99–2.18） | ✅ | 绝对差 3.5 个百分点；会议摘要，不能推断因果 |
| 新发心衰 4.6% vs 2.7%，HR 1.89（1.78–2.00） | ✅ | 绝对差 1.9 个百分点；实际服用与 OTC 暴露未知 |
| Li 队列 159,072 人，CVD HR 0.94（0.83–1.06） | ✅ | 67,202 + 26,629 + 65,241；CI 跨 1，p=0.32；非死亡终点 |
| Sutton 脓毒症队列 9,386 人、593 暴露 | ✅ | 院内死亡 HR 0.621（0.415–0.931）；30 天总体死亡 HR 0.665（0.493–0.897）；特殊人群观察性研究 |
| Ang 14 RCT、1,027 人；LVEF 变化 +3.95 个百分点（1.70–6.20） | ✅ | 最终 LVEF MD 2.24（−0.31–4.80）不显著；短期替代终点，不是死亡 |
| 缓释褪黑素主观入睡 −6.30 分钟、客观 −5.05 分钟、睡眠效率 +1.91 个百分点 | ✅ | Maruani 2023；小到中等效应，多为急性研究 |
| 高剂量安全性：SAE RR 0.88（0.52–1.50），退出 RR 0.93（0.24–3.56），一般 AE RR 1.40（1.15–1.69） | ✅ | 只有 4 项低偏倚风险研究进入主要 Meta，不能证明长期安全 |
| 产品含量 −83% 至 +478%；>71% 超出 ±10%；26% 检出血清素 | ✅ | 31 种加拿大产品的小型 2017 市场抽检，不代表所有品牌/国家/年份 |

## 正反证据综合

支持潜在危害：Nnadi 2025 的大样本 EHR 摘要提示心衰和死亡增加。反对其作为因果结论：会议摘要未同行评审；暴露/剂量不可确定；失眠严重程度和精神共病缺失；Li 2024 大型前瞻队列 CVD 结果中性；短期心血管 RCT 未见一致不利信号但不能评估死亡。支持潜在获益：特定心血管患者替代终点及脓毒症 30 天死亡存在有利信号。反对其作为延寿结论：人群、疾病、剂量、途径和随访高度特殊，且没有普通人长期死亡 RCT。

最终解释：**长期寿命效应未知；观察性风险与获益信号均只能生成假设。**

## 修改理由与最终判定

1. 中英文成对从 `+100%` 改名为 `~`，因为没有直接、可靠的全因死亡或寿命效应支持。
2. 证据星级从 ⭐⭐⭐ 降为 ⭐⭐，对应“核心长期结局存在争议”。
3. 删除“短期有效”“无严重不良事件”等过度概括，改为量化且分人群/制剂的结论。
4. 删除无充分逐项来源的固定通用剂量、3 个月禁限、每 3 个月复评、卧室温度、呼吸抑制和“免疫/代谢/生殖系统影响”等动作性断言。
5. 删除把动物/体外机制列为中等临床证据的段落；以 2026 人体 RCT Meta 替代。
6. 保留 AHA 信号，但明确其未同行评审、局限和绝对差；同时补齐同等或更高质量的中性/相反证据。
7. 中英文的数字、PMID、星级和因果边界已同步。

**最终状态：FIXED。** 修订后通过红线检查；仍保留的限制是缺乏普通人长期死亡 RCT、会议摘要未形成完整同行评审论文、长期真实世界暴露测量差。
