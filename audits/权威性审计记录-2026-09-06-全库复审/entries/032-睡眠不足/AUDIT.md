# 032 睡眠不足 - 权威性审计记录

## 审计日期

2026-09-08

## 状态

FIXED

## 检索与核验

- 完成 6 组独立检索：全因死亡 meta/大型队列；成人睡眠指南；延长睡眠 RCT/系统综述；老年人与年龄差异；失眠边界；日间嗜睡与睡眠呼吸暂停。
- PubMed 终端页逐页核验见 `PMID_VERIFICATION.md`。

## 10 项审计

### 1. 来源质量 ✅

使用前瞻性队列的 meta 分析、UK Biobank 大型队列、AASM/SRS 共识、CDC 指南与延长睡眠 RCT。

### 2. 结论一致性 ⚠️→✅

已撤销“<6 小时一律导致全因死亡 +12~24%”。各研究的短睡阈值和对照组不同：Cappuccio 汇总 RR=1.12，Tao 的 HR=1.25 仅对应≤5 h vs 7 h。

### 3. 反面证据 ✅

老年人 meta 中短睡汇总 HR=1.04（95% CI 1.00–1.09），女性亚组 HR=1.00（95% CI 0.85–1.18），不支持统一幅度。

### 4. 效果量准确性 ⚠️→✅

已将 RR/HR 明确标为相对风险；不将其误写为绝对风险增加。来源未给出可通用绝对风险差，因此不换算。

### 5. 利益冲突 ✅

Tasali RCT 报告无利益冲突，资助来自 NIH 项目；He meta 报告无竞争性利益。未发现需在正文特别降权的行业资助。

### 6. 因果 vs 相关 ⚠️→✅

死亡率部分全部改为“相关”。RCT 只支持短期睡眠与能量摄入结局，未评估死亡率。

### 7. 人群适用性 ⚠️→✅

增加 18–60、61–64、65+ 年龄建议差异，并说明老年人及性别亚组差异。RCT 限于 21–40 岁超重短睡者。

### 8. 研究局限性 ✅

明确自报睡眠测量误差、阈值不一、异质性、残余混杂、长睡的反向因果和 RCT 的单中心/短随访/替代结局。

### 9. 发表偏倚 ✅

Cappuccio 对短睡的 Egger 检验 P=0.74，未发现发表偏倚证据；He 对短睡的检验 P=0.392。“未检出”不等于“不存在”。

### 10. 时效性 ✅

检索包含 2026 年的客观/自报测量比较研究与 2026 年 CDC 统计，但新研究仍为队列，不能封闭死亡率因果链。正文保留更易解释且已逐页核验的核心文献。

## 核心数字处理

- 标题 `+12~24%`：❌ 不成立，改为 `~`。
- RR=1.12（95% CI 1.06–1.18）：✅ Cappuccio 短睡汇总关联，但阈值不一。
- HR=1.25（95% CI 1.16–1.34）：✅ 仅用于 Tao 的自报≤5 h vs 7 h。
- 老年人 HR=1.04（95% CI 1.00–1.09）：✅ 仅边缘显著，不支持通用标题数字。
- RCT +1.2 h/晚、-270 kcal/日：✅ 仅用于 2 周短期中间结局，不外推死亡率。

## 核心来源

- [Cappuccio et al. *Sleep*. 2010](https://pubmed.ncbi.nlm.nih.gov/20469800/)
- [Tao et al. *Sleep Medicine*. 2021](https://pubmed.ncbi.nlm.nih.gov/33819843/)
- [He et al. *BMC Public Health*. 2020](https://pubmed.ncbi.nlm.nih.gov/32723316/)
- [Watson et al. *Sleep*. 2015](https://pubmed.ncbi.nlm.nih.gov/26039963/)
- [Tasali et al. *JAMA Internal Medicine*. 2022](https://pubmed.ncbi.nlm.nih.gov/35129580/)
- [CDC: About Sleep](https://www.cdc.gov/sleep/about/index.html)
- [AASM: Insomnia Toolkit](https://aasm.org/clinical-resources/insomnia-toolkit/)
- [NHLBI: Sleep Apnea Symptoms](https://www.nhlbi.nih.gov/health/sleep-apnea/symptoms)
