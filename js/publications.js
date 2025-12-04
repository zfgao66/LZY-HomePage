// 学术发表管理脚本 - 整洁排版版
document.addEventListener('DOMContentLoaded', function() {
    // ==============================
    // 1. 论文数据定义
    // ==============================
    const publications = [
        {
            id: 1,
            title: "Topological Phase Transitions in Strongly Correlated Quantum Spin Hall Systems",
            authors: "Zhongyi Lu, Ming Wang, Hua Chen, and Li Zhang",
            year: "2023",
            journal: "Physical Review Letters",
            volume: "130, 126401 (2023)",
            category: "prl",
            abstract: "本文研究了强关联量子自旋霍尔系统中的拓扑相变。通过发展多体计算方法，我们揭示了电子-电子相互作用对拓扑物态稳定性的影响，并发现了新型的相互作用诱导的拓扑相变。我们的研究为理解强关联拓扑材料提供了新的理论框架。",
            keywords: ["拓扑相变", "强关联系统", "量子自旋霍尔效应"],
            badges: ["highlight", "editors-choice"],
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.126401",
                arxiv: "https://arxiv.org/abs/2210.12345",
                code: null
            }
        },
        {
            id: 2,
            title: "Machine Learning Accelerated Discovery of Two-Dimensional Topological Insulators",
            authors: "Ming Wang, Zhongyi Lu, Hua Chen, Li Zhang, and Qiang Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107, 155302 (2023)",
            category: "prb",
            abstract: "我们开发了一种结合机器学习和第一性原理计算的方法，用于高效发现新型二维拓扑绝缘体。通过构建材料描述符和训练预测模型，我们从材料数据库中筛选出多个具有潜在拓扑性质的候选材料，并通过第一性原理计算验证了其拓扑性质。",
            keywords: ["机器学习", "拓扑绝缘体", "材料发现", "高通量计算"],
            badges: ["open-access"],
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.155302",
                arxiv: null,
                code: "https://github.com/lulab/ML-TI-discovery"
            }
        },
        {
            id: 3,
            title: "Non-Hermitian Topology in Open Quantum Systems: From Theory to Experimental Proposals",
            authors: "Hua Chen, Zhongyi Lu, Ming Wang, and John Doe (Stanford University)",
            year: "2023",
            journal: "Physical Review X",
            volume: "13, 021045 (2023)",
            category: "prx",
            abstract: "本文系统研究了开放量子系统中的非厄米拓扑现象。我们发展了一套完整的理论框架来描述耗散环境中的拓扑物态，并提出了多个可在冷原子系统或光子晶体中实现的实验方案。",
            keywords: ["非厄米拓扑", "开放量子系统", "耗散拓扑物态"],
            badges: ["editors-choice"],
            links: {
                pdf: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.13.021045",
                arxiv: null,
                code: null
            }
        },
        {
            id: 4,
            title: "Chiral Anomaly and Quantum Transport in Weyl Semimetals under High Magnetic Fields",
            authors: "Zhongyi Lu, Ming Wang, and Hua Chen",
            year: "2022",
            journal: "Physical Review Letters",
            volume: "128, 196601 (2022)",
            category: "prl",
            abstract: "我们研究了强磁场下外尔半金属中的手征反常和量子输运现象。通过发展非平衡格林函数方法，我们计算了磁场诱导的手征电荷分离和负磁阻效应，并与实验结果进行了比较。",
            keywords: ["外尔半金属", "手征反常", "量子输运", "强磁场"],
            badges: [],
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.128.196601",
                arxiv: "https://arxiv.org/abs/2111.04567",
                code: null
            }
        },
        {
            id: 5,
            title: "First-Principles Study of Electron-Phonon Coupling in High-Temperature Superconductors",
            authors: "Li Zhang, Zhongyi Lu, Ming Wang, and Jane Smith (MIT)",
            year: "2022",
            journal: "npj Computational Materials",
            volume: "8, 215 (2022)",
            category: "npj",
            abstract: "我们采用第一性原理计算方法系统研究了多种高温超导材料中的电子-声子耦合强度。通过计算电子-声子耦合常数和超导转变温度，我们揭示了材料结构特征与超导性质之间的关联。",
            keywords: ["高温超导", "电子-声子耦合", "第一性原理计算", "超导机理"],
            badges: ["open-access"],
            links: {
                pdf: "https://www.nature.com/articles/s41524-022-00815-6",
                arxiv: "https://arxiv.org/abs/2112.03456",
                code: null
            }
        },
        {
            id: 6,
            title: "Quantum Criticality and Strange Metal Phase in Twisted Bilayer Graphene",
            authors: "Zhongyi Lu, Hua Chen, Ming Wang, et al.",
            year: "2021",
            journal: "Nature Physics",
            volume: "17, 958-963 (2021)",
            category: "nat-phys",
            abstract: "我们研究了魔角扭曲双层石墨烯中的量子临界性和奇异金属相。通过发展非费米液体理论和大规模数值计算，我们揭示了该体系中存在的非传统量子临界点及其与奇异金属行为的关联。",
            keywords: ["扭曲双层石墨烯", "量子临界性", "奇异金属", "强关联电子系统"],
            badges: ["highlight"],
            links: {
                pdf: "https://www.nature.com/articles/s41567-021-01254-8",
                arxiv: "https://arxiv.org/abs/2012.12345",
                code: "https://github.com/lulab/TBG-QC"
            }
        },
        {
            id: 7,
            title: "Dynamical Mean-Field Theory for Strongly Correlated Topological Insulators",
            authors: "Ming Wang, Zhongyi Lu, and Li Zhang",
            year: "2021",
            journal: "Physical Review B",
            volume: "104, 245112 (2021)",
            category: "prb",
            abstract: "我们发展了适用于强关联拓扑绝缘体的动力学平均场理论方法。通过将非局域拓扑序参量与局域关联效应相结合，我们建立了一个统一的框架来描述相互作用拓扑绝缘体。",
            keywords: ["动力学平均场理论", "强关联拓扑绝缘体", "相互作用效应"],
            badges: [],
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.245112",
                arxiv: "https://arxiv.org/abs/2105.06789",
                code: null
            }
        },
        {
            id: 8,
            title: "Superconducting Proximity Effect in Topological Insulator Nanowires",
            authors: "Hua Chen, Zhongyi Lu, Ming Wang, et al.",
            year: "2020",
            journal: "Physical Review B",
            volume: "102, 134514 (2020)",
            category: "prb",
            abstract: "我们系统研究了拓扑绝缘体纳米线中的超导邻近效应。通过结合微观模型和拓扑分类理论，我们预测了马约拉纳零能模的存在条件，并提出了实验探测方案。",
            keywords: ["超导邻近效应", "拓扑绝缘体纳米线", "马约拉纳零能模", "拓扑量子计算"],
            badges: [],
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.134514",
                arxiv: "https://arxiv.org/abs/2003.04567",
                code: null
            }
        }
        // 在这里添加更多论文...
    ];

    // ==============================
    // 2. 常量和配置
    // ==============================
    const journalMap = {
        'prl': { name: 'Physical Review Letters', icon: 'fas fa-star', color: '#e74c3c' },
        'prb': { name: 'Physical Review B', icon: 'fas fa-book', color: '#3498db' },
        'prx': { name: 'Physical Review X', icon: 'fas fa-atom', color: '#2ecc71' },
        'nat-phys': { name: 'Nature Physics', icon: 'fas fa-globe', color: '#9b59b6' },
        'npj': { name: 'npj Computational Materials', icon: 'fas fa-cube', color: '#1abc9c' },
        'other': { name: '其他期刊', icon: 'fas fa-file-alt', color: '#f39c12' }
    };

    const badgeMap = {
        'highlight': { text: '期刊亮点', class: 'badge-highlight', icon: 'fas fa-star' },
        'editors-choice': { text: '编辑推荐', class: 'badge-editors-choice', icon: 'fas fa-award' },
        'open-access': { text: '开放获取', class: 'badge-open-access', icon: 'fas fa-lock-open' }
    };

    // ==============================
    // 3. DOM元素
    // ==============================
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const journalFilter = document.getElementById('journalFilter');
    const filterTags = document.querySelectorAll('.filter-tag');
    const publicationsGrid = document.getElementById('publicationsGrid');
    const noResults = document.getElementById('noResults');
    const journalsGrid = document.getElementById('journalsGrid');
    const resultCount = document.getElementById('resultCount');
    
    // 翻页元素
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    
    // 统计元素
    const totalPapersEl = document.getElementById('totalPapers');
    const prlPapersEl = document.getElementById('prlPapers');
    const recentYearEl = document.getElementById('recentYear');
    const totalJournalsEl = document.getElementById('totalJournals');

    // ==============================
    // 4. 状态管理
    // ==============================
    let currentFilters = {
        search: '',
        year: 'all',
        journal: 'all',
        tag: 'all'
    };

    // 分页状态
    const itemsPerPage = 5;
    let currentPage = 1;
    let filteredPublications = [];
    let totalPages = 1;

    // ==============================
    // 5. 初始化函数
    // ==============================
    function init() {
        updateStatistics();
        populateFilters();
        renderJournalsGrid();
        renderPublications();
        setupEventListeners();
    }

    // ==============================
    // 6. 事件监听器设置
    // ==============================
    function setupEventListeners() {
        // 搜索框输入
        searchInput.addEventListener('input', debounce(function() {
            currentFilters.search = this.value.toLowerCase();
            currentPage = 1;
            renderPublications();
        }, 300));

        // 年份筛选
        yearFilter.addEventListener('change', function() {
            currentFilters.year = this.value;
            currentPage = 1;
            renderPublications();
        });

        // 期刊筛选
        journalFilter.addEventListener('change', function() {
            currentFilters.journal = this.value;
            currentPage = 1;
            renderPublications();
        });

        // 快速过滤标签
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // 更新标签状态
                filterTags.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // 更新筛选
                currentFilters.tag = this.dataset.filter;
                currentPage = 1;
                renderPublications();
            });
        });

        // 翻页按钮
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderPublications();
                    scrollToTop();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPublications();
                    scrollToTop();
                }
            });
        }
    }

    // ==============================
    // 防抖函数
    // ==============================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==============================
    // 滚动到顶部
    // ==============================
    function scrollToTop() {
        const publicationsSection = document.querySelector('.publications-section');
        if (publicationsSection) {
            publicationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ==============================
    // 8. 更新统计信息
    // ==============================
    function updateStatistics() {
        // 总论文数
        totalPapersEl.textContent = publications.length;
        
        // PRL/PRX论文数
        const prlPrxCount = publications.filter(p => p.category === 'prl' || p.category === 'prx').length;
        prlPapersEl.textContent = prlPrxCount;
        
        // 最新年份
        const years = publications.map(p => parseInt(p.year));
        const latestYear = Math.max(...years);
        recentYearEl.textContent = latestYear;
        
        // 期刊种类
        const uniqueJournals = new Set(publications.map(p => p.journal));
        totalJournalsEl.textContent = uniqueJournals.size;
    }

    // ==============================
    // 9. 填充筛选器
    // ==============================
    function populateFilters() {
        // 获取所有年份
        const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
        
        // 填充年份筛选器
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}年`;
            yearFilter.appendChild(option);
        });
        
        // 获取所有期刊
        const journals = [...new Set(publications.map(p => p.journal))].sort();
        
        // 填充期刊筛选器
        journals.forEach(journal => {
            const option = document.createElement('option');
            option.value = journal;
            option.textContent = journal;
            journalFilter.appendChild(option);
        });
    }

    // ==============================
    // 10. 渲染期刊统计
    // ==============================
    function renderJournalsGrid() {
        // 计算各期刊数量
        const journalCounts = {};
        Object.keys(journalMap).forEach(journal => {
            journalCounts[journal] = 0;
        });
        
        publications.forEach(pub => {
            if (journalCounts[pub.category] !== undefined) {
                journalCounts[pub.category]++;
            }
        });
        
        // 生成HTML
        journalsGrid.innerHTML = Object.keys(journalMap)
            .filter(journal => journalCounts[journal] > 0)
            .map(journal => {
                const journalInfo = journalMap[journal];
                return `
                    <div class="journal-card">
                        <div class="journal-icon">
                            <i class="${journalInfo.icon}"></i>
                        </div>
                        <div class="journal-name">${journalInfo.name}</div>
                        <div class="journal-count">${journalCounts[journal]}</div>
                        <div class="journal-label">篇发表</div>
                    </div>
                `;
            }).join('');
    }

    // ==============================
    // 11. 渲染论文列表
    // ==============================
    function renderPublications() {
        // 过滤论文
        let filtered = filterPublications(publications);
        
        // 排序论文（按年份降序）
        filtered = filtered.sort((a, b) => b.year - a.year);
        
        // 保存过滤结果用于分页
        filteredPublications = filtered;
        
        // 更新结果数量
        resultCount.textContent = `${filteredPublications.length}篇论文`;
        
        // 计算总页数
        totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
        
        // 确保当前页码有效
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (currentPage < 1 && filteredPublications.length > 0) {
            currentPage = 1;
        }
        
        // 获取当前页的论文
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPagePublications = filteredPublications.slice(startIndex, endIndex);
        
        // 显示/隐藏无结果提示
        if (currentPagePublications.length === 0) {
            publicationsGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            publicationsGrid.style.display = 'grid';
            noResults.style.display = 'none';
            
            // 渲染论文卡片
            publicationsGrid.innerHTML = currentPagePublications.map(pub => renderPublicationCard(pub)).join('');
        }
        
        // 更新分页UI
        updatePagination();
    }

    // ==============================
    // 12. 更新分页UI
    // ==============================
    function updatePagination() {
        // 更新页码显示
        currentPageEl.textContent = currentPage;
        totalPagesEl.textContent = totalPages;
        
        // 更新按钮禁用状态
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1 || totalPages === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;
        }
        
        // 控制翻页控件显示
        if (pagination) {
            pagination.style.display = (totalPages > 1) ? 'flex' : 'none';
        }
    }

    // ==============================
    // 13. 过滤论文
    // ==============================
    function filterPublications(pubs) {
        return pubs.filter(pub => {
            // 搜索过滤
            if (currentFilters.search) {
                const searchTerm = currentFilters.search;
                const searchableText = [
                    pub.title,
                    pub.authors,
                    pub.journal,
                    pub.keywords.join(' '),
                    pub.abstract
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
            
            // 年份过滤
            if (currentFilters.year !== 'all' && pub.year !== currentFilters.year) {
                return false;
            }
            
            // 期刊过滤
            if (currentFilters.journal !== 'all' && pub.journal !== currentFilters.journal) {
                return false;
            }
            
            // 标签过滤
            if (currentFilters.tag !== 'all') {
                if (currentFilters.tag === 'prl' && pub.category !== 'prl') {
                    return false;
                }
                if (currentFilters.tag === 'prb' && pub.category !== 'prb') {
                    return false;
                }
                if (currentFilters.tag === 'highlight' && !pub.badges.includes('highlight')) {
                    return false;
                }
                if (currentFilters.tag === 'open-access' && !pub.badges.includes('open-access')) {
                    return false;
                }
            }
            
            return true;
        });
    }

    // ==============================
    // 14. 渲染单个论文卡片
    // ==============================
    function renderPublicationCard(pub) {
        const journalInfo = journalMap[pub.category] || journalMap['other'];
        
        // 生成徽章元素
        const badgeElements = pub.badges
            .map(badge => badgeMap[badge])
            .filter(Boolean)
            .map(badge => `
                <span class="card-badge ${badge.class}">
                    <i class="${badge.icon}"></i> ${badge.text}
                </span>
            `).join('');
        
        // 生成关键词标签
        const keywordElements = pub.keywords
            .map(keyword => `<span class="keyword-tag">${keyword}</span>`)
            .join('');
        
        // 生成链接按钮
        const linkElements = [
            pub.links.pdf ? `
                <a href="${pub.links.pdf}" class="card-link link-pdf" target="_blank" rel="noopener" title="PDF全文">
                    <i class="fas fa-file-pdf"></i>
                </a>
            ` : '',
            pub.links.arxiv ? `
                <a href="${pub.links.arxiv}" class="card-link link-arxiv" target="_blank" rel="noopener" title="arXiv预印本">
                    <i class="fas fa-archive"></i>
                </a>
            ` : '',
            pub.links.code ? `
                <a href="${pub.links.code}" class="card-link link-code" target="_blank" rel="noopener" title="代码/数据">
                    <i class="fas fa-code"></i>
                </a>
            ` : ''
        ].filter(link => link).join('');
        
        return `
            <div class="publication-card ${pub.category}">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-year">${pub.year}</div>
                        <h3 class="card-title">${pub.title}</h3>
                        ${badgeElements ? `<div class="card-badges">${badgeElements}</div>` : ''}
                    </div>
                    <span class="card-badge badge-journal">
                        <i class="${journalInfo.icon}"></i> ${pub.journal}
                    </span>
                </div>
                
                <div class="card-content">
                    <p class="card-authors">${pub.authors}</p>
                    <p class="card-venue">${pub.journal}, ${pub.volume}</p>
                    <p class="card-abstract">${pub.abstract}</p>
                </div>
                
                <div class="card-footer">
                    <div class="card-keywords">
                        ${keywordElements}
                    </div>
                    ${linkElements ? `<div class="card-links">${linkElements}</div>` : ''}
                </div>
            </div>
        `;
    }

    // ==============================
    // 14. 启动应用
    // ==============================
    init();
});