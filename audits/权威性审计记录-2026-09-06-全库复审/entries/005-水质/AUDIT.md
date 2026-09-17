# 005「水质」权威性审计

**审计日期**：2026-09-07（Asia/Shanghai）

**检索完成时间**：2026-09-07 10:23 CST

**审计结果**：FIXED

**检索次数**：10 组独立英文/中文检索，另逐页打开 3 个 PubMed 原始记录

## 原条目主张、数字与引用清单

| 原主张 | 原数字/引用 | 审计结果 |
|---|---|---|
| “发达地区影响小” | 无数据 | 删除。国家发展水平不是家庭水质的充分代理，改为按水源、污染物、监管与实际暴露判断。 |
| 自来水一律烧开 | 无引用 | 改为仅在怀疑微生物污染或官方煮沸通知等场景使用；煮沸不能处理化学污染。 |
| 饮水机长期不洗可能滋生细菌 | 无引用 | 保留为设备/储水再污染风险，但改成依机型说明与事件触发的清洁规则。 |
| 每 1–2 个月清洗饮水机 | 固定周期，无引用 | 删除。未找到适用于所有机型的高质量统一周期。桶装水机引用 Health Canada 的“换桶时清洁”，其他机型依说明。 |
| 水质差地区使用“合格净水器” | 无污染物与性能边界 | 改为先检测或看报告，再按目标污染物和明确去除声明选择，并按说明换滤芯。 |
| 碱性水、富氢水、小分子水“都是营销” | 无引用，绝对化 | 改为：碱性/富氧水未证实额外健康获益；富氢水有初步小型研究，但不足以证明抗衰、预防疾病或延寿；“小分子水”无可核验临床定义。 |
| 不喝未经处理的地下水 | 无检测边界 | 改为不长期饮用未经检测和适当处理的非受监管水源，并给出年度及事件触发检测。 |
| 不囤瓶装水（微塑料） | 无健康结局证据 | 删除固定禁令。微塑料可检出，但方法异质性极高，人体风险仍不确定；不应因此取消必要应急储备。 |
| WHO 2022 指南 | 1 个裸链接 | 更新到 2026 年纳入第一、第二、第三增补的当前版，并改为可点击引用。 |

## 检索记录

检索均在 2026-09-07 完成；每组检索后均等待工具返回，再开始下一组，未触发 429。

1. `site:who.int drinking-water household water treatment boiling microbial contamination chemical contaminants boiling WHO`
   - https://www.who.int/publications/i/item/WHO-FWC-WSH-15.02
   - https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/water-safety-and-quality/household-water-treatment-and-safe-storage
2. `site:who.int publications drinking-water quality fourth edition addenda 2022 boiling household water treatment`
   - https://www.who.int/publications/i/item/9789240121225
   - https://www.who.int/publications/i/item/9789241548229
3. `site:gov.cn / site:nhc.gov.cn / site:samr.gov.cn GB 5749-2022 生活饮用水卫生标准`
   - https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=99E9C17E3547A3C0CE2FD1FFD9F2F7BE
   - https://www.ndcpa.gov.cn/jbkzzx/c100033/common/content/content_1737300953307992064.html
4. `site:cdc.gov drinking water filters replace manufacturer instructions private well test annually`
   - https://www.cdc.gov/drinking-water/prevention/about-choosing-home-water-filters.html
   - https://www.epa.gov/privatewells/protect-your-homes-water
5. `PubMed systematic review household water treatment diarrhoea boiling filtration drinking water Cochrane`
   - https://www.cochrane.org/evidence/CD004794_interventions-improve-water-quality-and-prevent-diarrhoea
   - https://pubmed.ncbi.nlm.nih.gov/26488938/ （搜索定位；正文未写 PMID）
6. `PubMed systematic review alkaline water health effects hydrogen rich water randomized trials systematic review`
   - https://pubmed.ncbi.nlm.nih.gov/36571558/
   - https://pubmed.ncbi.nlm.nih.gov/38256045/
7. `PubMed bottled water microplastics human health systematic review drinking water`
   - https://pubmed.ncbi.nlm.nih.gov/32735575/
   - https://www.who.int/publications/i/item/9789241516198
8. `site:epa.gov / site:cdc.gov boiling water does not remove lead nitrate arsenic chemical contaminants`
   - https://www.cdc.gov/drinking-water/causes/chemicals-that-can-contaminate-tap-water.html
   - https://www.epa.gov/lead/does-boiling-water-remove-lead
   - https://www.epa.gov/mn/will-boiling-my-water-help
9. 补充设备、储水与限值核验：
   - https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/information-product/frequently-asked-questions-about-bottled-water.html
   - https://www.cdc.gov/global-water-sanitation-hygiene/about/about-safe-water-storage.html
   - https://www.beijing.gov.cn/hudong/bmwd/jsjbmyyt/20222mwd/gsps2023/gsbz/202310/t20231011_3275491.html
   - https://www.huian.gov.cn/zwgk/zdxxgk/hjbh/yjcs/202604/t20260406_3281087.htm
10. `site:niddk.nih.gov diarrhea seek care blood dehydration vomiting fever adults children`
   - https://www.niddk.nih.gov/health-information/digestive-diseases/diarrhea/symptoms-causes

## 十维审计

### 1. 来源质量：✅

核心规则来自 WHO 2026 饮用水指南、中国现行强制标准 GB 5749—2022、CDC/EPA/Health Canada；研究证据使用系统综述与 Cochrane。删除无来源固定周期。

### 2. 结论一致性：✅（修正后）

主流证据支持：微生物污染时煮沸有效；化学污染不能靠煮沸；滤水设备须匹配污染物；特殊水的延寿证据不足。原“一律煮沸”与“发达地区影响小”不符合风险分层，已修正。

### 3. 反面证据：✅

- 富氢水并非“完全没有研究”：2024 系统综述纳入 25 篇文献，报告一些初步积极结果，但明确要求更大样本与更严谨研究；正文据此不用“都是营销”的绝对表述。
- 微塑料系统综述证实自来水和瓶装水均有检出，但 I²>95%，WHO 认为当前健康风险证据有限；正文同时保留“存在暴露”与“不能推出疾病风险/禁囤水”的两面。
- Cochrane 发现家庭点位过滤在高微生物风险场景可能降低腹泻，但大多数研究来自低中收入地区、结局常为未盲法自报腹泻；不能由此推导所有家庭都需滤水器。

### 4. 效果量与数字准确性：✅

条目未给出个人死亡率百分比。保留的 I²>95%、10 篇、25 篇、日期与 GB 5749 限值均逐项核验；没有把 Cochrane 的场景特异相对风险写入面向普通家庭的结论。

### 5. 利益冲突：⚠️

- Danopoulos 2020 PubMed 原页声明无竞争利益。
- Dhillon 2024 PubMed 原页声明无利益冲突。
- Sunardi 综述作者部分隶属 Indonesian Hydration Working Group，PubMed 页面未显示独立利益冲突段；因此只用于否定额外获益，不作为唯一安全性依据。
- 设备建议以公共机构性能导向指南为主，不采用厂家材料。

### 6. 因果与相关：✅

未把微塑料检出、特殊水生物标志物变化或国家发展水平写成疾病/死亡因果。煮沸结论限定为病原体灭活，健康结局证据另行披露场景与偏倚。

### 7. 人群适用性：✅

明确区分合规市政供水、建筑二次供水/户内管道、非受监管自备水和污染事件。私人井“每年检测”标注为美国 CDC/EPA 的保守建议，不能替代中国地方要求。

### 8. 研究局限性：✅

披露点位处理研究多在低中收入、高微生物污染场景，常未盲法且自报腹泻；微塑料测量高度异质；特殊水研究样本和结局有限，均缺乏延寿结局。

### 9. 发表偏倚：⚠️

特殊水研究规模小、结局多且阳性结果可能更易发表；系统综述摘要不能排除选择性报告。正文因此不用确定疗效措辞，也不以单项生物标志物替代临床结局。

### 10. 时效性：✅

动态标准于 2026-09-07 核验：GB 5749—2022 在国家标准平台状态为“现行”；WHO 指南已从原 2022 第一、第二增补版更新为 2026 第一、第二、第三增补版。

## 数字核验

| 数字 | 结果 | 来源与说明 |
|---|---|---|
| GB 5749—2022 实施 2023-04-01 | ✅ | 国家标准全文公开平台标注发布日期 2022-03-15、实施日期 2023-04-01、状态现行。 |
| 大肠埃希氏菌 100 mL 中不应检出 | ✅ | GB 5749—2022 表 1；2026 地方政府依该标准发布的管网检测表亦一致。 |
| 砷、铅各 ≤0.01 mg/L | ✅ | GB 5749—2022 表 1；2026 地方公开检测表一致。 |
| 硝酸盐（以 N 计）≤10 mg/L | ✅ | GB 5749—2022 表 1；未把旧标准的受限水源例外写成普遍值。 |
| 氟化物 ≤1.0 mg/L | ✅ | GB 5749—2022 表 1。 |
| 浑浊度 ≤1 NTU；pH 6.5–8.5；TDS ≤1000 mg/L | ✅ | GB 5749—2022；北京市政府 2023 官方问答复核。 |
| 系统综述纳入 10 篇 | ✅ | PMID 36571558 摘要。 |
| 富氢水系统综述纳入 25 篇 | ✅ | PMID 38256045 摘要。 |
| 微塑料综述 I²>95% | ✅ | PMID 32735575 摘要；12 项研究、方法差异大，不用于人体疾病风险换算。 |
| 饮水机每 1–2 个月 | ❌，删除 | 未找到适用于所有家用饮水机的高质量统一周期。改为说明书及换桶/污染事件触发。 |

## 修改理由与最终判定

原条目存在三类实质问题：把灾害/微生物场景的煮沸建议普遍化；制造无证据清洁周期；把微塑料检出直接转换为瓶装水储备禁令。此外，“发达地区”不能替代具体水源风险，特殊水结论过度绝对，英文证据与引用不完整。

修正后，双语正文的数字、PMID、星级、结论强度和引用一致；所有引用均为可点击链接；中文文件前缀从历史 `≈` 调整为现行 `~`，与英文协调。最终判定：**FIXED**。
