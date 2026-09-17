STATUS=FIXED

# 053 果汁 - 交接

## 路径

- 中文旧路径：`wiki_zh/吃/饮品/+24% 果汁.md`
- 中文新路径：`wiki_zh/吃/饮品/~ 果汁.md`
- 英文旧路径：`wiki_en/Diet/Beverages/+24% Fruit Juice.md`
- 英文新路径：`wiki_en/Diet/Beverages/~ Fruit Juice.md`

## 摘要

- 去除无法代表总体证据的 `+24%` 前缀；改为 `~`。
- 精确限定 REGARDS 的 +24%：每增加 12 oz（约 355 mL）/日、美国黑人/白人中老年队列、观察性 HR。
- 纠正旧文对同研究 SSB 的错读：SSB 独立 HR 1.06（0.96–1.16）；HR 1.11 是 SSB+果汁合并暴露。
- 补入 NHANES 高摄入与整果替代模型、死亡率 Meta 分析的不确定结果、癌症发病与心血管/糖尿病等替代结局边界。
- 明确区分 100% 果汁、果汁饮料、整果和 SSB；删除未被引用证据支持的“糖水”、“不要空腹”、“蔬菜汁更好”等绝对化建议。
- 补充因果限制、绝对风险不可得、适用人群、发表偏倚、时效性和产业资助披露。

## 最终双语 PMID

- 中文：`31099861, 31292122, 33150530, 34121531, 35631268, 37006931, 38679915`
- 英文：`31099861, 31292122, 33150530, 34121531, 35631268, 37006931, 38679915`
- 集合核对：一致。

## 检索/PubMed 流程

1. 以 100% fruit juice + all-cause mortality/prospective cohort/meta-analysis/dose response 执行核心检索。
2. 分开检索 mortality、CVD/stroke、type 2 diabetes、cancer incidence 和 whole-fruit substitution，防止结局混用。
3. 补充 2024–2025 systematic/umbrella review 以检查时效性。
4. 对每个保留 PMID 逐一打开 PubMed 原始页，再用 PubMed XML 和 PMC/Europe PMC 全文核对数字、人群、限制、资助与冲突。
5. 原始 PubMed URL 已全部记录在 `PMID_VERIFICATION.md`。

## 未决事项

- 无阻塞项。
- 仍存在科学不确定性：100% 果汁长期全因死亡研究数少、暴露定义不一，且无随机死亡试验。这是条目已明确披露的证据边界，不是交付阻塞。

## 完成前校验

- 审计目录文件数：3（`AUDIT.md`、`PMID_VERIFICATION.md`、`HANDOFF.md`）。
- 中英文 PMID 集合：一致。
- 行尾空格：已显式扫描。
- `git diff --check`：已执行。
