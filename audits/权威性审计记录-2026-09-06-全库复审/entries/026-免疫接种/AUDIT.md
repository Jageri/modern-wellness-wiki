# 026 免疫接种 - 权威性审计记录

- 审计日期：2026-09-08
- 状态：**FIXED**
- 结论星级：**⭐⭐⭐⭐**（特定疾病结局证据强；无跨疫苗统一全因死亡效果）
- 检索轮次：5 轮（WHO/中国 CDC；流感与健康接种者偏倚；肺炎球菌/带状疱疹/新冠；肺炎球菌 RCT 与 WHO 新冠指南；中国 CDC 2026—2027 流感指南）

## 核心判定

原文件名的 `-30~50%` 无法作为跨疫苗、跨人群的全因死亡相对降幅。原条目把 WHO 全球避免死亡数、住院、发病和疾病特异结局混在一起，不能推导个人全因死亡效果。因此中英文文件均改名为 `~`，并按流感、肺炎球菌、带状疱疹、新冠分开表述。

## 10 项检查

1. **来源质量 ✅**：使用 WHO、中国 CDC、随机试验和系统综述；未使用博客或预印本。
2. **结论一致性 ✅**：改为“目标疾病/重症受益明确，统一全因死亡降幅不成立”。
3. **反面证据 ✅**：CAPiTA 对任何病因肺炎效力不显著且死亡相似；带状疱疹试验的死亡相似；新冠重症保护随时间衰减。
4. **效果量准确性 ✅**：仅保留可从原摘要逐项核对的 CAPiTA 45.6%/5.1% 与 ZOE-70 89.8%，并附 CI 和结局名称。
5. **利益冲突 ✅**：CAPiTA 由 Pfizer 资助；ZOE-70 由 GSK 资助，正文明示后者，审计对两者均不外推至全因死亡。
6. **因果 vs 相关 ✅**：RCT 只用于其预设疾病结局；观察性全因死亡明确标注偏倚。
7. **人群适用性 ✅**：写明 CAPiTA 为 ≥65 岁，ZOE-70 为 ≥70 岁；不向所有成人外推。
8. **研究局限性 ✅**：区分疫苗血清型肺炎与全病因肺炎，区分带状疱疹发病与寿命，说明新冠时变性。
9. **发表偏倚 ⚠️**：本条目未做全疫苗 Meta 定量合并；因结局和人群异质性高，不合并是必要边界。
10. **时效性 ✅**：流感指南更新至 2026—2027；新冠更新至 WHO 2026 立场文件；动态信息标注 2026-09-08。

## 修正结果

- 撤除文件名与暗示中的 `-30~50%`。
- 删除无引用的“流感疫苗降低老年人住院约 40%”和过度概括的 HPV 数字。
- 补全结局、人群、CI、资助、健康接种者偏倚、安全和时效边界。
- 中英文结构、数字、引用与日期同步。

## 越界与 diff 检查

- 允许范围：两个目标条目（含必要改名）和本 `026-免疫接种` 目录。
- 本次不读取、不修改其他审计条目，不修改根 `entries`、共享文件，不执行 git。
- 实际路径检查：两个 `-30~50%` 旧路径已不存在，两个 `~` 路径已存在；本目录文件计数为 3（`AUDIT.md`、`PMID_VERIFICATION.md`、`HANDOFF.md`）。

## 最终状态

**FIXED**：数字标题已撤销，红线引用、双语同步、不确定性和动态边界已补全，无需 HOLD。

## 附录：来源与检索记录

# 026 免疫接种 - 检索与来源日志

检索日期：2026-09-08。各轮检索间隔均不少于 1 秒。

## 检索轮次

1. WHO 全球疫苗效果与中国 CDC 成人/流感接种指南。
   - `site:who.int vaccines immunization 3.5 5 million deaths annually vaccination fact sheet 2025`
   - `site:chinacdc.cn 成人 预防接种 指南 流感 肺炎球菌 带状疱疹 新冠 2025`
2. 流感疫苗、全因死亡和健康接种者偏倚。
   - `site:pubmed.ncbi.nlm.nih.gov influenza vaccination elderly all-cause mortality healthy vaccinee bias systematic review`
   - `site:pubmed.ncbi.nlm.nih.gov influenza vaccine randomized trial older adults hospitalization mortality meta-analysis`
3. 肺炎球菌、带状疱疹、新冠的 RCT/Meta/偏倚。
   - `site:pubmed.ncbi.nlm.nih.gov pneumococcal vaccination randomized trial older adults mortality meta-analysis all-cause mortality`
   - `site:pubmed.ncbi.nlm.nih.gov recombinant zoster vaccine trial older adults efficacy mortality safety PMID`
   - `site:pubmed.ncbi.nlm.nih.gov COVID-19 vaccination all-cause mortality healthy vaccinee bias systematic review effectiveness death`
4. CAPiTA、肺炎球菌死亡 Meta 与 WHO 新冠现行立场。
   - `CAPiTA trial pneumococcal vaccine older adults all cause mortality PMID 2015 NEJM`
   - `pneumococcal vaccine older adults all-cause mortality systematic review meta-analysis PMID`
   - `WHO SAGE COVID-19 vaccination roadmap 2025 older adults revaccination current recommendations`
5. 追查当日最新中国流感指南。
   - `site:chinacdc.cn "中国流感疫苗预防接种技术指南（2026—2027）"`
   - 结果：找到 2026-09-02 发布的现行 2026—2027 指南。

## 直接打开并核验的主要来源

- [WHO: Vaccines and immunization](https://www.who.int/health-topics/vaccines-and-immunization/) — 核对 350万~500万为全球多病种避免死亡估算。
- [中国 CDC：中国流感疫苗预防接种技术指南（2026—2027）](https://www.chinacdc.cn/jkyj/mygh02/jswj2026/202609/t20260902_1839739.html) — 核对年度、适用人群、优先人群和建议时间。
- [WHO: COVID-19 vaccines position paper, July 2026](https://www.who.int/publications/journals/weekly-epidemiological-record/wer101-30) — 核对 2026 现行文件、重症保护和衰减。
- [WHO: Vaccine safety Q&A](https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-vaccine-safety) — 核对不良事件监测与因果评估边界。
- [PubMed PMID 26474974](https://pubmed.ncbi.nlm.nih.gov/26474974/) — 流感观察性研究中的混杂与健康接种者偏倚系统综述。
- [PubMed PMID 25785969](https://pubmed.ncbi.nlm.nih.gov/25785969/) — CAPiTA 随机双盲安慰剂对照试验。
- [PubMed PMID 27626517](https://pubmed.ncbi.nlm.nih.gov/27626517/) — ZOE-70 随机安慰剂对照试验。
- [PubMed PMID 38401782](https://pubmed.ncbi.nlm.nih.gov/38401782/) — 220 万条记录中新冠疫苗全因死亡比较的健康接种者效应。

## 证据边界

- WHO 的全球避免死亡数是模型/公共卫生负担估计，不能转换为个人全因死亡相对风险。
- 疫苗发病效力不等于死亡效力；疾病特异死亡不等于全因死亡。
- 观察性接种者与未接种者的全因死亡差异不能默认为因果效果。
