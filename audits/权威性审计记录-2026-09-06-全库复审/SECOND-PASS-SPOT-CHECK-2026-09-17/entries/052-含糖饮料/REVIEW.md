# 052 含糖饮料：独立二次质量抽查

**抽查日期**：2026-09-17
**抽查方式**：只读复核；未修改中英文正文、首轮 `AUDIT.md`、`HANDOFF.md` 或 `PMID_VERIFICATION.md`
**结论等级**：**B**（有非关键遗漏，不改变核心结论或行动方向）
**是否建议公开**：**可继续公开，不需要撤下；建议在下一次发布前修正下列 minor 问题。**
**是否需要修正**：**需要小修**。没有 blocker 或 major；关键数字、引用和核心结论不需要推翻。

## 一、复核范围

- 中文终稿：`wiki_zh/吃/饮品/+10~20% 含糖饮料.md`
- 英文终稿：`wiki_en/Diet/Beverages/+10~20% Sugary Drinks.md`
- 首轮三件套：
  - `audits/权威性审计记录-2026-09-06-全库复审/entries/052-含糖饮料/AUDIT.md`
  - `audits/权威性审计记录-2026-09-06-全库复审/entries/052-含糖饮料/HANDOFF.md`
  - `audits/权威性审计记录-2026-09-06-全库复审/entries/052-含糖饮料/PMID_VERIFICATION.md`
- 本轮独立打开并核对全部最终 PMID：`30882235, 31479109, 32326961, 33786594`。

## 二、独立检索记录

本轮进行了 4 组相互独立的英文检索；各组检索间隔不少于 1 秒。检索不是复用首轮日志。

| # | 检索词 | 主要命中与用途 |
|---:|---|---|
| 1 | `site:pubmed.ncbi.nlm.nih.gov sugar-sweetened beverages all-cause mortality Malik 2019 30882235` | [Malik 2019 PubMed](https://pubmed.ncbi.nlm.nih.gov/30882235/)，定位标题数字的直接队列来源；同时命中 NHANES、UK Biobank 和更新 ASB 综述 |
| 2 | `site:pubmed.ncbi.nlm.nih.gov sugar sweetened beverages mortality dose response meta-analysis 355 mL 33786594` | [Zhang 2021 PubMed](https://pubmed.ncbi.nlm.nih.gov/33786594/)，核对 355 mL/日剂量反应、异质性、亚组与发表偏倚 |
| 3 | `site:pubmed.ncbi.nlm.nih.gov EPIC soft drink all-cause mortality 250 mL 31479109` | [Mullee 2019 PubMed](https://pubmed.ncbi.nlm.nih.gov/31479109/)，核对欧洲较小效应、250 mL/杯与总癌症死亡阴性结果 |
| 4 | `site:pubmed.ncbi.nlm.nih.gov sugar-sweetened beverage all-cause mortality systematic review 2024 2025 2026` | [2025 全因死亡食物组伞状综述，PMID 39956388](https://pubmed.ncbi.nlm.nih.gov/39956388/)、[2026 美国/英国队列与 GBD 分析，PMID 42324544](https://pubmed.ncbi.nlm.nih.gov/42324544/)、[2024 ASB 更新荟萃分析，PMID 39085903](https://pubmed.ncbi.nlm.nih.gov/39085903/)；用于时效性和替代边界复核 |

用于数字逐项核对的全文页：

- [Malik 2019 PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6488380/)
- [Mullee 2019 PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC6724165/)
- [Zhang 2021 PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC8009739/)
- [Anderson 2020 PMC 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC7181499/)

## 三、逐 PMID 原始页核验

### PMID 30882235 — Malik et al., 2019

- 原始页：[PubMed](https://pubmed.ncbi.nlm.nih.gov/30882235/)；全文：[PMC6488380](https://pmc.ncbi.nlm.nih.gov/articles/PMC6488380/)
- 书目：`Long-Term Consumption of Sugar-Sweetened and Artificially Sweetened Beverages and Risk of Mortality in US Adults`；Vasanti S Malik 等；*Circulation*；2019。题名、作者、期刊、年份与正文引用一致。
- 人群：NHS 80,647 名女性 + HPFS 37,716 名男性，共 118,363 人；基线排除糖尿病、心血管病或癌症；随访分别 34 年和 28 年。
- 暴露：重复 FFQ，自报“标准杯、瓶或罐”；SSB 包括含糖可乐、其他含糖碳酸饮料、果味饮料、柠檬水等，不含 100% 果汁；讨论部分以典型汽水 12 oz 说明一份，但这并不等于每一种 FFQ 饮料都被实测为 355 mL。
- 全因死亡：相对 `<1 份/月`，`1–<2 份/日` HR 1.14（1.09–1.19），`≥2 份/日` HR 1.21（1.13–1.28）；每增加 1 份/日 HR 1.07（1.05–1.09）。均与终稿一致。
- 病因死亡：极端组 CVD HR 1.31（1.15–1.50），癌症 HR 1.16（1.04–1.29）。与终稿一致。
- 替代模型：同时把 SSB、ASB 作为连续变量并比较回归系数；模型估计以 1 份/日 ASB 替代 1 份/日 SSB 的全因死亡 HR 0.96（0.94–0.98）。终稿正确称为“统计替代模型”，没有写成随机干预。
- 限制：高摄入者在吸烟、运动和总体饮食上明显不同；残余混杂不能排除；FFQ 自报和测量误差存在；样本主要为非西班牙裔白人卫生专业人员。终稿披露了残余混杂和外推边界，但漏了自报测量误差，见 minor 1。
- COI：NIH 资助；VSM、WCW 披露与 SSB 诉讼和汽水警示标签有关的公益法律支持/咨询。终稿表述准确。

### PMID 31479109 — Mullee et al., 2019

- 原始页：[PubMed](https://pubmed.ncbi.nlm.nih.gov/31479109/)；全文：[PMC6724165](https://pmc.ncbi.nlm.nih.gov/articles/PMC6724165/)
- 书目：`Association Between Soft Drink Consumption and Mortality in 10 European Countries`；Amy Mullee 等；*JAMA Internal Medicine*；2019。匹配。
- 人群：EPIC 10 个欧洲国家，451,743 人，平均随访 16.4 年，41,693 例死亡；基线排除癌症、心脏病、卒中或糖尿病。
- 剂量：一杯按 250 mL；相对 `<1 杯/月`，含糖软饮 `≥2 杯/日` 的全因死亡 HR 1.08（1.01–1.16）。终稿准确，没有把 250 mL 与 Malik/荟萃分析的 355 mL 混用。
- 反证：总癌症死亡与总软饮、含糖软饮、代糖软饮均无显著关联；这与 NHS/HPFS 的癌症死亡 HR 1.16 不完全一致。终稿准确披露。
- 边界：EPIC 的 soft drink 问卷定义和 Malik 的 SSB 组合并不完全相同，且多国问卷结构有差异；观察性残余混杂仍存在。终稿把它作为异质性/反证而非同一定义的重复验证，处理合理。
- COI/资助：主要为欧盟、IARC 和各国公共/慈善研究资助，作者披露项未见饮料产业资助。终稿未列这项，属可选完整性增强。

### PMID 33786594 — Zhang et al., 2021

- 原始页：[PubMed](https://pubmed.ncbi.nlm.nih.gov/33786594/)；全文：[PMC8009739](https://pmc.ncbi.nlm.nih.gov/articles/PMC8009739/)
- 书目：`Association of Consumption of Sugar-Sweetened Beverages or Artificially Sweetened Beverages with Mortality: A Systematic Review and Dose-Response Meta-Analysis of Prospective Cohort Studies`；Yan-Bo Zhang 等；*Advances in Nutrition*；2021。匹配。
- 剂量统一：主分析按每 12 fl oz/355 mL/日；另做 8 fl oz/237 mL 敏感性分析。终稿对主分析单位的表述准确。
- 全因死亡：11 个队列、965,851 人、114,935 例死亡；每 355 mL/日 HR 1.08（1.04–1.12），I²=70.5%。终稿全部准确。
- CVD 死亡：每 355 mL/日 HR 1.08（1.04–1.12）；癌症死亡无显著关联。准确。
- 亚组：亚洲、女性、总体低摄入亚组未达统计学显著；研究地点和随访时间可能解释部分异质性。准确。
- 发表偏倚：漏斗图、Begg 和 Egger 检验提示小幅发表偏倚可能。终稿披露准确。
- 暴露定义差异：纳入研究的 SSB 定义并不完全统一；论文也明确指出多数研究未覆盖甜味乳饮、乳替代饮品、冲调饮料或消费者自行加甜味剂。终稿的标题效应不应外推到所有“甜味饮料”，现有正文基本守住该边界。
- COI：国家重点研发计划、国家自然科学基金资助；作者无冲突，资助方不参与研究选择、质量评价、分析或写作。终稿准确。

### PMID 32326961 — Anderson et al., 2020

- 原始页：[PubMed](https://pubmed.ncbi.nlm.nih.gov/32326961/)；全文：[PMC7181499](https://pmc.ncbi.nlm.nih.gov/articles/PMC7181499/)
- 书目：`The associations of sugar-sweetened, artificially sweetened and naturally sweet juices with all-cause mortality in 198,285 UK Biobank participants: a prospective cohort study`；Jana J Anderson 等；*BMC Medicine*；2020。匹配。
- 人群与测量：198,285 名 40–69 岁 UK Biobank 参与者；自报 24 小时膳食回顾；平均随访 7 年，3,166 例死亡。
- 100% 果/蔬汁：表面保护关联在饮食质量调整、排除基线疾病、完成更多膳食问卷等敏感性分析中不稳健；原文明确称其对残余混杂和反向因果敏感。终稿“未发现与更高全因死亡稳健相关”以及“不证明果汁延寿”的概括准确。
- ASB：死亡关联在排除早期死亡或近期减重者后不再稳健，支持反向因果担忧。终稿准确。
- COI/资助：PubMed 披露无相关财务关系；UK Biobank 获 Wellcome Trust、MRC、政府和 British Heart Foundation 等支持，作者称分析独立于资助方。终稿未列，属可选完整性增强。

## 四、关键数字与 `+10~20%` 前缀复核

| 数字/表述 | 原始定义 | 复核结果 |
|---|---|---|
| `+14%` | Malik：`1–<2 份/日` vs `<1 份/月`，全因死亡 HR 1.14 | ✅ 直接全因死亡证据，不是疾病发生或代理终点 |
| `+21%` | Malik：`≥2 份/日` vs `<1 份/月`，全因死亡 HR 1.21 | ✅ 直接证据；标题 `+10~20%` 是粗略四舍五入，正文给出 21% 原数 |
| `+7%/每份/日` | Malik：每增加 1 个 FFQ 标准杯/瓶/罐/日，HR 1.07 | ✅；不应自动等同为严格 355 mL 的每份，终稿没有这样写 |
| `+8%/355 mL/日` | Zhang 荟萃分析：HR 1.08 | ✅；与 Malik 的分组极端比较不是同一个 estimand，终稿已分开 |
| EPIC `+8%` | `≥2 杯/日`（250 mL/杯）vs `<1 杯/月`，HR 1.08 | ✅；体现地区、暴露问卷与效应量异质性 |
| 替代 HR 0.96 | Malik 回归替代模型：1 份/日 ASB 替代 1 份/日 SSB | ✅ 数字；⚠️ 不是实际随机换饮料的因果效果 |

### 前缀结论

`+10~20%` 有定义一致、直接针对全因死亡的来源，但它不是跨人群的普适常数：

1. 直接标题来源主要是美国护士和男性卫生专业人员的两个队列，约 95%–97.5% 为白人，且基线无糖尿病、心血管病或癌症；
2. EPIC 同一频率极端组只有 HR 1.08；荟萃分析的每 355 mL/日结果也是 HR 1.08，并有 I²=70.5%；
3. 亚洲、女性和低摄入亚组不显著，亚洲两项原始队列甚至为不显著的反向估计，可能与低摄入和社会经济残余混杂有关；
4. 终稿紧邻数字写明摄入组、参照、相对 HR、观察性和不可直接外推，因此目前没有把该范围伪装成所有人的因果绝对风险。

结论：**前缀可以保留，但只能在现有严格限定同时保留的前提下公开。**

## 五、中英文一致性

- PMID 集合完全一致：`30882235, 31479109, 32326961, 33786594`。
- 样本量、随访、分组、剂量单位、HR/CI、异质性、替代模型、绝对风险说明和 COI 数字一致。
- SSB、ASB、100% 果汁三类暴露在中英文中均分开。
- 地区与人群外推限制一致。
- 未发现改变结论的翻译偏差。

## 六、问题分级

### Blocker

- **无。**

### Major

- **无。** 四个最终 PMID 真实；关键数字均可在原文找到；未发生把疾病发生率、CVD 死亡或替代终点冒充全因死亡的情况。

### Minor

1. **正文遗漏自报膳食测量误差，而首轮 `AUDIT.md` 错称已经披露。** `AUDIT.md` 第 60 行称正文已披露“自报 FFQ/24 小时回顾测量误差”，但中英文终稿的“边界与不确定性”没有这一点。Malik 论文明确承认 FFQ 自报和测量误差；Anderson 中 38% 参与者只完成一次 24 小时回顾，且果汁/ASB 结果会随问卷次数改变。建议正文补一句：饮料摄入来自自报 FFQ/24 小时回顾，存在误分类，可能使效应偏向或远离零。
2. **ASB 过渡建议仍比死亡证据略强。** 正文已正确说明 HR 0.96 是统计替代模型，但“先用代糖饮料过渡可能比继续喝含糖饮料更好 / may be ... preferable”仍容易被读成实际换饮料可降低死亡风险。建议把行动句限定为“若为减少添加糖而短期过渡，可考虑；不能据此推断死亡获益，水和不加糖饮料优先”。
3. **首轮检索日志不足以完整复现。** `AUDIT.md` 只概述“7 组英文检索”并列举若干关键词类别，没有逐条记录 7 个完整查询、检索日期、命中 URL、选取理由；对关键数字主要依赖的 PMC 全文和补充材料 URL 也未写入。`PMID_VERIFICATION.md` 能复核书目和摘要，但不足以独立复现 FFQ 定义、1.07 增量、0.96 替代模型、I²、亚组与 COI 的全文核对。建议首轮记录补齐精确搜索式、结果 URL 和全文定位。
4. **首轮“检索至 2026-09-16”的时效性声明不完整。** 本轮用 2024–2026 独立检索命中 2026-06-21 发布的 [Tan et al., PMID 42324544](https://pubmed.ncbi.nlm.nih.gov/42324544/)；该文直接分析美国 NHANES 与 UK Biobank 的 SSB 与全因/病因死亡，方向支持现有结论，尚不改变标题数字，但首轮日志未记录它。建议时效性部分补记“已见但不用于改写标题效应量”，或说明排除理由。

### 可选增强

1. COI 小节可补齐 Mullee/EPIC 与 Anderson/UK Biobank 的非商业资助和无相关商业冲突披露，使“利益冲突”覆盖全部正文研究，而非只覆盖 Malik 与 Zhang。
2. 可在荟萃分析句后补一句：纳入研究的 SSB 定义并不完全统一，且多数未包含甜味乳饮、冲调饮料或消费者自行加糖；这会进一步阻止读者把 `+10~20%` 套到所有甜味饮品。
3. 可把 2025 全因死亡食物组伞状综述作为时效性背景来源；它支持高 SSB 摄入与较高全因死亡相关，但不应替代本文清楚的剂量和参照定义。

## 七、最终判断

- **评分：B。**
- **核心判断**：`+10~20%` 的确有直接全因死亡观察性证据，且终稿已经把极端组、每份增量、SSB/ASB/果汁、地区和残余混杂分开表达；数值与 PMID 均通过复核。
- **公开建议**：可继续公开，不需撤下或改为 `~`；但应在下一次正式发布前补上自报测量误差、收紧 ASB 过渡建议，并把首轮检索/全文核验日志补到可复现水平。
- **本轮操作边界**：只新增本 `REVIEW.md`，未改正文、首轮三件套、索引，未 commit/push。
