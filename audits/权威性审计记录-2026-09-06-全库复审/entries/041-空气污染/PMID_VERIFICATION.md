# 041 空气污染 - PMID 验证日志

## 验证方法

每个最终 PMID 均逐个打开 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始页，核对题名、作者、期刊、年份、DOI 和可见摘要/冲突信息；随后以 NCBI PubMed E-utilities `esummary` 对四条记录作一次合并交叉核对。正文数字还与可访问的 PMC 或期刊全文核对。

| PMID | PubMed 原始页 | 题名、作者、期刊、年份 | 正文用途与数字核对 | 利益冲突/资助核对 | 结果 |
|---|---|---|---|---|---|
| 39399882 | https://pubmed.ncbi.nlm.nih.gov/39399882/ | Orellano et al.; *International Journal of Public Health*; 2024；DOI 10.3389/ijph.2024.1607683 | 全文核对 106 项研究、52 项研究/53 个估计、RR 1.095（1.064–1.127）、I²=99.6%、80% PI 0.966–1.241、Egger P=0.45、暴露中位数及范围 | WHO 欧洲区域办事处和公共机构支持；一名作者隶属 WHO；作者声明无利益冲突 | ✅ |
| 40662655 | https://pubmed.ncbi.nlm.nih.gov/40662655/ | Oh et al.; *Journal of Korean Medical Science*; 2025；DOI 10.3346/jkms.2025.40.e156 | PubMed/PMC 核对 71 篇文章、19 项全因死亡研究、RR 1.11（1.05–1.17）、国家暴露均值范围、I² 与老年亚组 | Ewha-SCL 环境健康项目及韩国环境部支持；作者声明无潜在利益冲突 | ✅ |
| 23836630 | https://pubmed.ncbi.nlm.nih.gov/23836630/ | Chen et al.; *Proceedings of the National Academy of Sciences of the United States of America*; 2013；DOI 10.1073/pnas.1300018110 | PubMed/PMC 核对 TSP 184 μg/m³（61–307）、寿命差 5.5 年（0.8–10.2）及每 100 μg/m³ TSP 约 3.0 年（0.4–5.6） | PubMed 原始页：作者声明无利益冲突 | ✅ |
| 34265631 | https://pubmed.ncbi.nlm.nih.gov/34265631/ | Jiang et al.; *International Journal of Hygiene and Environmental Health*; 2021；DOI 10.1016/j.ijheh.2021.113806 | PubMed 摘要核对随机交叉设计、52 名健康大学生、2 小时步行和数小时替代终点；确认未检验临床事件、死亡或寿命 | PubMed 索引为非美国政府研究支持；页面未提供足以排除全部商业关系的完整冲突字段 | ✅ |

## 最终 PMID 集合

- 中文：`23836630, 34265631, 39399882, 40662655`
- 英文：`23836630, 34265631, 39399882, 40662655`
- 集合一致：PASS
