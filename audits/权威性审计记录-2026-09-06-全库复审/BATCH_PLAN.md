# 长寿百科全库逐条权威性复审批次计划

**计划日期**：2026-09-06
**审核对象**：100 个中文条目及其 100 个英文对应条目
**审核单位**：一项审核 = 一篇中文条目 + 一篇英文对应条目
**批次规模**：20 批 × 5 项

## 一、上下文隔离规则

1. 每一项审核必须创建一个全新的独立子 agent，禁止复用处理过其他条目的 agent。
2. 创建子 agent 时使用空白上下文（`fork_turns: none`）；任务中只提供：
   - 本项编号；
   - 中文与英文文件路径；
   - wiki audit skill 和审计标准路径；
   - 本项独立输出目录；
   - 统一交付格式。
3. 子 agent 必须自行完整读取：
   - `/Users/qiansongyi/.agents/skills/longevity-wiki-audit/SKILL.md`
   - `/Users/qiansongyi/projects/longevity-wiki/docs/standards/条目权威性审计标准.md`
4. 不向子 agent 提供其他文章的正文、研究材料、结论或审核聊天记录。
5. 主 agent 不重新研究文章，不吸收原始检索上下文；只接收并检查结构化交接结果、流程记录和文件级差异。
6. 自动门禁失败时，创建另一个全新的修复子 agent；不得让其他文章的 agent 顺手处理。

## 二、并发与文件所有权

- 系统最多允许主 agent 加 3 个子 agent 同时运行。
- 每批 5 项分两波执行：第一波 3 项并行，完成并验收后，第二波 2 项并行。
- 每个子 agent 只能修改自己的中文条目、英文条目和独立交接目录。
- 子 agent 禁止修改共享文件：`INDEX.md`、`PROGRESS.md`、批次总日志、总 `PMID_VERIFICATION.md`。
- 子 agent 禁止执行 `git add`、`git commit`、`git push`。
- 条目需要改名前缀时，由子 agent完成条目对的成对改名，并在交接文件中报告旧、新路径；共享索引由主 agent 在批次结束时统一机械更新。
- 当前脏工作区没有建立安全基线前，不执行 skill 中默认的逐条提交和每五条推送。任何提交或推送都需要单独授权。

## 三、单项子 agent 交付契约

每项输出到：

`audits/权威性审计记录-2026-09-06-全库复审/entries/NNN-条目名/`

至少包含：

1. `AUDIT.md`
   - 核心主张与全部可核查数字；
   - 至少 2–3 次检索的关键词、时间和结果 URL；
   - 十个审计维度逐项结论；
   - 正面证据、反面证据、最新综述或指南；
   - 效果量、终点、研究设计、人群及因果边界；
   - 利益冲突和研究局限；
   - 修改前后结论及最终状态。
2. `PMID_VERIFICATION.md`
   - 本项所有 PMID 的实际页面 URL；
   - 标题、作者、期刊、年份匹配结果；
   - 无法验证的 PMID 必须标为失败，并从正文移除或更正。
3. `HANDOFF.md`
   - 状态：`PASS`、`FIXED` 或 `HOLD`；
   - 修改文件清单；
   - 改名前后的路径；
   - 新增、删除、更正的 PMID；
   - 核心数字变化；
   - 星级变化；
   - 尚存限制；
   - 执行过的校验命令及结果。

子 agent 完成前必须确保中文和英文语义、数字、证据等级一致。无法验证的内容不能以“待核实”形式继续作为百科结论公开。

## 四、批次安排

排序原则：先处理已经暴露问题、药物与补充剂、数字前缀和直接医疗决策，再处理生活方式及方向性条目。批次编号是执行顺序，不代表条目价值排序。

### 批次 01：已发现严重问题 I

| 项号 | 中文条目 | English entry |
|---|---|---|
| 001 | `wiki_zh/吃/补剂/+100% 褪黑素.md` | `wiki_en/Diet/Supplements/+100% Melatonin.md` |
| 002 | `wiki_zh/吃/补剂/-30~60% 亚精胺.md` | `wiki_en/Diet/Supplements/-30~60% Spermidine.md` |
| 003 | `wiki_zh/医/-7% 二甲双胍.md` | `wiki_en/Medical/-7% Metformin.md` |
| 004 | `wiki_zh/境/温度疗法/-28% CVD 泡澡.md` | `wiki_en/Environment/Temperature Therapy/-28% CVD Bathing.md` |
| 005 | `wiki_zh/吃/≈ 水质.md` | `wiki_en/Diet/~ Water Quality.md` |

### 批次 02：已发现严重问题 II

| 项号 | 中文条目 | English entry |
|---|---|---|
| 006 | `wiki_zh/形/+10~20% 口腔健康.md` | `wiki_en/Body/+10~20% Oral Health.md` |
| 007 | `wiki_zh/形/-25% 刷牙.md` | `wiki_en/Body/-25% Tooth Brushing.md` |
| 008 | `wiki_zh/心/社会连接/-26% 信仰归属.md` | `wiki_en/Mind/Social Connection/-26% Religious Affiliation.md` |
| 009 | `wiki_zh/吃/饮品/-5% 茶.md` | `wiki_en/Diet/Beverages/-5% Tea.md` |
| 010 | `wiki_zh/吃/补剂/≈ 维生素D.md` | `wiki_en/Diet/Supplements/≈ Vitamin D.md` |

### 批次 03：延寿药物与补充剂热点

| 项号 | 中文条目 | English entry |
|---|---|---|
| 011 | `wiki_zh/医/? 雷帕霉素.md` | `wiki_en/Medical/~ Rapamycin.md` |
| 012 | `wiki_zh/吃/补剂/? NMN与NAD+.md` | `wiki_en/Diet/Supplements/~ NMN & NAD+.md` |
| 013 | `wiki_zh/吃/补剂/-8% 复合维生素.md` | `wiki_en/Diet/Supplements/-8% Multivitamins.md` |
| 014 | `wiki_zh/吃/补剂/-15% 葡萄糖胺.md` | `wiki_en/Diet/Supplements/-15% Glucosamine.md` |
| 015 | `wiki_zh/吃/补剂/≈ 鱼油.md` | `wiki_en/Diet/Supplements/~ Fish Oil.md` |

### 批次 04：补充剂与感染用药决策

| 项号 | 中文条目 | English entry |
|---|---|---|
| 016 | `wiki_zh/吃/补剂/~ 胶原蛋白.md` | `wiki_en/Diet/Supplements/~ Collagen.md` |
| 017 | `wiki_zh/吃/补剂/~ 保健品识别方法.md` | `wiki_en/Diet/Supplements/~ How to Evaluate Supplements.md` |
| 018 | `wiki_zh/医/~ 益生菌.md` | `wiki_en/Medical/~ Probiotics.md` |
| 019 | `wiki_zh/医/∝ 抗生素.md` | `wiki_en/Medical/~ Antibiotics.md` |
| 020 | `wiki_zh/医/~ 幽门螺杆菌感染.md` | `wiki_en/Medical/~ Helicobacter pylori Infection.md` |

### 批次 05：高风险医疗决策 I

| 项号 | 中文条目 | English entry |
|---|---|---|
| 021 | `wiki_zh/医/+100~300% 吸烟.md` | `wiki_en/Medical/+100~300% Smoking.md` |
| 022 | `wiki_zh/医/+50~100% 高血压.md` | `wiki_en/Medical/+50~100% Hypertension.md` |
| 023 | `wiki_zh/医/+30% 高血糖.md` | `wiki_en/Medical/+30% Hyperglycemia.md` |
| 024 | `wiki_zh/医/+30~50% 高胆固醇.md` | `wiki_en/Medical/+30~50% High Cholesterol.md` |
| 025 | `wiki_zh/医/-20~30% 癌症筛查.md` | `wiki_en/Medical/-20~30% Cancer Screening.md` |

### 批次 06：高风险医疗决策 II

| 项号 | 中文条目 | English entry |
|---|---|---|
| 026 | `wiki_zh/医/-30~50% 免疫接种.md` | `wiki_en/Medical/-30~50% Vaccination.md` |
| 027 | `wiki_zh/医/+30% 新冠与传染病.md` | `wiki_en/Medical/+30% COVID-19 & Infectious Diseases.md` |
| 028 | `wiki_zh/形/+1% 骨质疏松.md` | `wiki_en/Body/+1% Osteoporosis.md` |
| 029 | `wiki_zh/形/+20~30% 肌肉流失.md` | `wiki_en/Body/+20~30% Muscle Loss.md` |
| 030 | `wiki_zh/形/+20~30% 肥胖.md` | `wiki_en/Body/+20~30% Obesity.md` |

### 批次 07：睡眠与精神健康风险

| 项号 | 中文条目 | English entry |
|---|---|---|
| 031 | `wiki_zh/睡/+30~100% 睡眠呼吸暂停.md` | `wiki_en/Sleep/+30~100% Sleep Apnea.md` |
| 032 | `wiki_zh/睡/+12~24% 睡眠不足.md` | `wiki_en/Sleep/+12~24% Insufficient Sleep.md` |
| 033 | `wiki_zh/心/情绪/+50% 抑郁.md` | `wiki_en/Mind/Emotions/+50% Depression.md` |
| 034 | `wiki_zh/心/情绪/+102% 双相障碍.md` | `wiki_en/Mind/Emotions/+102% Bipolar Disorder.md` |
| 035 | `wiki_zh/心/情绪/+69% 健康焦虑.md` | `wiki_en/Mind/Emotions/+69% Health Anxiety.md` |

### 批次 08：心理与社会连接

| 项号 | 中文条目 | English entry |
|---|---|---|
| 036 | `wiki_zh/心/社会连接/+32% 社交孤立.md` | `wiki_en/Mind/Social Connection/+32% Social Isolation.md` |
| 037 | `wiki_zh/心/社会连接/-15~20% 目的感.md` | `wiki_en/Mind/Social Connection/-15~20% Sense of Purpose.md` |
| 038 | `wiki_zh/心/情绪/-20% 压力管理.md` | `wiki_en/Mind/Emotions/-20% Stress Management.md` |
| 039 | `wiki_zh/心/情绪/~ 正念冥想.md` | `wiki_en/Mind/Emotions/~ Mindfulness Meditation.md` |
| 040 | `wiki_zh/心/情绪/? 多巴胺管理.md` | `wiki_en/Mind/Emotions/~ Dopamine Management.md` |

### 批次 09：环境暴露

| 项号 | 中文条目 | English entry |
|---|---|---|
| 041 | `wiki_zh/境/+10~20% 空气污染.md` | `wiki_en/Environment/+10~20% Air Pollution.md` |
| 042 | `wiki_zh/境/+10% 噪音污染.md` | `wiki_en/Environment/+10% Noise Pollution.md` |
| 043 | `wiki_zh/境/≈ 微塑料.md` | `wiki_en/Environment/~ Microplastics.md` |
| 044 | `wiki_zh/境/∝ 晒太阳.md` | `wiki_en/Environment/~ Sun Exposure.md` |
| 045 | `wiki_zh/境/温度疗法/? 冷水澡.md` | `wiki_en/Environment/Temperature Therapy/~ Cold Showers.md` |

### 批次 10：温度、居住与睡眠环境

| 项号 | 中文条目 | English entry |
|---|---|---|
| 046 | `wiki_zh/境/温度疗法/-40% 干桑拿.md` | `wiki_en/Environment/Temperature Therapy/-40% Dry Sauna.md` |
| 047 | `wiki_zh/境/温度疗法/≈ 体温调节.md` | `wiki_en/Environment/Temperature Therapy/~ Thermoregulation.md` |
| 048 | `wiki_zh/住/-14~20% 高温防护.md` | `wiki_en/Housing/-14~20% Heat Protection.md` |
| 049 | `wiki_zh/睡/~ 睡眠环境.md` | `wiki_en/Sleep/~ Sleep Environment.md` |
| 050 | `wiki_zh/睡/~ 蓝光.md` | `wiki_en/Sleep/~ Blue Light.md` |

### 批次 11：饮品

| 项号 | 中文条目 | English entry |
|---|---|---|
| 051 | `wiki_zh/吃/饮品/+50% 过量饮酒.md` | `wiki_en/Diet/Beverages/+50% Excessive Alcohol.md` |
| 052 | `wiki_zh/吃/饮品/+10~20% 含糖饮料.md` | `wiki_en/Diet/Beverages/+10~20% Sugary Drinks.md` |
| 053 | `wiki_zh/吃/饮品/+24% 果汁.md` | `wiki_en/Diet/Beverages/+24% Fruit Juice.md` |
| 054 | `wiki_zh/吃/饮品/-10% 咖啡.md` | `wiki_en/Diet/Beverages/-10% Coffee.md` |
| 055 | `wiki_zh/吃/饮品/-17% 牛奶.md` | `wiki_en/Diet/Beverages/-17% Milk.md` |

### 批次 12：高风险饮食模式

| 项号 | 中文条目 | English entry |
|---|---|---|
| 056 | `wiki_zh/吃/饮食模式/+12% 红肉过量.md` | `wiki_en/Diet/Dietary Patterns/+12% Excessive Red Meat.md` |
| 057 | `wiki_zh/吃/饮食模式/+18% 加工肉类.md` | `wiki_en/Diet/Dietary Patterns/+18% Processed Meat.md` |
| 058 | `wiki_zh/吃/饮食模式/+15~21% 超加工食品.md` | `wiki_en/Diet/Dietary Patterns/+15~21% Ultra-Processed Foods.md` |
| 059 | `wiki_zh/吃/饮食模式/+20% 油炸食品.md` | `wiki_en/Diet/Dietary Patterns/+20% Fried Foods.md` |
| 060 | `wiki_zh/吃/+20% 高盐.md` | `wiki_en/Diet/+20% High Salt.md` |

### 批次 13：食物与膳食构成

| 项号 | 中文条目 | English entry |
|---|---|---|
| 061 | `wiki_zh/吃/饮食模式/+15~30% 膳食纤维不足.md` | `wiki_en/Diet/Dietary Patterns/+15~30% Insufficient Dietary Fiber.md` |
| 062 | `wiki_zh/吃/饮食模式/-26~17% 蔬果摄入.md` | `wiki_en/Diet/Dietary Patterns/-26~17% Fruit & Vegetable Intake.md` |
| 063 | `wiki_zh/吃/饮食模式/-8~11% 白肉.md` | `wiki_en/Diet/Dietary Patterns/-8~11% White Meat.md` |
| 064 | `wiki_zh/吃/-23% 坚果.md` | `wiki_en/Diet/-23% Nuts.md` |
| 065 | `wiki_zh/吃/-13~23% 辣椒.md` | `wiki_en/Diet/-13~23% Chili Peppers.md` |

### 批次 14：争议性饮食主题

| 项号 | 中文条目 | English entry |
|---|---|---|
| 066 | `wiki_zh/吃/+21% 槟榔.md` | `wiki_en/Diet/+21% Betel Nut.md` |
| 067 | `wiki_zh/吃/? 代糖.md` | `wiki_en/Diet/~ Artificial Sweeteners.md` |
| 068 | `wiki_zh/吃/≈ 鸡蛋.md` | `wiki_en/Diet/~ Eggs.md` |
| 069 | `wiki_zh/吃/饮食模式/≈ 热量限制.md` | `wiki_en/Diet/Dietary Patterns/~ Caloric Restriction.md` |
| 070 | `wiki_zh/吃/饮食模式/≈ 碳水化合物.md` | `wiki_en/Diet/Dietary Patterns/~ Carbohydrates.md` |

### 批次 15：营养结构、食品与菌群

| 项号 | 中文条目 | English entry |
|---|---|---|
| 071 | `wiki_zh/吃/饮食模式/≈ 蛋白质摄入.md` | `wiki_en/Diet/Dietary Patterns/~ Protein Intake.md` |
| 072 | `wiki_zh/吃/饮食模式/≈ 饮食脂肪质量.md` | `wiki_en/Diet/Dietary Patterns/~ Dietary Fat Quality.md` |
| 073 | `wiki_zh/吃/≈ 肠道菌群.md` | `wiki_en/Diet/~ Gut Microbiota.md` |
| 074 | `wiki_zh/吃/饮品/≈ 生可可粉.md` | `wiki_en/Diet/Beverages/~ Raw Cocoa Powder.md` |
| 075 | `wiki_zh/吃/食品安全/~ 食品添加剂.md` | `wiki_en/Diet/Food Safety/~ Food Additives.md` |

### 批次 16：运动方式与风险数字

| 项号 | 中文条目 | English entry |
|---|---|---|
| 076 | `wiki_zh/动/-15% 力量训练.md` | `wiki_en/Exercise/-15% Strength Training.md` |
| 077 | `wiki_zh/动/有氧/-19% 运动多样性.md` | `wiki_en/Exercise/-19% Exercise Variety.md` |
| 078 | `wiki_zh/动/有氧/-20~30% HIIT与有氧.md` | `wiki_en/Exercise/Cardio/-20~30% HIIT vs Aerobic.md` |
| 079 | `wiki_zh/动/有氧/-47% 挥拍运动.md` | `wiki_en/Exercise/Cardio/-47% Racket Sports.md` |
| 080 | `wiki_zh/动/日常/-17% 步行.md` | `wiki_en/Exercise/Daily/-17% Walking.md` |

### 批次 17：日常活动与体能指标

| 项号 | 中文条目 | English entry |
|---|---|---|
| 081 | `wiki_zh/动/日常/+20~30% 缺乏运动.md` | `wiki_en/Exercise/Daily/+20~30% Physical Inactivity.md` |
| 082 | `wiki_zh/动/日常/+20~30% 久坐.md` | `wiki_en/Exercise/Daily/+20~30% Sedentary Behavior.md` |
| 083 | `wiki_zh/动/有氧/~ 游泳.md` | `wiki_en/Exercise/Cardio/~ Swimming.md` |
| 084 | `wiki_zh/动/有氧/∝ VO2 max.md` | `wiki_en/Exercise/Cardio/~ VO2 Max.md` |
| 085 | `wiki_zh/动/日常/~ 做家务.md` | `wiki_en/Exercise/Daily/~ Housework.md` |

### 批次 18：功能训练与骨关节

| 项号 | 中文条目 | English entry |
|---|---|---|
| 086 | `wiki_zh/动/日常/~ 平衡与稳定性训练.md` | `wiki_en/Exercise/Daily/~ Balance and Stability Training.md` |
| 087 | `wiki_zh/动/日常/~ 拉伸.md` | `wiki_en/Exercise/Daily/~ Stretching.md` |
| 088 | `wiki_zh/动/日常/~ 站立办公.md` | `wiki_en/Exercise/Daily/~ Standing Desk.md` |
| 089 | `wiki_zh/动/日常/~ 呼吸训练.md` | `wiki_en/Exercise/Daily/~ Breathing Exercises.md` |
| 090 | `wiki_zh/形/~ 骨关节炎.md` | `wiki_en/Body/~ Osteoarthritis.md` |

### 批次 19：感官、衰老与认知

| 项号 | 中文条目 | English entry |
|---|---|---|
| 091 | `wiki_zh/形/~ 视力保护.md` | `wiki_en/Body/~ Vision Protection.md` |
| 092 | `wiki_zh/形/+20~40% 听力保护.md` | `wiki_en/Body/+20~40% Hearing Protection.md` |
| 093 | `wiki_zh/形/~ 衰老轨迹.md` | `wiki_en/Body/~ Aging Trajectories.md` |
| 094 | `wiki_zh/心/~ 音乐与痴呆.md` | `wiki_en/Mind/~ Music and Dementia.md` |
| 095 | `wiki_zh/睡/≈ 午睡.md` | `wiki_en/Sleep/~ Napping.md` |

### 批次 20：公共安全与社会环境

| 项号 | 中文条目 | English entry |
|---|---|---|
| 096 | `wiki_zh/住/~ 家庭应急准备.md` | `wiki_en/Housing/~ Home Emergency Preparedness.md` |
| 097 | `wiki_zh/吃/食品安全/~ 孕期饮食安全.md` | `wiki_en/Diet/Food Safety/~ Pregnancy Food Safety.md` |
| 098 | `wiki_zh/行/~ 驾驶疲劳.md` | `wiki_en/Travel/~ Drowsy Driving.md` |
| 099 | `wiki_zh/财/~ 医疗保险配置.md` | `wiki_en/Wealth/~ Medical Insurance.md` |
| 100 | `wiki_zh/财/~ 社会经济地位.md` | `wiki_en/Wealth/~ Socioeconomic Status.md` |

## 五、主 agent 的批次门禁

主 agent 每批只做以下工作：

1. 确认五个独立子 agent 均提交 `AUDIT.md`、`PMID_VERIFICATION.md` 和 `HANDOFF.md`。
2. 读取交接摘要和流程记录，不重新加载五篇文章的完整研究上下文。
3. 对指定文件范围运行机械检查：
   - 文件存在性和中英文配对；
   - Markdown 链接格式；
   - PMID 是否全部进入本项验证日志；
   - 中文与英文中的数字、PMID 集合、证据星级是否一致；
   - 是否存在 `待核实`、无链接引用或失效旧路径；
   - 子 agent 是否越界修改共享文件或其他条目。
4. 将五份独立 PMID 日志机械合并到批次总日志，更新 `PROGRESS.md`。
5. 根据改名清单统一重建 `INDEX.md`，不手工改写科学结论。
6. 形成批次报告，统计 `PASS`、`FIXED`、`HOLD`、改名前缀、星级变化、引用增删。
7. 门禁失败的条目不进入完成计数，另起全新子 agent 修复。

## 六、全库完成标准

- 100 项均有独立子 agent 身份和独立交接目录；
- 100 对中英文条目全部完成语义与数字同步；
- 每项至少有 2–3 次检索记录；
- 正文涉及的每个 PMID 均有实际页面核验记录；
- 所有关键数字可回溯到原始来源；
- 数字前缀只表达被证据直接支持的全因死亡或寿命终点；
- 观察性研究不表述为因果，替代终点不表述为延寿；
- `HOLD` 条目不以确定结论进入公开索引；
- INDEX 与最终路径完全一致；
- 无跨条目越界修改、无共享日志并发覆盖；
- 完成 20 份批次报告及一份全库总结报告。

## 七、执行起点

1. 先冻结并记录当前工作区状态，保留此前中断产物。
2. 建立 `PROGRESS.md` 和 100 个独立任务槽位。
3. 启动批次 01 第一波：001 褪黑素、002 亚精胺、003 二甲双胍。
4. 第一波通过文件所有权检查后，启动第二波：004 CVD 泡澡、005 水质。
5. 批次 01 完成门禁和报告后，才进入批次 02。
