# 003 二甲双胍—二次抽查 PMID 原页验证

- 验证日期：2026-09-17（Asia/Shanghai）
- 状态：**FIXED**
- 方法：“原页”指本轮实际逐个打开 PubMed URL，并核对 PMID、题名、作者、期刊、年份、研究类型及正文使用的数据；搜索摘要未被单独用作身份验证。

| 正文状态 | PMID | PubMed 原页 | 逐页核对内容 | 结果 |
|---|---:|---|---|---|
| 保留 | 9742977 | https://pubmed.ncbi.nlm.nih.gov/9742977/ | *Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34)* / UKPDS Group（PubMed 显示 no authors listed）/ *Lancet* / 1998 / RCT | ✅ 题名、团体作者、期刊、年份匹配；确认 753 人、中位 10.7 年、全因死亡相对风险降低 36%（95% CI 9%–55%，p=0.011）。心梗 -39% 不在摘要且本轮无稳定原始全文定位，已从正文删除 |
| 保留 | 28802803 | https://pubmed.ncbi.nlm.nih.gov/28802803/ | *Metformin reduces all-cause mortality and diseases of ageing independent of its effect on diabetes control: A systematic review and meta-analysis* / Jared M Campbell, Susan M Bellman, Matthew D Stephenson, Karolina Lisy / *Ageing Research Reviews* / 2017 | ✅ 全部匹配；确认 53 项研究、糖尿病二甲双胍使用者 vs 无糖尿病对照 HR 0.93（0.88–0.99）、vs 其他糖尿病治疗 HR 0.72（0.65–0.80）及基线差异偏倚提示 |
| 新增 | 34697033 | https://pubmed.ncbi.nlm.nih.gov/34697033/ | *Effect of Metformin and Lifestyle Interventions on Mortality in the Diabetes Prevention Program and Diabetes Prevention Program Outcomes Study* / Christine G Lee et al.; DPP Research Group / *Diabetes Care* / 2021 / RCT 长期随访 | ✅ 全部匹配；确认 3,234 名糖尿病高风险成人、中位 21 年、453 人死亡、全因死亡 HR 0.99（0.79–1.25）；确认 2001 年后干预和暴露变化 |
| 保留 | 22875195 | https://pubmed.ncbi.nlm.nih.gov/22875195/ | *Cancer outcomes and all-cause mortality in adults allocated to metformin: systematic review and collaborative meta-analysis of randomised clinical trials* / Richard J Stevens et al. / *Diabetologia* / 2012 | ✅ 全部匹配；确认死亡 RR 0.94（0.79–1.12）、癌症 RR 1.02（0.82–1.26）；作者单位明确列出 TGRD Europe, Takeda Pharmaceutical Company 与 Novartis Pharma |
| 保留 | 31557380 | https://pubmed.ncbi.nlm.nih.gov/31557380/ | *Metformin blunts muscle hypertrophy in response to progressive resistance exercise training in older adults: ... The MASTERS trial* / R Grace Walton et al. / *Aging Cell* / 2019 / 双盲 RCT | ✅ 全部匹配；确认 46 vs 48 人、14 周及瘦体重 p=0.003、大腿肌量 p<0.001；终点不是死亡或寿命 |
| 新增 | 40147475 | https://pubmed.ncbi.nlm.nih.gov/40147475/ | *Metformin and physical performance in older people with probable sarcopenia and physical prefrailty or frailty in England (MET-PREVENT)* / Miles D Witham et al. / *Lancet Healthy Longevity* / 2025 / 双盲 RCT | ✅ 全部匹配；确认 72 人、4 个月、4 米步速差 0.001 m/s（-0.06–0.06），p=0.96，且研究者结论为未改善并耐受性较差；非死亡终点 |
| 保留 | 40582648 | https://pubmed.ncbi.nlm.nih.gov/40582648/ | *Emerging uncertainty on the anti-aging potential of metformin* / Matthew Thomas Keys et al. / *Ageing Research Reviews* / 2025 / Review | ✅ 全部匹配；确认总体结论及详细 COI；仅作争议综述，不作随机因果证据 |

## 明确排除

| PMID | 原页 | 排除理由 |
|---:|---|---|
| 42620010 | https://pubmed.ncbi.nlm.nih.gov/42620010/ | medRxiv 预印本，且报告衰弱指数/表观遗传时钟等替代终点；不作为延寿定论，未进入最终正文 PMID 集合 |
| 27304507 | https://pubmed.ncbi.nlm.nih.gov/27304507/ | TAME 提案/评论性文献，不能证明 TAME 已启动或二甲双胍有效；继续不纳入正文 |

## 最终 PMID 集合

双语正文均且仅为：**9742977、28802803、34697033、22875195、31557380、40147475、40582648**。

失败 PMID：无。最终正文中的 7 个 PMID 均已在本轮逐页核验。
