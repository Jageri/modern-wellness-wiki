# 073 肠道菌群 - PMID 验证日志

验证日期：2026-09-16

每个最终保留 PMID 均已亲自打开其 `https://pubmed.ncbi.nlm.nih.gov/{PMID}/` 原始页。遇到 PubMed 页面反爬空页或人机检查时，仍完成原始页打开，并使用同属 NCBI PubMed 的 E-utilities `efetch` XML 复核标题、作者、期刊、年份和记录中的 COI 字段；不以搜索摘要单独决定 PMID。

| # | 引用 | PMID | PubMed 原始页 | 标题/作者/期刊/年份 | 关键内容核对 | COI 核对 | 结果 |
|---|---|---:|---|---|---|---|---|
| 1 | Badal et al., *Nutrients*, 2020 | [33297486](https://pubmed.ncbi.nlm.nih.gov/33297486/) | 已打开 | *The Gut Microbiome, Aging, and Longevity: A Systematic Review*；Badal VD et al.；*Nutrients*；2020 | 27 项人体研究；分类学结果跨研究不一；横断面设计限制确定性解释 | PubMed 声明作者无冲突、资助者未参与研究过程 | ✅ |
| 2 | So et al., *Am J Clin Nutr*, 2018 | [29757343](https://pubmed.ncbi.nlm.nih.gov/29757343/) | 已打开；出现人机检查，NCBI XML 复核 | *Dietary fiber intervention on gut microbiota composition in healthy adults: a systematic review and meta-analysis*；So D et al.；*Am J Clin Nutr*；2018 | 64 项研究、2,099 人；SMD 和 CI 与摘要一致；α 多样性无差异 | PubMed 记录无 COI 字段；未据此宣称“无冲突” | ✅ |
| 3 | Wastyk et al., *Cell*, 2021 | [34256014](https://pubmed.ncbi.nlm.nih.gov/34256014/) | 已打开 | *Gut-microbiota-targeted diets modulate human immune status*；Wastyk HC et al.；*Cell*；2021 | 17 周、18 人/组；发酵组多样性及部分炎症标志物变化；纤维组主要细胞因子评分未变 | PubMed 披露 Interface Biosciences、January AI、Novome Biotechnologies 相关利益 | ✅ |
| 4 | Baron et al., *Gut Microbiome (Camb)*, 2024 | [39290661](https://pubmed.ncbi.nlm.nih.gov/39290661/) | 已打开；页面内容空载，NCBI XML 复核 | *The effects of fermented vegetables on the gut microbiota for prevention of cardiovascular disease*；Baron M et al.；*Gut Microbiome*；2024 | 87 人、100 g、至少 5 天/周、8 周；CRP、所测炎症指标和 Shannon α 多样性无组间变化 | PubMed 声明作者无冲突 | ✅ |
| 5 | Su et al., *Gastroenterology*, 2020 | [32531291](https://pubmed.ncbi.nlm.nih.gov/32531291/) | 已打开 | *AGA Clinical Practice Guidelines on the Role of Probiotics in the Management of Gastrointestinal Disorders*；Su GL et al.；*Gastroenterology*；2020 | 指南按具体菌株/组合及具体适应证评价；多数消化疾病证据不足 | PubMed 记录无 COI 字段；未据此宣称“无冲突” | ✅ |
| 6 | Peery et al., *Gastroenterology*, 2024 | [38395525](https://pubmed.ncbi.nlm.nih.gov/38395525/) | 已打开；出现人机检查，NCBI XML 复核 | *AGA Clinical Practice Guideline on Fecal Microbiota-Based Therapies for Select Gastrointestinal Diseases*；Peery AF et al.；*Gastroenterology*；2024 | 复发 CDI 的选择性适应证；严重免疫抑制者反对；IBD/IBS 等限临床试验；低/极低确定性 | PubMed 记录无 COI 字段；未据此宣称“无冲突” | ✅ |
| 7 | Palleja et al., *Nat Microbiol*, 2018 | [30349083](https://pubmed.ncbi.nlm.nih.gov/30349083/) | 已打开；页面内容空载，NCBI XML 复核 | *Recovery of gut microbiota of healthy adults following antibiotic exposure*；Palleja A et al.；*Nature Microbiology*；2018 | 12 名健康男性、4 天三联抗生素；约 1.5 个月接近基线；180 天仍有 9 个共同物种未检出 | PubMed 记录无 COI 字段；未据此宣称“无冲突” | ✅ |

## 集合核对

- 中文最终 PMID：`29757343, 30349083, 32531291, 33297486, 34256014, 38395525, 39290661`
- 英文最终 PMID：`29757343, 30349083, 32531291, 33297486, 34256014, 38395525, 39290661`
- 集合一致：✅
- 未验证 PMID：无
