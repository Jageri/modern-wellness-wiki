# 092 听力保护：独立二次质量抽查

## 抽查信息

- 日期：2026-09-17（Asia/Shanghai）
- 方式：只读复核最终中英文条目，以及首轮 `AUDIT.md`、`HANDOFF.md`、`PMID_VERIFICATION.md`；未修改正文或首轮记录。
- 最终评分：**B（有非关键遗漏，不改变核心结论或行动建议）**
- 是否建议公开：**核心内容可以公开；无需撤下，但建议在下一次正式更新前完成下列 minor 修正。**
- Blocker：0
- Major：0
- Minor：4
- 可选增强：3

评分依据采用本轮抽查计划：A 为无实质问题，B 为非关键遗漏，C 为会误导部分读者的实质问题，D 为关键数字、引用或核心结论错误。

## 一、结论摘要

终稿完成了最关键的纠偏：中英文文件均已从 `+20~40%` 改为 `~`，并明确死亡率影响未知。2025 年死亡 Meta 的 `HR 1.21` 是“听力损失者 vs 听力正常者”的观察性关联，不是防噪、筛查或助听器的干预效果；现有最终引用也没有以全因死亡或寿命为终点的相关 RCT。因此撤销数字前缀是正确且必要的。

ACHIEVE 的表述准确：977 人总体主要分析阴性，组间 3 年认知变化差 `0.002 SD`（95% CI `-0.077–0.081`，p=0.96）；所谓“减缓 48%”只来自预先设定的按招募来源分层敏感性分析中的 238 人 ARIC 亚组，739 人新招募组没有显著差异。终稿没有把 48% 写成总体疗效、痴呆发生率下降或死亡率下降。

撤稿的 UK Biobank 助听器—痴呆论文（PMID 37062296）已从支持性证据中彻底排除：原来的 HR 获益数字不再出现，正文只保留“已撤稿、不得作为证据”的警示，并引用撤稿通知 PMID 38101424。死亡、痴呆、防噪、筛查、沟通获益和助听器认知证据均已分层，行动建议也没有许诺防痴呆或延寿。

未发现虚构 PMID、关键数字转写错误、中英文确定性漂移，或足以构成 C/D 的问题。B 级主要来自四项非关键遗漏：首轮 11 组检索没有留下可重跑的完整检索式；截至首轮截止日已发表的 2026 Cochrane 助听器更新未被记录；撤稿原文 PMID 在终稿中不是可点击链接；两条具体噪声防护判断缺少正文中的 NIOSH/CDC 直接来源。

## 二、问题分级

### Blocker

无。

### Major

无。

### Minor

1. **首轮检索过程不能完整复跑。** `AUDIT.md` 声称完成“11 组”检索并给出部分代表 URL，但没有逐组记录原始检索式、数据库、检索日期、结果页、纳入/排除理由。`PMID_VERIFICATION.md` 足以复核最终 10 个 PMID 的书目信息和用途，却不足以重放“是否系统寻找过反面证据、撤稿、最新系统综述和死亡终点 RCT”。建议只补首轮日志，不需要因此改变正文结论。

2. **首轮时效性声明漏记 2026 年 8 月的更新 Cochrane 综述和 2026 RCT 系统综述。** 2026-08-26 发布的 Cochrane 更新（PMID 42644645）认为，轻中度听力损失成人使用助听器很可能改善听力相关生活质量和聆听能力；2026 年 RCT 系统综述（PMID 42053356）同样支持听力相关自评结局，但长期认知证据仍有限。两者与终稿“沟通/听觉获益较可靠、认知获益不确定”的方向一致，不改变死亡或痴呆边界，故为 minor 而非 major；但 `AUDIT.md` 的“检索截止 2026-09-16”应记录它们或说明排除理由。来源：https://pubmed.ncbi.nlm.nih.gov/42644645/ ，https://pubmed.ncbi.nlm.nih.gov/42053356/

3. **撤稿原文 PMID 在最终中英文正文中不是超链接。** 两版正文都以裸文本写 `PMID 37062296`，参考文献只链接撤稿通知 PMID 38101424。该论文仅用于撤稿警示、没有被当作正面证据，因此不影响科学结论；但按项目“所有可查引用均加可访问 URL”的规范，建议将裸 PMID 链接到 https://pubmed.ncbi.nlm.nih.gov/37062296/ 并显著标注“Retracted/已撤稿”。

4. **两条具体噪声建议虽正确，但最终参考文献缺少最直接来源。** `85 dBA/8 小时` 是 NIOSH 职业噪声推荐暴露限值，并非一般公众安全线；普通主动降噪耳机除非标有 NRR，不能自动视为听力防护具。终稿表述本身准确，但只列 NIDCD 总览和 2017 Cochrane，没有列出支持这两个精确边界的 NIOSH 页面。建议补：https://www.cdc.gov/niosh/noise/prevent/understand.html 和 https://www.cdc.gov/niosh/noise/prevent/ppe.html 。

### 可选增强

1. ACHIEVE 可补充 ARIC 亚组的绝对模型差与区间：`0.191 SD`（95% CI `0.022–0.360`，p=0.027），新招募组 `-0.061 SD`（95% CI `-0.151–0.028`，p=0.18），交互 p=0.010。这样比只写“48%”更便于读者判断不确定性，但现有文字已经正确限定亚组。
2. 2026 目标试验模拟可补充痴呆估计：7 年风险 `5.0% vs 7.5%`，RR `0.67`（95% CI `0.37–0.97`）；同时紧邻说明以自报听力困难替代客观中度听损、仅约 10% 有测听数据、处方与实际使用均可能受健康使用者偏倚影响。现有“风险估计较低，但残余混杂不能排除”已经安全。
3. ACHIEVE 人群描述可用精确值 `87.8% White` 代替四舍五入的 `88%`；不影响外推判断。

## 三、独立检索记录

本轮完成 8 组独立英文检索（超过最低 3 次），各次检索间隔不少于 1 秒；没有复用首轮检索结论作为验证依据。

| 组 | 原始检索词 | 核验目标 | 代表性 URL |
|---:|---|---|---|
| 1 | `ACHIEVE trial hearing intervention 48% ARIC subgroup overall primary analysis 0.002 SD 2023 Lancet` | ACHIEVE 总体、分层、48% 含义 | https://pubmed.ncbi.nlm.nih.gov/37478886/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC10529382/ |
| 2 | `hearing loss all cause mortality meta-analysis 2025 HR 1.21 6.4 million PMID 41066358` | 死亡关联、样本量、异质性与观察性边界 | https://pubmed.ncbi.nlm.nih.gov/41066358/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC12510559/ |
| 3 | `PMID 37062296 retracted hearing aid dementia UK Biobank retraction notice reason` | 撤稿状态及原结论是否应排除 | https://pubmed.ncbi.nlm.nih.gov/37062296/ ; https://pubmed.ncbi.nlm.nih.gov/38101424/ |
| 4 | `Cochrane hearing loss prevention noise earplugs 20 dB fitting instruction 8.59 dB Tikka 2017` | 防护具衰减、培训效果与长期边界 | https://pubmed.ncbi.nlm.nih.gov/28685503/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC6353150/ |
| 5 | `hearing loss dementia 639 participants 1.27 per 10 dB PMID 21320988` | 听力损失—痴呆观察关联 | https://pubmed.ncbi.nlm.nih.gov/21320988/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC3277836/ |
| 6 | `hearing intervention target trial emulation dementia 2777 0.03 SD Neurology 2026 PMID 41534012 erratum` | 2026 观察性目标试验模拟及勘误 | https://pubmed.ncbi.nlm.nih.gov/41534012/ ; https://pubmed.ncbi.nlm.nih.gov/41861267/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC13038394/ |
| 7 | `PMID 42644645 hearing aids mild moderate hearing loss adults Cochrane 2026 listening ability cognition adverse events` | 2026 最新高层级助听器证据 | https://pubmed.ncbi.nlm.nih.gov/42644645/ ; https://pubmed.ncbi.nlm.nih.gov/42053356/ |
| 8 | `site:cdc.gov/niosh 85 dBA 8 hours hearing protection occupational criterion active noise cancelling headphones` | 85 dBA/8 小时与 ANC/NRR 行动边界 | https://www.cdc.gov/niosh/noise/prevent/understand.html ; https://www.cdc.gov/niosh/noise/prevent/ppe.html |

另核对当前 USPSTF 页面：无症状 50 岁以上成人仍为 I 声明，且明确不适用于已有症状、突发听损、传导性听损或近期噪声所致听损。URL：https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hearing-loss-in-older-adults-screening

## 四、全部最终 PMID 逐页二次核验

本轮逐一请求了全部 10 个最终 PubMed 原始页。对个别返回空壳/浏览器校验的页面，再用 NCBI EFetch XML 和开放全文交叉核对题名、作者、期刊、年份、摘要、文献状态与关联记录：

https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=21320988,28685503,37062296,37478886,38101424,39096926,39849317,41066358,41534012,41861267&retmode=xml

| PMID | 原始页 | 二次核验内容 | 判断 |
|---:|---|---|---|
| 21320988 | https://pubmed.ncbi.nlm.nih.gov/21320988/ | Lin et al., *Archives of Neurology*, 2011；639 人、36–90 岁；每 10 dB 全因痴呆 HR `1.27`（`1.06–1.50`）；中度 `3.00`（`1.43–6.30`），重度 `4.94`（`1.09–22.40`），重度仅 6 人；作者明确因果/早期标志未定。 | ✅ |
| 28685503 | https://pubmed.ncbi.nlm.nih.gov/28685503/ | Tikka et al., *Cochrane Database of Systematic Reviews*, 2017；防护具约降低 20 dB(A) 的数字来自 1 项 RCT+3 项对照研究、57 人、低质量证据；培训额外 `8.59 dB`（`6.92–10.25`），2 RCT、140 人；长期听损预防仍不确定。 | ✅ |
| 37062296 | https://pubmed.ncbi.nlm.nih.gov/37062296/ | Jiang et al., *Lancet Public Health*, 2023；PubMed 明确显示 `RetractionIn` 指向 PMID 38101424。原论文已撤稿，不得作为助听器预防痴呆的证据。 | ✅ 撤稿；正文仅作撤稿警示 |
| 37478886 | https://pubmed.ncbi.nlm.nih.gov/37478886/ | Lin et al., *Lancet*, 2023；ACHIEVE，977 人，70–84 岁；总体差 `0.002 SD`（`-0.077–0.081`），p=0.96；ARIC 238 人与 de novo 739 人；ARIC 48% 属预设分层敏感性分析，不是总体、痴呆或死亡效应。 | ✅ |
| 38101424 | https://pubmed.ncbi.nlm.nih.gov/38101424/ | *Lancet Public Health* Editors，2024；文献类型 `Retraction Notice`，`RetractionOf` 明确指向 PMID 37062296。 | ✅ |
| 39096926 | https://pubmed.ncbi.nlm.nih.gov/39096926/ | Livingston et al., *Lancet*, 2024；痴呆常务委员会报告；听力损失属于潜在可干预风险因素。终稿正确把人群归因分值解释为群体模型，而非个人风险或助听器 RCT 疗效。 | ✅ |
| 39849317 | https://pubmed.ncbi.nlm.nih.gov/39849317/ | Tang et al., *Ear and Hearing*, 2025；11 篇系统综述；语音感知、沟通功能、听觉障碍和自评获益较一致；认知、抑郁、孤独和社会隔离证据不足，生活质量矛盾；作者声明无 COI，获 Australian Hearing Hub Research Committee 资助。 | ✅ |
| 41066358 | https://pubmed.ncbi.nlm.nih.gov/41066358/ | Jia et al., *PLoS One*, 2025；36 队列、6,364,914 人；全因死亡 HR `1.21`（`1.13–1.31`），I² `95.7%`；全部观察性；作者声明无竞争利益。 | ✅ |
| 41534012 | https://pubmed.ncbi.nlm.nih.gov/41534012/ | Cribb et al., *Neurology*, 2026；观察性目标试验模拟；中位 2,777 人，7 年总体认知差 `0.03 SD`（`-0.14–0.21`）；痴呆风险 `5.0% vs 7.5%`，RR `0.67`（`0.37–0.97`），但自报暴露、测听缺失和残余混杂不能排除。 | ✅ |
| 41861267 | https://pubmed.ncbi.nlm.nih.gov/41861267/ | *Neurology*, 2026，文献类型 `Published Erratum`；`ErratumFor` 明确指向 PMID 41534012。期刊全文说明仅补 NIH 资助致谢，不改变数字或结论。 | ✅ |

最终中文、英文、`HANDOFF.md` 和 `PMID_VERIFICATION.md` 涉及的 PMID 集合一致：

`21320988, 28685503, 37062296, 37478886, 38101424, 39096926, 39849317, 41066358, 41534012, 41861267`

## 五、关键数字与核心结论复核

| 项目 | 终稿表述 | 原始证据 | 二次判断 |
|---|---|---|---|
| `+20~40%` 前缀 | 撤销，改 `~` | 没有听力保护/筛查/助听器对全因死亡或寿命的 RCT；`1.21` 是听损暴露的观察关联 | ✅ 正确撤销 |
| 听损—全因死亡 | HR `1.21`（`1.13–1.31`），I² `95.7%` | 36 队列、约 640 万人 | ✅；不可反转为保护行为降低 21% |
| 地区亚组 | 欧洲和大洋洲不显著 | 欧洲 `1.03`（`0.98–1.08`）；大洋洲 `1.11`（`0.98–1.26`） | ✅ |
| 听损—痴呆 | 每 10 dB HR `1.27`；中度 `3.00`、重度 `4.94` | 639 人观察性队列；重度仅 6 人 | ✅；已说明相关不等于可逆病因 |
| ACHIEVE 总体 | `0.002 SD`（`-0.077–0.081`），p=0.96 | 977 人 RCT 主要分析 | ✅ 总体阴性 |
| ACHIEVE 48% | 仅 238 人 ARIC 来源亚组 | 亚组差 `0.191 SD`，739 人 de novo 无显著差异 | ✅ 未误作总体/痴呆/死亡效应 |
| 防护具衰减 | 约 20 dB(A)；培训额外 `8.59 dB` | 小样本、低至中等质量；长期听损预防不确定 | ✅ |
| 助听器沟通获益 | 较可靠 | 2025 伞状综述；2026 Cochrane/RCT 综述方向一致 | ✅；最新综述应补日志 |
| 2026 目标试验模拟 | 总体认知 `0.03 SD`，痴呆估计较低但可残余混杂 | 观察性模拟，不替代长期 RCT | ✅ |
| UK Biobank 撤稿 | 原 HR 不再使用 | PMID 37062296 与撤稿通知 38101424 互相链接 | ✅ 彻底排除支持性用途 |

## 六、反面证据、行动边界、COI 与人群外推

### 反面证据与因果边界

- 反面证据充分：ACHIEVE 总体阴性置于 ARIC 48% 之前；de novo 组无效；2026 目标试验模拟的总体认知效应近零；撤稿的观察性阳性论文不再作证据。
- 死亡关联只写成观察性，且高异质性、地区不一致、残余混杂与反向因果都已披露。
- 痴呆部分没有把 Lancet 人群归因分值、听损—痴呆观察关联或 ARIC 亚组转写成个人可预防比例。

### 防噪、筛查与助听器行动边界

- 防噪建议采用控制层级：降低声源/时长、增加距离、工程控制优先，防护具在其后；正确。
- `85 dBA/8 小时` 被明确写成职业风险管理基准而非公众“安全线”；正确。
- 普通主动降噪耳机不自动等于额定防护具；与 NIOSH 的 NRR 边界一致。
- 有症状评估与无症状普筛被分开。USPSTF I 声明只适用于没有察觉听力问题的 50 岁以上成人；终稿没有把“50 岁后定期筛查”当作统一处方。
- 助听器决策落在沟通困难、个人目标和专业评估，没有承诺防痴呆或延寿。
- 突发单侧/快速听力下降及伴随眩晕、神经症状、耳痛流脓或明显不对称的就医提示方向安全，中英文均为 prompt/尽快，没有不合理等待建议。

### COI

- ACHIEVE 为 NIH 资助，但主文完整声明多名作者与 Frequency Therapeutics、Apple、Oticon、Sonova/Phonak、GN Resound 等的咨询、合同、酬金、设备捐赠或研究关系；其中 Sonova/Phonak 向 Johns Hopkins 提供了本研究使用的听力技术。终稿已概括披露，且与总体阴性结果并列，处理合格。
- Tang 2025 作者声明无利益冲突，研究获 Australian Hearing Hub Research Committee 资助；首轮 `AUDIT.md` 已记录。
- Jia 2025 声明无竞争利益、无特定资助；不构成产业资助疑点。
- Cribb 2026 勘误只补 NIH 资助致谢，不改数字；ASPREE 经费主要来自澳美政府、NHMRC、NIH、Monash 与 Victorian Cancer Agency。现有条目未误称其为 RCT，风险方向也已降级。
- Lancet 2024 委员会作者有广泛药企及专业关系，但条目只用它确认“潜在可干预风险因素”的委员会立场，不从其推导助听器效果量；没有发现与当前结论相冲突的未披露听力设备直接资助。

### 人群适用性

- ACHIEVE 已限定美国 70–84 岁、未经治疗的轻中度听损、无明显认知障碍者，且约 88% 为白人；没有外推到年轻人、已患痴呆者、突发/重度听损或死亡结局。
- Cribb 2026 来自较健康、70 岁以上澳大利亚 ASPREE 人群；观察模拟的适用性和因果性均低于随机试验。
- Lin 2011 的 639 人队列年龄跨度大，但样本为 Baltimore Longitudinal Study of Aging 志愿者，重度听损仅 6 人；终稿已显著提示小样本和宽区间。
- 噪声防护研究主要为职业或短期娱乐场景；终稿已说明真实世界衰减依赖选择、贴合和持续使用。

## 七、中英文一致性与首轮三件套可复现性

### 中英文一致性

- 标题前缀、死亡影响、星级、行动性一致。
- 全部关键数字一致：36 队列、约 640 万、HR `1.21`、I² `95.7%`、639 人、每 10 dB HR `1.27`、977/238/739、`0.002 SD`、48%、2,777 人、`0.03 SD`、20 dB(A)、`8.59 dB`。
- 因果限定一致：两版均把听损—死亡/痴呆写为观察关联，把 ARIC 48% 限为亚组，把 Cribb 2026 限为观察性模拟，把撤稿论文排除。
- 行动建议和危险信号一致，没有翻译造成确定性升级或更宽人群外推。
- 最终 PMID 集合一致；唯一共同格式问题是 PMID 37062296 在正文中均为裸文本而非链接。

### 首轮三件套可复现性

可复现部分：

- `PMID_VERIFICATION.md` 对 10 个 PMID 给出直接 PubMed URL、书目、用途和撤稿/勘误状态；本轮逐项核验均匹配。
- `HANDOFF.md` 清楚记录旧/新路径、最终 PMID、关键判断和未 commit/push 边界。
- `AUDIT.md` 给出十维结论、核心数字、代表 URL、COI、适用人群、发表偏倚和主要修正，足以理解为什么撤销 `+20~40%`。

不足：

- “11 组检索”没有完整查询串，无法重放检索覆盖面。
- 没有列出 2026-08-26 Cochrane 更新及 2026 RCT 系统综述，和“检索截止 2026-09-16”的声明不完全相称。
- `AUDIT.md` 写“最终正文涉及的 10 个 PMID 均亲自打开”，但未记录每次打开时间、页面状态或 EFetch 入口；`PMID_VERIFICATION.md` 对书目信息足够，对全文数字定位仍偏简略。
- 撤稿原文的编码交换原因没有写进首轮日志；这不影响撤稿判定，但若要完全复现为何原结论失效，可补期刊说明。

## 八、最终建议

**评分 B；核心内容可以公开，不建议撤下。** 终稿已经正确撤销无法成立的 `+20~40%` 标签，并稳妥处理了最容易误导读者的三处风险：把听力损失的观察性死亡关联误作保护效果、把 ACHIEVE 的 ARIC 48% 亚组误作总体疗效、继续使用已撤稿 UK Biobank 结果。

建议修正优先级：

1. 给撤稿原文 PMID 37062296 增加显著的可点击“已撤稿”链接；
2. 在首轮时效性日志补入 PMID 42644645 与 42053356，并说明它们强化沟通/听觉获益、但不提供死亡或确定认知获益；
3. 补齐首轮 11 组原始检索式、日期、结果 URL 和纳入/排除理由；
4. 为 `85 dBA/8 小时` 与 ANC/NRR 边界增加 NIOSH 直接来源。

完成这些小修后可达到 A；现有问题均不改变死亡影响为未知、助听器以沟通获益为主要决策依据、无症状普筛证据不足、不得承诺防痴呆或延寿的核心结论。

本轮只新增本 `REVIEW.md`；未修改中英文正文、首轮三件套或共享索引，未 commit/push。
