# 002 亚精胺 — 权威性审计记录

## 基本信息

- 审计日期：2026-09-07（Asia/Shanghai）
- 审计结果：FIXED
- 审计范围：仅中文、英文亚精胺条目及本独立交接目录
- 原路径：`wiki_zh/吃/补剂/-30~60% 亚精胺.md`；`wiki_en/Diet/Supplements/-30~60% Spermidine.md`
- 新路径：`wiki_zh/吃/补剂/~ 亚精胺.md`；`wiki_en/Diet/Supplements/~ Spermidine.md`
- 最终判定：人体死亡率证据来自观察性研究且跨人群不一致；没有以死亡或寿命为终点的人体随机试验。标题中的 `-30~60%` 会把粗率差和观察性 HR 呈现为稳定、可归因的效果，故改为 `~`。

## 原条目核心主张、数字和引用提取

1. “高摄入组全因死亡率降低约 30–60%”。
2. Bruneck 队列：829 人、20 年；最高与最低组粗死亡率 15.1 对 40.5/千人年；每 1-SD HR 0.74（95% CI 0.66–0.83）。
3. 亚精胺通过诱导自噬延寿；动物包括酵母、线虫、果蝇和小鼠。
4. 2018 年 *Science* 综述被用于声称抗衰老、抗癌、心血管和神经保护、改善肥胖及 2 型糖尿病。
5. 食物来源与“纳豆可能解释日本人长寿”的推断。
6. “不需要买补剂”“不建议补剂”，理由为剂量和长期安全性不确定。
7. 原 PMID：30306826、27841876、29955838、29371440。

## 独立英文检索记录

检索均在 2026-09-07 09:54–10:03 CST 完成；各轮之间超过 1 秒。搜索结果只用于发现候选文献，正文 PMID 随后逐一打开 PubMed 原页核对。

1. 核心死亡率队列检索：`spermidine mortality prospective cohort Bruneck 829 20 years Kiechl 2018`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+mortality+prospective+cohort+Bruneck+829+20+years+Kiechl+2018
2. 人体随机试验检索：`spermidine randomized placebo controlled trial older adults cognition supplementation`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+randomized+placebo+controlled+trial+older+adults+cognition+supplementation
3. 系统综述、临床证据与安全性检索：`spermidine systematic review human clinical trials aging safety`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+systematic+review+human+clinical+trials+aging+safety
4. 复现与反面证据检索：`spermidine dietary intake mortality cohort replication prospective human mortality`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+dietary+intake+mortality+cohort+replication+prospective+human+mortality
5. 高剂量药代与阴性结果检索：`spermidine supplementation randomized placebo high dose pharmacokinetic metabolomic`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+supplementation+randomized+placebo+high+dose+pharmacokinetic+metabolomic
6. 在研心血管试验检索：`spermidine cardiovascular randomized trial POLYCAD`
   URL：https://pubmed.ncbi.nlm.nih.gov/?term=spermidine+cardiovascular+randomized+trial+POLYCAD

补充原文/注册核查：

- Bruneck 原文 PDF：https://www.vascular-proteomics.com/pub/2018/KiechlS_AJCN_108_371.pdf
- Bruneck 注册页：https://clinicaltrials.gov/study/NCT03378843
- POLYCAD 方案（尚非结果论文）：https://pubmed.ncbi.nlm.nih.gov/41168834/

## 十维审计

### 1. 来源质量 ⚠️

- 死亡率证据以 Bruneck、NHANES 和高山研究等同行评审观察性队列为主，能检验关联，不能确认干预因果。
- SmartAge 是双盲安慰剂对照 RCT，但仅 100 人，研究认知而非死亡或寿命。
- 动物机制采用原始 *Nature Medicine* 论文，而非用综述替代原始研究。
- 未发现能汇总“人体寿命 RCT”的系统综述，因为此类 RCT 尚不存在。

### 2. 结论一致性 ❌→已修正

- 欧洲 Bruneck 和美国 NHANES 均报告负相关；日本高山研究未发现全因或死因别死亡获益。
- 英国生物样本库较新论文研究的是总多胺，不能把结果归于亚精胺。
- 原结论只展示支持性证据且措辞过于肯定；现改为“观察性证据不一致、无人体延寿因果证据”。

### 3. 反面证据 ❌→已补充

- 高山研究：29,079 人、16 年、5,339 例死亡；男女全因及死因别死亡均无显著关联。
- 女性癌症死亡最高对最低四分位 HR 1.38（95% CI 0.99–1.93；趋势 P=0.02），属于提示性信号，既不能忽略，也不能说已证实伤害。
- SmartAge：主要认知终点 -0.03（95% CI -0.11–0.05；P=0.47），总体次要终点亦未改善。

### 4. 效果量准确性 ❌→已修正

- 40.5 与 15.1/千人年是分组粗死亡率，直接相除约为 0.37（粗率差约 63%），不是充分调整后的最高对最低组 HR。
- Bruneck 年龄、性别和能量校正后 20 年累积死亡率为 48%、41%、38%；最高与最低组绝对差 10 个百分点。
- Bruneck 每 1-SD 的充分调整 HR 为 0.76（95% CI 0.67–0.86）；原条目只给较少调整的 0.74。
- NHANES 最高与最低四分位全因死亡 HR 0.70（95% CI 0.60–0.82），为独立观察性结果。
- 删除“30–60%”标题范围，因为其把不同尺度、不同调整程度的观察性估计合并成单一效果。

### 5. 利益冲突 ⚠️

- Bruneck 原文披露 Frank Madeo、Tobias Eisenberg、Sebastian Sigrist 持有 The Longevity Labs 股权，该公司开发天然食物提取物；其他作者声明无相关财务关系。
- SmartAge 披露多名作者在 The Longevity Labs 的股权、顾问或任职关系，Madeo 另有亚精胺相关待批专利。该试验主要终点为阴性，条目仍明确记录利益冲突背景。
- NHANES、英国生物样本库和药代论文声明无商业或财务冲突；高山研究在可访问 PubMed 页面未提供完整 COI 文本，保留“未能完整核实”的限制。

### 6. 因果 vs 相关 ❌→已修正

- 所有死亡数据均为观察性饮食暴露，不能推出“吃亚精胺使死亡率下降”。
- 富含亚精胺的食品也携带纤维、蛋白质及其他营养素，并反映整体生活方式；即使多变量调整也不能排除健康使用者与残余混杂。
- 动物自噬机制提供生物学可解释性，但不能把人群相关升级为人体因果。

### 7. 人群适用性 ⚠️

- Bruneck 为 45–84 岁、全为白人的单一欧洲地区人群；同地区 SAPHIR 复制只有 48 例死亡。
- NHANES 是美国成人；高山研究为日本成人并给出相反结果，显示饮食构成、估算数据库或人群差异可能重要。
- SmartAge 仅限 60–90 岁、有主观认知下降者；药代研究仅 12 名健康成人。
- 不外推到一般人群、高剂量产品或长期用药人群。

### 8. 研究局限性 ⚠️

- 队列共同局限：自报/回顾饮食、食物中多胺含量受加工储存影响、暴露估算误差、残余混杂及多重比较。
- Bruneck 强项是重复膳食测量和完整随访，但样本量小且地域单一。
- SmartAge 剂量 0.9 mg/日、单中心、样本小，不能排除其他剂量对其他终点的作用，也不能回答寿命。
- 药代试验每期仅 5 天、12 人，只能回答短期血液/唾液多胺变化。

### 9. 发表偏倚 ⚠️

- 人体干预研究数量少、终点异质，没有足够研究可可靠评估漏斗图或小样本效应。
- 早期小型认知先导试验阳性信号未在更大的 SmartAge 主要终点中得到验证，提示只看早期阳性结果会高估效果。
- POLYCAD 方案已发表，但截至本次检索只有方案、尚无可用于条目的结果；不将注册或方案当作有效性证据。

### 10. 时效性 ✅（截至检索日）

- 纳入 2022 NHANES、2023 高山、2023 药代和 2024 英国生物样本库研究。
- 检索到 2025 POLYCAD 方案，计划研究冠心病老年人的 24 mg/日、48 周干预，但方案不提供结果且不以寿命为主要终点。
- 截至 2026-09-07 未找到已发表、以死亡或寿命为终点的亚精胺补充 RCT。

## 数字核验表

| 数字 | 核验 | 处理 |
|---|---|---|
| Bruneck n=829，45–84 岁，341 例死亡，20 年 | ✅ PMID 29955838 | 保留并补足年龄与死亡数 |
| 40.5、23.7、15.1/千人年 | ✅ PMID 29955838 | 明确为粗死亡率，禁止解释为调整后效应 |
| 调整后 20 年累积死亡率 48%、41%、38% | ✅ PMID 29955838 | 新增；给出最高最低组绝对差 10 个百分点 |
| 每 1-SD HR 0.74（0.66–0.83） | ✅ 但仅较少调整 | 改为充分调整 HR 0.76（0.67–0.86） |
| NHANES n=23,894、2,365 例死亡、HR 0.70（0.60–0.82） | ✅ PMID 36249217 | 新增支持证据并标注观察性 |
| 高山 n=29,079、5,339 例死亡、16 年 | ✅ PMID 37964604 | 新增反面证据 |
| 女性癌症死亡 HR 1.38（0.99–1.93），趋势 P=0.02 | ✅ PMID 37964604 | 作为提示性信号，不声称因果伤害 |
| UK Biobank n=184,732、HR 0.82（0.76–0.88） | ✅ PMID 39770955 | 明确暴露为总多胺，不归因于亚精胺 |
| SmartAge n=100、0.9 mg/日、12 月、-0.03（-0.11–0.05），P=.47 | ✅ PMID 35616942 | 新增阴性 RCT；注明非寿命终点 |
| 药代 n=12、15 mg/日、每期 5 天 | ✅ PMID 37111071 | 新增吸收不确定性；不外推长期安全 |

## 引用增删与修改理由

- 删除 PMID 30306826：真实存在，但原条目页码写成 185–187，PubMed 原页为 165–168；且这是带推论色彩的评论/综述，不是检验人体寿命的原始试验。
- 保留 PMID 27841876：真实存在，用于限定动物自噬、心血管和寿命机制，明确不外推人体。
- 保留 PMID 29955838：真实存在，纠正粗率、累积死亡率、充分调整 HR 和外推边界。
- 删除 PMID 29371440：真实存在，为广泛叙述性综述；原条目据此罗列多疾病“作用”过度概括，改以具体原始研究陈述。
- 新增 PMID 36249217、37964604、39770955、35616942、37111071：分别补充美国支持队列、日本阴性队列、总多胺边界、阴性人体 RCT、短期药代阴性/不确定证据。

## 最终判定

FIXED。保留“亚精胺有动物机制与部分人体观察性信号”这一有限结论；删除可被误读为确定延寿幅度的标题，证据等级从 ⭐⭐⭐ 降为 ⭐⭐。当前不支持为延寿设定摄入量或推荐补剂。
