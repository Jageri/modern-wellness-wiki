# 044 晒太阳 - 权威性审计记录

## 审计信息

- 审计日期：2026-09-06
- 范围：`wiki_zh/境/∝ 晒太阳.md` 与 `wiki_en/Environment/~ Sun Exposure.md`
- 结果：需修正，已修正
- 检索量：18 组关键词检索；6 个最终 PMID 逐一打开 PubMed 原始页
- 路径变更：中文前缀从 `∝` 迁移为 `~`；英文原已为 `~`

## 核心判定

不支持原条目的“HR 2.0”定量标签、四星因果强度或“每天 10–30 分钟无防晒，利大于弊”。最新的完整系统综述显示，日光与全因死亡的观察结果有益和有害各占近半，相关研究均有高偏倚风险，且无合格随机试验。紫外线致皮肤癌与眼损伤是确立危害，故本条目应表达为“死亡率影响不确定，户外白天光与紫外线暴露需分开”。

## 十项检查

### 1. 来源质量 ⚠️ → ✅

- 原条目以两个观察性队列和一篇 2026 年预印本支撑强结论，证据等级过高。
- 修正后以 NIHR 系统综述、WHO/IARC 风险立场、维生素 D 指南和大型 RCT 为主，队列研究只作有限的关联性证据。
- NIHR 综述为 version 2 开放同行评议稿；当前页面记录 3 份“通过”、2 份“有保留通过”和 1 份“未通过”。因此使用其广泛检索与风险评估，同时保留对综述本身的不确定性。
- 来源：https://doi.org/10.3310/nihropenres.13980.2；https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation；https://publications.iarc.who.int/73

### 2. 结论一致性 ❌ → ✅

- 2025 年 NIHR 系统综述纳入 55 篇主要文章，只有 8 篇涉及全因死亡；9 个分析结果中 5 个偏向有益、4 个偏向有害，没有合格 RCT。
- 原“大型队列一致”与系统综述不符，已改为两星争议证据。
- 来源：https://openresearch.nihr.ac.uk/articles/5-51

### 3. 反面证据 ❌ → ✅

- 原文未纳入日光暴露与较高全因死亡相关的研究，也没有传达系统综述的混合结果。
- 现在明确记录正反各近半、皮肤癌死亡方向上的一致危害以及维生素 D RCT 的阴性结果。
- 来源：https://doi.org/10.3310/nihropenres.13980.2；https://pubmed.ncbi.nlm.nih.gov/35026158/

### 4. 效果量准确性 ❌ → ✅

- MISS 2014：PubMed 摘要仅称避光组死亡率“约两倍”；NIHR 系统综述报告反向比较的精确值为高日晒对低日晒 HR 0.62（95% CI 0.50–0.80），并判定高偏倚风险。原标签的“HR 2.0”不是可复核的精确 HR，已删除。
- MISS 2016：避光者预期寿命差异为 0.6–2.1 年。原条目“丹麦 26 年随访、皮肤癌患者多活约 6 年”与所引的瑞典 MISS 论文不符，已删除并纠正。
- UK Biobank 2024：可评估样本为 395,086 人，平均居住地短波辐射每增加 2,000 kJ/m² 与全因死亡风险低 12% 相关；日光浴床使用者与低 15% 相关。这不是原文所述 2026 预印本 419,007 人的 HR 0.84，两项不得混同。
- D-Health：21,315 人，每月 60,000 IU 维生素 D₃，全因死亡 HR 1.04（95% CI 0.93–1.18）。
- 来源：https://pubmed.ncbi.nlm.nih.gov/24697969/；https://pubmed.ncbi.nlm.nih.gov/26992108/；https://pubmed.ncbi.nlm.nih.gov/39094281/；https://pubmed.ncbi.nlm.nih.gov/35026158/

### 5. 利益冲突 ⚠️ → ✅

- NIHR 综述由 NIHR Evidence Synthesis Programme 资助，资助方声明不参与研究；一名作者披露与 Clinuvel Pharmaceuticals 及 Mitsubishi Tanabe Pharma America 合作并执行试验。
- MISS 2016 披露无作者利益冲突，资助主要来自公共和非营利机构，包括瑞典癌症学会、瑞典医学研究委员会和 ERC。
- UK Biobank 2024 披露公共资助，未发现商业日光浴行业资助。D-Health 由 NHMRC 资助；两名作者披露了与本干预无直接关系的制药企业资助/酬金。
- 来源：https://openresearch.nihr.ac.uk/articles/5-51；https://pubmed.ncbi.nlm.nih.gov/35026158/

### 6. 因果 vs 相关 ❌ → ✅

- 原文把观察性关联直接转为“每天无防晒”的个人干预。
- 现已将运动、基线健康、社会经济状况、旅行和选择偏差列为可能混杂，不再使用“利大于弊”的因果语言。

### 7. 人群适用性 ❌ → ✅

- MISS 仅为瑞典南部 25–64 岁女性；UK Biobank 2024 限于 39–73 岁白人欧洲血统志愿者。
- 深肤色者、儿童、青少年、高 UV 地区居民、使用光敏药物者及高皮肤癌风险人群的净效应无法从这些队列外推。修正后已明示这一边界。

### 8. 研究局限性 ❌ → ✅

- 已补充：自报暴露误差；居住地辐射不等于个人剂量；日光浴床使用代表其他求日行为；UK Biobank 健康志愿者偏差；暴露指标异质；缺少肤色分层和干预试验。
- 昼夜节律部分仅保留为低质量、不一致的生理支持，不再作为延寿机制。

### 9. 发表偏倚 ⚠️ → ✅

- NIHR 综述因暴露和结果异质未作 Meta 合并，无法用漏斗图检查发表偏倚；结果数量少，不能排除选择性发表。
- 原文的 2026 年 medRxiv 预印本仅记录为时效性检索结果，未用于提高证据级别或支撑日晒处方。
- 来源：https://www.medrxiv.org/content/10.64898/2026.01.08.26343592v1

### 10. 时效性 ❌ → ✅

- 纳入 2024 年同行评审 UK Biobank 队列、2024 年内分泌学会指南、2025 年 NIHR 系统综述 version 2，并检索 2025–2026 年的综述和预印本。
- 2026 年 UK Biobank 预印本样本 419,007 人，报告高 Sun-BEEM 暴露组全因死亡 HR 0.84（95% CI 0.82–0.87）；它仍未同行评审，不克服观察性混杂，也不提供通用安全剂量，因而未写入正文参考文献。
- 来源：https://pubmed.ncbi.nlm.nih.gov/39094281/；https://pubmed.ncbi.nlm.nih.gov/38828931/；https://doi.org/10.3310/nihropenres.13980.2；https://www.medrxiv.org/content/10.64898/2026.01.08.26343592v1

## 主要修正

1. 将中文文件从 `∝` 迁移到 `~`，与“效应不确定”的定级一致。
2. 删除“规律日晒将死亡率减半”、“与吸烟者相当”的行动暗示和四星证据评级。
3. 删除通用的“10–30 分钟无防晒”、“UVI >3 才有效”、“1,000–4,000 IU/天”和“25(OH)D >30 ng/mL”处方。
4. 纠正“丹麦 26 年、皮肤癌患者多活 6 年”的错引。
5. 将维生素 D 生理机制、昼夜节律光信号与寿命结局分开，补入 D-Health 阴性 RCT 和当前检测/补充指南。
6. 用 WHO/IARC 的 UVI 防护、晒伤、日光浴床、眼损伤和高风险人群边界替代“避免晒伤，不避免日晒”的过度简化口号。

## 检索与核验 URL

- https://openresearch.nihr.ac.uk/articles/5-51
- https://doi.org/10.3310/nihropenres.13980.2
- https://pubmed.ncbi.nlm.nih.gov/24697969/
- https://pubmed.ncbi.nlm.nih.gov/26992108/
- https://pubmed.ncbi.nlm.nih.gov/39094281/
- https://pubmed.ncbi.nlm.nih.gov/34420891/
- https://pubmed.ncbi.nlm.nih.gov/35026158/
- https://pubmed.ncbi.nlm.nih.gov/38828931/
- https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation
- https://www.who.int/news-room/questions-and-answers/item/radiation-protecting-against-skin-cancer
- https://publications.iarc.who.int/73
- https://www.medrxiv.org/content/10.64898/2026.01.08.26343592v1

## 未决事项

- 无阻断交付的未决事项。未来若出现按肤色、纬度和实际个人 UV 剂量分层的随机或准随机长期试验，应重新评估前缀和副作用平衡。
