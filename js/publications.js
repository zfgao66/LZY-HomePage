// 学术发表管理脚本 - 整洁排版版
document.addEventListener('DOMContentLoaded', function() {
    // ==============================
    // 1. 论文数据定义
    // ==============================
    const publications = [

        {
            id: 37,
            title: "Tetragonal SnOFeSe: A possible parent compound of the FeSe-based superconductor",
            authors: "Xiao-Xiao Man, Pei-Han Sun, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(4), 045145 (2023)",
            category: "prb",
            abstract: "本文通过第一性原理计算提出了一种稳定的SnOFeSe化合物，其结构与电子性质与LaOFeAs高度相似，且处于金属-绝缘体转变的边缘，为研究FeSe衍生材料中磁性、电子关联与非常规超导的相互作用提供了一个新的潜在母体平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045145#supplemental",
                arxiv: "https://arxiv.org/abs/2210.08146",
                code: null
            }
        },
        {
            id: 38,
            title: "Self-Intercalated 1T-FeSe<sub>2</sub> as an Effective Kagome Lattice",
            authors: "Zhi-Mo Zhang, Ben-Chao Gong, Jin-Hua Nie, Fanqi Meng, Qinghua Zhang, Lin Gu, Kai Liu, Zhong-Yi Lu, Ying-Shuang Fu, and Wenhao Zhang",
            year: "2023",
            journal: "Nano Letters",
            volume: "23(3), 954 (2023)",
            category: "nl",
            abstract: "本文报道了一种通过分子束外延将Fe原子自插层到FeSe<sub>2</sub>范德瓦尔斯间隙中以构建人工Kagome晶格的合成策略，并结合扫描隧道显微镜与理论计算揭示了其Kagome图案主要源于插层诱导的顶层Se原子重构，为探索关联量子态提供了可调控的新平台。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/acs.nanolett.2c04362",
                arxiv: null,
                code: null
            }
        },
        {
            id: 39,
            title: "Intrinsic ferromagnetic axion states and single pair of Weyl fermions in the stable-state MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub> family of materials",
            authors: "Yan Gao, Weikang Wu, Ben-Chao Gong, Huan-Cheng Yang, Xiang-Feng Zhou, Yong Liu, Shengyuan A. Yang, Kai Liu and Zhong-Yi Lu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(4), 045136 (2023)",
            category: "prb",
            abstract: "本文提出了一类新型的稳定结构MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub>-B家族材料，其中发现了本征铁磁轴子绝缘体MnGe<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B、MnSn<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B、MnPb<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B以及仅含单对Weyl点的本征Weyl半金属MnSn<sub>2</sub>Sb<sub>2</sub>Te<sub>6</sub>-B，为探索拓扑磁电效应和Weyl点相关本征特性提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045136",
                arxiv: "https://arxiv.org/abs/2210.09538",
                code: null
            }
        },
        {
            id: 40,
            title: "Framework for Contrastive Learning Phases of Matter Based on Visual Representations",
            authors: "Xiao-Qi Han, Sheng-Song Xu, Zhen Feng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2023",
            journal: "Chinese Physics Letters",
            volume: "40(2), 027501 (2023)",
            category: "cpl",
            abstract: "本文提出了一个受视觉表示对比学习启发的简单框架SimCLP，用于对比学习物态相，并在经典与量子、单粒子与多体、常规与拓扑等多个代表性体系中验证了其成功应用，为识别未知相变提供了无需人工特征工程和先验知识的通用工具开发新途径。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/40/2/027501/meta",
                arxiv: "https://arxiv.org/abs/2205.05607",
                code: null
            }
        },
        {
            id: 41,
            title: "Magnetization-induced phase transition from a semimetal to a Chern insulator in monolayer VGa<sub>2</sub>Te<sub>4</sub>",
            authors: "Ben-Chao Gong, Yan Gao, Xiao-Le Qiu, Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(23), 235153 (2022)",
            category: "prb",
            abstract: "本文通过密度泛函理论计算设计并研究了一类新型XZ<sub>2</sub>T<sub>4</sub>化合物，其中发现α-VGa<sub>2</sub>Te<sub>4</sub>单层具有可调控的拓扑性质，能够从无能隙的铁磁半金属转变为具有10 meV全局带隙的量子反常霍尔绝缘体，为超越MnBi<sub>2</sub>Te<sub>4</sub>家族探索更多量子反常霍尔绝缘体提供了实例。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.235153",
                arxiv: null,
                code: null
            }
        },
        {
            id: 42,
            title: "Two-dimensional Dirac-line semimetals resistant to strong spin–orbit coupling",
            authors: "Deping Guo, Pengjie Guo, Shijing Tan, Min Feng, Limin Cao, Zheng-Xin Liu, Kai Liu, Zhong-Yi Lu, and Wei Ji",
            year: "2022",
            journal: "Science Bulletin",
            volume: "67(19), 1954 (2022)",
            category: "sci-bull",
            abstract: "本文发现并证明具有<em>p</em><sub><em>mma</em></sub>层群（含<em>Ĉ</em><sub>2<em>x</em></sub>×<em>Z</em><sub>2</sub><sup><em>T</em></sup>子群）非共线对称性可以确保二维狄拉克节线半金属态在强自旋轨道耦合下保持稳定，并在VA族元素（Bi、Sb、As、P）的砖状结构相中实现了这类受对称性保护的纯净狄拉克节线态。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S2095927322004157?via%3Dihub",
                arxiv: null,
                code: null
            }
        },
        {
            id: 43,
            title: "Strong-coupling superconductivity in the kagome metal CsV<sub>3</sub>Sb<sub>5</sub> revealed by soft point-contact spectroscopy",
            authors: "Ming-chong He, Hai Zi, Hong-xing Zhan, Yu-qing Zhao, Cong Ren, Xing-yuan Hou, Lei Shan, Qiang-hua Wang, Qiangwei Yin, Zhijun Tu, Chunsheng Gong, Hechang Lei, Zhong-Yi Lu, Qi Wang, Yan-peng Qi, Gen-fu Chen, and Peng Xiong",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(10), 104510 (2022)",
            category: "prb",
            abstract: "本文通过软点接触谱与电阻测量研究了Kagome超导体CsV<sub>3</sub>Sb<sub>5</sub>的超导序参量，揭示了其强耦合双能隙（<em>s</em>+<em>s</em>波）超导特性，并指出费米面附近的平带相关的范霍夫奇点与电子关联性在Kagome超导电性起源中起关键作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.104510",
                arxiv: null,
                code: null
            }
        },
        {
            id: 44,
            title: "Magnetic Surface on Nonmagnetic Bulk of Electride Hf<sub>2</sub>S",
            authors: "Jian-Feng Zhang, Duo Xu, Xiao-Le Qiu, Ning-Ning Zhao, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Journal of Physical Chemistry C",
            volume: "127(1), 696 (2023)",
            category: "jpcc",
            abstract: "本文通过第一性原理计算结合Kubo公式方法研究了二维电子化物Hf<sub>2</sub>S在单层与多层结构中的电子、磁性和输运性质，揭示了其非磁体内部与自旋极化的表面电子气共存的独特磁性表面特性，并预测了由此产生的表面反常霍尔效应和电场诱导的层霍尔效应等新奇输运现象。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/acs.jpcc.2c07271",
                arxiv: "https://arxiv.org/abs/2207.07042",
                code: null
            }
        },
        {
            id: 45,
            title: "Symmetry-enforced two-dimensional Dirac node-line semimetals",
            authors: "Peng-Jie Guo, Chen Peng, Zheng-Xin Liu, Kai Liu, and Zhong-Yi Lu",
            year: "2023",
            journal: "Materials Futures",
            volume: "2(1), 011001 (2023)",
            category: "mat-fut",
            abstract: "本文通过对称性分析和晶格模型计算证明狄拉克节线可在二维非磁及反铁磁系统中稳定存在，并确定了一系列能够强制产生狄拉克节线的空间群与磁空间群，同时通过第一性原理计算预测单层YB<sub>4</sub>C<sub>4</sub>是研究二维对称性强制狄拉克节线半金属新奇特性的理想材料平台。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/2752-5724/aca816",
                arxiv: null,
                code: null
            }
        },
        {
            id: 46,
            title: "An experimental setup with controllable tuning parameters for studying the Kondo systems",
            authors: "Zhong-Yi Lu",
            year: "2022",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "65(4), 246831 (2022)",
            category: "sci-china-phys",
            abstract: "本文评述了一种基于自组装有序相的新型实验装置，该装置可通过调控分子间距连续调节RKKY相互作用，从而系统研究双杂质近藤模型中集体近藤单态与RKKY单态之间的演变过程，为近藤物理的深入研究提供了重要的实验平台。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-022-1882-1",
                arxiv: null,
                code: null
            }
        },
        {
            id: 47,
            title: "Green's function Monte Carlo method combined with restricted Boltzmann machine approach to the frustrated J<sub>1</sub>–J<sub>2</sub> Heisenberg model",
            authors: "He-Yu Lin, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2022",
            journal: "Chinese Physics B",
            volume: "31(8), 080203 (2022)",
            category: "cpb",
            abstract: "本文提出将受限玻尔兹曼机作为引导波函数与格林函数蒙特卡洛方法相结合的策略，并应用于具有符号问题的受挫J<sub>1</sub>–J<sub>2</sub>海森堡模型，结果表明该方法能显著降低基态能量的相对误差，为解决更复杂的符号问题模型提供了有效途径。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/ac615f",
                arxiv: null,
                code: null
            }
        },
        {
            id: 48,
            title: "Van Hove singularity induced phonon-mediated superconductivity above 77 K in hole-doped SrB<sub>3</sub>C<sub>3</sub>",
            authors: "Ting-Ting Gai, Peng-Jie Guo, Huan-Cheng Yang, Yan Gao, Miao Gao, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(22), 224514 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了空穴掺杂化合物Rb<sub>0.4</sub>Sr<sub>0.6</sub>B<sub>3</sub>C<sub>3</sub>的电子结构、晶格动力学及电声耦合，发现其通过将费米能级调至范霍夫奇点并在软声子协同作用下实现了高于液氮温度（83 K）的声子介导超导电性，且存在单能隙向双能隙超导的转变。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.224514",
                arxiv: null,
                code: null
            }
        },
        {
            id: 49,
            title: "Intrinsic ferromagnetic and antiferromagnetic axion insulators in van der Waals materials MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub> family",
            authors: "Yan Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Research",
            volume: "4(2), 023030 (2022)",
            category: "prr",
            abstract: "本文通过第一性原理计算设计了一类基于X<sub>2</sub>B<sub>2</sub>T<sub>5</sub>结构的新型范德瓦尔斯材料MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub>家族，并发现其中同时存在铁磁与A型反铁磁轴子绝缘体，为超越MnBi<sub>2</sub>Te<sub>4</sub>家族实现高温量子反常霍尔效应和量子化磁电效应提供了新平台。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.4.023030",
                arxiv: "https://arxiv.org/abs/2111.11749",
                code: null
            }
        },
        {
            id: 50,
            title: "Large intrinsic spin Hall conductivity and spin Hall angle in the nodal-line semimetals ThAl<sub>2</sub> and ThGa<sub>2</sub>",
            authors: "Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(23), 235119 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了ThAl<sub>2</sub>与ThGa<sub>2</sub>的电子结构与拓扑性质，揭示了其费米面附近的多重节线在自旋轨道耦合打开后产生巨大自旋贝里曲率，从而诱导出巨大的本征自旋霍尔电导与自旋霍尔角，为自旋轨道电子学器件应用提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.235119",
                arxiv: null,
                code: null
            }
        },
        {
            id: 51,
            title: "First-principles study on the magnetic and electronic properties of the high-pressure orthorhombic phase of MnSe",
            authors: "Xiao-Xiao Man, Ben-Chao Gong, Pei-Han Sun, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(3), 035136 (2022)",
            category: "prb",
            abstract: "本文通过自旋极化密度泛函理论计算研究了高压正交相MnSe的磁性与电子性质，揭示了其在AFM3态与一系列交错的<em>n</em>-聚体反铁磁态之间存在强烈的反铁磁涨落，为理解MnSe作为第二种Mn基超导体的母体特性提供了理论线索。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.035136",
                arxiv: null,
                code: null
            }
        },
        {
            id: 52,
            title: "Two-dimensional anisotropic Dirac materials PtN<sub>4</sub>C<sub>2</sub> and Pt<sub>2</sub>N<sub>8</sub>C<sub>6</sub> with quantum spin and valley Hall effects",
            authors: "Jingping Dong, Chuhan Wang, Xinlei Zhao, Miao Gao, Xun-Wang Yan, Fengjie Ma, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Materials",
            volume: "6(7), 074202 (2022)",
            category: "prm",
            abstract: "本文通过第一性原理计算提出了两种新型二维拓扑狄拉克材料平面PtN<sub>4</sub>C<sub>2</sub>和Pt<sub>2</sub>N<sub>8</sub>C<sub>6</sub>，它们具有位于费米能级的各向异性狄拉克锥，并在自旋轨道耦合下成为量子自旋霍尔与量子能谷霍尔绝缘体，为探索二维拓扑量子器件提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.6.074202",
                arxiv: "https://arxiv.org/abs/2207.03703",
                code: null
            }
        },
        {
            id: 53,
            title: "A two-dimensional topological nodal-line material MgN<sub>4</sub> with extremely large magnetoresistance",
            authors: "Xinlei Zhao, Dapeng Liu, Miao Gao, Xun-Wang Yan, Fengjie Ma, and Zhong-Yi Lu",
            year: "2022",
            journal: "Nanoscale",
            volume: "14(38), 14191 (2022)",
            category: "nanoscale",
            abstract: "本文通过第一性原理计算预测了一种稳定的二维原子薄层材料MgN<sub>4</sub>，它具有完美的本征电子-空穴补偿特性与高载流子迁移率，可实现不饱和的极大磁阻效应，同时其在自旋轨道耦合下表现为拓扑绝缘体，为设计新型多功能器件提供了理想平台。",
            links: {
                pdf: "https://pubmed.ncbi.nlm.nih.gov/36125028/",
                arxiv: null,
                code: null
            }
        },
        {
            id: 54,
            title: "Distinct superconducting behaviors of pressurized WB<sub>2</sub> and ReB<sub>2</sub> with different local B layers",
            authors: "Cuiying Pei, Jianfeng Zhang, Chunsheng Gong, Qi Wang, Lingling Gao, Yi Zhao, Shangjie Tian, Weizheng Cao, Changhua Li, Zhong-Yi Lu, Hechang Lei, Kai Liu, and Yanpeng Qi",
            year: "2022",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "65(8), 287412 (2022)",
            category: "scpma",
            abstract: "本文通过高压实验与理论计算系统研究了具有不同硼层结构的WB<sub>2</sub>与ReB<sub>2</sub>的超导行为，发现WB<sub>2</sub>在高压下出现超导电性而ReB<sub>2</sub>则无，揭示了硼层的几何构型对过渡金属二硼化物中超导转变温度的关键影响。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-022-1911-x",
                arxiv: null,
                code: null
            }
        },
        {
            id: 55,
            title: "Superconductivity in monolayer Ba<sub>2</sub>N electride: a first-principles study",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(16), 165101 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算系统研究了二维电子化物Ba<sub>2</sub>N单层的电子与超导性质，发现其具有3.4 K的超导转变温度，并可通过拉伸应变显著提升至10.8 K，揭示了晶格应变通过调控电子分布影响电声耦合的机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.165101",
                arxiv: "https://arxiv.org/abs/2203.15669",
                code: null
            }
        },
        {
            id: 56,
            title: "Magnetic and electronic transitions in monolayer electride Gd<sub>2</sub>C induced by hydrogenation: A first-principles study",
            authors: "Duo Xu, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(4), 045138 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了二维电子化物Gd<sub>2</sub>C单层的磁性与电子性质，发现氢化可有效调控其物态：单面全氢化使其转变为半金属，双面全氢化则使其转变为带隙0.8 eV的反铁磁绝缘体，为未来电子与自旋电子器件应用提供了多功能材料平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.045138",
                arxiv: null,
                code: null
            }
        },
        {
            id: 57,
            title: "Two-dimensional quadratic double Weyl semimetal",
            authors: "Xinlei Zhao, Fengjie Ma, Peng-Jie Guo, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Research",
            volume: "4(4), 043183 (2022)",
            category: "prr",
            abstract: "本文基于对称性分析与第一性原理计算预测了Si/Bi范德瓦尔斯异质结是一种在强自旋轨道耦合下稳定的二维非常规二次双外尔半金属，并揭示了其源于Rashba SOC与邻近效应增强的本征SOC之间的竞争，为研究二维双外尔半金属及其他新奇拓扑物相提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.4.043183",
                arxiv: "https://arxiv.org/abs/2207.03044",
                code: null
            }
        },
        {
            id: 58,
            title: "Evolution of ultra-flat band in van der Waals kagome semiconductor Pd<sub>3</sub>P<sub>2</sub>(S<sub>1−x</sub>Se<sub>x</sub>)<sub>8</sub>",
            authors: "Shaohua Yan, Ben-Chao Gong, Lin Wang, Jinzhi Wu, Qiangwei Yin, Xinyu Cao, Xiao Zhang, Xiaofeng Liu, Zhong-Yi Lu, Kai Liu, and Hechang Lei",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(15), 155115 (2022)",
            category: "prb",
            abstract: "本文研究了范德瓦尔斯Kagome半导体Pd<sub>3</sub>P<sub>2</sub>(S<sub>1−x</sub>Se<sub>x</sub>)<sub>8</sub>随Se掺杂的结构、光学与电子结构演化，揭示了Se掺杂通过增强层间耦合调控平带性质，并在二维极限下形成超平带，为探索二维Kagome晶格中的平带奇异物理提供了模型体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.155115",
                arxiv: "https://arxiv.org/abs/2111.11222",
                code: null
            }
        },
        {
            id: 59,
            title: "Eightfold Degenerate Fermions in Two Dimensions",
            authors: "Peng-Jie Guo, Yi-Wen Wei, Kai Liu, Zheng-Xin Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review Letters",
            volume: "127(17), 176401 (2021)",
            category: "prl",
            abstract: "本文通过对称性分析与晶格模型构建证明了八重简并费米子可在二维系统中实现，并通过第一性原理计算预测单层LaB<sub>8</sub>在合适衬底上可作为二维八重简并费米子与狄拉克节线半金属的理想研究平台。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.176401",
                arxiv: null,
                code: null
            }
        },
        {
            id: 60,
            title: "Erratum: Eightfold Degenerate Fermions in Two Dimensions ",
            authors: "Peng-Jie Guo, Yi-Wen Wei, Kai Liu, Zheng-Xin Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Letters",
            volume: "129(4), 049901 (2022)",
            category: "prl",
            abstract: "本文是对发表于《物理评论快报》第127卷第176401页（2021年）的论文《二维八重简并费米子》的正式更正说明，对原文中的计算细节、对称性分析或材料预测等若干内容进行了修正与澄清。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.176401",
                arxiv: null,
                code: null
            }
        },
        {
            id: 61,
            title: "Phonon-mediated high-temperature superconductivity in ternary borohydride KB<sub>2</sub>H<sub>8</sub> around 12 GPa",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(10), L100504 (2021)",
            category: "prb",
            abstract: "本文基于第一性原理密度泛函理论计算，预测了一种新型三元硼氢化物KB<sub>2</sub>H<sub>8</sub>在约12 GPa压力下通过σ-杂化σ-键能带金属化并与声子强耦合，可实现134-146 K的高温超导电性，为在相对较低压力下探索富氢高温超导体提供了新方向。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.L100504",
                arxiv: "https://arxiv.org/abs/2106.07322",
                code: null
            }
        },
        {
            id: 62,
            title: "Phonon-mediated high-temperature superconductivity in ternary borohydride KB<sub>2</sub>H<sub>8</sub> under pressure near 12 GPa[Phys. Rev. B 104, L100504 (2021)]",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(5), 059901 (2022)",
            category: "prb",
            abstract: "本文基于第一性原理计算研究了一种由BH四面体嵌入面心立方钾晶格形成的三元硼氢化物KB<sub>2</sub>H<sub>8</sub>，发现在约12 GPa的中等高压下其σ-杂化σ-键能带金属化并与声子强耦合，预测其超导转变温度可达134-146 K，为在相对较低压力下实现富氢高温超导提供了新体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.L100504",
                arxiv: "https://arxiv.org/abs/2106.07322",
                code: null
            }
        },
        {
            id: 63,
            title: "First-principles study of the electronic structure of CaKRu<sub>4</sub>P<sub>4</sub>",
            authors: "Xinlei Zhao, Fengjie Ma, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(23), 235105 (2021)",
            category: "prb",
            abstract: "本文基于第一性原理计算系统研究了1144型四元化合物CaKRu<sub>4</sub>P<sub>4</sub>的电子结构，发现其具有与铁基超导体不同的电子特性，且在压力下可调控产生I型与II型狄拉克费米子，为研究拓扑物理与超导电性提供了一个潜在平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.235105",
                arxiv: "https://arxiv.org/abs/2109.10851v2",
                code: null
            }
        },
        {
            id: 64,
            title: "Large magnetoresistance and de Haas–van Alphen oscillations in the topological semimetal candidates BaX<sub>4</sub> (X=Ga, In)",
            authors: "Huan Wang, Sheng Xu, Xiao-Qin Lu, Zheng-Yi Dai, Yi-Yan Wang, Xiao-Yan Wang, Xiang-Yu Zeng, Jun-Fa Lin, Kai Liu, Zhong-Yi Lu, and Tian-Long Xia",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(20), 205119 (2021)",
            category: "prb",
            abstract: "本文通过磁阻、德哈斯-范阿尔芬振荡实验与第一性原理计算研究了拓扑半金属候选材料BaX<sub>4</sub>（X=Ga, In），观测到高达3×10<sup>3</sup>%与4×10<sup>4</sup>%的非饱和大磁阻，并揭示了其源于载流子补偿、高迁移率以及自旋轨道耦合下仍保持非平庸拓扑性质的狄拉克点特征。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.205119",
                arxiv: null,
                code: null
            }
        },
        {
            id: 65,
            title: "First-principles study of the double-dome superconductivity in the kagome material CsV<sub>3</sub>Sb<sub>5</sub> under pressure",
            authors: "Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(19), 195130 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了Kagome材料CsV<sub>3</sub>Sb<sub>5</sub>在高压下的电荷密度波态、超导电性与拓扑性质，提出其实验观测的双穹顶超导电性在低压下受V原子磁性的部分抑制而高压下为完全常规的BCS型超导，并预言了压力下可能存在的第二弱电荷密度波态与拓扑相变。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.195130",
                arxiv: "https://arxiv.org/abs/2106.11477",
                code: null
            }
        },
        {
            id: 66,
            title: "Magnetic correlation between two local spins in a quantum spin Hall insulator",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(23), 235134 (2021)",
            category: "prb",
            abstract: "本文利用新发展的自然轨道重整化群方法研究了与螺旋边缘态耦合的两个Kondo杂质间的磁关联，发现自旋轨道耦合效应导致RKKY相互作用的各向异性，并揭示了通过调控Kondo耦合、杂质间距或SOC强度可实现面内与面外磁关联从铁磁到反铁磁的可控调节。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.235134",
                arxiv: "https://arxiv.org/abs/2201.06790",
                code: null
            }
        },
        {
            id: 67,
            title: "Three-dimensional acetylenic modified graphene for high-performance optoelectronics and topological materials",
            authors: "Yan Gao, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "NPJ Computational Materials",
            volume: "7(1), 109 (2021)",
            category: "npj",
            abstract: "本文基于第一性原理计算提出了一类通过乙炔键连接不同石墨烯层构筑的三维碳网络新材料家族，其中既包含具有适宜直接带隙（1.07–1.87 eV）的高性能光电子/光伏半导体，也包含受时间反演与空间对称性保护的拓扑节环半金属，为多功能碳材料设计提供了新思路。",
            links: {
                pdf: "https://www.nature.com/articles/s41524-021-00579-5",
                arxiv: null,
                code: null
            }
        },
        {
            id: 68,
            title: "Modulating charge density wave states in TaSe<sub>2</sub> by an electride substrate",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Ben-Chao Gong, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(16), 165109 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了典型电子化物Ca<sub>2</sub>N衬底对TaSe<sub>2</sub>中电荷密度波态的调控作用，发现Ca<sub>2</sub>N单层可均匀提供0.49电子/f.u.掺杂，从而完全抑制1H-TaSe<sub>2</sub>的CDW序，并使1T-TaSe<sub>2</sub>的CDW周期从“大卫之星”图案转变为√3×√3三角图案，为利用电子化物衬底调控CDW态提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.165109",
                arxiv: null,
                code: null
            }
        },
        {
            id: 69,
            title: "Inducing high-<em>T<sub>c</sub></em> ferromagnetism in the van der Waals crystal Mn(ReO<sub>4</sub>)<sub>2</sub> via charge doping: A first-principles study",
            authors: "Ben-Chao Gong, Huan-Cheng Yang, Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(7), 075133 (2021)",
            category: "prb",
            abstract: "本文基于密度泛函理论计算预测了具有起伏层状结构的Mn(ReO<sub>4</sub>)<sub>2</sub>在电荷注入或K插层等电子掺杂下，Re原子自旋极化可通过Mn-O-Re反铁磁超交换诱导Mn原子间的有效铁磁耦合，其居里温度可超过室温，为在含多类过渡金属的范德瓦尔斯材料中实现高温铁磁性提供了模板。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.075133",
                arxiv: null,
                code: null
            }
        },
        {
            id: 70,
            title: "First-principles study of the crystal structure, electronic structure, and transport properties of NiTe<sub>2</sub> under pressure",
            authors: "Jian-Feng Zhang, Yawen Zhao, Kai Liu, Yi Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(3), 035111 (2021)",
            category: "prb",
            abstract: "本文通过结构搜索与优化的第一性原理计算研究了高压下NiTe<sub>2</sub>的晶体结构、电子结构与输运性质，揭示了其在约10 GPa从层状P-3m1相转变为立方Pa-3相，并发现Pa-3相的霍尔电阻符号对压力与电荷掺杂敏感，为澄清实验观测差异提供了理论依据。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.035111",
                arxiv: "https://arxiv.org/abs/2107.05922",
                code: null
            }
        },
        {
            id: 71,
            title: "First-principles study of the superconductivity in LaO",
            authors: "Pei-Han Sun, Jian-Feng Zhang, Kai Liu, Qiang Han, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(4), 045121 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了岩盐结构LaO的电子结构、晶格动力学与电声耦合，揭示其超导配对属于常规BCS型且主要由重La原子的电子与声子贡献，并发现双轴拉伸应变与电子掺杂可协同提升其超导转变温度，为理解稀土二元氧化物超导体提供了理论依据。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.045121",
                arxiv: "https://export.arxiv.org/abs/2107.05898v1",
                code: null
            }
        },
        {
            id: 72,
            title: "Theoretical design of all-carbon networks with intrinsic magnetism",
            authors: "Yan Gao, Xiaolong Feng, Ben-Chao Gong, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Carbon",
            volume: "177(15), 11 (2021)",
            category: "carbon",
            abstract: "本文基于第一性原理计算提出了一种受Ovchinnikov规则启发的普适性设计策略，通过乙炔键连接不同堆叠的石墨烯层构筑了一系列具有本征磁性的二维与三维全碳网络结构，并证实了双层ALBG-C<sub>14</sub>、三层ALTG-C<sub>22</sub>与块体IALG-C<sub>30</sub>等具体实例中存在的层内铁磁与层间反铁磁耦合半导体行为。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0008622321001755",
                arxiv: "https://arxiv.org/abs/2106.12158",
                code: null
            }
        },
        {
            id: 73,
            title: "Order parameter for the multichannel Kondo model at quantum criticality",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(4), 045111 (2021)",
            category: "prb",
            abstract: "本文研究了量子临界点处多通道近藤模型的序参量。通过发展适当的理论框架，我们识别了表征量子相变的序参量性质，为理解强关联系统中的临界行为提供了新的见解。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.045111",
                arxiv: "https://arxiv.org/pdf/2201.04303",
                code: null
            }
        },
        {
            id: 74,
            title: "Topological properties of non-centrosymmetric superconductors TIr<sub>2</sub>B<sub>2</sub> (T=Nb, Ta)",
            authors: "Yan Gao, Jian-Feng Zhang, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(12), 125154 (2021)",
            category: "prb",
            abstract: "我们结合第一性原理计算和对称性分析，揭示了非中心对称超导体TIr<sub>2</sub>B<sub>2</sub> (T=Nb, Ta)在正常态为拓扑Weyl金属，具有丰富的拓扑特征（Weyl点、节线、沙漏型Weyl环和表面费米弧）。结合其本征超导性，该体系为探索三维拓扑超导提供了理论依据和潜在平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.125154",
                arxiv: "https://arxiv.org/pdf/2012.15204",
                code: null
            }
        },
        {
            id: 75,
            title: "Deconfined Quantum Phase Transition of a Higher-Order Symmetry-Protected Topological State",
            authors: "Chen Peng, Long Zhang, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(7), 075112 (2021)",
            category: "prb",
            abstract: "我们的研究揭示，在方格晶格反铁磁体中，高阶对称保护拓扑态可以通过一个直接跨越去限制量子临界点的拓扑相变进入平庸无序相。这一发现确立了去限制量子临界点作为连接传统序参量相变与拓扑相变的多临界点角色，展现了二者之间深刻的对偶性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.075112",
                arxiv: "https://arxiv.org/pdf/2010.11129",
                code: null
            }
        },
        {
            id: 76,
            title: "Large anomalous Hall effect induced by gapped nodal lines in GdZn and GdCd",
            authors: "Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(20), 205104 (2021)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现铁磁体GdZn和GdCd在费米面附近存在拓扑节线。当磁化破坏镜面对称性时，这些节线会打开带隙并产生巨大的贝里曲率，从而在其带隙内诱导出巨大的反常霍尔效应。该工作表明，此体系是研究拓扑与磁性相互作用的理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.205104",
                arxiv: "https://arxiv.org/pdf/2106.12404",
                code: null
            }
        },
        {
            id: 77,
            title: "LaO as a candidate substrate for realizing superconductivity in FeSe epitaxial film",
            authors: "Xiao-Le Qiu, Ben-Chao Gong, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(3), 035143 (2021)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现LaO(001)衬底可有效诱导外延FeSe单层膜产生强磁涨落与显著电子掺杂，且二者可能产生超导邻近效应，是研究界面超导的理想候选体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.035143",
                arxiv: "https://arxiv.org/pdf/2106.12388",
                code: null
            }
        },
        {
            id: 78,
            title: "Coexistence of topological Weyl and nodal-ring states in ferromagnetic and ferrimagnetic double perovskites",
            authors: "Xinlei Zhao, Peng-jie Guo, Fengjie Ma, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(8), 085138 (2021)",
            category: "prb",
            abstract: "我们通过理论计算预测了铁磁和亚铁磁双钙钛矿中拓扑外尔态和节点环态的共存。这项研究揭示了这些材料中丰富的拓扑相，为设计具有多功能拓扑性质的新型磁性材料指明了方向。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.085138",
                arxiv: "https://arxiv.org/pdf/2007.15699",
                code: null
            }
        },
        {
            id: 79,
            title: "Two ultra-stable novel allotropes of Tellurium few-layers",
            authors: "Cong Wang, Linlu Wu, Xieyu Zhou, Linwei Zhou, Pengjie Guo, Kai Liu, Zhong-Yi Lu, Zhihai Cheng, Yang Chai, and Wei Ji",
            year: "2020",
            journal: "Chinese Physics B",
            volume: "29(9), 097103 (2020)",
            category: "cpb",
            abstract: "理论研究发现碲少层存在两种新相（&epsilon;和&zeta;）。其中，&zeta;相比已知最稳定的单层&gamma;相能量低29 meV/Te以上，而&epsilon;相与&gamma;相稳定性相当。随着层数增加，&zeta;相与&alpha;相的能量差减小，在四层（12子层）厚度时消失，且该转变厚度在电荷掺杂下增加。&epsilon;相和&zeta;相分别为金属性链状和层状结构，&zeta;相具有强层间耦合和量子阱态。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/aba606/meta",
                arxiv: "https://arxiv.org/pdf/1809.00561",
                code: null
            }
        },
        {
            id: 80,
            title: "Natural orbitals renormalization group approach to a Kondo singlet",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "63(9), 297411 (2020)",
            category: "scpma",
            abstract: "我们利用新发展的自然轨道重整化群（NORG）方法研究了近藤单态。研究发现，在自然轨道框架下，近藤屏蔽机制变得清晰简单，存在一个主导屏蔽磁性杂质的活性自然轨道。通过引入近藤关联能，我们得到特征长度尺度（仅几纳米），解释了实验中难以探测近藤屏蔽云的原因。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-019-1520-3",
                arxiv: "https://arxiv.org/pdf/1803.03072",
                code: null
            }
        },
        {
            id: 81,
            title: "First-principles study of the robust superconducting state of NbTi alloys under ultrahigh pressures",
            authors: "Jian-Feng Zhang, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(19), 195140 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了NbTi合金在超高压下稳健超导的起源。研究发现，高压促使合金结构有序化，其超导性仍符合BCS机制。稳健的超导转变温度源于声子行为、电子耦合与库仑作用随压力的协同变化。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.195140",
                arxiv: "https://arxiv.org/pdf/2106.12371",
                code: null
            }
        },
        {
            id: 82,
            title: "SrPd, a candidate material with extremely large magnetoresistance",
            authors: "Xiao-Qin Lu, Peng-Jie Guo, Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(16), 165115 (2020)",
            category: "prb",
            abstract: "我们基于第一性原理计算提出SrPd是一种具有极大磁电阻的候选材料。计算表明其具有良好的电子-空穴补偿和高载流子迁移率，可用两带模型描述输运性质，预测其在4 T磁场下低温磁电阻可达10<sup>5</sup>%。该材料为研究XMR效应电荷补偿机制提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.165115",
                arxiv: "https://arxiv.org/pdf/2106.12410",
                code: null
            }
        },
        {
            id: 83,
            title: "First-principles study on the electron-phonon coupling and magnetoresistance of LaBi under pressure",
            authors: "Jian-Feng Zhang, Peng-Jie Guo, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(15), 155139 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了LaBi在压力下的电子-声子耦合与磁电阻。发现其在约7 GPa发生结构相变但仍保持拓扑非平庸性。计算表明弱电子-声子耦合不足以解释其超导性，且磁电阻未见抑制，这可能源于样品杂质或其他未知机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.155139",
                arxiv: "https://arxiv.org/pdf/2106.12365",
                code: null
            }
        },
        {
            id: 84,
            title: " RRuB<sub>2</sub> (R=Y, Lu), topological superconductor candidates with hourglass-type Dirac ring",
            authors: "Yan Gao, Peng-Jie Guo, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(11), 115137 (2020)",
            category: "prb",
            abstract: "我们预测RRuB<sub>2</sub>（R=Y, Lu）是拓扑超导体候选材料，具有沙漏型狄拉克环和能带反转诱导的拓扑表面态。其本征超导性（T<sub>c</sub>~10 K）可通过邻近效应在表面态诱导超导，为研究拓扑超导提供理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.115137",
                arxiv: "https://arxiv.org/pdf/2106.12220",
                code: null
            }
        },
        {
            id: 85,
            title: "Topological properties of Mo<sub>2</sub>C and W<sub>2</sub>C superconductors",
            authors: "Ning-Ning Zhao, Peng-Jie Guo, Xiao-Qin Lu, Qiang Han, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(19), 195144 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们研究了Mo<sub>2</sub>C和W<sub>2</sub>C的拓扑性质。二者均为三维强拓扑绝缘体，其(001)表面态穿过或接近费米能级，具有螺旋自旋结构，可通过邻近效应诱导p+ip超导，为探索拓扑超导与马约拉纳零模提供平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.195144",
                arxiv: "https://arxiv.org/pdf/2106.11792",
                code: null
            }
        },
        {
            id: 86,
            title: "A Model Compression Method with Matrix Product Operators for Speech Enhancement",
            authors: "Xingwei Sun, Ze-Feng Gao, Zhong-Yi Lu, Junfeng Li, and Yonghong Yan",
            year: "2020",
            journal: "IEEE-ACM Transactions on Audio, Speech, and Language Processing",
            volume: "28, 2837-2847 (2020)",
            category: "IEEE-ACM Transactions on Audio, Speech, and Language Processing",
            abstract: "本文提出一种基于矩阵乘积算子（MPO）的深度神经网络压缩方法，用于语音增强任务。该方法在训练前将网络中的权重矩阵替换为MPO分解格式，大幅减少了参数量。在MLP与LSTM模型上的实验表明，该压缩方法在各种压缩率下均优于常用的剪枝方法，且尤其适用于无云端计算的应用场景。",
            links: {
                pdf: "https://ieeexplore.ieee.org/abstract/document/9222236",
                arxiv: "https://arxiv.org/pdf/2010.04950",
                code: null
            }
        },
        {
            id: 87,
            title: "Strong-coupling superconductivity in LiB<sub>2</sub>C<sub>2</sub> trilayer films",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(9), 094501 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们预测三层LiB<sub>2</sub>C<sub>2</sub>薄膜是一种通过&sigma;电子金属化实现的高温超导体。求解各向异性Eliashberg方程表明，其常压下T<sub>c</sub>超过液氮温度，且双轴拉伸应变下可进一步提升至125 K",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.094501",
                arxiv: null,
                code: null
            }
        },
        {
            id: 88,
            title: "Quantum spin Hall effect in monolayer and bilayer TaIrTe<sub>4</sub>",
            authors: "Peng-Jie Guo, Xiao-Qin Lu, Wei Ji, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(4), 041109(R) (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算发现，单层和双层TaIrTe<sub>4</sub>均为量子自旋霍尔绝缘体。分析表明，层间相互作用与&Gamma;点小带隙诱导了双层中的能带反转，且层间距调控可实现拓扑相变。该体系为不同维度拓扑相研究提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.041109",
                arxiv: "https://arxiv.org/pdf/1910.14307",
                code: null
            }
        },
        {
            id: 89,
            title: " AFeSe<sub>2</sub> (A=Tl, K, Rb, or Cs): Iron-based superconducting analog of the cuprates",
            authors: "Xinlei Zhao, Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(18), 184504 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现AFeSe<sub>2</sub>（A=Tl, K, Rb, Cs）在晶体结构、反铁磁绝缘性和强交换作用等方面与铜氧化物母体高度相似，预测其通过掺杂可能成为铁基高温超导体。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.184504",
                arxiv: "https://arxiv.org/pdf/1910.03545",
                code: null
            }
        },
        {
            id: 90,
            title: "Combined spontaneous symmetry-breaking and symmetry-protected topological order from cluster charge interaction",
            authors: "Chen Peng, Rong-Qiang He, Yuan-Yao He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review Research",
            volume: "2(3), 033291 (2020)",
            category: "prr",
            abstract: "通过大规模量子蒙特卡洛模拟，我们发现Kane-Mele模型中团簇电荷相互作用可导致对称性保护拓扑序与Kekul&eacute;价键序共存，并驱动一种独特的拓扑相变，其特征为单粒子格林函数零点与自旋通道能隙闭合，且无平均场对应。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033291",
                arxiv: "https://arxiv.org/pdf/1909.03025",
                code: null
            }
        },
        {
            id: 91,
            title: "RSAVS superconductors: Materials with a superconducting state that is robust against large volume shrinkage",
            authors: "Cheng Huang, Jing Guo, Jianfeng Zhang, Karoline Stolze, Shu Cai, Kai Liu, Hongming Weng, Zhongyi Lu, Qi Wu, Tao Xiang, Robert J. Cava, and Liling Sun",
            year: "2020",
            journal: "Physical Review Materials",
            volume: "4(7), 071801(R) (2020)",
            category: "prm",
            abstract: "我们发现一类新型超导体（RSAVS超导体），其超导转变温度在极大压力范围内保持稳定。例如，(TaNb)<sub>0.67</sub>(HfZrTi)<sub>0.33</sub>高熵合金与NbTi合金的T<sub>c</sub>分别在超过136 GPa和141 GPa压力下几乎不变。电子结构计算表明，费米面附近d<sub>x<sup>2</sup>-y<sup>2</sup></sub>和d<sub>z<sup>2</sup></sub>轨道电子的稳定贡献是维持T<sub>c</sub>的关键。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.4.071801",
                arxiv: "https://arxiv.org/pdf/1912.10794",
                code: null
            }
        },
        {
            id: 92,
            title: "Degenerate antiferromagnetic states in spinel oxide LiV<sub>2</sub>O<sub>4</sub>",
            authors: "Ben-Chao Gong, Huan-Cheng Yang, Kui Jin, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Chinese Physics B",
            volume: "29(7), 077508 (2020)",
            category: "cpb",
            abstract: "通过自旋极化第一性原理计算，我们系统研究了尖晶石氧化物LiV<sub>2</sub>O<sub>4</sub>的磁性与电子性质。研究发现，一系列由铁磁V<sub>4</sub>四面体通过角共享反铁磁V<sub>4</sub>四面体连接而成的磁态能量简并，导致强磁挫和大磁熵。典型二四面体反铁磁态的能带分析表明，该体系处于金属-绝缘体转变边缘，且V原子的t<sub>2g</sub>与e<sub>g</sub>轨道在磁交换中作用不同，为理解其奇异磁性与重费米子行为提供了见解。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/ab9617/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 93,
            title: "Interlayer quantum transport in Dirac semimetal BaGa<sub>2</sub>",
            authors: "Sheng Xu, Changhua Bao, Peng-Jie Guo, Yi-Yan Wang, Qiao-He Yu, Lin-Lin Sun, Yuan Su, Kai Liu, Zhong-Yi Lu, Shuyun Zhou, and Tian-Long Xia",
            year: "2020",
            journal: "Nature Communications",
            volume: "11(1), 2370 (2020)",
            category: "nat-com",
            abstract: "我们报告了狄拉克半金属BaGa<sub>2</sub>中层间输运的研究。由于其准二维狄拉克锥恰好位于费米能级，体系易于达到量子极限。实验观测到由狄拉克费米子在相邻层间零级朗道能级隧穿引起的负层间磁电阻，且电阻在磁场垂直于c轴时出现峰值。该现象可由量子极限下的狄拉克费米子隧穿模型很好地解释。",
            links: {
                pdf: "https://www.nature.com/articles/s41467-020-15854-0",
                arxiv: "https://arxiv.org/pdf/1907.10702",
                code: null
            }
        },
        {
            id: 94,
            title: "Bethe-Slater-curve-like behavior and interlayer spin-exchange coupling mechanisms in two-dimensional magnetic bilayers",
            authors: "Cong Wang, Xieyu Zhou, Linwei Zhou, Yuhao Pan, Zhong-Yi Lu, Xiangang Wan, Xiaoqun Wang, and Wei Ji",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(2), 020402(R) (2020)",
            category: "prb",
            abstract: "通过第一性原理计算，我们在九种MX<sub>2</sub>（M=V, Cr, Mn; X=S, Se, Te）双层材料中发现了类似Bethe-Slater曲线的行为，即层间磁耦合随距离发生反铁磁-铁磁转变。以CrSe<sub>2</sub>为例，该转变由层间区域Se-p<sub>z</sub>波函数重叠处的泡利排斥与自旋极化电子的动能增益之间的竞争所主导。此项研究揭示了二维磁性材料中层间耦合的新机制，为调控层间磁性提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.020402",
                arxiv: "https://arxiv.org/pdf/1906.05576",
                code: null
            }
        },
        {
            id: 95,
            title: "de Haas–van Alphen quantum oscillations and electronic structure in the large-Chern-number topological chiral semimetal CoSi",
            authors: "Huan Wang, Sheng Xu, Xiao-Qin Lu, Xiao-Yan Wang, Xiang-Yu Zeng, Jun-Fa Lin, Kai Liu, Zhong-Yi Lu, and Tian-Long Xia",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(11), 114129 (2020)",
            category: "prb",
            abstract: "我们通过德哈斯-范阿尔芬量子振荡和第一性原理计算研究了大陈数拓扑手性半金属CoSi的电子结构。这项研究揭示了其独特的拓扑性质和费米面特征，为理解和利用拓扑手性材料提供了重要的实验和理论依据。",
            links: {
                pdf: null,
                arxiv: null,
                code: null
            }
        },
        {
            id: 96,
            title: "First-principles study of solid hydrogen: Comparison among four exchange-correlation functionals",
            authors: "Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu, and Hai-Qing Lin",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(17), 174109 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算重新研究了高压下固态氢的结构，比较了七种结构和四种交换关联泛函（SCAN、PBE、BLYP、vdW-DF）。研究发现，SCAN泛函在150-450 GPa压力范围内预测C2/c结构最稳定，且计算的振动频率与实验吻合，为固态氢的理论研究提供了更可靠的起点。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.174109",
                arxiv: null,
                code: null
            }
        },
        {
            id: 97,
            title: "Correlation Effects in Quadrupole Insulators: a Quantum Monte Carlo Study",
            authors: "Chen Peng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(4), 045110 (2020)",
            category: "prb",
            abstract: "我们通过大规模投影量子蒙特卡洛模拟研究了具有在位Hubbard相互作用的四极绝缘体（高阶拓扑绝缘体）。首次成功利用格林函数方法刻画了相互作用下四极绝缘体的拓扑性质。研究发现，拓扑四极绝缘体在弱相互作用下稳定，而在强相互作用下通过连续拓扑相变转变为平庸反铁磁绝缘体，其临界指数（&nu;=0.67(4)，&beta;=0.40(2)）表明属于新的普适类。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.045110",
                arxiv: "https://arxiv.org/pdf/1905.13222",
                code: null
            }
        },
        {
            id: 98,
            title: "Compressing deep neural networks by matrix product operators",
            authors: "Ze-Feng Gao, Song Cheng, Rong-Qiang He, Zhi-Yuan Xie, Hui-Hai Zhao, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review Research",
            volume: "2(2), 023300 (2020)",
            category: "prr",
            abstract: "本文提出一种利用矩阵乘积算子（MPO）压缩深度神经网络的方法。MPO 是一种源自物理学的张量网络方法，可高效表示神经网络中的线性变换层。在 FC2、LeNet-5、VGG、ResNet 和 DenseNet 等多个典型网络架构上，于 MNIST 和 CIFAR-10 数据集上的实验表明，该方法在显著减少参数量的同时，能保持甚至提升预测准确率，为构建更简洁高效的神经网络框架提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.023300",
                arxiv: "https://arxiv.org/pdf/1904.06194",
                code: null
            }
        },
        {
            id: 99,
            title: "Quasi-One-Dimensional Free-Electron-Like States Selected by Intermolecular Hydrogen Bonds at the Glycine/Cu(100) Interface*",
            authors: "Linwei Zhou, Chen-Guang Wang, Zhixin Hu, Xianghua Kong, Zhong-Yi Lu, Hong Guo, and Wei Ji",
            year: "2020",
            journal: "Chinese Physics Letters",
            volume: "37(11), 117301 (2020)",
            category: "cpl",
            abstract: "我们通过第一性原理计算研究了甘氨酸分子在Cu(100)表面形成的氢键自组装网络。研究发现，两条大致垂直的分子间氢键链选择性地与铜表面态杂化，产生了各向异性的准一维类自由电子表面态，揭示了氢键链作为电荷导体的潜在可能。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/37/11/117301",
                arxiv: null,
                code: null
            }
        },
        {
            id: 100,
            title: "Electron-phonon coupling in a honeycomb borophene grown on Al(111) surface",
            authors: "Miao Gao, Xun-Wang Yan, Jun Wang, Zhong-Yi Lu, and Tao Xiang",
            year: "2019",
            journal: "Physical Review B",
            volume: "100(2), 024503 (2019)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了Al(111)衬底上蜂窝状硼烯的电子-声子耦合。发现衬底电荷转移使&sigma;键金属化，但声子模式硬化导致耦合较弱。预测单层AlB<sub>2</sub>可能有6.5 K的超导转变，因此Al(111)上的蜂窝状硼烯也可能具有类似超导性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.024503",
                arxiv: "https://arxiv.org/pdf/1902.06276",
                code: null
            }
        },
        {
            id: 101,
            title: "Manipulating the electronic and magnetic properties of monolayer electride Ca<sub>2</sub>N by hydrogenation",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2019",
            journal: "Journal of Physical Chemistry C",
            volume: "123(40), 24698–24704 (2019)",
            category: "jpcc",
            abstract: "我们基于第一性原理计算，研究了氢化对单层驻极体Ca<sub>2</sub>N电子与磁性的调控。研究表明，单侧氢化可使其从非磁性金属转变为半导体（带隙1.13 eV），完全氢化则进一步诱发结构相变并使其转变为铁磁半金属，实现了对该材料电子态的逐级操控。",
            links: {
                pdf: "https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.9b06089",
                arxiv: null,
                code: null
            }
        },
        {
            id: 102,
            title: "Quasi-degenerate magnetic states in &alpha;-RuCl<sub>3</sub>",
            authors: "Huan-Cheng Yang, Ben-Chao Gong, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Journal of Physics: Condensed Matter",
            volume: "31(2), 025803 (2019)",
            category: "jpc",
            abstract: "基于DFT+U与自旋轨道耦合计算，我们发现&alpha;-RuCl<sub>3</sub>在U=2.0 eV、J=0.4 eV时锯齿形反铁磁为基态，但存在一系列能量相近的磁构型。调节U和J可使其与基态简并，导致强磁挫与无长程序状态，这为理解压力诱导的量子无序相提供了视角。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1361-648X/aaeeac/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 103,
            title: "Electronic structures of quasi-one-dimensional cuprate superconductors Ba<sub>2</sub>CuO<sub>3+&delta;</sub>",
            authors: "Kai Liu, Zhong-Yi Lu, and Tao Xiang",
            year: "2019",
            journal: "Physical Review Materials",
            volume: "3(4), 044802 (2019)",
            category: "prm",
            abstract: "通过第一性原理计算，我们研究了Ba<sub>2</sub>CuO<sub>3+&delta;</sub>的电子与磁结构。发现Ba<sub>2</sub>CuO<sub>3</sub>为反铁磁莫特绝缘体，具有准一维CuO链和链内反铁磁耦合；而Ba<sub>2</sub>CuO<sub>4</sub>为非磁性金属。氧空位倾向于占据平面位置，与实验一致。电荷掺杂可诱导磁涨落，表明超导配对可能主要由CuO链内的反铁磁涨落驱动。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.3.044802",
                arxiv: "https://arxiv.org/pdf/1901.11392",
                code: null
            }
        },
        {
            id: 104,
            title: "Hexagonal supertetrahedral boron: A topological metal with multiple spin-orbit-free emergent fermions",
            authors: "Yan Gao, Weikang Wu, Peng-Jie Guo, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Physical Review Materials",
            volume: "3(4), 044202 (2019)",
            category: "prm",
            abstract: "通过第一性原理计算，我们预测了一种新型三维硼同素异形体（H-硼）。该结构具有良好稳定性与优异力学性质，并且是一种具有多种无自旋轨道耦合涌现费米子的拓扑金属，包括半狄拉克费米子、三重简并费米子、节线费米子与节面费米子，为探索新型费米子物理提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.3.044202",
                arxiv: "https://arxiv.org/pdf/1901.08413",
                code: null
            }
        },
        {
            id: 105,
            title: "Finite-temperature Auxiliary-Field Quantum Monte Carlo: Self-Consistent Constraint and Systematic Approach to Low Temperatures",
            authors: "Yuan-Yao He, Mingpu Qin, Hao Shi, Zhong-Yi Lu, and Shiwei Zhang",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(4), 045108 (2019)",
            category: "prb",
            abstract: "我们提出了一种有限温度、巨正则系综下的辅助场量子蒙特卡洛（AFQMC）方法，通过自洽约束控制符号问题。该方法在二维排斥哈伯德模型（1/8掺杂）中进行了系统基准测试，达到了低至T=1/80的温度。该方法在高温下精确，在低温下与零温约束路径AFQMC的结果一致，为热力学性质的计算提供了系统准确的解决方案。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.045108",
                arxiv: "https://arxiv.org/pdf/1811.07290",
                code: null
            }
        },
        {
            id: 106,
            title: "&beta;-RhPb<sub>2</sub>, a topological superconductor candidate",
            authors: "Jian-Feng Zhang, Peng-Jie Guo, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(4), 045110 (2019)",
            category: "prb",
            abstract: "我们通过第一性原理计算预测&beta;-RhPb<sub>2</sub>是拓扑超导体候选材料。计算表明其在布里渊区Z点存在能带反转，拓扑不变量Z<sub>2</sub>非零，且具有穿过费米能级的拓扑表面态。同时，该材料动力学稳定，电子-声子耦合计算预测超导转变温度可达9.7 K，是值得实验验证的拓扑超导体。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.045110",
                arxiv: null,
                code: null
            }
        },
        {
            id: 107,
            title: "A family of high-temperature ferromagnetic monolayers with locked spin-dichroism-mobility anisotropy: MnNX and CrCX (X=Cl, Br, I; C=S, Se, Te)",
            authors: "Cong Wang, Xieyu Zhou, Linwei Zhou, Ninghua Tong, Zhong-Yi Lu, and Wei Ji",
            year: "2019",
            journal: "Science Bulletin",
            volume: "64(5), 293-300 (2019)",
            category: "sci-bull",
            abstract: "我们理论预测了一系列具有高居里温度（T<sub>c</sub>：100-500 K）的二维铁磁半导体单层MnNX与CrCX。这些材料表现出独特的自旋锁定线性二向色性与载流子迁移率各向异性（约10<sup>2</sup>量级），为高性能自旋电子与光电器件提供了新材料平台。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S2095927319301021",
                arxiv: "https://arxiv.org/pdf/1807.11000",
                code: null
            }
        },
        {
            id: 108,
            title: "Stacking tunable interlayer magnetism in bilayer CrI<sub>3</sub>",
            authors: "Peiheng Jiang, Cong Wang, Dachuan Chen, Zhicheng Zhong, Zhe Yuan, Zhong-Yi Lu, and Wei Ji",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(14), 144401 (2019)",
            category: "prb",
            abstract: "通过第一性原理计算，我们揭示了双层CrI<sub>3</sub>中层间磁耦合可通过堆垛方式有效调控。研究发现，导致反铁磁耦合的新堆垛构型（C2/m空间群）取代了此前认为的R3构型。层内与层间磁耦合分别由强、弱极限下主导的不同交换机制决定，为二维磁性材料的层间磁学调控提供了新范式。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.144401",
                arxiv: "https://arxiv.org/pdf/1806.09274",
                code: null
            }
        },
        {
        "id": 109,
        "title": "Experimental observation of bulk nodal lines and electronic surface states in ZrB<sub>2</sub>",
        "authors": "Rui Lou, Pengjie Guo, Man Li, Qi Wang, Zhonghao Liu, Shanshan Sun, Chenghe Li, Xuchuan Wu, Zilu Wang, Zhe Sun, Dawei Shen, Yaobo Huang, Kai Liu, Zhong-Yi Lu, Hechang Lei, Hong Ding, Shancai Wang",
        "year": "2018",
        "journal": "npj Quantum Materials",
        "volume": "3(1), 43 (2018)",
        "category": "npj",
        "abstract": "本文通过角分辨光电子能谱结合第一性原理计算，从体态与表面两方面为ZrB<sub>2</sub>中的节线半金属态提供了确凿的实验证据，表明ZrB<sub>2</sub>可作为探索节线费米子诱导新奇物理现象的重要平台。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41535-018-0121-4",
            "arxiv": "https://arxiv.org/pdf/1805.00827",
            "code": null
        }
    },
    {
        "id": 110,
        "title": "Author Correction: Experimental observation of bulk nodal lines and electronic surface states in ZrB<sub>2</sub>",
        "authors":  "Rui Lou, Pengjie Guo, Man Li, Qi Wang, Zhonghao Liu, Shanshan Sun, Chenghe Li, Xuchuan Wu, Zilu Wang, Zhe Sun, Dawei Shen, Yaobo Huang, Kai Liu, Zhong-Yi Lu, Hechang Lei, Hong Ding, Shancai Wang",
        "year": "2018",
        "journal": "npj Quantum Materials",
        "volume": "3(1), 50 (2018)",
        "category": "npj",
        "abstract": "本文通过角分辨光电子能谱结合第一性原理计算，从体态与表面两方面为ZrB<sub>2</sub>中的节线半金属态提供了确凿的实验证据，表明ZrB<sub>2</sub>可作为探索节线费米子诱导新奇物理现象的重要平台。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41535-018-0124-1",
            "arxiv":  "https://arxiv.org/pdf/1805.00827",
            "code": null
        }
    },
    {
        "id": 111,
        "title": "An Anderson impurity interacting with the helical edge states in a quantum spin Hall insulator",
        "authors": "Ru Zheng, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Chinese Physics Letters",
        "volume": "35(6), 067301 (2018)",
        "category": "cpl",
        "abstract": "我们采用自然轨道重整化群方法，研究了量子自旋霍尔绝缘体螺旋边缘态与安德森杂质相互作用中局域自旋的屏蔽机制，揭示了单个活性自然轨道主导的屏蔽过程及近藤共振现象。",
        "badges": [],
        "links":  {
            "pdf": "https://iopscience.iop.org/article/10.1088/0256-307X/35/6/067301",
            "arxiv": "https://arxiv.org/pdf/2201.05308",
            "code": null
        }
    },
    {
        "id": 112,
        "title": "Giant and anisotropic many-body spin-orbit tunability in a strongly correlated kagome magnet",
        "authors": "Jia-Xin Yin, Songtian S. Zhang, Hang Li, Kun Jiang, Guoqing Chang, Bingjing Zhang, Biao Lian, Cheng Xiang, Ilya Belopolski, Hao Zheng, Tyler A. Cochran, Su-Yang Xu, Guang Bian, Kai Liu, Tay-Rong Chang, Hsin Lin, Zhong-Yi Lu, Ziqiang Wang, Shuang Jia, Wenhong Wang, M. Zahid Hasan",
        "year": "2018",
        "journal": "Nature",
        "volume": "562(1), 91 (2018)",
        "category": "nature",
        "abstract": "我们系统研究了kagome铁磁体Fe<sub>3</sub>Sn<sub>2</sub>的自旋-轨道耦合效应，通过矢量磁场扫描隧道显微技术发现其多体电子态呈现巨大向列性能量响应，并观测到电子关联主导的自发向列序，揭示了该体系受磁场调控的强关联拓扑物态特性。",
        "badges": [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41586-018-0502-7",
            "arxiv": "https://arxiv.org/pdf/1810.00218",
            "code": null
        }
    },
    {
        "id": 113,
        "title": "Interaction-Induced Characteristic Length in Strongly Many-Body Localized Systems",
        "authors":  "Rong-Qiang He, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Chinese Physics Letters",
        "volume":  "35(2), 027101 (2018)",
        "category": "cpl",
        "abstract": "我们系统研究了多体局域化体系中的局域运动积分构建方法，发现相互作用会诱导出新的特征长度尺度，并严格证明了该尺度下本征态具有准乘积态结构，从而揭示了多体局域化相的非微扰特性与纠缠受限性质。",
        "badges":  [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/0256-307X/35/2/027101",
            "arxiv": "https://arxiv.org/pdf/1606.09509",
            "code": null
        }
    },
    {
        "id": 114,
        "title": "Dynamical Generation of Topological Masses in Dirac Fermions",
        "authors": "Yuan-Yao He, Xiao Yan Xu, Kai Sun, Fakher F. Assaad, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Physical Review B",
        "volume": "97(8), 081110 (2018)",
        "category": "prb",
        "abstract": "我们通过大规模无符号量子蒙特卡洛模拟，在强关联狄拉克半金属模型中首次发现了拓扑莫特绝缘体相，揭示了该相互作用驱动的拓扑态属于(2+1)维N=8手征伊辛普适类，实现了对理论预测的数值验证。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.081110",
            "arxiv": "https://arxiv.org/pdf/1705.09192",
            "code": null
        }
    },
    {
        "id": 115,
        "title": "The melilite-type compound (Sr<sub>1-x</sub>,A<sub>x</sub>)<sub>2</sub>MnGe<sub>2</sub>S<sub>6</sub>O (A=K, La) being a room temperature ferromagnetic semiconductor",
        "authors": "Huan-Cheng Yang, Ben-Chao Gong, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Science Bulletin",
        "volume":  "63(14), 887 (2018)",
        "category": "sci-bull",
        "abstract": "我们基于第一性原理预测了melilite型硫氧化物Sr<sub>2</sub>MnGe<sub>2</sub>S<sub>6</sub>O通过空穴和电子掺杂可实现居里温度超过300K的高温铁磁半导体，为探索新型自旋电子学材料提供了有效途径。",
        "badges": [],
        "links": {
            "pdf": "https://www.sciencedirect.com/science/article/abs/pii/S2095927318302585",
            "arxiv": "https://arxiv.org/pdf/1804.04519",
            "code": null
        }
    },
    {
        "id": 116,
        "title": "Magnetic interactions in a proposed diluted magnetic semiconductor (Ba<sub>1-x</sub>K<sub>x</sub>)(Zn<sub>1-y</sub>Mn<sub>y</sub>)<sub>2</sub>P<sub>2</sub>",
        "authors": "Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal":  "Chinese Physics B",
        "volume":  "27(6), 067103 (2018)",
        "category": "cpb",
        "abstract": "我们通过第一性原理计算系统研究了BaZn<sub>2</sub>P<sub>2</sub>基稀磁半导体的磁性相互作用，阐明了空穴掺杂通过p-d杂化诱导铁磁有序的机制，并揭示了压力对磁耦合强度的非单调调控规律。",
        "badges":  [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/27/6/067103",
            "arxiv": "https://arxiv.org/pdf/1804.04518",
            "code": null
        }
    },
    {
        "id": 117,
        "title": "Superconductivity in electron-doped arsenene",
        "authors": "Xin Kong, Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, Tao Xiang",
        "year": "2018",
        "journal": "Chinese Physics B",
        "volume":  "27(4), 046301 (2018)",
        "category": "cpb",
        "abstract": "我们通过第一性原理计算系统研究了电子掺杂二维砷烯的超导性，揭示了其p<sub>z</sub>电子与K点A<sub>1</sub>声子强耦合可实现高达30.8K的超导转变温度，创下二维元素超导体新纪录。",
        "badges": [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/27/4/046301",
            "arxiv": "https://arxiv.org/pdf/1801.00545",
            "code": null
        }
    },
    {
        "id": 118,
        "title": "Extremely large magnetoresistance and high-density Dirac-like fermions in ZrB<sub>2</sub>",
        "authors": "Qi Wang, Peng-Jie Guo, Shanshan Sun, Chenghe Li, Kai Liu, Zhong-Yi Lu, Hechang Lei",
        "year": "2018",
        "journal": "Physical Review B",
        "volume":  "97(20), 205105 (2018)",
        "category": "prb",
        "abstract": "我们系统研究了拓扑节线半金属ZrB<sub>2</sub>单晶的输运性质，发现其具有超大磁阻效应和电子-空穴完美补偿特征，高密度载流子与非平庸贝里相位共同揭示了狄拉克节线费米子的存在。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.205105",
            "arxiv": "https://arxiv.org/pdf/1712.03362",
            "code": null
        }
    },
    {
        "id": 119,
        "title": "Triply degenerate nodal points in RERh<sub>6</sub>Ge<sub>4</sub> (RE=Y, La, Lu)",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal":  "Physical Review B",
        "volume": "98(4), 045134 (2018)",
        "category": "prb",
        "abstract": "我们基于空间群理论预测了RERh<sub>6</sub>Ge<sub>4</sub> (RE=Y, La, Lu)为三重简并拓扑半金属，其节点位于&Gamma;-A轴且接近费米面，为研究三重简并费米子提供了理想平台。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.045134",
            "arxiv":  "https://arxiv.org/pdf/1711.03370",
            "code": null
        }
    },
    {
        "id": 120,
        "title": "Extremely Large Magnetoresistance and Electronic Structure of TmSb",
        "authors": "Yi-Yan Wang, Hongyun Zhang, Xiao-Qin Lu, Lin-Lin Sun, Sheng Xu, Zhong-Yi Lu, Kai Liu, Shuyun Zhou, Tian-Long Xia",
        "year": "2018",
        "journal": "Physical Review B",
        "volume":  "97(8), 085137 (2018)",
        "category": "prb",
        "abstract": "我们系统研究了TmSb的磁输运性质与电子结构，结合量子振荡、角分辨光电子能谱及第一性原理计算，证实其具有电子-空穴补偿和高迁移率特征，其超大磁阻源于拓扑平庸的半金属性，而非能带反转或拓扑效应。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.085137",
            "arxiv":  "https://arxiv.org/pdf/1710.08241",
            "code": null
        }
    },
    {
        "id": 121,
        "title": "Tuning the magnetism of the top-layer FeAs on BaFe<sub>2</sub>As<sub>2</sub>(001): First-principles study",
        "authors": "Bing-Jing Zhang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Physical Review B",
        "volume": "97(16), 165105 (2018)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了BaFe<sub>2</sub>As<sub>2</sub>(001)表面的磁性，发现其顶层FeAs的磁基态随表面终止原子不同而改变，且表面掺杂可显著调控自旋涨落，揭示了表面磁性对扫描隧道显微镜图像的关键影响。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.165105",
            "arxiv":  "https://arxiv.org/pdf/1708.00293",
            "code": null
        }
    },
    {
        "id": 122,
        "title": "Theoretical study of the pressure-induced topological phase transition in LaSb",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume":  "96(8), 081112 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了压力下LaSb的拓扑相变，发现其在3-4 GPa范围内保持电子-空穴补偿并发生拓扑转变，为探索拓扑性质在超大磁阻中的作用提供了理想平台。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.96.081112",
            "arxiv":  "https://arxiv.org/pdf/1706.04029",
            "code": null
        }
    },
    {
        "id": 123,
        "title": "Duality between the deconfined quantum-critical point and the bosonic topological transition",
        "authors": "Yan Qi Qin, Yuan-Yao He, Yi-Zhuang You, Zhong-Yi Lu, Arnab Sen, Anders W. Sandvik, Cenke Xu, Zi Yang Meng",
        "year": "2017",
        "journal": "Physical Review X",
        "volume": "7(3), 031052 (2017)",
        "category": "prx",
        "abstract": "我们通过量子蒙特卡洛模拟系统研究了二维共形场论中对偶性的数值验证，支持了非紧致CP<sup>1</sup>模型与QED<sub>3</sub>理论在临界点相图与指数上的对应关系，为强关联体系中的场论对偶提供了关键证据。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.7.031052",
            "arxiv": "https://arxiv.org/pdf/1705.10670",
            "code": null
        }
    },
    {
        "id": 124,
        "title": "Pair-checkerboard antiferromagnetic order in &beta;-Fe<sub>4</sub>Se<sub>5</sub> with &radic;5&times;&radic;5-ordered Fe vacancies",
        "authors": "Miao Gao, Xin Kong, Xun-Wang Yan, Zhong-Yi Lu, Tao Xiang",
        "year": "2017",
        "journal": "Physical Review B",
        "volume": "95(17), 174523 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了具有&radic;5&times;&radic;5铁空位有序的&beta;-Fe<sub>4</sub>Se<sub>5</sub>材料，发现其基态为配对棋盘反铁磁序，并揭示了该磁序与碱金属插层铁硒材料中受阻棋盘序的统一物理图像。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.174523",
            "arxiv":  "https://arxiv.org/pdf/1703.02240",
            "code": null
        }
    },
    {
        "id": 125,
        "title": "Type-II Dirac semimetals in the YPd<sub>2</sub>Sn class",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume": "95(15), 155112 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统预测了Heusler合金YPd<sub>2</sub>Sn家族中存在的洛伦兹破缺型狄拉克费米子，该材料体系同时具备超导特性，为探索超越传统狄拉克费米子的新奇物理（尤其是拓扑超导电性）提供了理想平台。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.155112",
            "arxiv": "https://arxiv.org/pdf/1612.07456",
            "code": null
        }
    },
    {
        "id": 126,
        "title": "Characterizing Many-Body Localization by Out-of-Time-Ordered Correlation",
        "authors": "Rong-Qiang He, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume":  "95(5), 054201 (2017)",
        "category": "prb",
        "abstract": "我们系统研究了多体局域化体系中的失序关联动力学，发现其长时间对数变化行为可作为特征标识，并提出以其热涨落作为序参量来精确刻画遍历-局域化相变的临界点与临界指数。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.054201",
            "arxiv": "https://arxiv.org/pdf/1608.03586",
            "code": null
        }
    },
    {
        "id": 127,
        "title": "Electronic structure of heavy fermion system CePt<sub>2</sub>In<sub>7</sub> from angle-resolved photoemission spectroscopy",
        "authors": "Bing Shen, Li Yu, Kai Liu, Shou-Peng Lyu, Xiao-Wen Jia, E. D. Bauer, J. D. Thompson, Yan Zhang, Chen-Lu Wang, Cheng Hu, Ying Ding, Xuan Sun, Yong Hu, Jing Liu, Qiang Gao, Lin Zhao, Guo-Dong Liu, Zu-Yan Xu, Chuang-Tian Chen, Zhong-Yi Lu, X J Zhou",
        "year": "2017",
        "journal": "Chinese Physics B",
        "volume":  "26(7), 077401 (2017)",
        "category": "cpb",
        "abstract": "我们通过高分辨率角分辨光电子能谱系统研究了重费米子材料CePt<sub>2</sub>In<sub>7</sub>的电子结构，实验观测到其清晰的二维费米面特征与较弱的能带重整化效应，为理解铈基重费米子体系的超导机制提供了关键信息。",
        "badges": [],
        "links":  {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/26/7/077401",
            "arxiv": "https://arxiv.org/pdf/1706.05794",
            "code": null
        }
    },
    {
        "id": 128,
        "title": "Visualizing a Bosonic Symmetry Protected Topological Phase in an Interacting Fermion Model",
        "authors": "Han-Qing Wu, Yuan-Yao He, Yi-Zhuang You, Tsuneya Yoshida, Norio Kawakami, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "94(16), 165121 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了相互作用下双层Kane-Mele-Hubbard模型的边缘物理，通过大规模量子蒙特卡洛模拟发现其费米子边缘态被相互作用打开能隙，而玻色边缘态保持无能隙，首次在格点模型中直接观测到涌现的玻色对称保护拓扑相。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.165121",
            "arxiv": "https://arxiv.org/pdf/1606.05822",
            "code": null
        }
    },
    {
        "id": 129,
        "title": "Quantum critical point of Dirac fermion mass generation without spontaneous symmetry breaking",
        "authors": "Yuan-Yao He, Han-Qing Wu, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume":  "94(24), 241111 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了(2+1)维SU(4)对称狄拉克费米子晶格模型的量子相变，发现相互作用可诱发不依赖于质量算符凝聚的能隙生成机制，为理解超越传统序参量的拓扑物态相变提供了新范例。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.241111",
            "arxiv": "https://arxiv.org/pdf/1603.08376",
            "code": null
        }
    },
    {
        "id": 130,
        "title": "Charge compensation in extremely large magnetoresistance materials LaSb and LaBi revealed by the first-principles calculations",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "93(23), 235142 (2016)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了LaSb与LaBi的电子结构，揭示了其电子-空穴完美补偿与高迁移率特征是产生超大磁阻的关键机制，为理解半金属中磁输运的普适规律提供了理论依据。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.235142",
            "arxiv":  "https://arxiv.org/pdf/1602.05061",
            "code": null
        }
    },
    {
        "id": 131,
        "title": "Diagnosis of interaction-driven topological phase via exact diagonalization",
        "authors": "Han-Qing Wu, Yuan-Yao He, Chen Fang, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review Letters",
        "volume": "117(6), 066403 (2016)",
        "category": "prl",
        "abstract": "我们系统提出了基于精确对角化的相互作用拓扑相诊断方法，通过点群算符分析与关联函数计算，揭示了弱排斥作用下可自发产生量子反常霍尔相，并观察到其与强作用向列莫特绝缘体的一阶相变。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.117.066403",
            "arxiv": "https://arxiv.org/pdf/1602.02034",
            "code": null
        }
    },
    {
        "id": 132,
        "title": "Strong charge density wave fluctuation and sliding state in PdTeI with quasi-1D PdTe chains",
        "authors": "Hechang Lei, Kai Liu, Jun-ichi Yamaura, Sachiko Maki, Youichi Murakami, Zhong-Yi Lu, Hideo Hosono",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume": "93(12), 121101(R) (2016)",
        "category": "prb",
        "abstract": "我们系统研究了准一维材料PdTeI单晶中的电荷密度波行为，发现其在长程有序温度之上存在强涨落区域与赝隙态，并在低温下出现滑动电荷密度波态及磁场诱导的异常磁阻转变。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.121101",
            "arxiv": "https://arxiv.org/pdf/1512.07375",
            "code": null
        }
    },
    {
        "id": 133,
        "title": "Topological invariants for interacting topological insulators: II. Breakdown of the Green's function formalism",
        "authors": "Yuan-Yao He, Han-Qing Wu, Zi Yang Meng, Zhong-Yi Lu",
        "year":  "2016",
        "journal": "Physical Review B",
        "volume": "93(19), 195164 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了相互作用拓扑绝缘体中格林函数形式构建拓扑不变量的适用性，通过大规模量子蒙特卡洛模拟揭示了其在无非相互作用对应的拓扑相变中会出现失效，并据此将相互作用拓扑相变分为可表征与伴随涌现临界模式两类。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.195164",
            "arxiv":  "https://arxiv.org/pdf/1512.02080",
            "code": null
        }
    },
    {
        "id": 134,
        "title": "Topological invariants for interacting topological insulators: I. Efficient numerical evaluation scheme and implementations",
        "authors": "Yuan-Yao He, Han-Qing Wu, Zi Yang Meng, Zhong-Yi Lu",
        "year":  "2016",
        "journal": "Physical Review B",
        "volume": "93(19), 195163 (2016)",
        "category": "prb",
        "abstract": "我们系统提出了相互作用拓扑绝缘体中基于单粒子格林函数的拓扑不变量高效计算方案，通过引入周期化过程克服有限尺寸效应并利用对称性优化，在二维模型验证中实现了自旋陈数的精准量化。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.195163",
            "arxiv":  "https://arxiv.org/pdf/1510.07816",
            "code": null
        }
    },
    {
        "id": 135,
        "title": "Nematic antiferromagnetic states in bulk FeSe",
        "authors": "Kai Liu, Zhong-Yi Lu, Tao Xiang",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "93(20), 205154 (2016)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了块体FeSe的磁性基态，发现其交错二聚体与三聚体反铁磁态的准简并性导致形成准一维磁涨落，为解释该材料缺乏长程磁有序及自旋驱动的向列性提供了理论依据。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.205154",
            "arxiv": "https://arxiv.org/pdf/1510.07447",
            "code": null
        }
    },
    {
        "id": 136,
        "title": "Bona fide interaction-driven topological phase transition in correlated SPT states",
        "authors": "Yuan-Yao He, Han-Qing Wu, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume": "93(11), 115150 (2016)",
        "category": "prb",
        "abstract": "我们通过解析与精确对角化方法系统研究了格子Hubbard模型中的相互作用诱导相变，首次理论预测了存在电子弱局域化时标准量子蒙特卡模拟无法探测的脆弱莫特绝缘体相。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.115150",
            "arxiv": "https://arxiv.org/pdf/1508.06389",
            "code": null
        }
    },
    {
        "id": 137,
        "title": "Accelerating optimization by tracing valley",
        "authors": "Qing-Xiao Li, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Computer Physics Communications",
        "volume":  "203(1), 168 (2016)",
        "category": "cpc",
        "abstract": "我们系统研究了针对狭窄山谷优化问题的加速算法，通过局部抛物线拟合与大步长搜索结合，在动力学平均场理论非线性拟合及经典优化问题中实现了多倍的收敛加速。",
        "badges":  [],
        "links": {
            "pdf": "https://www.sciencedirect.com/science/article/abs/pii/S0010465516300601",
            "arxiv": null,
            "code": null
        }
    },
    {
        "id": 138,
        "title": "Correlated Dirac semimetal by periodized cluster dynamical mean-field theory",
        "authors":  "Qing-Xiao Li, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "92(15), 155127 (2015)",
        "category": "prb",
        "abstract": "我们采用周期化团簇动力学平均场理论研究了蜂窝晶格哈伯德模型，发现弱相互作用下存在关联狄拉克半金属态，强相互作用下通过一阶相变转变为反铁磁绝缘体。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.155127",
            "arxiv": "https://arxiv.org/pdf/1507.02495",
            "code": null
        }
    },
    {
        "id": 139,
        "title": "First-principles study of FeSe epitaxial films on SrTiO<sub>3</sub>",
        "authors": "Kai Liu, Miao Gao, Zhong-Yi Lu, Tao Xiang",
        "year": "2015",
        "journal": "Chinese Physics B",
        "volume":  "24(11), 117402 (2015)",
        "category": "cpb",
        "abstract": "我们系统综述了基于第一性原理计算的FeSe/SrTiO<sub>3</sub>薄膜电子与磁结构研究，重点阐明了电荷、自旋及晶格振动的耦合机制，并对比了单层与双层体系的差异。",
        "badges": [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/24/11/117402",
            "arxiv": "https://arxiv.org/pdf/1510.08630",
            "code": null
        }
    },
    {
        "id": 140,
        "title": "Antiperovskite Chalco-Halides Ba<sub>3</sub>(FeS<sub>4</sub>)Cl, Ba<sub>3</sub>(FeS<sub>4</sub>)Br and Ba<sub>3</sub>(FeSe<sub>4</sub>)Br with Spin Super-Super Exchange",
        "authors": "Kai Liu, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Scientific Reports",
        "volume": "5(1), 15910 (2015)",
        "category": "sr",
        "abstract": "我们发现了三种新型反钙钛矿硫卤化物，兼具良好的太阳能吸收特性与超长程（>6&Aring;）反铁磁序，并通过中子衍射与第一性原理计算揭示了其独特的超超交换机制。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/srep15910",
            "arxiv":"https://arxiv.org/pdf/1604.02044",
            "code": null
        }
    },
    {
        "id": 141,
        "title": "Quantum Monte Carlo study of strange correlator in interacting topological insulators",
        "authors": "Han-Qing Wu, Yuan-Yao He, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2015",
        "journal":  "Physical Review B",
        "volume": "92(16), 165123 (2015)",
        "category": "prb",
        "abstract": "我们系统研究了奇异关联子对相互作用拓扑相的诊断能力，通过大规模量子蒙特卡洛模拟揭示了其在探测量子自旋霍尔-莫特绝缘体相变中的有效性，为研究相互作用拓扑系统提供了高效可靠的数值方法。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.165123",
            "arxiv": "https://arxiv.org/pdf/1506.00549",
            "code": null
        }
    },
    {
        "id": 142,
        "title": "First-principles study of magnetic frustration in FeSe epitaxial films on SrTiO<sub>3</sub>",
        "authors": "Kai Liu, Bing-Jing Zhang, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "91(4), 045107 (2015)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算研究了SrTiO<sub>3</sub>衬底上FeSe薄膜的磁性，发现电子掺杂与声子振动共同诱导磁挫败，且底层更易受影响，该结果与已有实验相吻合。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.045107",
            "arxiv": "https://arxiv.org/pdf/1501.03923",
            "code": null
        }
    },
    {
        "id": 143,
        "title": "Natural Orbitals Renormalization Group Approach to the Two-Impurity Kondo Critical Point",
        "authors": "Rong-Qiang He, Jianhui Dai, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "91(15), 155140 (2015)",
        "category": "prb",
        "abstract": "我们采用自然轨道重整化群方法系统研究了双杂质近藤模型，确认了其反铁磁侧存在量子临界点，解决了数值重整化群与量子蒙特卡洛方法间的长期争议，揭示了其与局域费米液体理论的关联。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.155140",
            "arxiv":  "https://arxiv.org/pdf/1501.01834",
            "code": null
        }
    },
    {
        "id": 144,
        "title": "Theoretical prediction of fragile Mott insulators on plaquette Hubbard lattices",
        "authors": "Han-Qing Wu, Rong-Qiang He, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume": "91(12), 125128 (2015)",
        "category": "prb",
        "abstract": "我们通过动力学平均场理论系统研究了两种格点Hubbard模型的相图，首次发现了一种具有非平庸点群表示的脆弱莫特绝缘体，并揭示了其金属-绝缘体相变由相互作用诱导的能带分裂所表征。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.125128",
            "arxiv":  "https://arxiv.org/pdf/1412.7360",
            "code": null
        }
    },
    {id: 145,
            title: "Prediction of phonon-mediated high-temperature superconductivity in Li<sub>3</sub>B<sub>4</sub>C<sub>2</sub>",
            authors: "Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2015",
            journal: "Physical Review B",
            volume: "91(4), 045132 (2015)",
            category: "prb",
            abstract: "该研究基于第一性原理，预测了层状材料Li<sub>3</sub>B<sub>4</sub>C<sub>2</sub>具有强电子–声子耦合并可能实现高于MgB<sub>2</sub>的超导转变温度，其超导性源于费米能级附近的两条&sigma;键带与层内键伸缩模的强耦合，且材料在动力学和形成能上均显示出可实验合成的稳定性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.045132",
                arxiv: null,
                code: null
            }
        },
        {
            id: 146,
            title: "First-principles study of electron-phonon coupling and superconductivity in compound Li<sub>2</sub>C<sub>2</sub>",
            authors: "Miao Gao, Xin Kong, Zhong-Yi Lu, and Tao Xiang",
            year: "2015",
            journal: "Acta Physica Sinica",
            volume: "64(21), 214701 (2015)",
            category: "Acta Physica Sinica",
            abstract: "该研究基于第一性原理揭示含一维锯齿碳链的高压相Cmcm-Li<sub>2</sub>C<sub>2</sub>具有由&pi;<sup>*</sup>带主导的金属性并呈现中等强度的电子-声子耦合，预测其在常压与 5 GPa 下分别可实现约 13.2 K 与 9.8 K 的声子介导超导性，若获实验验证其将成为首个一维碳链超导体且在锂碳化物体系中具有最高超导转变温度。",
            links: {
                pdf: "https://wulixb.iphy.ac.cn/en/article/doi/10.7498/aps.64.214701",
                arxiv: null,
                code: null
            }
        },
        {
            id: 147,
            title: "Neutron Scattering Measurements of Spatially Anisotropic Magnetic Exchange Interactions in Semiconducting K<sub>0.85</sub>Fe<sub>1.54</sub>Se<sub>2</sub> (T<sub>N</sub>=280 K)",
            authors: "Jun Zhao, Yao Shen, R. J. Birgeneau, Miao Gao, Zhong-Yi Lu, D. -H. Lee, X. Z. Lu, H. J. Xiang, D. L. Abernathy, and Y. Zhao",
            year: "2014",
            journal: "Physical Review Letters",
            volume: "112(17), 177002 (2014)",
            category: "prl",
            abstract: "本工作通过中子散射研究半导体K<sub>0.85</sub>Fe<sub>1.54</sub>Se<sub>2</sub>的条纹反铁磁序的自旋激发，结果表明其自旋波谱可用具有高度各向异性面内耦合的有效海森堡哈密顿量精确描述，这暗示了铁基化合物的反铁磁性可能源于局部强关联效应而非弱耦合费米面嵌套。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.177002",
                arxiv: "https://arxiv.org/pdf/1405.4737",
                code: null
            }
        },
        {
            id: 148,
            title: "Quantum Renormalization Groups Based on Natural Orbitals",
            authors: "Rong-Qiang He and Zhong-Yi Lu",
            year: "2014",
            journal: "Physical Review B",
            volume: "89(8), 085108 (2014)",
            category: "prb",
            abstract: "该研究在自然轨道框架下推广量子重整化群方法至一般轨道空间，并在四杂质簇模型中与精确对角化对比验证其有效性，同时提出显著提升计算效率的捷径，并讨论其对簇DMFT及多杂质/多轨道Kondo问题的潜在影响。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.89.085108",
                arxiv: "https://arxiv.org/pdf/1306.3662",
                code: null
            }
        },
        {
            id: 149,
            title: "Electronic transport of a large scale system studied by renormalized transfer matrix method: application to armchair graphene nanoribbons between quantum wires",
            authors: "Miao Gao, Gui-Ping Zhang, Zhong-Yi Lu",
            year: "2014",
            journal: "Computer Physics Communications",
            volume: "185(3), 856 (2014)",
            category: "cpc",
            abstract: "该研究提出重整化传输矩阵方法以克服传统 TMM 在大尺度二维体系中的数值不稳定问题，将计算复杂度降至O(W<sup>3</sup>)，并成功用于含多达10<sup>6</sup>个碳原子的扶手椅石墨烯纳米带，揭示其纯态的弹道传输行为及长程相关无序诱导的金属–绝缘体转变，并表明该方法可推广至更一般的大尺度结构。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0010465513004189",
                arxiv: "https://arxiv.org/pdf/1305.6682",
                code: null
            }
        },
        {
            id: 150,
            title: "Layered pnictide-oxide Na<sub>2</sub>Ti<sub>2</sub>Pn<sub>2</sub>O (Pn=As, Sb): a paradigm for spin density waves",
            authors: "Xun-Wang Yan and Zhong-Yi Lu",
            year: "2013",
            journal: "Journal of Physics: Condensed Matter",
            volume: "25(36), 365501 (2013)",
            category: "Journal of Physics: Condensed Matter",
            abstract: "该研究通过第一性原理揭示 Na<sub>2</sub>Ti<sub>2</sub>Pn<sub>2</sub>O（Pn = As, Sb）兼具铜氧化物与铁基材料结构特征，并分别呈现阻塞式棋盘反铁磁半导体（As）与双条纹反铁磁半金属（Sb）基态，均由强费米面嵌套驱动的自旋密度波形成，其中 As 化合物还伴随与实验一致的四聚体结构畸变且保持空间群对称性。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-8984/25/36/365501",
                arxiv: "https://arxiv.org/pdf/1210.3481v1",
                code: null
            }
        },
        {
            id: 151,
            title: "Influence of spin-phonon coupling on antiferromagnetic spin fluctuations in FeSe under pressure: First-principles calculations with van der Waals corrections",
            authors: "Qian-Qian Ye, Kai Liu, and Zhong-Yi Lu",
            year: "2013",
            journal: "Physical Review B",
            volume: "88(20), 205130 (2013)",
            category: "prb",
            abstract: "该研究表明，在压力下 &beta;-FeSe 的 Fe-3d 能带与光学声子频率均发生显著变化，其中与 Se 高度相关的 A<sub>1</sub>g 模式在 5–6 GPa 出现频率突变，并在同一区间导致最强的局域磁矩零点振动波动，与实验中 T<sub>c</sub> 的最高压力范围一致，表明自旋-声子耦合在铁基超导机制中不可忽略。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.88.205130",
                arxiv: "https://arxiv.org/pdf/1309.2492",
                code: null
            }
        },
        {
            id: 152,
            title: "Spin Wave Excitations in AFe<sub>1.5</sub>Se<sub>2</sub> (A=K, Tl): Analytical Study",
            authors: "Miao Gao, Xun-Wang Yan, and Zhong-Yi Lu",
            year: "2013",
            journal: "Journal of Physics: Condensed Matter",
            volume: "25(3), 036004 (2013)",
            category: "Journal of Physics: Condensed Matter",
            abstract: "该研究解析了 AFe<sub>1.5</sub>Se<sub>2</sub>(A = K, Tl)在 4&times;2 共线反铁磁序中的自旋波谱，得到一条声学支与两条简并光学支，并基于第一性原理提取交换参数、量化量子涨落与其对自旋各向异性的敏感性，并计算自旋动力学结构因子以联系中子散射实验。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-8984/25/3/036004",
                arxiv: "https://arxiv.org/pdf/1210.2668",
                code: null
            }
        },
        {
            id: 153,
            title: "Atomic and electronic structures of FeSe monolayer and bilayer thin films on SrTiO<sub>3<>/sub (001): a first-principles study",
            authors: "Kai Liu, Zhong-Yi Lu, and Tao Xiang",
            year: "2012",
            journal: "Physical Review B",
            volume: "85(23), 235123 (2012)",
            category: "prb",
            abstract: "第一性原理计算研究表明，在 SrTiO<sub>3<>/sub (001) 衬底上的 FeSe 单层和双层薄膜表现为具有共线反铁磁序的轻微掺杂半导体，其费米面主要由 Fe-3d 轨道贡献，且 FeSe 的能带位置会随衬底（例如电子掺杂的 TiO<sub>2</sub> 终止的 SrTiO<sub>3</sub>）的不同而变化。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.85.235123",
                arxiv: "https://arxiv.org/pdf/1202.0538",
                code: null
            }
        },
        {
            id: 154,
            title: "Cluster dynamical mean field theory of quantum phases on a honeycomb lattice",
            authors: "Rong-Qiang He and Zhong-Yi Lu",
            year: "2012",
            journal: "Physical Review B",
            volume: "86(4), 045105 (2012)",
            category: "prb",
            abstract: "该工作基于蜂窝状晶格半满 Hubbard 模型的团簇动力学平均场理论计算发现，该体系在 Hubbard 相互作用 U 从 0 到 U<sub>c</sub>（在 4.6t 和 4.85t 之间）的基态存在一个自旋液体相，且在 U<sub>c</sub> 处向 N&eacute;el 反铁磁 Mott 绝缘相的转变是一级量子相变，其中电荷波动对稳定自旋液体相起着关键作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.045105",
                arxiv: "https://arxiv.org/pdf/1112.5124",
                code: null
            }
        },
        {
            id: 155,
            title: "Exact Results for Intrinsic Electronic Transport in Graphene",
            authors: "Shi-Jie Hu, Wei Du, Gui-Ping Zhang, Miao Gao, Zhong-Yi Lu, and Xiao-Qun Wang",
            year: "2012",
            journal: "Chinese Physics Letters",
            volume: "29(5), 057201 (2012)",
            category: "cpl",
            abstract: "该工作使用传输矩阵方法得到了连接到两个金属电极的石墨烯片电子输运特性的精确结果，发现在宽长比很大的极限下，armchair型石墨烯的狄拉克点电导率为 2e<sup>2</sup>/(&radic;<span style='text-decoration: overline'>3</span>h)，次泊松分布 Fano 因子约为 0.346，而zigzag型石墨烯的电导率为 0 且 Fano 因子为 1，这些结果反映了石墨烯拓扑结构和电极电子结构的关键影响。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/29/5/057201",
                arxiv: "https://arxiv.org/pdf/1111.4862",
                code: null
            }
        },
        {
            id: 156,
            title: "First-principles study of Fe-based superconductors: A comparison of screened hybrid functional with gradient corrected functional",
            authors: "Kai Liu and Zhong-Yi Lu",
            year: "2011",
            journal: "Computational Materials Science",
            volume: "55(1), 284 (2011)",
            category: "cms",
            abstract: "本研究利用第一性原理杂化泛函计算方法，成功修正了传统LDA和GGA方法在研究BaFe<sub>2</sub>As<sub>2</sub>和&beta;-FeSe这两种铁基超导体材料时出现的半金属态和磁矩低估问题，揭示了强关联体系中交换作用的关键作用。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0927025611006367",
                arxiv: null,
                code: null
            }
        },
        {
            id: 157,
            title: "Pressure- and temperature-induced structural phase transitions of CaFe<sub>2</sub>As<sub>2</sub> and BaFe<sub>2</sub>As<sub>2</sub> studied in the Hund's rule correlation picture",
            authors: "Wei Ji, Xun-Wang Yan, and Zhong-Yi Lu",
            year: "2011",
            journal: "Physical Review B",
            volume: "83(13), 132504 (2011)",
            category: "prb",
            abstract: "本研究基于洪特规则关联图像，成功解释了CaFe<sub>2</sub>As<sub>2</sub>中观察到的特殊塌缩四方相变，并预测了BaFe<sub>2</sub>As<sub>2</sub>在不同压力下的相图，揭示了这类化合物中晶体结构、磁性和电子结构之间的复杂关联。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.83.132504",
                arxiv: "https://arxiv.org/pdf/1007.4766",
                code: null
            }
        },
        {
            id: 158,
            title: "Pnicogen-bridged antiferromagnetic superexchange interactions in iron pnictides",
            authors: "Zhong-Yi Lu, Fengjie Ma, and Tao Xiang",
            year: "2011",
            journal: "Journal of Physics and Chemistry of Solids",
            volume: "72(5), 319 (2011)",
            category: "Journal of Physics and Chemistry of Solids",
            abstract: "本文通过精细的第一性原理电子结构计算，不仅阐述了铁基超导体LaFeAsO和$BaFe<sub>2</sub>As<sub>2</sub>的预测磁性结构，更深入讨论了铁砷化物中由砷桥联的最近邻铁原子间反铁磁超交换作用所决定的磁性起源，并探讨了它与超导性之间的关联。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0022369710003690",
                arxiv: "https://arxiv.org/pdf/1009.0726",
                code: null
            }
        },
        {
            id: 159,
            title: "Superconductivity mediated by the antiferromagnetic spin-wave in chalcogenide iron-base superconductors",
            authors: "GuangMing Zhang, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "84(5), 052502 (2011)",
            category: "prb",
            abstract: "本研究提出K<sub>0.8+x</sub>Fe<sub>1.6+y</sub>Se<sub>2</sub>等铁基硒化物超导体的基态由掺杂反铁磁半导体模型哈密顿量描述，并证明超导性是由相干自旋波激发介导的有效配对势驱动的，从而自然解释了实验中观察到的超导与反铁磁长程有序的共存现象。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.84.052502",
                arxiv: "https://arxiv.org/pdf/1102.4575",
                code: null
            }
        },
        {
            id: 160,
            title: "Electronic structures and magnetic orders of Fe-vacancies ordered ternary iron selenides TlFe<sub>1.5</sub>Se<sub>2</sub> and AFe<sub>1.5</sub>Se<sub>2</sub> (A=K, Rb, or Cs)",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review Letters",
            volume: "106(8), 087005 (2011)",
            category: "prl",
            abstract: "通过第一性原理电子结构计算，本文发现TlFe<sub>1.5</sub>Se<sub>2</sub>基态为具有94 meV能隙的准二维共线反铁磁半导体，且其反铁磁序由硒桥联的超交换作用驱动；同时预测AFe<sub>1.5</sub>Se<sub>2</sub>（A = K, Rb, 或 Cs）也为反铁磁半导体，但因与零能隙或半金属态近简并而可能展现出复杂的物理特性和相图。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.106.087005",
                arxiv: "https://arxiv.org/pdf/1012.6015",
                code: null
            }
        },
        {
            id: 161,
            title: "Ternary iron selenide K<sub>0.8</sub>Fe<sub>1.6</sub>Se<sub>2</sub> is an antiferromagnetic semiconductor",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "83(23), 233205 (2011)",
            category: "prb",
            abstract: "这项研究利用第一性原理计算，确定了 K<sub>0.8</sub>Fe<sub>1.6</sub>Se<sub>2</sub> 的基态是由化学键驱动四聚体晶格畸变形成的准二维受阻棋盘状反铁磁半导体，并提出应将其（而非 KFe<sub>2</sub>Se<sub>2</sub>）视为超导电性出现的真正母体化合物。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.83.233205",
                arxiv: "https://arxiv.org/pdf/1102.2215",
                code: null
            }
        },
        {
            id: 162,
            title: "Electronic and magnetic structures of ternary iron selenides AFe<sub>2</sub>Se<sub>2</sub> (A=K, Cs, or Tl)",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "84(5), 054502 (2011)",
            category: "prb",
            abstract: "本研究利用第一性原理计算揭示了三元铁硒化物 AFe<sub>2</sub>Se<sub>2</sub>（A = Cs、Rb、K 或 Tl）的基态是由 Se 4p 轨道介导的超交换相互作用导致的双共线反铁磁序，并确定了其在不同磁性状态下的电子结构及物理性质。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.84.054502",
                arxiv: "https://arxiv.org/pdf/1012.5536",
                code: null
            }
        },
        {
            id: 163,
            title: "The Electron Pairing of K<sub>x</sub>Fe<sub>2-y</sub>Se<sub>2</sub>",
            authors: "Fa Wang, Fan Yang, Miao Gao, Zhong-Yi Lu, Tao Xiang, and Dung-Hai Lee",
            year: "2011",
            journal: "Europhysics Letters",
            volume: "93(5), 57003 (2011)",
            category: "epl",
            abstract: "本研究利用两阶段功能重整化群方法研究了 K<sub>x</sub>Fe<sub>2-y</sub>Se<sub>2</sub> 的配对不稳定性，结果表明尽管缺乏空穴费米面，深埋的空穴带仍起到重要作用，导致该体系的低能有效相互作用可用以最近邻反铁磁相互作用 J<sub>1</sub> 为主的 J<sub>1</sub>-J<sub>2</sub> 模型描述，且其主导配对对称性为无节点的 d<sub>x<sup>2</sup>-y<sup>2</sup></sub> 波。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1209/0295-5075/93/57003",
                arxiv: "https://arxiv.org/pdf/1101.4390",
                code: null
            }
        },
        {
            id: 164,
            title: "Pressure-induced isostructural phase transition and correlation of FeAs coordination with the superconducting properties of 111-type Na<sub>1-x</sub>FeAs",
            authors: "Qingqing Liu, Xiaohui Yu, Xiancheng Wang, Zheng Deng, Yuxi Lv, Jinlong Zhu, Sijia Zhang, Haozhe Liu, Wenge Yang, Lin Wang, Hokwang Mao, Guoyin Shen, Zhong-Yi Lu, Yang Ren, Zhiqiang Chen, Zhijun Lin, Yusheng Zhao, Changqing Jin",
            year: "2011",
            journal: "Journal of the American Chemical Society",
            volume: "133(20), 7892 (2011)",
            category: "jacs",
            abstract: "本研究利用原位高压同步辐射X射线衍射技术揭示了111型 Na<sub>1–x</sub>FeAs 体系中存在压力诱导的四方到四方等结构相变，并发现超导转变温度 T<sub>c</sub> 随压力的非单调变化与 As 阴离子高度及 As–Fe–As 键角的结构异常密切相关。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/ja2009949",
                arxiv: "https://arxiv.org/pdf/1106.5640",
                code: null
            }
        },
        {
            id: 165,
            title: "Surface structures of ternary iron arsenides AFe<sub>2</sub>As<sub>2</sub> (A=Ba, Sr, or Ca)",
            authors: "Miao Gao, Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2010",
            journal: "Physical Review B",
            volume: "81(19), 193409 (2010)",
            category: "prb",
            abstract: "本研究通过第一性原理计算发现 AFe<sub>2</sub>As<sub>2</sub>(001) 解理面在能量上最倾向于形成具有 &radic;<span style='text-decoration: overline'>2</span>&times;&radic;<span style='text-decoration: overline'>2</span> 或 1&times;2 重构序的 A 端面，并阐明了 BaFe<sub>2</sub>As<sub>2</sub> 表面原子结构与 STM 图像之间的对应关系，从而解决了实验观测中的争议。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.193409",
                arxiv: null,
                code: null
            }
        },
        {
            id: 166,
            title: "Electronic structures of ternary iron arsenides AFe<sub>2</sub>As<sub>2</sub> (A=Ba, Ca, or Sr)",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2010",
            journal: "Frontiers of Physics in China",
            volume: "5(2), 150 (2010)",
            category: "Frontiers of Physics in China",
            abstract: "本研究利用第一性原理密度泛函理论研究了三元铁砷化物 AFe<sub>2</sub>As<sub>2</sub>（A = Ba、Ca 或 Sr），发现由 As 4p 轨道介导的超交换相互作用导致其基态呈共线反铁磁序，且压力能显著抑制磁矩，最终提出可用 t-J<sub>H</sub>-J<sub>1</sub>-J<sub>2</sub> 模型描述其低能动力学。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11467-009-0076-9",
                arxiv: "https://arxiv.org/pdf/0806.3526",
                code: null
            }
        },
        {
            id: 167,
            title: "Surface and bulk electronic structures of LaFeAsO studied by angle-resolved photoemission spectroscopy",
            authors: "L. X. Yang, B. P. Xie, Y. Zhang, C. He, Q. Q. Ge, X. F. Wang, X. H. Chen, M. Arita, J. Jiang, K. Shimada, M. Taniguchi, I. Vobornik, G. Rossi, J. P. Hu, D. H. Lu, Z. X. Shen, Zhong-Yi Lu, and D. L. Feng",
            year: "2010",
            journal: "Physical Review B",
            volume: "82(10), 104519 (2010)",
            category: "prb",
            abstract: "本研究利用角分辨光电子能谱分析了铁砷超导母体 LaFeAsO 的电子结构，通过区分体态与表面态贡献，揭示了体能带在自旋密度波转变处约 25 meV 的位移及其对结构相变的关键作用，并观测到低温下显著的准粒子峰及表面能带中可能源于电子-声子相互作用的扭结结构。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.82.104519",
                arxiv: null,
                code: null
            }
        },
        {
            id: 168,
            title: "Electronic structure of Fe<sub>1.04</sub>(Te<sub>0.66</sub>Se<sub>0.34</sub>)",
            authors: "Fei Chen, Bo Zhou, Yan Zhang, Jia Wei, Hong-Wei Ou, Jia-Feng Zhao, Cheng He, Qing-Qin Ge, Masashi Arita, Kenya Shimada, Hirofumi Namatame, Masaki Taniguchi, Zhong-Yi Lu, Jiangping Hu, Xiao-Yu Cui, and D. L. Feng",
            year: "2010",
            journal: "Physical Review B",
            volume: "81(1), 014526 (2010)",
            category: "prb",
            abstract: "本研究利用高分辨率角分辨光电子能谱结合密度泛函理论计算，揭示了铁硫族超导体 Fe<sub>1.04</sub>(Te<sub>0.66</sub>Se<sub>0.34</sub>) 的电子结构，发现尽管存在约三倍的能带重整化，其能带对称性及布里渊区中心的三个空穴型费米面（含一椭圆形费米面）特征与理论预测定性一致，且未观测到自旋密度波迹象。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.014526",
                arxiv: "https://arxiv.org/pdf/1001.0855",
                code: null
            }
        },
        {
            id: 169,
            title: "Microstructure and superconductivity of Ir-doped BaFe<sub>2</sub>As<sub>2</sub> superconductor",
            authors: "X. L. Wang, H. Y. Shi, X.W. Yan, Y. C. Yuan, Zhong-Yi Lu, X. Q. Wang, T.-S. Zhao",
            year: "2010",
            journal: "Applied Physics Letters",
            volume: "96(1), 012507 (2010)",
            category: "apl",
            abstract: "本研究通过多种表征手段研究了 Ba(Fe<sub>1-x</sub>Ir<sub>x</sub>)<sub>2</sub>As<sub>2</sub> 多晶样品，发现在 x = 0.10 时样品具有 T<sub>C</sub> 约为 28 K 的体超导电性（为目前已报道电子掺杂 AFe<sub>2</sub>As<sub>2</sub> 型超导体中最高值）以及高达 65 T 的上临界场 H<sub>c2</sub>(0)。",
            links: {
                pdf: "https://pubs.aip.org/aip/apl/article-abstract/96/1/012507/118883/Microstructure-and-superconductivity-of-Ir-doped",
                arxiv: "https://arxiv.org/pdf/0912.4113",
                code: null
            }
        },
        {
            id: 170,
            title: "Raman phonons of &alpha;-FeTe and Fe<sub>1.03</sub>Se<sub>0.3</sub>Te<sub>0.7</sub> single crystals",
            authors: "Tian-Long Xia, D. Hou, S. C. Zhao, A. M. Zhang, G. F. Chen, J. L. Luo, N. L. Wang, J. H. Wei, Zhong-Yi Lu, Q. M. Zhang",
            year: "2009",
            journal: "Physical Review B",
            volume: "79(14), 140510(R) (2009)",
            category: "prb",
            abstract: "本研究通过测量单晶的偏振拉曼散射光谱并结合第一性原理计算，发现母体 &alpha;-FeTe 呈现清晰的 Te 原子 A<sub>1g</sub> 和 Fe 原子 B<sub>1g</sub> 模，而超导体 Fe<sub>1.03</sub>Se<sub>0.3</sub>Te<sub>0.7</sub> 仅显示软化的 Fe B<sub>1g</sub> 模，且虽然两者均未显现电子-声子耦合特征，但超导体在 300 cm<sup>-1</sup> 以下展现出可能源于电子贡献的微弱增强。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.79.140510",
                arxiv: "https://arxiv.org/pdf/0811.2350",
                code: null
            }
        },
        {
            id: 171,
            title: "First-Principles Calculations of the Electronic Structure of Tetragonal &alpha;-FeTe and &alpha;-FeSe Crystals: Evidence for a Bicollinear Antiferromagnetic Order",
            authors: "Fengjie Ma, Wei Ji, Jiangping Hu, Zhong-Yi Lu, and Tao Xiang",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "102(17), 177003 (2009)",
            category: "prl",
            abstract: "本研究通过第一性原理计算发现，PbO 型四方相 &alpha;-FeTe 的基态是由 Te 5p 能带介导的最近邻、次近邻及次次近邻超交换相互作用竞争导致的双共线反铁磁序，而 &alpha;-FeSe 则呈现与 LaFeAsO 及 BaFe<sub>2</sub>As<sub>2</sub> 类似的共线反铁磁序，从而为理解铁基超导体的磁有序起源提供了新视角。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.177003",
                arxiv: null,
                code: null
            }
        },
        {
            id: 172,
            title: "Universal linear-temperature dependence of static magnetic susceptibility in iron pnictides",
            authors: "G. M. Zhang, Y. H. Su, Zhong-Yi Lu, Z. Y. Weng, D. H. Lee and T. Xiang",
            year: "2009",
            journal: "Europhysics Letters",
            volume: "86(3), 37006 (2009)",
            category: "epl",
            abstract: "本研究针对铁磷族化合物非磁性正常态中均匀磁化率表现出的普适线性温度依赖行为，提出该现象源于存在一个宽反铁磁涨落窗口，在此窗口内局域自旋密度波关联已存在但尚未建立全局方向序。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1209/0295-5075/86/37006",
                arxiv: "https://arxiv.org/pdf/0809.3874",
                code: null
            }
        },
        {
            id: 173,
            title: "Electronic Structure and Unusual Exchange Splitting in the Spin-Density-Wave State of the BaFe<sub>2</sub>As<sub>2</sub> Parent Compound of Iron-Based Superconductors",
            authors: "L. X. Yang, Y. Zhang, H. W. Ou, J. F. Zhao, D. W. Shen, B. Zhou, J. Wei, F. Chen, M. Xu, C. He, Y. Chen, Z. D. Wang, X. F. Wang, T. Wu, G. Wu, X. H. Chen, M. Arita, K. Shimada, M. Taniguchi, Zhong-Yi Lu, T. Xiang, and D. L. Feng",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "102(10), 107002 (2009)",
            category: "prl",
            abstract: "本研究报道了对铁基超导体母体化合物 BaFe<sub>2</sub>As<sub>2</sub> 电子结构的首次直接测量，表明其自旋密度波能量的降低主要源于能带结构的奇异交换分裂，为后续研究奠定了基础。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.107002",
                arxiv: "https://arxiv.org/pdf/0806.2627",
                code: null
            }
        },
        {
            id: 174,
            title: "&pi;-Junction to Probe Antiphase s-Wave Pairing in Iron Pnictide Superconductors",
            authors: "Wei-Qiang Chen, Fengjie Ma, Zhong-Yi Lu, and Fu-Chun Zhang",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "103(20), 207001 (2009)",
            category: "prl",
            abstract: "本研究通过分析具有反相 <i>s</i> 波配对的 FeAs 基超导体与常规 <i>s</i> 波超导体构成的约瑟夫森结，发现平面结的平移不变性显著增强了电子费米囊对临界电流的贡献，且在宽掺杂区内平面结与点接触结具有相反相位，从而提出利用 &pi; 相位三结环来探测这种反相配对特性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.103.207001",
                arxiv: "https://arxiv.org/pdf/0906.0169",
                code: null
            }
        },
        {
            id: 175,
            title: "Raman spectra in iron-based quaternary CeO<sub>1−x</sub>F<sub>x</sub>FeAs and LaO<sub>1−x</sub>F<sub>x</sub>FeAs",
            authors: "S. C. Zhao, D. Hou, Y. Wu, T. L. Xia, A. M. Zhang, G. F. Chen, J. L. Luo, N. L. Wang, J. H. Wei, Zhong-Yi Lu, and Q. M. Zhang",
            year: "2009",
            journal: "Superconductor Science and Technology",
            volume: "22(1), 015017 (2009)",
            category: "Superconductor Science and Technology",
            abstract: "本研究通过对铁基四元化合物 CeO<sub>1-x</sub>F<sub>x</sub>FeAs 和 LaO<sub>1-x</sub>F<sub>x</sub>FeAs 进行拉曼光谱测量及第一性原理计算，指认了声子模式，发现 F 掺杂主要抑制 La 系中与 La 相关的 E<sub>g</sub> 和 A<sub>1g</sub> 模，而在 Ce 系中观测到位于 450 cm<sup>-1</sup> 附近的尖锐氧 E<sub>g</sub> 模，且 500 cm<sup>-1</sup> 以上的高能特征可能源于多声子过程、磁涨落或 d 轨道带间跃迁。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-2048/22/1/015017",
                arxiv: "https://arxiv.org/pdf/0806.0885",
                code: null
            }
        },
        {
            id: 176,
            title: "Iron-based layered compound LaFeAsO is an antiferromagnetic semimetal",
            authors: "Fengjie Ma and Zhong-Yi Lu",
            year: "2008",
            journal: "Physical Review B",
            volume: "78(3), 033111 (2008)",
            category: "prb",
            abstract: "本研究表明铁基超导母体 LaFeAsO 是一种准二维反铁磁半金属，其源于费米面嵌套的公度自旋密度波导致 Fe 原子具有 2.3 &mu;<sub>B</sub> 的磁矩，且 F 掺杂后的超导电性被认为是由自旋涨落介导的新机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.78.033111",
                arxiv: null,
                code: null
            }
        },
        {
            id: 177,
            title: "Arsenic-bridged antiferromagnetic superexchange interactions in LaFeAsO",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2008",
            journal: "Physical Review B",
            volume: "78(22), 224517 (2008)",
            category: "prb",
            abstract: "本研究通过第一性原理计算发现 LaFeAsO 中每个 Fe 离子具有约 2.6 &mu;<sub>B</sub> 的大磁矩，且由 As 原子介导的强最近邻和次近邻超交换相互作用导致了基态的共线反铁磁序及磁驱动的结构相变，进而揭示了反铁磁涨落在该类材料超导配对机制中的重要作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.78.224517",
                arxiv: null,
                code: null
            }
        },
        {
            id: 178,
            title: "Publisher's Note: Arsenic-bridged antiferromagnetic superexchange interactions in LaFeAsO [Phys. Rev. B 78, 224517 (2008)]",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2009",
            journal: "Physical Review B",
            volume: "79(1), 019901 (2009)",
            category: "prb",
            abstract: "本文于 2008 年 12 月 18 日在线发表时图 6 和图 7 存在错误，随后于 12 月 30 日完成更正，且印刷版本中的图片均正确无误。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.79.019901",
                arxiv: null,
                code: null
            }
        },
        {
            id: 179,
            title: "Multichannel interaction mechanism in a molecule-metal interface",
            authors: "Wei Ji, Zhong-Yi Lu, and Hong-Jun Gao",
            year: "2008",
            journal: "Physical Review B",
            volume: "77(11), 113406 (2008)",
            category: "prb",
            abstract: "本研究利用第一性原理密度泛函理论计算揭示了 PTCDA 与 Ag(111) 界面特征为多通道分子轨道相互作用，其中通过占据电子态的相互作用主要位于 PTCDA 边缘，而通过未占据态的相互作用则位于中心，从而为解释相关实验现象提供了统一图像并探讨了受限二维类自由电子界面态。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.77.113406",
                arxiv: null,
                code: null
            }
        },
        {
            id: 180,
            title: "Electron core-hole interaction and its induced ionic structural relaxation in molecular systems under x-ray irradiation",
            authors: "Wei Ji, Zhong-Yi Lu, and Hongjun Gao",
            year: "2006",
            journal: "Physical Review Letters",
            volume: "97(24), 246101 (2006)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },

        // The following are repeated entries for testing purposes
        {
            id: 181,
            title: "First-principles theory of quantum well resonance in double barrier magnetic tunnel junctions",
            authors: "Yan Wang, Zhong-Yi Lu, X.-G. Zhang, and X.-F. Han",
            year: "2006",
            journal: "Physical Review Letters",
            volume: "97(8), 087210 (2006)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 182,
            title: "First-principles theory of tunneling currents in metal-oxide-semiconductor structures",
            authors: "X.-G. Zhang, Zhong-Yi Lu, and S. T. Pantelides",
            year: "2006",
            journal: "Applied Physics Letters",
            volume: "89(3), 032112 (2006)",
            category: "apl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 183,
            title: "Spin-dependent resonant tunneling through quantum-well states in magnetic metallic thin films",
            authors: "Zhong-Yi Lu, X.G. Zhang, and S. Pantelides",
            year: "2005",
            journal: "Physical Review Letters",
            volume: "94(20), 207210 (2005)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 184,
            title: "A first-principles study of Group IV dimer chains on Si(100)",
            authors: "T. L. Chan, C. Z. Wang, Zhong-Yi Lu, and K.M. Ho",
            year: "2005",
            journal: "Physical Review B",
            volume: "72(4), 045405 (2005)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 185,
            title: "First-principles studies of structures and stabilities of Pb/Si(111)",
            authors: "T. L. Chan, C. Z. Wang, M. Hupalo, M. C. Tringides, Zhong-Yi Lu, and K. M. Ho",
            year: "2003",
            journal: "Physical Review B",
            volume: "68(4), 045410 (2003)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.68.045410",
                arxiv: null,
                code: null
            }
        },
        {
            id: 186,
            title: "Mixed PbSi dimer chains on Si(100): a first-principles study",
            authors: "T. L. Chan, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "2003",
            journal: "Surface Science",
            volume: "542(3), L649 (2003)",
            category: "surf. sci.",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 187,
            title: "Structure, properties, and dynamics of oxygen vacancies in amorphous SiO<sub>2</sub>",
            authors: "Zhong-Yi Lu, C. J. Nicklaw, D. M. Fleetwood, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "Physical Review Letters",
            volume: "89(28), 285505 (2002)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89.285505",
                arxiv: null,
                code: null
            }
        },
        {
            id: 188,
            title: "Unified model of hole trapping, 1/f noise, and thermally stimulated current in MOS devices",
            authors: "D. M. Fleetwood, H. D. Xiong, Zhong-Yi Lu, C. J. Nicklaw, J. A. Felix, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "IEEE Transactions on Nuclear Science",
            volume: "49(6), 2674 (2002)",
            category: "IEEE Transactions on Nuclear Science",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 189,
            title: "Mixed SiGe ad-dimer on Si(001):diffusion triggers intermixing",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K.M. Ho",
            year: "2002",
            journal: "Surface Science",
            volume: "506(3), L282 (2002)",
            category: "surf. sci.",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 190,
            title: "The structure, properties, and dynamics of oxygen vacancies in amorphous SiO<sub>2</sub>",
            authors: "C. J. Nicklaw, Zhong-Yi Lu, D. M. Fleetwood, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "IEEE Transactions on Nuclear Science",
            volume: "49(6), 2667 (2002)",
            category: "IEEE Transactions on Nuclear Science",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 191,
            title: "The anisotropic free energy of the solid-liquid phase boundary in Al",
            authors: "J. R. Morris, Zhong-Yi Lu, Y. Y. Ye, and K.M. Ho",
            year: "2002",
            journal: "Interface Science",
            volume: "10(2-3), 143 (2002)",
            category: "Interface Science",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 192,
            title: "Dimer-flipping-assisted diffusion on a Si(001) surface",
            authors: "J. Zi, B. J. Min, Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Applied Physics Letters",
            volume: "77(25), 4184 (2000)",
            category: "apl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 193,
            title: "Unique Dynamic Appearance of a Ge-Si Ad-Dimer on Si(001)",
            authors: "Zhong-Yi Lu, Feng Liu, C. Z. Wang, X.R. Qin, B. S. Swartzentruber, M. G. Lagally, and K.M. Ho",
            year: "2000",
            journal: "Physical Review Letters",
            volume: "85(26), 5603 (2000)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.85.5603",
                arxiv: null,
                code: null
            }
        },
        {
            id: 194,
            title: "Correlated piecewise diffusion of a Ge addimer on Si(001) surface",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Physical Review B",
            volume: "62(12), 8104 (2000)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.62.8104",
                arxiv: null,
                code: null
            }
        },
        {
            id: 195,
            title: "Structures and dynamical properties of C-n, Si-n, Ge-n, and Sn-n clusters with n up to 13",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Physical Review B",
            volume: "61(3), 2329 (2000)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.61.2329",
                arxiv: null,
                code: null
            }
        },
        {
            id: 196,
            title: "Addimer diffusion along the trough between dimer rows on Si(001)",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Surface Science",
            volume: "426(2), L427 (1999)",
            category: "surf. sci.",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 197,
            title: "Addimer Diffusion on the Si(100) Surface",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Surface Review and Letters",
            volume: "6(6), 1015 (1999)",
            category: "Surface Review and Letters",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 198,
            title: "Structures of Germanium Clusters: Where the Growth Patterns of Silicon and Germanium Clusters Diverge",
            authors: "A. A. Shvartsburg, B. Liu, Zhong-Yi Lu, C. Z. Wang, M. F. Jarrold, and K. M. Ho",
            year: "1999",
            journal: "Physical Review Letters",
            volume: "83(11), 2167 (1999)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.2167",
                arxiv: null,
                code: null
            }
        },
        {
            id: 199,
            title: "Addimer diffusions on Si(001) surface",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Journal of Korean Physical Society",
            volume: "35(1), S27 (1999)",
            category: "Journal of Korean Physical Society",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 200,
            title: "Theory of the 2×2 and 3×3 reconstructions of the alpha-Sn(111) surface",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1998",
            journal: "Il Nuovo Cimento D",
            volume: "20(7-8), 1013 (1998)",
            category: "Il Nuovo Cimento D",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 201,
            title: "First-principles determination of the Sigma＝13 [510] symmetric tilt boundary structure in silicon and germanium",
            authors: "J. R. Morris, Zhong-Yi Lu, D. M. Ring, J. B. Xiang, K. M. Ho, C. Z. Wang, and c. L. Fu",
            year: "1998",
            journal: "Physical Review B",
            volume: "58(17), 11241 (1998)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.58.11241",
                arxiv: null,
                code: null
            }
        },
        {
            id: 202,
            title: "Ad-Dimer Diffusion between Trough and Dimer Row on Si(100)",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1998",
            journal: "Physical Review Letters",
            volume: "81(26), 5872 (1998)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.81.5872",
                arxiv: null,
                code: null
            }
        },
        {
            id: 203,
            title: "Dissociation Energies of Silicon Clusters: A Depth Gauge for the Global Minimum on the Potential Energy Surface",
            authors: "A. A. Shvartsburg, M. F. Jarrold, B. Liu, Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "1998",
            journal: "Physical Review Letters",
            volume: "81(21), 4616 (1998)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.81.4616",
                arxiv: null,
                code: null
            }
        },
        {
            id: 204,
            title: "Ionization of medium-sized silicon clusters and the geometries of the cations",
            authors: "B. Liu, Zhong-Yi Lu, B. Pan, C. Z. Wang, K. M. Ho, A. A. Shvartsburg, and M. F. Jarrold",
            year: "1998",
            journal: "Journal of Chemical Physics",
            volume: "109(21), 9401 (1998)",
            category: "jcp",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 205,
            title: "Structures of medium-sized silicon clusters",
            authors: "K. M. Ho, A. Shvartsburg, B. Pan, Zhong-Yi Lu, C. Z. Wang, J. Wacker, J. L. Fye, and M. F. Jarrold",
            year: "1998",
            journal: "Nature",
            volume: "392(1), 582 (1998)",
            category: "nature",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 206,
            title: "Atomic and electronic structure of ideal and reconstructed alpha-Sn (100) surfaces",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1998",
            journal: "Physical Review B",
            volume: "58(20), 13698 (1998)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.58.13698",
                arxiv: null,
                code: null
            }
        },
        {
            id: 207,
            title: "Atomic and electronic structure of ideal and reconstructed alpha-Sn (111) surface",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1996",
            journal: "Physical Review B",
            volume: "54(16), 11769 (1996)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.54.11769",
                arxiv: null,
                code: null
            }
        },
        {
            id: 208,
            title: "Impurity energy level in the Haldane gap",
            authors: "Wei Wang, Shaojin Qin, Zhong-Yi Lu, Lu Yu, and Zhaobin Su",
            year: "1996",
            journal: "Physical Review B",
            volume: "53(1), 40 (1996)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.53.40",
                arxiv: null,
                code: null
            }
        },
        {
            id: 209,
            title: "Doping Induced Quantum Bound States within the Haldane Gap",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1995",
            journal: "Physical Review Letters",
            volume: "74(21), 4297 (1995)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4297",
                arxiv: null,
                code: null
            }
        },
        {
            id: 210,
            title: "Doping Effect on Spin-Peierls Instability",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1994",
            journal: "Physical Review Letters",
            volume: "72(8), 1276 (1994)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 211,
            title: "Haldane Energy Gap of A Doped Linear-Chain Heisenberg Antiferromagnet",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1993",
            journal: "Physical Review B",
            volume: "47(18), 12276 (1993)",
            category: "prb",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.47.12276",
                arxiv: null,
                code: null
            }
        },
        {
            id: 212,
            title: "The q-Deformed SU(2) Quantum Antiferromagnetic Model",
            authors: "Zhong-Yi Lu and Hong Yan",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(3), 303 (1993)",
            category: "ctp",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 213,
            title: "The q-Deformed SU(2) Quantum Ferromagnetic Model",
            authors: "Zhong-Yi Lu and Hong Yan",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(2), 169 (1993)",
            category: "ctp",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 214,
            title: "The Superfluidity of The Charged Bosons' Systems",
            authors: "Zhong-Yi Lu",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(1), 43 (1993)",
            category: "ctp",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
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
        'prb': { name: 'Physical Review B', icon: 'fas fa-book', color: '#2980b9' },
        'prx': { name: 'Physical Review X', icon: 'fas fa-atom', color: '#27ae60' },
        'nat-phys': { name: 'Nature Physics', icon: 'fas fa-globe-europe', color: '#8e44ad' },
        'npj': { name: 'npj Computational Materials', icon: 'fas fa-cubes', color: '#16a085' },
        'nl': { name: 'Nano Letters', icon: 'fas fa-vial', color: '#f1c40f' },
        'sci-bull': { name: 'Science Bulletin', icon: 'fas fa-bullhorn', color: '#e67e22' },
        'jpcc': { name: 'Journal of Physical Chemistry C', icon: 'fas fa-flask', color: '#d35400' },
        'jpc': { name: 'Journal of Physics: Condensed Matter', icon: 'fas fa-flask', color: '#3dcc20ff' },
        'mat-fut': { name: 'Materials Futures', icon: 'fas fa-layer-group', color: '#c0392b' },
        'scpma': { name: 'Science China Phys ics, Mechanics & Astronomy', icon: 'fas fa-rocket', color: '#2ecc71' },
        'prr': { name: 'Physical Review Research', icon: 'fas fa-search', color: '#e17055' },
        'prm': { name: 'Physical Review Materials', icon: 'fas fa-cube', color: '#00b894' },
        'nanoscale': { name: 'Nanoscale', icon: 'fas fa-microchip', color: '#fdcb6e' },
        'carbon': { name: 'Carbon', icon: 'fas fa-circle', color: '#636e72' },
        'nature': { name: 'Nature', icon: 'fas fa-leaf', color: '#00b894' },
        'nat-comm': { name: 'Nature Communications', icon: 'fas fa-comments', color: '#fd79a8' },
        'sr': { name: 'Scientific Reports', icon: 'fas fa-file-alt', color: '#6c5ce7' },
        'cpb': { name: 'Chinese Physics B', icon: 'fas fa-pen-nib', color: '#e17055' },
        'Surface Review and Letters': {name: 'Surface Review and Letters', icon: 'fas fa-ruler-combined', color: '#e84393'},
        'cpl': { name: 'Chinese Physics Letters', icon: 'fas fa-mail-bulk', color: '#00b894' },
        'cpc': { name: 'Computer Physics Communications', icon: 'fas fa-network-wired', color: '#0984e3' },
        'Journal of Korean Physical Society': {name: 'Journal of Korean Physical Society', icon: 'fas fa-flag', color: '#fd79a8'},
        'Acta Physica Sinica': {name: 'Acta Physica Sinica', icon: 'fas fa-balance-scale', color: '#6ab04c'},
        'Il Nuovo Cimento D': {name: 'Il Nuovo Cimento D', icon: 'fas fa-dna', color: '#4834d4'},
        'Journal of Physics: Condensed Matter': {name: 'Journal of Physics: Condensed Matter', icon: 'fas fa-thermometer-half', color: '#f9ca24'},
        'cms': {name: 'Computational Materials Science', icon: 'fas fa-database', color: '#00b894'},
        'Journal of Physics and Chemistry of Solids': {name: 'Journal of Physics and Chemistry of Solids', icon: 'fas fa-gem', color: '#fdcb6e'},
        'epl': {name: 'epl', icon: 'fas fa-lightbulb', color: '#00b894'},
        'ctp': {name: 'Communications in Theoretical Physics', icon: 'fas fa-comments', color: '#e17055'},
        'jcp': {name: 'Journal of Chemical Physics', icon: 'fas fa-vials', color: '#6c5ce7'},
        'jacs': {name: 'jacs', icon: 'fas fa-atom', color: '#fd79a8'},
        'IEEE-ACM Transactions on Audio, Speech, and Language Processing': {name: 'IEEE-ACM Transactions on Audio, Speech, and Language Processing', icon: 'fas fa-headphones', color: '#00b894'},
        'Frontiers of Physics in China': {name: 'Frontiers of Physics in China', icon: 'fas fa-archway', color: '#00b894'},
        'apl': {name: 'apl', icon: 'fas fa-magnet', color: '#e17055'},
        'surf. sci.': {name: 'Surface Science', icon: 'fas fa-water', color: '#00b894'},
        'Interface Science': {name: 'Interface Science', icon: 'fas fa-project-diagram', color: '#fdcb6e'},
        'IEEE Transactions on Nuclear Science': {name: 'IEEE Transactions on Nuclear Science', icon: 'fas fa-radiation', color: '#636e72'},
        'Superconductor Science and Technology': {name: 'Superconductor Science and Technology', icon: 'fas fa-bolt', color: '#e17055'},
        'other': { name: '其他期刊', icon: 'fas fa-question', color: '#b2bec3' }
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
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                currentFilters.search = this.value.toLowerCase();
                currentPage = 1;
                renderPublications();
            }, 300));
        }

        // 年份筛选
        if (yearFilter) {
            yearFilter.addEventListener('change', function() {
                currentFilters.year = this.value;
                currentPage = 1;
                renderPublications();
            });
        }

        // 期刊筛选
        if (journalFilter) {
            journalFilter.addEventListener('change', function() {
                currentFilters.journal = this.value;
                currentPage = 1;
                renderPublications();
            });
        }
        // 已移除快速过滤标签相关事件绑定

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
        const prlPrxCount = publications.filter(p => p.category === 'prl' || p.category === 'prx'|| p.category === 'nature').length;
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
            publicationsGrid.style.display = 'flex';
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
                    </div>
                    <span class="card-badge badge-journal">
                        <i class="${journalInfo.icon}"></i> ${pub.journal}
                    </span>
                </div>
                <div class="card-content">
                    <p class="card-authors">${pub.authors}</p>
                    <p class="card-venue"><span class="venue-highlight">${pub.journal}</span><span class="volume-highlight">${pub.volume ? ', ' + pub.volume : ''}</span></p>
                    <p class="card-abstract">${pub.abstract}</p>
                </div>
                <div class="card-footer">
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