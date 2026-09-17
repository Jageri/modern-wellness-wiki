# 025 癌症筛查 - 权威性复审

## 审计日期

2026-09-08

## 状态

**FIXED**

## 审计范围

- 中文：`wiki_zh/医/-20~30% 癌症筛查.md` → `wiki_zh/医/~ 癌症筛查.md`
- 英文：`wiki_en/Medical/-20~30% Cancer Screening.md` → `wiki_en/Medical/~ Cancer Screening.md`
- 未读取、未修改其他百科条目。
- 本条目共执行 7 次独立英文检索，覆盖指南、癌种特异 RCT/系统综述、全因死亡、假阳性、过度诊断、中国方案与无差别检查。

## 核心判定

1. **文件名的 `-20~30%` 不成立**：条目混合了肺、结直肠、乳腺和宫颈筛查，不同癌种的终点、人群、方法和证据强度不同，不存在可用于“癌症筛查”整体的统一死亡降幅。已撤数字并改为 `~` 前缀。
2. **NLST 的 20.0% 是肺癌特异死亡相对降幅**，适用于试验中 55–74 岁高危吸烟者，对照是胸片；同一试验的全因死亡相对降幅为 6.7%，不是 20%。
3. **“结肠镜使结直肠癌死亡降低 50%–68%”被撤回**：2026 年 NordICC 13 年意向筛查分析显示发病率降低（RR 0.81，95% CI 0.71–0.90），但结直肠癌死亡 RR 0.88（95% CI 0.68–1.08），未达显著。原条目把观察性估计和随机证据混为已确证死亡降幅。
4. **“HPV+TCT 使宫颈癌死亡降低 80%”无引文且与可核对终点不符**：USPSTF 证据综述支持的数字是含 hrHPV 策略相对于细胞学的浸润性宫颈癌 RR 0.60（95% CI 0.40–0.89），并非死亡终点的 80% 降幅。
5. **“早期乳腺癌 5 年生存率 >95%”不能作为筛查效果证据**：存在领先时间偏倚和过度诊断。已改用随机试验死亡证据并明示全因死亡边界。

## 10 项检查

### 1. 来源质量 ✅

修订后优先使用中国国家卫健委现行技术方案、USPSTF 现行建议、大型 RCT 和系统综述。删除无来源的宫颈癌 80% 与生存率替代终点。

验证来源：[NHC 2024 肺癌/结直肠癌方案](https://www.nhc.gov.cn/ylyjs/gzdt/202408/42f43b5f0c4c4ebe90c78ee127959b92.shtml)；[USPSTF 乳腺癌](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening)；[USPSTF 宫颈癌](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening)

### 2. 结论一致性 ✅

改写为“癌种特异筛查在特定人群中可带来获益”，不再把“早发现”当作所有癌种都已证明降低死亡的替代论据。

验证来源：[NCI Cancer Screening Overview](https://www.cancer.gov/about-cancer/screening/patient-screening-overview-pdq)

### 3. 反面证据 ✅

主动纳入三类阴性或限制性证据：NordICC 13 年未显示结直肠癌死亡显著下降；乳腺摄影未证明全因死亡下降；肺癌 LDCT 存在假阳性、过度诊断和偶发发现。

验证来源：[NordICC 2026](https://pubmed.ncbi.nlm.nih.gov/42102826/)；[Breast screening review](https://pubmed.ncbi.nlm.nih.gov/26501537/)；[USPSTF lung evidence review](https://pubmed.ncbi.nlm.nih.gov/33750087/)

### 4. 效果量准确性 ✅

- NLST：肺癌死亡相对降低 20.0%（95% CI 6.8%–26.7%）；全因死亡相对降低 6.7%（95% CI 1.2%–13.6%）。
- NordICC 13 年：结直肠癌发病 1.46% 对 1.80%，RR 0.81（95% CI 0.71–0.90）；结直肠癌死亡 0.41% 对 0.47%，RR 0.88（95% CI 0.68–1.08）。
- 乳腺摄影：随机试验系统综述的乳腺癌特异死亡汇总 RR 约 0.80–0.82，但具体策略存在不确定性；未写成全因死亡获益。
- hrHPV：浸润性宫颈癌 RR 0.60（95% CI 0.40–0.89），不是死亡 RR。

### 5. 利益冲突 ✅

NLST 由美国国家癌症研究所资助；USPSTF 肺癌证据综述由 AHRQ 委托；NordICC 主要由挪威研究理事会等公共/非营利资金支持。乳腺观察性 Meta 分析报告作者无利益冲突。未依赖检测厂商宣传。

### 6. 因果 vs 相关 ✅

对 NLST、NordICC 和筛查 RCT 系统综述按随机证据表述；明确指出结肠镜 50%–68% 来自观察性估计且不可写成已确证的死亡因果效果。对乳腺观察性数据显示健康筛查者偏倚。

### 7. 人群适用性 ✅

新条目分开：中国 NHC 肺癌 50–74 岁高风险人群；中国 NHC 结直肠癌 40–74 岁散发性高风险人群；中国公共卫生两癌项目 35–64 岁妇女；USPSTF 平均风险年龄区间仅作另一可识别参照。单列遗传高危、既往病史、停止年龄与后续治疗能力。

### 8. 研究局限性 ✅

披露 NLST 适用人群与旧结节判定规则；NordICC 是“邀请一次结肠镜”的意向筛查结果，不等于所有依从者或所有结直肠筛查方案；乳腺效果量受时代、年龄、间隔和过度诊断定义影响；HPV 策略增加首轮转诊。

### 9. 发表偏倚 ✅

不以单项阳性研究作统一结论；使用系统综述并纳入死亡阴性结果。乳腺摄影效果量仍存在试验质量与观察性偏倚争议，已在正文降低确定性。

### 10. 时效性 ✅

纳入 2024 年中国 NHC 肺癌/结直肠癌方案、2024 年 USPSTF 乳腺癌建议、中国现行两癌公共卫生方案，以及 2026 年 NordICC 13 年随访。宫颈癌使用当前已发布的 USPSTF 最终建议，未把草案当成已生效标准。

## 等级判定

修订后使用 **⭐⭐⭐⭐**，理由是条目层级包含多个异质癌种，不是一个可由同一组 RCT 证明的单一干预。其中肺癌 LDCT 的癌种特异因果证据强，但结肠镜死亡终点仍为阴性，宫颈癌条目中可核对的 hrHPV 数字是浸润癌发生而非死亡。

## 英文检索记录

1. `site:uspreventiveservicestaskforce.org recommendation lung colorectal breast cervical cancer screening age stop screening 2024`
2. `PubMed randomized trial lung LDCT NLST all-cause mortality overdiagnosis NELSON PMID colonoscopy NordICC colorectal cancer mortality 2022`
3. `PubMed cancer screening all-cause mortality mammography overdiagnosis false positive systematic review cervical HPV screening mortality randomized trial PMID`
4. `China 2024 2025 national guideline cancer screening lung colorectal breast cervical official screening age high risk English guideline`
5. `site:nhc.gov.cn breast cancer screening early diagnosis treatment program 2022 cervical cancer screening work plan China age mammography HPV official`
6. `site:cancer.gov tumor markers screening asymptomatic people not sensitive specific whole body CT cancer screening official`
7. `"Long-term effects of colonoscopy screening" 13 years Lancet 2026 DOI`

## 主要核验来源

- [国家卫健康委：肺癌、结直肠癌筛查与早诊早治方案（2024年版）](https://www.nhc.gov.cn/ylyjs/gzdt/202408/42f43b5f0c4c4ebe90c78ee127959b92.shtml)
- [国家卫健康委：宫颈癌、乳腺癌筛查工作方案](https://www.nhc.gov.cn/fys/c100078/202201/e4209b0a6e604f6aba3e793d8eddebf3.shtml)
- [USPSTF: Lung Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening)
- [USPSTF: Colorectal Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening)
- [USPSTF: Breast Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening)
- [USPSTF: Cervical Cancer Screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening)
- [NCI: Cancer Screening Overview](https://www.cancer.gov/about-cancer/screening/patient-screening-overview-pdq)
- [NCI: Tumor Markers](https://www.cancer.gov/about-cancer/diagnosis-staging/diagnosis/tumor-markers-fact-sheet)
- [NCI: CT Scans and Cancer](https://www.cancer.gov/about-cancer/diagnosis-staging/ct-scans-fact-sheet)

PMID 原页核验详见 `PMID_VERIFICATION.md`。
