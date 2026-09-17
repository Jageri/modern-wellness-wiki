# 015 鱼油 - 权威性审计记

## 审计信息

- 审计日期：2026-09-07
- 审计结果：需修正，已修正
- 最终状态：`FIXED`
- 英文检索：6 组（大型 RCT；Cochrane/全因死亡；房颤；出血；2025 ESC/EAS 指南；各 PMID 精确题名复核）
- 证据截止：2026-09-07
- 结论标记：`~`（对普通补充剂无确证延寿获益；保留特定处方 EPA 的窄人群例外）

## 检索与验证路径

1. `omega-3 supplementation all-cause mortality cardiovascular events Cochrane randomized trials`
2. `REDUCE-IT VITAL STRENGTH omega-3 randomized trial atrial fibrillation bleeding`
3. `current guideline omega-3 supplements primary prevention cardiovascular disease icosapent ethyl`
4. `omega-3 randomized trial meta-analysis atrial fibrillation 2021 2024`
5. `2025 ESC EAS focused update dyslipidaemias omega-3 icosapent ethyl`
6. `omega-3 supplementation bleeding risk meta-analysis randomized trials 2024`

所有写入条目的 PMID 均打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 核对；遇到 PubMed 验证页时，又用 NCBI PubMed EFetch 返回的原始 PubMed XML 复核标题、首作者、期刊、年份与摘要数字。详见 `PMID_VERIFICATION.md`。

## 十项检查

### 1. 来源质量 ✅

- 优先使用 VITAL、STRENGTH、REDUCE-IT 大型 RCT，Cochrane 系统综述，同行评审的房颤/出血 Meta 分析及 2025 ESC/EAS 当前指南。
- 未使用预印本作为结论依据；2025 年房颤预印本已由 2026 年同行评审更新替代。
- 来源：[PubMed 32114706](https://pubmed.ncbi.nlm.nih.gov/32114706/)；[PubMed 30415637](https://pubmed.ncbi.nlm.nih.gov/30415637/)；[PubMed 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)；[PubMed 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)；[ESC/EAS 2025](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)

### 2. 结论一致性 ✅

- 普通一级预防：VITAL 与 Cochrane 均不支持主要心血管事件或全因死亡获益。
- 高危/二级预防：高剂量 EPA+DHA 在 STRENGTH 无效；高纯处方 EPA 在 REDUCE-IT 的严格入选人群中有效。两者不再合并成“鱼油有效/无效”的简单结论。
- 来源：[PubMed 30415637](https://pubmed.ncbi.nlm.nih.gov/30415637/)；[PubMed 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)；[PubMed 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)

### 3. 反面证据 ✅

- 对 REDUCE-IT 的阳性结果，补入了 STRENGTH 的阴性结果、Cochrane 的总体评估及矿物油对照不确定性。
- 不把“EPA 单药 Meta 分析效果较大”改写成“DHA 抵消 EPA”。
- 来源：[PubMed 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)；[ESC/EAS 2025](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)

### 4. 效果量准确性 ✅

- Cochrane：全因死亡 RR 0.97（95% CI 0.93–1.01）；心血管事件 RR 0.96（95% CI 0.92–1.01）。
- VITAL：主要心血管事件 HR 0.92（95% CI 0.80–1.06）；全因死亡 HR 1.02（95% CI 0.90–1.15）。
- STRENGTH：12.0% 对 12.2%，HR 0.99（95% CI 0.90–1.09）。
- REDUCE-IT：17.2% 对 22.0%，HR 0.75（95% CI 0.68–0.83）；ARR 4.8 个百分点，NNT 约 21（中位 4.9 年）。
- 房颤：高风险+高剂量组 OR 1.43（95% CI 1.14–1.79），绝对风险差 0.8%。
- 出血：总体 RR 1.09（95% CI 0.91–1.31）；高剂量纯 EPA 绝对风险差 0.6%。
- 来源：[PubMed 32114706](https://pubmed.ncbi.nlm.nih.gov/32114706/)；[PubMed 30415637](https://pubmed.ncbi.nlm.nih.gov/30415637/)；[PubMed 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)；[PubMed 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)；[PubMed 42517224](https://pubmed.ncbi.nlm.nih.gov/42517224/)；[PubMed 38742535](https://pubmed.ncbi.nlm.nih.gov/38742535/)

### 5. 利益冲突 ✅

- REDUCE-IT 由 Amarin 资助；STRENGTH 由 AstraZeneca 资助，两者均在条目标注。
- 2026 房颤 Meta 分析中，一名作者为鱼油产品公司首席医学官，另一名作者持有 Omega-3 检测公司股份；条目已降调解读。
- 来源：[PubMed 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)；[PubMed 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)；[PubMed 42517224](https://pubmed.ncbi.nlm.nih.gov/42517224/)

### 6. 因果 vs 相关 ✅

- 删除“每周吃 2 次深海鱼比鱼油胶囊好”这一缺乏直接随机比较的因果结论。
- 明确食鱼观察性证据不能外推为补充剂效果。
- 来源：[PubMed 32114706](https://pubmed.ncbi.nlm.nih.gov/32114706/)

### 7. 人群适用性 ✅

- 分开：无 CVD 的普通一级预防；已有 CVD/高危人群；接受他汀且甘油三酯 135–499 mg/dL 的高危/极高危人群。
- 指出 REDUCE-IT 有 70.7% 二级预防，其余为糖尿病加危险因素，不是所有 CVD 或所有高甘油三酯者。
- 来源：[PubMed 30415637](https://pubmed.ncbi.nlm.nih.gov/30415637/)；[PubMed 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)；[ESC/EAS 2025](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)

### 8. 研究局限性 ✅

- Cochrane 试验主要来自高收入国家且主要是胶囊补充；食鱼的直接 RCT 证据很少。
- STRENGTH 因无效提前终止；REDUCE-IT 的活性制剂、特定人群和矿物油对照限制外推。
- 2026 房颤 Meta 分析纳入了未发表数据，但为试验层面分层，且作者中存在产业联系。

### 9. 发表偏倚 ✅

- Cochrane 同时搜索 ClinicalTrials.gov 与 WHO ICTRP，并使用敏感性分析；其早期版本指出缺失研究可能使结果更趋近无效。
- 2026 房颤 Meta 分析主动获取未发表 AF 数据，降低了仅依赖已发表阳性信号的风险，但不能完全排除偏倚。
- 来源：[PubMed 32114706](https://pubmed.ncbi.nlm.nih.gov/32114706/)；[PubMed 42517224](https://pubmed.ncbi.nlm.nih.gov/42517224/)

### 10. 时效性 ✅

- 用 2020 Cochrane 更新版（PMID 32114706）替代旧条目中含混乱版次的 2018/2020 表述。
- 纳入 2024 出血 Meta、2025 ESC/EAS 当前指南和 2026 同行评审房颤 Meta。
- 来源：[PubMed 38742535](https://pubmed.ncbi.nlm.nih.gov/38742535/)；[ESC/EAS 2025](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)；[PubMed 42517224](https://pubmed.ncbi.nlm.nih.gov/42517224/)

## 发现问题与已修正

1. 历史中文前缀 `≈` 与现行规范不一致；已迁移为 `~`。
2. “吃鱼比鱼油更好”被写成直接因果结论；已改为食物与补充剂证据不可互换。
3. “已有心血管病者可能有益”过宽；已限定为他汀治疗后、高/极高风险、甘油三酯 135–499 mg/dL 的处方 icosapent ethyl 场景。
4. “DHA 抵消 EPA”缺乏头对头 RCT 证据；已删除并显式禁止此外推。
5. 旧房颤数字缺少剂量和基线风险区分；已用 2026 更新 Meta 的分层相对与绝对风险替换。
6. 出血原表述笼统写“升高”；已分开总体无显著差异与高剂量纯 EPA 的小幅绝对增量。
7. 原文献无超链接和 PMID；已统一为可访问 PubMed 链接并建立验证日志。

## 最终参考来源

- [Abdelhamid AS et al. Cochrane Database Syst Rev. 2020. PMID: 32114706](https://pubmed.ncbi.nlm.nih.gov/32114706/)
- [Manson JE et al. N Engl J Med. 2019. PMID: 30415637](https://pubmed.ncbi.nlm.nih.gov/30415637/)
- [Nicholls SJ et al. JAMA. 2020. PMID: 33190147](https://pubmed.ncbi.nlm.nih.gov/33190147/)
- [Bhatt DL et al. N Engl J Med. 2019. PMID: 30415628](https://pubmed.ncbi.nlm.nih.gov/30415628/)
- [Abuknesha NR et al. Circ Arrhythm Electrophysiol. 2026. PMID: 42517224](https://pubmed.ncbi.nlm.nih.gov/42517224/)
- [Javaid M et al. J Am Heart Assoc. 2024. PMID: 38742535](https://pubmed.ncbi.nlm.nih.gov/38742535/)
- [2025 ESC/EAS Focused Update](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)
