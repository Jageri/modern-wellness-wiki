# 043 微塑料 - 权威性审计记录

## 审计信息

- 审计日期：2026-09-09
- 审计结果：FIXED
- 中文旧路径：`wiki_zh/境/≈ 微塑料.md`
- 中文新路径：`wiki_zh/境/~ 微塑料.md`
- 英文旧/新路径：`wiki_en/Environment/~ Microplastics.md`
- 独立审计：从原始条目的结论、数字和引用重新检索，未依赖旧审计或中间产物。
- 检索量：20 个分组关键词检索，另逐一打开 10 个最终 PMID 的 PubMed 原始页并用 NCBI 记录交叉核对。

## 原条目主要问题

1. 将 NEJM 的“心梗、卒中或全因死亡”复合终点 HR 4.53 压缩成“心梗/卒中/死亡风险约 4.5 倍”，易被误读为全因死亡效应，且未呈现绝对事件率与宽置信区间。
2. 未充分说明 NEJM 研究只适用于因无症状颈动脉疾病接受内膜切除术的高风险人群，不能外推到一般人群或寿命。
3. 混合了“人体样本检出”、“观察性关联”和“动物/体外机制”三个证据层级，未充分提示多数人体研究为小样本、横断面或病例对照设计。
4. 把 PERTH 试验对尿液邻苯二甲酸酯和双酚类代谢物的结果当作“微塑料干预证据”。该试验未测微塑料颗粒，也未测疾病、死亡或寿命。
5. 断言瓶装水“显著高于”自来水并给出“每升数十万颗”的泛化数字，忽略不同最小可检粒径和分析方法造成的极高异质性。
6. 多条参考文献无超链接，部分作者或年份描述不准确，并使用新闻报道代替方法学原始论文。
7. 给出了过度确定的个人建议，但没有直接干预证据证明这些行为可降低微塑料体内负荷、临床事件或死亡。

## 十项审计

### 1. 来源质量 ✅

- 保留同行评议原始研究、系统综述、方法学研究和 FDA 官方立场，删除以新闻调查代替原始论文的引用。
- 人体综述虽新，但所纳入研究主要为观察性设计，因此未提高因果等级。
- 系统综述检索截止 2024-12-26，因此另行核对了 2025 年心梗患者前瞻性研究、2026 年冠脉造影横断面研究和血浆置换研究。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/41761215/ ；https://pubmed.ncbi.nlm.nih.gov/38446676/ ；https://pubmed.ncbi.nlm.nih.gov/40007360/ ；https://pubmed.ncbi.nlm.nih.gov/42447841/ ；https://pubmed.ncbi.nlm.nih.gov/42169439/ ；https://www.fda.gov/food/environmental-contaminants-food/microplastics-and-nanoplastics-foods

### 2. 结论一致性 ✅

- 当前证据支持“多类人体样本中有检出报告，且存在若干关联”，不支持“已证明导致死亡或缩短寿命”。
- FDA 明确表示，现有证据尚未证明食品中检出的水平构成人体健康风险；这是对观察性阳性结果的重要不确定性边界，不是“已证明无害”。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/41761215/ ；https://www.fda.gov/food/environmental-contaminants-food/microplastics-and-nanoplastics-foods

### 3. 反面证据 ✅

- Rauert 等在血液基质中发现 PE/PVC 的持续干扰、非特异性热解产物和实际检出限问题，对 Py-GC-MS 人体检测的稳健性构成直接反证。
- 该方法学研究不能证明所有既往检测都是假阳性；正文保留了这一反向边界。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/39851066/ ；https://pmc.ncbi.nlm.nih.gov/articles/PMC11800385/

### 4. 效果量准确性 ✅

- NEJM：304 人入组，257 人完成随访；平均随访 33.7±6.9 个月；PE 检出 150/257（58.4%）；复合终点 30/150（20.0%）对 8/107（7.5%）；调整 HR 4.53（95% CI 2.00–10.27，P<0.001）。
- 不将 HR 写成风险比，不将复合终点写成全因死亡单项效应，同时补充两组绝对事件率。
- Lee 等：36 人，32/36（88.9%）检出，平均 4.2 颗/mL；程序空白 0–5 颗，平均 1.67±2.12，未扣除。
- Zhang 等：142 名心梗患者入组，110 人完成 31.5 个月随访。PubMed 摘要对“每 10 单位”效应同时写出“1.374 倍”与“OR=2.374”，内部不一致，因此正文不引用该效果数字，只保留观察性关联。
- Paolisso 等：61 人（STEMI 19、慢性冠脉综合征 20、正常冠脉对照 22）；多变量模型中吸烟史是检出的唯一独立预测因素（OR 5.69，95% CI 1.33–26.63）。
- 血浆置换：114 名患者、174 次程序；起始值 ≥30 颗/100 μL 的 21 次程序中，平均值由 52.2 降至 21.1，但起始 0–9 颗/100 μL 的 100 次程序反而由 4.4 升至 14.4，与管路引入颗粒相符。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/38446676/ ；https://www.nejm.org/doi/full/10.1056/NEJMoa2309822 ；https://pmc.ncbi.nlm.nih.gov/articles/PMC11621780/ ；https://pubmed.ncbi.nlm.nih.gov/40007360/ ；https://pubmed.ncbi.nlm.nih.gov/42447841/ ；https://onlinelibrary.wiley.com/doi/full/10.1002/jca.70135

### 5. 利益冲突 ✅

- NEJM 研究报告政府科研项目等资助，期刊提供作者披露表。
- 2026 年人体系统综述由 SingHealth Duke-NUS 学术项目资助，作者声明无竞争性利益。
- PERTH 试验由 Minderoo Foundation 资助，数名作者为该基金会员工；论文声明资助方及捐助人未影响研究实施或结果。
- Chartres 综述报告 UCOP、JPB Foundation 和 P30ES030284 支持，作者声明无竞争性财务利益。Rauert 等作者含 Minderoo 机构任职者，论文声明无竞争性财务利益。
- 血浆置换研究的 7 名作者与提供私人血浆置换服务的 Circulate Health 有关，其余作者为数据采集诊所负责人；属直接商业利益冲突。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/38446676/ ；https://pubmed.ncbi.nlm.nih.gov/41761215/ ；https://pubmed.ncbi.nlm.nih.gov/42014506/ ；https://pmc.ncbi.nlm.nih.gov/articles/PMC11697325/ ；https://pubmed.ncbi.nlm.nih.gov/39851066/ ；https://onlinelibrary.wiley.com/doi/full/10.1002/jca.70135

### 6. 因果 vs 相关 ✅

- NEJM 是前瞻性观察研究，Lee 等是横断面研究；两者均不能确立微塑料导致终点。
- 2025 年心梗患者研究也是前瞻性观察设计；2026 年冠脉造影研究是横断面设计，且吸烟与 PM2.5 共暴露突出。
- 新正文明确区分人体检出、生物标志物关联、临床事件关联和动物/体外机制。
- PERTH 虽为随机试验，但它检验的是塑料相关化学物尿液标志物，不是微塑料颗粒或临床结局。
- 血浆置换是无未治疗对照的程序前后比较，只测循环颗粒数，不能推断体内总负荷或健康获益。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/38446676/ ；https://pubmed.ncbi.nlm.nih.gov/39638849/ ；https://pubmed.ncbi.nlm.nih.gov/40007360/ ；https://pubmed.ncbi.nlm.nih.gov/42447841/ ；https://pubmed.ncbi.nlm.nih.gov/42014506/ ；https://pubmed.ncbi.nlm.nih.gov/42169439/

### 7. 人群适用性 ✅

- NEJM 结果限于意大利高风险颈动脉手术人群，不能外推为健康成人的普遍风险。
- Lee 等只有 36 名韩国健康成人，其中 26 名女性、32 名白领；外部效度很低。
- 2025 年前瞻性研究限于心梗后患者，2026 年横断面研究限于接受冠脉造影的 61 人，都不是一般人群。
- PERTH 试验为 60 名澳大利亚成人、7 天，不能证明长期临床效应。
- 血浆置换数据来自门诊中原本就接受该程序的医学稳定患者，不能支持健康人使用。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/38446676/ ；https://pmc.ncbi.nlm.nih.gov/articles/PMC11621780/ ；https://pubmed.ncbi.nlm.nih.gov/40007360/ ；https://pubmed.ncbi.nlm.nih.gov/42447841/ ；https://pubmed.ncbi.nlm.nih.gov/42014506/ ；https://onlinelibrary.wiley.com/doi/full/10.1002/jca.70135

### 8. 研究局限性 ✅

- 已在正文披露选择性人群、小样本、单次暴露测量、横断面时序不明、残余混杂、空白污染、检出限、方法不一致及无法 Meta 分析。
- 2026 系统综述的 25 项研究中只有 1 项前瞻性队列；多数研究的混杂和暴露测量偏倚为中到高风险。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/41761215/ ；https://pmc.ncbi.nlm.nih.gov/articles/PMC13049771/ ；https://pubmed.ncbi.nlm.nih.gov/39851066/

### 9. 发表偏倚 ⚠️

- Chartres 等明确指出可能存在发表偏倚：无效结果可能更少投稿或录用，且存在结局未测量/未报告的可能。
- 2026 人体综述也把选择性报告列为主要偏倚。由于研究异质性太高，无法用漏斗图或定量方法排除偏倚。
- 验证来源：https://pmc.ncbi.nlm.nih.gov/articles/PMC11697325/ ；https://pmc.ncbi.nlm.nih.gov/articles/PMC13049771/

### 10. 时效性 ✅

- 纳入 2026 年人体体内证据系统综述、2025 年 Py-GC-MS 方法学研究、2025 年心梗患者前瞻性研究、2026 年冠脉造影横断面研究、2026 年 PERTH 试验和 2026 年血浆置换研究。
- 明确标注 2026 系统综述检索截止 2024-12-26，无法覆盖此后全部研究。
- 2020 饮用水综述仅用于证明方法异质性与不能泛化单一颗粒数，不用于宣称当前健康风险。
- 验证来源：https://pubmed.ncbi.nlm.nih.gov/41761215/ ；https://pubmed.ncbi.nlm.nih.gov/39851066/ ；https://pubmed.ncbi.nlm.nih.gov/40007360/ ；https://pubmed.ncbi.nlm.nih.gov/42447841/ ；https://pubmed.ncbi.nlm.nih.gov/42014506/ ；https://pubmed.ncbi.nlm.nih.gov/42169439/ ；https://pubmed.ncbi.nlm.nih.gov/32735575/

## 核心数字核对

| 数字 | 结果 | 边界 |
|---|---|---|
| 304 人入组，257 人完成随访 | ✅ | 颈动脉内膜切除术人群 |
| PE 检出 150/257（58.4%） | ✅ | 使用 Py-GC-MS，另有同位素和显微方法 |
| 复合终点 30/150（20.0%） vs 8/107（7.5%） | ✅ | 非单独全因死亡 |
| 调整 HR 4.53（95% CI 2.00–10.27） | ✅ | 观察性关联；区间宽，残余混杂可能 |
| Lee 等 32/36（88.9%）检出，平均 4.2 颗/mL | ✅ | 程序空白平均 1.67 颗且未扣除 |
| Py-GC-MS 回收率 7%–109% | ✅ | 不同聚合物差异很大 |
| 实际检出限最高为名义值 20 倍 | ✅ | 血液基质方法学研究 |
| 2025 年心梗研究 142 人入组、110 人完成 31.5 个月随访 | ✅ | 观察性；摘要的“每 10 单位”OR 表述内部不一致，未引用该数字 |
| 2026 年冠脉造影研究 61 人 | ✅ | 横断面；吸烟是检出的唯一独立预测因素 |
| 饮用水综述 I²>95% | ✅ | 不适合将单一研究颗粒数当作普遍水平 |
| PERTH 60 人、7 天 | ✅ | 终点为塑料相关化学物尿液水平，非微塑料或健康结局 |
| 血浆置换 114 人、174 次程序 | ✅ | 无未治疗对照/健康结局；商业检测验证数据不公开；管路引入颗粒 |

## 最终修改

1. 中文文件由 `≈` 迁移为 `~`；英文文件已为 `~`，路径不变。
2. 死亡率影响改为“未知”，可操作性由“中”改为“低”。
3. 全面重写人体检出/关联、机制、方法学、饮用水、干预边界、实用建议及利益冲突段落。
4. 纠正 NEJM 复合终点的误导性表述，补充绝对事件数、置信区间、人群和因果边界。
5. 将 PERTH 明确定义为塑料相关化学物暴露标志物试验，不再作为微塑料清除或临床获益证据。
6. 删除泛化的“数十万颗/升”和未证实的必然换水/过滤建议，强调饮水安全优先。
7. 补入系统综述检索截止日之后的 2025–2026 年心血管与血浆置换证据，并对其方法、混杂和商业利益冲突降权。
8. 中英文保持相同的 10 个 PMID 集合与参考文献顺序。

## 最终 PMID 集合

`32735575, 38446676, 39638849, 39692326, 39851066, 40007360, 41761215, 42014506, 42169439, 42447841`

## 主要检索与核验 URL

- PubMed（最终 PMID 原始页）：
  - https://pubmed.ncbi.nlm.nih.gov/32735575/
  - https://pubmed.ncbi.nlm.nih.gov/38446676/
  - https://pubmed.ncbi.nlm.nih.gov/39638849/
  - https://pubmed.ncbi.nlm.nih.gov/39692326/
  - https://pubmed.ncbi.nlm.nih.gov/39851066/
  - https://pubmed.ncbi.nlm.nih.gov/40007360/
  - https://pubmed.ncbi.nlm.nih.gov/41761215/
  - https://pubmed.ncbi.nlm.nih.gov/42014506/
  - https://pubmed.ncbi.nlm.nih.gov/42169439/
  - https://pubmed.ncbi.nlm.nih.gov/42447841/
- 全文/权威补充：
  - https://www.nejm.org/doi/full/10.1056/NEJMoa2309822
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11621780/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11697325/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11800385/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC13049771/
  - https://www.nature.com/articles/s41591-026-04324-7
  - https://onlinelibrary.wiley.com/doi/full/10.1002/jca.70135
  - https://www.fda.gov/food/environmental-contaminants-food/microplastics-and-nanoplastics-foods
  - https://www.who.int/publications/i/item/9789240054608

## 未决事项

- 无需 HOLD 的未决事项。
- 科学上仍待解决：经标准化、多方法验证的前瞻性人体队列；可表征颗粒暴露的可重复指标；现实剂量—反应；以微塑料颗粒和临床结局为终点的干预研究。
