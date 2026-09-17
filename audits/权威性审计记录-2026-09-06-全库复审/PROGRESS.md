# 全库复审进度

**启动日期**：2026-09-07
**总范围**：100 个中英文条目对
**执行计划**：[BATCH_PLAN.md](BATCH_PLAN.md)

## 总进度

| 批次 | 范围 | 状态 | 完成 | PASS | FIXED | HOLD | 批次报告 |
|---|---:|---|---:|---:|---:|---:|---|
| 01 | 001–005 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-01.md](BATCH-01.md) |
| 02 | 006–010 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-02.md](BATCH-02.md) |
| 03 | 011–015 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-03.md](BATCH-03.md) |
| 04 | 016–020 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-04.md](BATCH-04.md) |
| 05 | 021–025 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-05.md](BATCH-05.md) |
| 06 | 026–030 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-06.md](BATCH-06.md) |
| 07 | 031–035 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-07.md](BATCH-07.md) |
| 08 | 036–040 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-08.md](BATCH-08.md) |
| 09 | 041–045 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-09.md](BATCH-09.md) |
| 10 | 046–050 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-10.md](BATCH-10.md) |
| 11 | 051–055 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-11.md](BATCH-11.md) |
| 12 | 056–060 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-12.md](BATCH-12.md) |
| 13 | 061–065 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-13.md](BATCH-13.md) |
| 14 | 066–070 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-14.md](BATCH-14.md) |
| 15 | 071–075 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-15.md](BATCH-15.md) |
| 16 | 076–080 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-16.md](BATCH-16.md) |
| 17 | 081–085 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-17.md](BATCH-17.md) |
| 18 | 086–090 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-18.md](BATCH-18.md) |
| 19 | 091–095 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-19.md](BATCH-19.md) |
| 20 | 096–100 | 已完成 | 5/5 | 0 | 5 | 0 | [BATCH-20.md](BATCH-20.md) |

## 批次 01

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 001 | 褪黑素 | `audit_001_melatonin` | 1 | FIXED | `entries/001-褪黑素/` | 机械门禁通过 |
| 002 | 亚精胺 | `audit_002_spermidine` | 1 | FIXED | `entries/002-亚精胺/` | 机械门禁通过 |
| 003 | 二甲双胍 | `audit_003_metformin` + `fix_003_metformin_second_pass` | 1 | FIXED | `entries/003-二甲双胍/` + 二次整改记录 | 二次抽查整改门禁通过；撤销数字前缀 |
| 004 | CVD 泡澡 | `audit_004_cvd_bathing` | 2 | FIXED | `entries/004-CVD泡澡/` | 机械门禁通过 |
| 005 | 水质 | `audit_005_water_quality` | 2 | FIXED | `entries/005-水质/` | 机械门禁通过 |

## 执行约束

- 每项使用全新、空白上下文子 agent，禁止跨条目复用。
- 子 agent 只修改所属中英文条目对及独立交接目录。
- 主 agent 只做结构化交接检查和机械门禁。
- 当前不执行提交或推送。

## 批次 02

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 006 | 口腔健康 | `audit_006_oral_health` | 1 | FIXED | `entries/006-口腔健康/` | 机械门禁通过 |
| 007 | 刷牙 | `audit_007_tooth_brushing` | 1 | FIXED | `entries/007-刷牙/` | 机械门禁通过 |
| 008 | 信仰归属 | `audit_008_religious_affiliation` | 1 | FIXED | `entries/008-信仰归属/` | 机械门禁通过 |
| 009 | 茶 | `audit_009_tea_retry` | 2 | FIXED | `entries/009-茶/` | 原 agent 用量中断；全新 agent 重做后机械门禁通过 |
| 010 | 维生素D | `audit_010_vitamin_d_retry` | 2 | FIXED | `entries/010-维生素D/` | 原 agent 用量中断；全新 agent 重做后机械门禁通过 |

## 批次 03

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 011 | 雷帕霉素 | `audit_011_rapamycin` | 1 | FIXED | `entries/011-雷帕霉素/` | 机械门禁通过 |
| 012 | NMN与NAD+ | `audit_012_nmn_nad` | 1 | FIXED | `entries/012-NMN与NAD/` | 机械门禁通过 |
| 013 | 复合维生素 | `audit_013_multivitamins` | 1 | FIXED | `entries/013-复合维生素/` | 机械门禁通过 |
| 014 | 葡萄糖胺 | `audit_014_glucosamine_retry` + `repair_014_status` | 2 | FIXED | `entries/014-葡萄糖胺/` | 科学与机械门禁通过；状态标签修复 |
| 015 | 鱼油 | `audit_015_fish_oil_retry` + `repair_015_status` | 2 | FIXED | `entries/015-鱼油/` | 科学与机械门禁通过；状态标签修复 |

## 批次 04

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 016 | 胶原蛋白 | `audit_016_collagen` | 1 | FIXED | `entries/016-胶原蛋白/` | 机械门禁通过 |
| 017 | 保健品识别方法 | `audit_017_supplement_evaluation` | 1 | FIXED | `entries/017-保健品识别方法/` | 机械门禁通过；最终正文无 PMID |
| 018 | 益生菌 | `audit_018_probiotics` | 1 | FIXED | `entries/018-益生菌/` | 机械门禁通过 |
| 019 | 抗生素 | `audit_019_antibiotics_retry2` + 路径修复 agent | 2 | FIXED | `entries/019-抗生素/` | 科学与机械门禁通过；误放目录已纠正 |
| 020 | 幽门螺杆菌感染 | `audit_020_h_pylori_retry2` + 路径修复 agent | 2 | FIXED | `entries/020-幽门螺杆菌感染/` | 科学与机械门禁通过；误放目录已纠正 |

## 批次 05

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 021 | 吸烟 | `audit_021_smoking` | 1 | FIXED | `entries/021-吸烟/` | 机械门禁通过 |
| 022 | 高血压 | `audit_022_hypertension` + `repair_022_prefix` | 1 | FIXED | `entries/022-高血压/` | 科学门禁通过；补齐 `~` 前缀 |
| 023 | 高血糖 | `audit_023_hyperglycemia` + `repair_023_prefix` | 1 | FIXED | `entries/023-高血糖/` | 科学门禁通过；补齐 `~` 前缀 |
| 024 | 高胆固醇 | `audit_024_high_cholesterol` | 2 | FIXED | `entries/024-高胆固醇/` | 机械门禁通过；主线程一度误读 PMID 输出，复扫确认一致 |
| 025 | 癌症筛查 | `audit_025_cancer_screening` | 2 | FIXED | `entries/025-癌症筛查/` | 机械门禁通过；正文 6 PMID，另 1 条旧随访仅存日志 |

## 批次 06

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 026 | 免疫接种 | `audit_026_vaccination_retry` + 交接命名修复 agent | 1 | FIXED | `entries/026-免疫接种/` | 科学与机械门禁通过 |
| 027 | 新冠与传染病 | `audit_027_covid_infectious_retry` + 交接命名修复 agent | 1 | FIXED | `entries/027-新冠与传染病/` | 科学与机械门禁通过 |
| 028 | 骨质疏松 | `audit_028_osteoporosis_retry` + 交接命名修复 agent | 1 | FIXED | `entries/028-骨质疏松/` | 科学与机械门禁通过 |
| 029 | 肌肉流失 | `audit_029_muscle_loss` | 2 | FIXED | `entries/029-肌肉流失/` | 机械门禁通过 |
| 030 | 肥胖 | `audit_030_obesity` | 2 | FIXED | `entries/030-肥胖/` | 机械门禁通过 |

## 批次 07

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 031 | 睡眠呼吸暂停 | `audit_031_sleep_apnea_retry` | 1 | FIXED | `entries/031-睡眠呼吸暂停/` | 首实例用量中断无产物；全新 agent 重做后机械门禁通过 |
| 032 | 睡眠不足 | `audit_032_insufficient_sleep_retry` | 1 | FIXED | `entries/032-睡眠不足/` | 首实例用量中断无产物；全新 agent 重做后机械门禁通过 |
| 033 | 抑郁 | `audit_033_depression_retry` | 1 | FIXED | `entries/033-抑郁/` | 首实例用量中断无产物；全新 agent 重做后机械门禁通过 |
| 034 | 双相障碍 | `audit_034_bipolar` | 2 | FIXED | `entries/034-双相障碍/` | 机械门禁通过；数字前缀有直接全因死亡证据，保留 |
| 035 | 疑病症（病理性健康焦虑） | `audit_035_health_anxiety` | 2 | FIXED | `entries/035-健康焦虑/` | 机械门禁通过；标题收窄，数字前缀保留 |

## 批次 08

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 036 | 社交孤立 | `audit_036_social_isolation` | 1 | FIXED | `entries/036-社交孤立/` | 机械门禁通过；数字前缀保留 |
| 037 | 目的感 | `audit_037_sense_of_purpose` | 1 | FIXED | `entries/037-目的感/` | 机械门禁通过；数字前缀保留 |
| 038 | 压力管理 | `audit_038_stress_management` | 1 | FIXED | `entries/038-压力管理/` | 机械门禁通过；撤销数字前缀 |
| 039 | 正念冥想 | `audit_039_mindfulness_retry` | 2 | FIXED | `entries/039-正念冥想/` | 首实例用量中断无产物；重做后机械门禁通过 |
| 040 | 多巴胺管理 | `audit_040_dopamine_management_retry` + 2 个空白修复 agent | 2 | FIXED | `entries/040-多巴胺管理/` | 首实例用量中断无产物；重做后显式尾空格门禁通过 |

## 批次 09

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 041 | 空气污染 | `audit_041_air_pollution` | 1 | FIXED | `entries/041-空气污染/` | 机械门禁通过；撤销数字前缀 |
| 042 | 噪音污染 | `audit_042_noise_pollution` | 1 | FIXED | `entries/042-噪音污染/` | 机械门禁通过；撤销数字前缀 |
| 043 | 微塑料 | `audit_043_microplastics` | 1 | FIXED | `entries/043-微塑料/` | 机械门禁通过；历史符号迁移 |
| 044 | 晒太阳 | `audit_044_sun_exposure` | 2 | FIXED | `entries/044-晒太阳/` | 机械门禁通过；历史符号迁移 |
| 045 | 冷水澡 | `audit_045_cold_showers` | 2 | FIXED | `entries/045-冷水澡/` | 机械门禁通过；历史符号迁移 |

## 批次 10

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 046 | 芬兰式干桑拿 | `audit_046_dry_sauna_retry` | 1 | FIXED | `entries/046-干桑拿/` | 首实例用量中断留草稿；全新 agent 重做后机械门禁通过 |
| 047 | 体温调节 | `audit_047_thermoregulation_retry` | 1 | FIXED | `entries/047-体温调节/` | 首实例用量中断无产物；全新 agent 重做后机械门禁通过 |
| 048 | 高温防护 | `audit_048_heat_protection` | 1 | FIXED | `entries/048-高温防护/` | agent 用量中断但完整三件套已落盘；机械门禁通过 |
| 049 | 睡眠环境 | `audit_049_sleep_environment` | 2 | FIXED | `entries/049-睡眠环境/` | 机械门禁通过 |
| 050 | 蓝光 | `audit_050_blue_light` | 2 | FIXED | `entries/050-蓝光/` | agent 用量中断但完整三件套已落盘；机械门禁通过 |

## 批次 11

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 051 | 过量饮酒 | `audit_051_excessive_alcohol` | 1 | FIXED | `entries/051-过量饮酒/` | 机械门禁通过；撤销数字前缀 |
| 052 | 含糖饮料 | `audit_052_sugary_drinks` | 1 | FIXED | `entries/052-含糖饮料/` | 机械门禁通过；数字前缀保留并收紧限定 |
| 053 | 果汁 | `audit_053_fruit_juice` | 1 | FIXED | `entries/053-果汁/` | 机械门禁通过；撤销数字前缀 |
| 054 | 咖啡 | `audit_054_coffee_retry` | 2 | FIXED | `entries/054-咖啡/` | 首实例消失且无产物；全新 agent 重做后机械门禁通过 |
| 055 | 牛奶 | `audit_055_milk_retry` | 2 | FIXED | `entries/055-牛奶/` | 首实例仅改正文/路径；全新 agent 独立重做后机械门禁通过 |

## 批次 12

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 056 | 红肉过量 | `audit_056_red_meat` + 路径/状态修复 agent | 1 | FIXED | `entries/056-红肉过量/` | 科学门禁通过；误放目录和 PASS 标签已纠正 |
| 057 | 加工肉类 | `audit_057_processed_meat` + 路径/状态修复 agent | 1 | FIXED | `entries/057-加工肉类/` | 科学门禁通过；误放目录和 COMPLETE 标签已纠正 |
| 058 | 超加工食品 | `audit_058_upf` + 路径/状态修复 agent | 1 | FIXED | `entries/058-超加工食品/` | 科学门禁通过；误放目录和 COMPLETE 标签已纠正 |
| 059 | 油炸食品 | `audit_059_fried_foods` | 2 | FIXED | `entries/059-油炸食品/` | 机械门禁通过；撤销数字前缀 |
| 060 | 高盐 | `audit_060_high_salt` | 2 | FIXED | `entries/060-高盐/` | 机械门禁通过；撤销数字前缀 |

## 批次 13

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 061 | 膳食纤维不足 | `audit_061_low_fiber` | 1 | FIXED | `entries/061-膳食纤维不足/` | 机械门禁通过；撤销数字前缀 |
| 062 | 蔬果摄入 | `audit_062_fruit_vegetable` | 1 | FIXED | `entries/062-蔬果摄入/` | 机械门禁通过；修正数字前缀 |
| 063 | 白肉 | `audit_063_white_meat` | 1 | FIXED | `entries/063-白肉/` | 机械门禁通过；撤销数字前缀 |
| 064 | 坚果 | `audit_064_nuts` | 2 | FIXED | `entries/064-坚果/` | 机械门禁通过；撤销数字前缀 |
| 065 | 辣椒 | `audit_065_chili` | 2 | FIXED | `entries/065-辣椒/` | 机械门禁通过；撤销数字前缀 |

## 批次 14

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 066 | 槟榔 | `audit_066_betel_nut` | 1 | FIXED | `entries/066-槟榔/` | 机械门禁通过；撤销数字前缀 |
| 067 | 代糖 | `audit_067_sweeteners` | 1 | FIXED | `entries/067-代糖/` | 机械门禁通过；统一不确定性符号并重写证据边界 |
| 068 | 鸡蛋 | `audit_068_eggs` | 1 | FIXED | `entries/068-鸡蛋/` | 机械门禁通过；统一不确定性符号并下调证据强度 |
| 069 | 热量限制 | `audit_069_caloric_restriction` | 2 | FIXED | `entries/069-热量限制/` | 机械门禁通过；明确无人类延寿终点证据 |
| 070 | 碳水化合物 | `audit_070_carbohydrates` | 2 | FIXED | `entries/070-碳水化合物/` | 机械门禁通过；统一不确定性符号并撤销通用比例处方 |

## 批次 15

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 071 | 蛋白质摄入 | `audit_071_protein_intake` | 1 | FIXED | `entries/071-蛋白质摄入/` | 机械门禁通过；统一符号并规范英文目录大小写 |
| 072 | 饮食脂肪质量 | `audit_072_fat_quality` | 1 | FIXED | `entries/072-饮食脂肪质量/` | 机械门禁通过；分开脂肪类型、替代营养素与终点 |
| 073 | 肠道菌群 | `audit_073_gut_microbiota` | 1 | FIXED | `entries/073-肠道菌群/` | 机械门禁通过；撤销人类延寿因果外推 |
| 074 | 生可可粉 | `audit_074_raw_cocoa` | 2 | FIXED | `entries/074-生可可粉/` | 机械门禁通过；删除错误死亡归因并区分可可暴露 |
| 075 | 食品添加剂 | `audit_075_food_additives` | 2 | FIXED | `entries/075-食品添加剂/` | 机械门禁通过；拆分具体添加剂并限制类别外推 |

## 批次 16

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 076 | 力量训练 | `audit_076_strength_training` | 1 | FIXED | `entries/076-力量训练/` | 机械门禁通过；保留可追溯数字并重写证据边界 |
| 077 | 运动多样性 | `audit_077_exercise_variety` | 1 | FIXED | `entries/077-运动多样性/` | 机械门禁通过；撤销单队列极端分组数字前缀 |
| 078 | HIIT与有氧 | `audit_078_hiit_aerobic` | 1 | FIXED | `entries/078-HIIT与有氧/` | 机械门禁通过；撤销借用一般活动证据的数字前缀 |
| 079 | 挥拍运动 | `audit_079_racket_sports` | 2 | FIXED | `entries/079-挥拍运动/` | 机械门禁通过；撤销未获复制的单队列数字前缀 |
| 080 | 步行 | `audit_080_walking` | 2 | FIXED | `entries/080-步行/` | 机械门禁通过；保留限定暴露对比的数字前缀 |

## 批次 17

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 081 | 缺乏运动 | `audit_081_physical_inactivity` | 1 | FIXED | `entries/081-缺乏运动/` | 机械门禁通过；撤销定义混杂的概括数字 |
| 082 | 久坐 | `audit_082_sedentary_behavior` | 1 | FIXED | `entries/082-久坐/` | 机械门禁通过；撤销异质暴露合并数字 |
| 083 | 游泳 | `audit_083_swimming` | 1 | FIXED | `entries/083-游泳/` | 机械门禁通过；保留符号并重写硬终点与安全边界 |
| 084 | VO2 max | `audit_084_vo2max` | 2 | FIXED | `entries/084-VO2-max/` | 机械门禁通过；迁移历史符号并区分测量方法 |
| 085 | 做家务 | `audit_085_housework` | 2 | FIXED | `entries/085-做家务/` | 机械门禁通过；保留符号并下调证据等级 |

## 批次 18

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 086 | 平衡与稳定性训练 | `audit_086_balance_training` | 1 | FIXED | `entries/086-平衡与稳定性训练/` | 机械门禁通过；拆分跌倒、骨折、功能与死亡终点 |
| 087 | 拉伸 | `audit_087_stretching` | 1 | FIXED | `entries/087-拉伸/` | 机械门禁通过；保留符号并拆分拉伸类型与终点 |
| 088 | 站立办公 | `audit_088_standing_desk` | 1 | FIXED | `entries/088-站立办公/` | 机械门禁通过；保留符号并限制短期替代终点 |
| 089 | 呼吸训练 | `audit_089_breathing` | 2 | FIXED | `entries/089-呼吸训练/` | 机械门禁通过；拆分训练类型并下调证据等级 |
| 090 | 骨关节炎 | `audit_090_osteoarthritis` | 2 | FIXED | `entries/090-骨关节炎/` | 机械门禁通过；重构部位、治疗与结局边界 |

## 批次 19

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 091 | 视力保护 | `audit_091_vision` | 1 | FIXED | `entries/091-视力保护/` | 机械门禁通过；按眼病类型重构筛查与干预边界 |
| 092 | 听力保护 | `audit_092_hearing` | 1 | FIXED | `entries/092-听力保护/` | 机械门禁通过；撤销数字并排除撤稿研究 |
| 093 | 衰老轨迹 | `audit_093_aging_trajectories` | 1 | FIXED | `entries/093-衰老轨迹/` | 机械门禁通过；区分探索性波次与纵向轨迹 |
| 094 | 音乐与痴呆 | `audit_094_music_dementia` | 2 | FIXED | `entries/094-音乐与痴呆/` | 机械门禁通过；区分预防关联与症状干预 |
| 095 | 午睡 | `audit_095_napping` | 2 | FIXED | `entries/095-午睡/` | 机械门禁通过；迁移历史符号并撤销统一最佳时长 |

## 批次 20

| 项号 | 条目 | 子 agent | 波次 | 状态 | 交接目录 | 门禁 |
|---|---|---|---|---|---|---|
| 096 | 家庭应急准备 | `audit_096_emergency` | 1 | FIXED | `entries/096-家庭应急准备/` | 机械门禁通过；区分准备行为、模拟与伤亡结局 |
| 097 | 孕期饮食安全 | `audit_097_pregnancy_food_safety` | 1 | FIXED | `entries/097-孕期饮食安全/` | 机械门禁通过；重构感染、汞、酒精和咖啡因边界 |
| 098 | 驾驶疲劳 | `audit_098_drowsy_driving` | 1 | FIXED | `entries/098-驾驶疲劳/` | 机械门禁通过；拆分模拟、事故、伤亡与临时措施 |
| 099 | 医疗保险配置 | `audit_099_medical_insurance` | 2 | FIXED | `entries/099-医疗保险配置/` | 机械门禁通过；拆分保险类型、医疗可及性与财务风险 |
| 100 | 社会经济地位 | `audit_100_socioeconomic_status` | 2 | FIXED | `entries/100-社会经济地位/` | 机械门禁通过；修正 HR 并拆分社会经济指标 |
