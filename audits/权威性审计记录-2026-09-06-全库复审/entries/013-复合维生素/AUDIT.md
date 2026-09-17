# 013 复合维生素 - 权威性审计记录 v3

## 审计信息

- 审计日期：2026-09-07（Asia/Shanghai）
- 审计范围：仅条目 013 的中英文正文、路径及本独立记录目录
- 搜索次数：9 条英文关键词查询，分 5 次成功请求发出（另有 1 次组合请求因脚本语法错误未发出，不计入）
- 审计结果：需修正，已完成
- 核心判定：`-8%` 是 PHS-II 总癌症发生率的相对差异，不是显著全因死亡变化；路径必须改为 `~`

## 检索日志

以下检索均于 2026-09-07 执行，连续请求间隔均超过 1 秒。

1. `site:pubmed.ncbi.nlm.nih.gov multivitamin randomized trial all-cause mortality cancer cardiovascular COSMOS PHS II`
   - 核查：[PHS-II/COSMOS 等 PubMed 结果](https://pubmed.ncbi.nlm.nih.gov/35294969/)
2. `site:pubmed.ncbi.nlm.nih.gov COSMOS multivitamin cognition randomized trial global cognition memory 2024 meta-analysis`
   - 核查：[COSMOS 认知亚研究](https://pubmed.ncbi.nlm.nih.gov/38244989/)
3. `site:uspreventiveservicestaskforce.org multivitamin supplementation cardiovascular cancer 2022 insufficient evidence harms beta carotene vitamin E`
   - 核查：[USPSTF 推荐原页](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-supplementation-to-prevent-cvd-and-cancer-preventive-medication)
4. `site:ods.od.nih.gov multivitamin mineral supplements health professional fact sheet upper limits interactions vitamin A iron folic acid`
   - 核查：[NIH ODS 专业版事实表](https://ods.od.nih.gov/factsheets/MVMS-HealthProfessional/)
5. `site:pubmed.ncbi.nlm.nih.gov multivitamin mortality 390124 healthy user bias cohort 2024 Loftfield`
   - 核查：[Loftfield 2024](https://pubmed.ncbi.nlm.nih.gov/38922615/)
6. `PHS II multivitamin trial funding BASF Pfizer Centrum conflict of interest`；`COSMOS multivitamin trial funding Pfizer Consumer Healthcare Centrum Silver conflict of interest`
   - 核查：[PHS-II 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC3858850/)、[COSMOS 全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC9170475/)
7. 时效性补检：上述利益冲突检索结果同时发现 2026 年 COSMOS 表观遗传时钟 RCT 亚研究，随后打开 [PubMed 原页](https://pubmed.ncbi.nlm.nih.gov/41803341/) 核查；此项为结果内追踪，不另计搜索请求。

## 十维审计

### 1. 来源质量 ✅

- 核心证据包括两项大型双盲 RCT、USPSTF 推荐及系统证据综述、三项前瞻队列合并分析，以及 NIH ODS 安全事实表。
- 新增的认知和表观遗传结果均明确标为 COSMOS 亚研究，未把亚组或替代终点提升为寿命结论。

### 2. 结论一致性 ✅（修正后）

- PHS-II 与 COSMOS 对全因死亡、主要心血管结局均无统计学显著获益。
- 癌症结果不一致：PHS-II 总癌症 HR 0.92 达边界显著，COSMOS 总侵袭性癌症 HR 0.97 不显著；USPSTF 证据综述认为可能有很小的癌症发生率获益，但仍有重要局限。
- 原文“复合维生素不能延长寿命”改为“未证实延长寿命”，避免把未拒绝零假设写成确定无效。

### 3. 反面证据 ✅

- 保留癌症小获益信号作为正面证据，同时呈现 COSMOS 阴性复制、癌症死亡阴性及 USPSTF 的 I 声明。
- 补入认知测验小获益和 2026 表观遗传时钟信号，但明确它们未证明痴呆预防或寿命延长。
- 主动纳入 β-胡萝卜素/维生素 A 在吸烟高风险人群的危害边界及剂量叠加风险。

### 4. 效果量准确性 ✅（修正后）

- PHS-II 癌症：17.0 vs 18.3/千人年；HR 0.92（95% CI 0.86–0.998；P=0.04）。“8%”仅为癌症发生率相对差异。
- PHS-II 心血管：主要心血管事件 HR 1.01（0.91–1.10；P=0.91）；全因死亡 HR 0.94（0.88–1.02；P=0.13）。
- COSMOS：侵袭性癌症 HR 0.97（0.86–1.09；P=0.57）；心血管复合结局 HR 0.98（0.86–1.12）；全因死亡 HR 0.93（0.81–1.08）。
- USPSTF 综述：任何癌症 OR 0.93（0.87–0.99）；充分把握度试验 ARD 范围 -0.2% 至 -1.2%。
- Loftfield 2024：前半随访 HR 1.04（1.02–1.07）；后半随访 HR 1.04（0.99–1.08）。原条目把前者写成“无关”不准确，已改为“未观察到更低风险”，并拒绝因果化伤害解释。
- COSMOS 认知：全局认知差异 0.07 SD（0.03–0.11）。
- 2026 表观遗传亚研究：PCGrimAge 每年差异 -0.113 年（-0.205 至 -0.020）；PCPhenoAge -0.214 年（-0.410 至 -0.019），仅 5 个时钟中的 2 个显著。

### 5. 利益冲突 ✅（已补标）

- PHS-II 与 COSMOS 有 NIH 等公共资金，也有企业提供药片/包装。
- COSMOS 披露部分研究者获得 Mars Edge、Pfizer/Haleon、Pure Encapsulations 等研究支持或行业讲课/差旅；企业声明未参与设计、分析和论文，但仍应透明呈现。

### 6. 因果 vs 相关 ✅（修正后）

- RCT 用于判断随机分配的产品效应；队列研究仅描述关联。
- Loftfield 研究虽校正健康生活方式并处理反向因果，仍受自报暴露和残余混杂限制；不能从 HR 1.04 推导“复合维生素导致死亡”。
- 表观遗传时钟属于替代终点，不能推导实际寿命变化。

### 7. 人群适用性 ✅（已补标）

- PHS-II 仅为年龄较大的美国男性医生；COSMOS 为美国女性 ≥65 岁、男性 ≥60 岁，且排除近期重大疾病者，不能直接外推到年轻人、孕妇、已知缺乏者或慢性病住院者。
- USPSTF I 声明适用于社区居住、非孕、无已知营养缺乏的成年人。
- 已确诊缺乏、妊娠及吸收不良等情形与普通人慢病预防是不同临床问题。

### 8. 研究局限性 ✅（已补标）

- PHS-II 人群高度选择；COSMOS 慢病结局中位随访仅 3.6 年。
- 癌症效应很小且跨试验不一致；多个终点增加偶然阳性风险。
- 认知证据来自同一母试验的亚研究，效应小、时间短；未证明临床痴呆结局。
- 表观遗传研究样本 958 人、5 个时钟仅 2 个显著，临床意义未知。

### 9. 发表偏倚 ⚠️

- USPSTF 综述进行了系统检索，降低选择性引用风险；但当前条目没有足够资料证明完全排除未发表阴性结果。
- 条目不据单一阳性次要终点下结论，并保留“证据不足/需复制”措辞。

### 10. 时效性 ✅

- 纳入 2024 年死亡队列、2024 年认知合并分析和 2026 年表观遗传时钟亚研究。
- 2026 新研究未推翻死亡结局判断，因为它检测的是 DNA 甲基化替代终点而非死亡或寿命。

## 正反证据权衡

### 可能获益

- PHS-II：总癌症发生率相对下降约 8%，绝对事件率差 1.3/千人年。
- USPSTF 更新综述：任何癌症 OR 0.93，绝对差异很小。
- COSMOS 认知亚研究：2–3 年认知测验效应约 0.07 SD。
- 2026 COSMOS 亚研究：两个表观遗传时钟有很小变化。

### 阴性或危害证据

- PHS-II 与 COSMOS：全因死亡及主要心血管事件均不显著。
- COSMOS：总侵袭性癌症不显著，未复制 PHS-II。
- PHS-II：癌症死亡不显著。
- Loftfield：长期队列未观察到更低死亡风险。
- 高效价/叠加摄入可能超过 UL；吸烟者使用高 β-胡萝卜素/维生素 A 产品、孕期过量预成型维生素 A，以及华法林与维生素 K 均有特定风险。

## 路径、PMID 与星级变化

- 中文：`wiki_zh/吃/补剂/-8% 复合维生素.md` → `wiki_zh/吃/补剂/~ 复合维生素.md`
- 英文：`wiki_en/Diet/Supplements/-8% Multivitamins.md` → `wiki_en/Diet/Supplements/~ Multivitamins.md`
- 路径原因：没有可核验的显著全因死亡百分比；`-8%` 混用了癌症发生率。
- 星级：⭐⭐⭐ → ⭐⭐⭐⭐。理由是死亡/心血管阴性结论有两项大型 RCT 与系统综述支持；对癌症、认知、替代终点的不确定性继续明确降权。
- 保留并复核 PMID：23162860、23117775、35294969、38922615、35727271。
- 新增 PMID：35727272、38244989、41803341。
- 修正引用元数据：Loftfield 论文正确文章号为 `e2418729`（旧正文写为 `e2416468`）。

## 最终判断

对普通、无已知缺乏的成年人，复合维生素没有经 RCT 证实的全因死亡或心血管获益；癌症发生率可能存在很小获益但跨试验不一致；认知与表观遗传信号不能转换为寿命百分比。具体缺乏和生命阶段需求应定向处理。双语正文已同步修正。
